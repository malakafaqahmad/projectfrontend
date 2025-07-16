
import React, { useState } from 'react';

const SkillsSection = ({ skills, updateSkill, addSkill, deleteSkill }) => {
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      addSkill(newSkill.trim());
      setNewSkill("");
    }
  };

  return (
    <div>
      <div className="section-header">
        <h3>🛠️ Skills</h3>
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
            <button
              className="skill-delete-btn"
              onClick={() => deleteSkill(index)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Add a skill..."
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAddSkill()}
          className="skill-input"
        />
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default SkillsSection;
