import { useState } from "react";

const SkillsSection = ({ skills, updateSkill, addSkill, deleteSkill }) => {
  const [newSkill, setNewSkill] = useState("");
  const [adding, setAdding] = useState(false);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      addSkill(newSkill.trim());
      setNewSkill("");
      setAdding(false);
    }
  };

  return (
    <div>
      <div className="section-header">
        <h3>Skills</h3>
        {!adding && (
          <button className="add-btn-small" onClick={() => setAdding(true)}>＋</button>
        )}
      </div>

      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span
              className="skill-tag"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateSkill(index, e.target.innerText)}
            >
              {skill}
            </span>
            <button className="skill-delete-btn" onClick={() => deleteSkill(index)}>×</button>
          </div>
        ))}

        {adding && (
          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "10px" }}>
            <input
              className="skill-input"
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="New skill"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
            />
            <button className="add-btn" onClick={handleAddSkill}>Add</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
