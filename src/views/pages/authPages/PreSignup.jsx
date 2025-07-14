import React from "react";
import { useNavigate } from "react-router-dom";
import { FutureButton } from "../../components/ui/futuristic/futuristicStyles.jsx"
import "./preSignup.css";

const roles = [
  { label: "Trader", value: "trader" },
  { label: "Coder", value: "developer" },
  { label: "Student", value: "student" },
  { label: "Professional", value: "professional" },
];

const PreSignup = () => {
  const navigate = useNavigate();

  const handleSelectRole = (role) => {
    // Navigate to /signup with query param or state
    navigate("/signup", { state: { role } });
  };

  return (
    <div className="pre-signup-container">
      <div className="pre-signup-card">
        <h2 className="pre-signup-title">🧠 Who Are You?</h2>
        <p className="pre-signup-subtitle">Choose the role that best defines you.</p>

        <div className="role-options">
          {roles.map((r) => (
            <FutureButton key={r.value} onClick={() => handleSelectRole(r.value)}>
              {r.label}
            </FutureButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreSignup;
