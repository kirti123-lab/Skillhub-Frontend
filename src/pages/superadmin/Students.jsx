


import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import "./students.css";

const Students = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("skillhub-backend-production-e6ee.up.railway.app/api/admin/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  
  const getStatus = (student) => {
    return student.resumeUrl ? "Eligible" : "Not Eligible";
  };

  const filteredStudents =
    filter === "All"
      ? students
      : students.filter(
          (s) => getStatus(s).toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="students-wrapper">
      {/* Header */}
      <div className="students-header">
        <h2>Students List</h2>

        <select
          className="student-filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Eligible</option>
          <option>Not Eligible</option>
        </select>
      </div>

      {/* Table */}
      <div className="table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Education</th>
              <th>Domain</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student) => {
              const status = getStatus(student);

              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                  <td>{student.education || student.degree}</td>
                  <td>{student.domain}</td>
                  <td>{student.location}</td>
                  <td>
                    <span
                      className={`status ${
                        status === "Eligible"
                          ? "eligible"
                          : "not-eligible"
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="view-btn"
                       onClick={() => navigate(`/students/${student.id}`)}
                      >
                      View Profile
                    </button>

                  </td>
                </tr>
              );
            })}

            {filteredStudents.length === 0 && (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
