
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      const res = await fetch("skillhub-backend-production-e6ee.up.railway.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="brand">
          <h1>SkillHub</h1>
          <span>SuperAdmin Panel</span>
        </div>

        <h2>Welcome Back</h2>
        <p className="subtitle">Login to manage platform operations</p>

        <div className="input-group">
          <label>Email</label>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁"}
            </span>
          </div>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

        <p className="footer">
          © 2026 SkillHub | Secure SuperAdmin Access
        </p>
      </div>
    </div>
  );
};

export default Login;