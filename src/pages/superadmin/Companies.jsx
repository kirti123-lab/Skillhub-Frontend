import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./companies.css";

const Companies = () => {
  const location = useLocation();
  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/admin/companies");
      const data = await res.json();

      const approvedCompanies = data.filter(
        (company) => company.status?.toLowerCase() === "approved"
      );

      setCompanies(approvedCompanies);

    } catch (error) {
      console.error("Failed to fetch companies");
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="companies-page">
      <h2>Approved Companies</h2>

      <div className="table-container">
        <table className="companies-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Email</th>
              <th>Industry</th>
              <th>Location</th>
              <th>Status</th>
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
                  <span className="status-badge approved">
                    approved
                  </span>
                </td>
              </tr>
            ))}

            {companies.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No approved companies found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Companies;