import { useEffect, useState } from "react";
import "./activeTests.css";

const ActiveTests = () => {
  const [activeTests, setActiveTests] = useState([]);

  useEffect(() => {
  fetch("skillhub-backend-production-e6ee.up.railway.app/api/admin/active-tests")
    .then((res) => res.json())
    .then((data) => {
      setActiveTests(data);
    })
    .catch((err) => {
      console.error("Failed to fetch active tests", err);
    });
}, []);

  return (
    <div className="active-page">
      <div className="page-header">
        <h2>Active Tests</h2>
        <p>Currently running tests on platform</p>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Test Title</th>
              <th>Company</th>
              <th>Duration</th>
              <th>Total Marks</th>
              <th>Cutoff</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray && activeTests.map((t) => (
              <tr key={t.id}>
                <td className="internship-name">{t.testTitle}</td>
                <td className="muted">{t.companyName}</td>
                <td>{t.duration}</td>
                <td>{t.totalMarks}</td>
                <td>{t.cutoffMarks}</td>
                <td>
                  <span className="status active">Active</span>
                </td>
              </tr>
            ))}

            {activeTests.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No active tests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveTests;