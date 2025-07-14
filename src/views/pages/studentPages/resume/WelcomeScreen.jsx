import { useNavigate } from 'react-router-dom';
import './styles/WelcomeScreen.css';

function WelcomeScreen() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>✨ Build a Powerful Resume</h1>
      <p>Upload your resume or start fresh. We’ll guide you through each step.</p>
      <div className="welcome-options">
        <button onClick={() => navigate("/templates")}>Choose a Template</button>
        <button onClick={() => navigate("/upload-resume")}>Upload Existing Resume</button>
        <button onClick={() => navigate("/connect-accounts")}>Connect Accounts</button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
