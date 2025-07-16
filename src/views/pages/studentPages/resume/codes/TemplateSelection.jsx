import { useNavigate } from "react-router-dom";
import "../styles/TemplateSelection.css";

function TemplateSelection() {
  const navigate = useNavigate();

  const handleSelect = (templateId) => {
    navigate("/builder", { state: { template: templateId } });
  };

  return (
    <div className="template-selection-container">
      <h2>🎨 Choose a Resume Template</h2>
      <p>Select one of our modern templates or start from scratch.</p>

      <div className="templates-grid">
        <div className="template-card" onClick={() => handleSelect("modern1")}>
          <img src="/preview-template1.png" alt="Modern Template 1" />
          <h3>Modern Template 1</h3>
        </div>
        <div className="template-card" onClick={() => handleSelect("modern2")}>
          <img src="/preview-template2.png" alt="Modern Template 2" />
          <h3>Modern Template 2</h3>
        </div>
        <div className="template-card blank" onClick={() => handleSelect("blank")}>
          <h3>Start from Blank</h3>
        </div>
      </div>
    </div>
  );
}

export default TemplateSelection;
