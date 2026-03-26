import { useEffect, useState } from "react";
import "./activeInternships.css";

const ActiveInternships = () => {
  const [activeInternships, setActiveInternships] = useState([]);

  
   useEffect(() => {
  fetch("skillhub-backend-production-e6ee.up.railway.app/api/admin/internships")
    .then((res) => res.json())
    .then((data) => {
      setActiveInternships(data);
    })
    .catch((err) => {
      console.error("Failed to fetch active internships", err);
    });
}, []);

  return (
    <div className="active-page">
      {/* Header */}
      <div className="page-header">
        <h2>Active Internships</h2>
        <p>Currently running internships on the platform</p>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Internship</th>
              <th>Company</th>
              <th>Duration</th>
              <th>Applicants</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {activeInternships.map((i) => (
              <tr key={i.id}>
                <td className="internship-name">{i.title}</td>
                <td className="muted">{i.companyName}</td>
                <td>{i.duration}</td>
                <td>—</td>
                <td>
                  <span className="status active">Live</span>
                </td>
              </tr>
            ))}

            {activeInternships.length === 0 && (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No active internships found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveInternships;
