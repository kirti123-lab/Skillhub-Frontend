import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./totalCompany.css";

const TotalCompany = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/companies");
      const data = await res.json();
      setCompanies(data);
    } catch (error) {
      console.error("Failed to fetch companies");
    }
  };

  
  useEffect(() => {
  fetchCompanies();

  if (location.state?.fromVerification) {
    navigate("/dashboard", { replace: true });
  }
}, []);

  return (
    <div className="companies-page">
      <h2>All Companies</h2>

      <div className="table-container">
        <table className="companies-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Email</th>
              <th>Industry</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {companies.map((company) => (
              <tr key={company.id}>
                <td>{company.companyName}</td>
                <td>{company.email}</td>
                <td>{company.industry}</td>
                <td>{company.location}</td>
                <td>
                  <span className={`status-badge ${company.status || "pending"}`}>
                    {company.status || "pending"}
                  </span>
                </td>
                <td>
                  <button
                    className="verify-btn"
                    onClick={() =>
                      navigate(`/company-verification/${company.id}`)
                    }
                  >
                    View / Verify
                  </button>
                </td>
              </tr>
            ))}

            {companies.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No companies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};






export default TotalCompany;
