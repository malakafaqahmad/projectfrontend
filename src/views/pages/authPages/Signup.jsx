import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FutureInput, FutureButton } from "../../components/ui/futuristic/futuristicStyles.jsx"

import "./signup.css"; // Optional styling



const Signup = () => {
  const location = useLocation();
  const preselectedRole = location.state?.role || "";
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    dob: "",
    role: preselectedRole
  });



  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup form submitted:", form);
    // Add your sign-up logic here
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-title">🚀 Create Account As <span style={{ color: 'var(--neon-blue)' }}>{preselectedRole || "..."}</span></h2>

        <FutureInput
          label="Username"
          value={form.username}
          onChange={(e) => handleChange("username", e.target.value)}
          placeholder="Your cool name"
        />

        <FutureInput
          label="Email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="you@example.com"
        />

        <FutureInput
          label="Password"
          type="password"
          value={form.password}
          onChange={(e) => handleChange("password", e.target.value)}
          placeholder="••••••••"
        />

        <FutureInput
          label="Date of Birth"
          type="date"
          value={form.dob}
          onChange={(e) => handleChange("dob", e.target.value)}
        />

        <div className="signup-actions">
          <FutureButton type="submit">Sign Up</FutureButton>
        </div>

        <p className="signup-hint">
          Already have an account? <a href="/signin">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
