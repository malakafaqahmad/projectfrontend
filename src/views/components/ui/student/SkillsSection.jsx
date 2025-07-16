import React, { useState } from 'react';

const SkillsSection = ({ skills, updateSkill, addSkill, deleteSkill }) => {
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      addSkill(newSkill.trim());
      setNewSkill('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddSkill();
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
            <button className="skill-delete-btn" onClick={() => deleteSkill(index)}>×</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          className="skill-input"
          type="text"
          placeholder="Add a new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddSkill}>Add Skill</button>
      </div>
    </div>
  );
};

export default SkillsSection;