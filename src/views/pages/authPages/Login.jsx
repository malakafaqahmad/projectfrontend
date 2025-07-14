import React, { useState } from "react";
import { FutureInput, FutureButton, FutureCheckbox } from "../../components/ui/futuristic/futuristicStyles.jsx"
import "./login.css"; // Optional for layout

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, remember });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">🚀 Welcome Back</h2>

        <FutureInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />

        <FutureInput
          label="Password"
          type="password"signup
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />

        <div className="login-options">
          <FutureCheckbox
            label="Remember me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
        </div>


        <div className="signup-actions">
          <FutureButton type="submit">login</FutureButton>
        </div>
        <p className="login-hint">Don't have an account? <a href="/PreSignup">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;
