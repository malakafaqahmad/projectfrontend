
import React from 'react';

const EducationSection = ({ education, updateEducation, addEducation, deleteEducation }) => {
  return (
    <div>
      <div className="section-header">
        <h3>🎓 Education</h3>
        <button className="add-btn" onClick={addEducation}>
          Add
        </button>
      </div>
      {education.map((edu, index) => (
        <div key={index} className="edu-block">
          <div className="edu-left">
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateEducation(index, "degree", e.target.innerText)
              }
            >
              {edu.degree}
            </p>
            <p
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateEducation(index, "institution", e.target.innerText)
              }
            >
              {edu.institution}
            </p>
          </div>
          <div className="edu-right-container">
            <div className="edu-right">
              <p
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  updateEducation(index, "duration", e.target.innerText)
                }
              >
                {edu.duration}
              </p>
            </div>
            <button
              className="delete-btn"
              onClick={() => deleteEducation(index)}
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
