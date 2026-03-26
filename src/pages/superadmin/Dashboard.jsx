

import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  // Counts state
  const [studentsCount, setStudentsCount] = useState(0);
  const [companiesCount, setCompaniesCount] = useState(0);
  const [internshipsCount, setInternshipsCount] = useState(0);
  const [activeInternshipsCount, setActiveInternshipsCount] = useState(0);
  const [activeTestsCount, setActiveTestsCount] = useState(0);
  const [totalCompaniesCount, setTotalCompaniesCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/students")
      .then((res) => res.json())
      .then((data) => setStudentsCount(data.length))
      .catch(() => setStudentsCount(0));

    fetch("http://localhost:5000/api/admin/companies")
      .then((res) => res.json())
      .then((data) => {
        setTotalCompaniesCount(data.length);

        const approved = data.filter(
          (company) => company.status?.toLowerCase() === "approved"
        );

        setCompaniesCount(approved.length);
      })
      .catch(() => {
        setTotalCompaniesCount(0);
        setCompaniesCount(0);
      });

    fetch("http://localhost:5000/api/admin/internships")
      .then((res) => res.json())
      .then((data) => {
        setInternshipsCount(data.length);

        const active = data.filter(
          (item) => item.status?.toLowerCase() === "live"
        );

        setActiveInternshipsCount(active.length);
      })
      .catch(() => {
        setInternshipsCount(0);
        setActiveInternshipsCount(0);
      });

    fetch("http://localhost:5000/api/admin/active-tests")
      .then((res) => res.json())
      .then((data) => {
        setActiveTestsCount(data.length);
      })
      .catch(() => setActiveTestsCount(0));
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-wrapper">
      {/* Top Navbar */}
      <div className="navbar">
        <div className="nav-left">
          <span className="nav-title">Admin Dashboard</span>
        </div>

        <div className="nav-right">
          {/* About Us Icon */}
          <button onClick={() => navigate("/about")} className="info-icon">
            ℹ️
          </button>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="cards-grid">
        <div className="card card-blue" onClick={() => navigate("/students")}>
          <div className="icon blue">🎓</div>
          <div>
            <p>Total Students</p>
            <h2>{studentsCount}</h2>
          </div>
        </div>

        

        <div className="card card-purple" onClick={() => navigate("/internships")}>
          <div className="icon purple">💼</div>
          <div>
            <p>Total Internships</p>
            <h2>{internshipsCount}</h2>
          </div>
        </div>

        <div
          className="card card-orange"
          onClick={() => navigate("/active-internships")}
        >
          <div className="icon orange">✅</div>
          <div>
            <p>Active Internships</p>
            <h2>{activeInternshipsCount}</h2>
          </div>
        </div>

        <div className="card card-red" onClick={() => navigate("/active-tests")}>
          <div className="icon red">📝</div>
          <div>
            <p>Active Tests</p>
            <h2>{activeTestsCount}</h2>
          </div>
        </div>
        

        <div
          className="card card-teal"
          onClick={() => navigate("/company-verification")}
        >
          <div className="icon teal">✔️</div>
          <div>
            <p>Company Verification</p>
            <h2>{totalCompaniesCount}</h2>
          </div>
        </div>

        <div className="card card-green" onClick={() => navigate("/companies")}>
          <div className="icon green">🏢</div>
          <div>
            <p>Total Companies</p>
            <h2>{companiesCount}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;