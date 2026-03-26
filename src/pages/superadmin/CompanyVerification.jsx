import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./companyVerification.css";

const CompanyVerification = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const fetchCompany = async () => {
    try {
      const res = await fetch(
        `https://skillhub-backend-production-e6ee.up.railway.app/api/admin/companies/${id}`
      );
      const data = await res.json();
      setCompany(data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch failed");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompany();
  }, [id]);

  
  const updateStatus = async (newStatus) => {
    try {
      const res = await fetch(
        `https://skillhub-backend-production-e6ee.up.railway.app/api/admin/companies/${id}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      const data = await res.json();
      console.log("Updated:", data);

      
      navigate("/company-verification", { state: { refresh: true } });

    } catch (error) {
      console.error("Update failed", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!company) return <p>Company not found</p>;

  return (
    <div className="verification-page">
      <div className="verification-card">
        <h2>Company Verification</h2>

        <div className="company-info">
          <p><strong>Company Name:</strong> {company.companyName}</p>
          <p><strong>Email:</strong> {company.email}</p>
          <p><strong>Industry:</strong> {company.industry}</p>
          <p><strong>Location:</strong> {company.location}</p>

          <p>
            <strong>Current Status:</strong>{" "}
            <span className={`status-badge ${company.status || "pending"}`}>
              {company.status || "pending"}
            </span>
          </p>
        </div>

        <div className="verification-actions">
          <button
            className="approve-btn"
            onClick={() => updateStatus("approved")}
          >
            Approve
          </button>

          <button
            className="reject-btn"
            onClick={() => updateStatus("rejected")}
          >
            Reject
          </button>

          <button
            className="pending-btn"
            onClick={() => updateStatus("pending")}
          >
            Mark Pending
          </button>
        </div>

        
      </div>
    </div>
  );
};

export default CompanyVerification;
