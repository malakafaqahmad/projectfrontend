
import React from 'react';

const ResumeHeader = ({ resume, updateField }) => {
  return (
    <div className="resume-header">
      <h1
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => updateField("name", e.target.innerText)}
      >
        {resume.name}
      </h1>
      <h2
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => updateField("title", e.target.innerText)}
      >
        {resume.title}
      </h2>
      <div className="contact-row">
        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => updateField("email", e.target.innerText)}
        >
          {resume.email}
        </p>
        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => updateField("phone", e.target.innerText)}
        >
          {resume.phone}
        </p>
        <p
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => updateField("location", e.target.innerText)}
        >
          {resume.location}
        </p>
      </div>
    </div>
  );
};

export default ResumeHeader;
