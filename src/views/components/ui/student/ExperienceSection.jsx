
import React from 'react';

const ExperienceSection = ({ experience, updateExperience, addExperience, deleteExperience }) => {
  return (
    <div>
      <div className="section-header">
        <h3>💼 Experience</h3>
        <button className="add-btn" onClick={addExperience}>
          Add
        </button>
      </div>
      {experience.map((exp, index) => (
        <div key={index} className="exp-row">
          <div className="exp-header">
            <div className="exp-info">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  updateExperience(index, "role", e.target.innerText)
                }
              >
                {exp.role}
              </span>
              <span className="divider"> | </span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  updateExperience(index, "company", e.target.innerText)
                }
              >
                {exp.company}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  updateExperience(index, "years", e.target.innerText)
                }
              >
                {exp.years}
              </span>
              <button
                className="delete-btn"
                onClick={() => deleteExperience(index)}
              >
                ×
              </button>
            </div>
          </div>
          <p
            className="exp-desc"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              updateExperience(index, "description", e.target.innerText)
            }
          >
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
