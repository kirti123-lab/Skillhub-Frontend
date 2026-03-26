import { useEffect, useState } from "react";
import "./internships.css";

const Internships = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/internships")
      .then((res) => res.json())
      .then((data) => setInternships(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="internships-wrapper">
      <h2>Total Internships</h2>

      <div className="table-container">
        <table className="internships-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Company</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Stipend</th>
              <th>Skills</th>
            </tr>
          </thead>

          <tbody>
            {internships.map((internship, index) => (
              <tr key={index}>
                <td>{internship.title}</td>
                <td>{internship.company}</td>
                <td>{internship.type}</td>
                <td>{internship.duration}</td>
                <td>₹ {internship.stipend}</td>
                <td>
                  {internship.skills &&
                    internship.skills.join(", ")}
                </td>
              </tr>
            ))}

            {internships.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No internships found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Internships;
