import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/UploadResume.css";

function UploadResume() {
  const [fileName, setFileName] = useState("");
  const [uploadError, setUploadError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === "application/pdf" || file.name.endsWith(".docx"))) {
      setFileName(file.name);
      setUploadError("");
      // TODO: Actual file parsing logic
    } else {
      setUploadError("Please upload a PDF or DOCX file only.");
    }
  };

  const handleContinue = () => {
    if (!fileName) {
      setUploadError("Upload a file before continuing.");
      return;
    }
    // Mock parse: navigate to experience step with dummy state
    navigate("/experience", {
      state: {
        parsed: {
          experience: [
            { company: "ABC Corp", role: "Software Engineer", years: "2020-2023" },
          ],
          projects: ["Portfolio Website", "Resume Builder App"],
          skills: ["React", "Node.js", "CSS"],
        },
      },
    });
  };

  return (
    <div className="upload-container">
      <h2>📤 Upload Your Existing Resume</h2>
      <p>We’ll extract your experience, skills, and projects automatically.</p>

      <div className="upload-box">
        <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
        {fileName && <p className="file-name">📄 {fileName}</p>}
        {uploadError && <p className="error-text">{uploadError}</p>}
      </div>

      <button className="continue-btn" onClick={handleContinue}>Continue</button>
    </div>
  );
}

export default UploadResume;
