import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./studentProfile.css";

const StudentProfile = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/students")
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => s.id === id);
        setStudent(found);
      });
  }, [id]);

  if (!student) return <p>Loading...</p>;

  return (
    <div className="profile-bg">
      <div className="profile-box">
        < div className="profile-inner">

        

        {/* Profile Top */}
        <div className="profile-top">
          <img
            src={student.profileImageUrl}
            alt="profile"
            className="profile-pic"
          />
          <h2>{student.fullName}</h2>
          <p>{student.email}</p>
          <span className="badge">Student</span>
        </div>

        {/* Info */}
        <div className="profile-info">
          <p><b>Degree:</b> {student.degree}</p>
          <p><b>Education:</b> {student.education}</p>
          <p><b>College:</b> {student.college}</p>
          <p><b>Domain:</b> {student.domain}</p>
          <p><b>Phone:</b> {student.phone}</p>
          <p><b>Location:</b> {student.location}</p>
        </div>

        {/* Skills */}
        <div className="profile-section">
          <h4>Skills</h4>
          <p>{student.skills}</p>
        </div>

        {/* Resume */}
        {student.resumeUrl && (
          <a
            href={student.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="resume-btn"
          >
            View Resume
          </a>
        )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
