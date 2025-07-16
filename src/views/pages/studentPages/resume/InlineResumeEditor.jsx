import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import "./styles/InlineResumeEditor.css";

function InlineResumeEditor() {
  const [resume, setResume] = useState({
    name: "Afaq Ahmad",
    title: "AI/ML Engineer",
    email: "malakafaqahmad@gmail.com",
    phone: "+92 3451491620",
    location: "KPK, Pakistan",
    education: [
      {
        degree: "B.S in Artificial Intelligence",
        institution: "Ghulam Ishaq Khan University",
        duration: "08/2022 - 04/2026",
      },
      {
        degree: "Pre-Engineering",
        institution: "Kernal Sher Khan Cadet College",
        duration: "04/2016 - 05/2021",
      },
    ],
    experience: [
      {
        role: "AI Intern",
        company: "XYZ Labs",
        years: "2023–2024",
        description: "Worked on ML models for NLP tasks using transformers and GPT.",
      },
    ],
    projects: [
      {
        title: "Brain Tumor Detection with CNNs",
        description:
          "Built an ML pipeline for brain tumor detection and integrated it into a Streamlit app.",
      },
    ],
    skills: ["Python", "C++", "TensorFlow", "YOLO", "PostgreSQL"],
  });

  const resumeRef = useRef();

  const exportToPDF = () => {
    const element = resumeRef.current;
    const opt = {
      margin: [0.4, 0.4, 0.4, 0.4], // top, left, bottom, right
      filename: `${resume.name.replaceAll(" ", "_")}_Resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        scrollY: 0,
        useCORS: true
      },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };


  const updateSectionItem = (section, index, field, value) => {
    const updated = [...resume[section]];
    updated[index][field] = value;
    setResume({ ...resume, [section]: updated });
  };

  const addSectionItem = (section, newItem) => {
    setResume({ ...resume, [section]: [...resume[section], newItem] });
  };

  const updateField = (key, value) => {
    setResume({ ...resume, [key]: value });
  };

  const updateSkill = (index, value) => {
    const updated = [...resume.skills];
    updated[index] = value;
    setResume({ ...resume, skills: updated });
  };

  const addSkill = (e) => {
    if (e.key === "Enter") {
      const skill = e.target.value.trim();
      if (skill) {
        setResume({ ...resume, skills: [...resume.skills, skill] });
        e.target.value = "";
      }
    }
  };

  return (
    <div className="resume-editor">
      <button className="export-btn" onClick={exportToPDF}>
        📄 Export as PDF
      </button>

      <div className="resume-container" ref={resumeRef}>
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
              className="contact-item"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateField("phone", e.target.innerText)}
            >
              📞 {resume.phone}
            </p>
            <p
              className="contact-item"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateField("email", e.target.innerText)}
            >
              📧 {resume.email}
            </p>
            <p
              className="contact-item"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateField("location", e.target.innerText)}
            >
              📍 {resume.location}
            </p>
          </div>
        </div>

        <hr />

        <div className="section-header">
          <h3>Education</h3>
          <button
            className="add-btn"
            onClick={() =>
              addSectionItem("education", {
                institution: "Institution, Location",
                degree: "Degree",
                duration: "YYYY - YYYY",
              })
            }
          >
            ➕
          </button>
        </div>
        {resume.education.map((edu, index) => (
          <div className="edu-block" key={index}>
            <div className="edu-left">
              <p
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  updateSectionItem("education", index, "institution", e.target.innerText)
                }
              >
                {edu.institution}
              </p>
              <p
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) =>
                  updateSectionItem("education", index, "degree", e.target.innerText)
                }
              >
                {edu.degree}
              </p>
            </div>
            <div
              className="edu-right"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateSectionItem("education", index, "duration", e.target.innerText)
              }
            >
              {edu.duration}
            </div>
          </div>
        ))}

        <div className="section-header">
          <h3>Experience</h3>
          <button
            className="add-btn"
            onClick={() =>
              addSectionItem("experience", {
                role: "Role",
                company: "Company",
                years: "Years",
                description: "Your responsibilities...",
              })
            }
          >
            ➕
          </button>
        </div>
        {resume.experience.map((exp, index) => (
          <div className="exp-row" key={index}>
            <div className="exp-header">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateSectionItem("experience", index, "role", e.target.innerText)}
              >
                {exp.role}
              </span>
              <span className="divider">|</span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateSectionItem("experience", index, "company", e.target.innerText)}
              >
                {exp.company}
              </span>
              <span className="divider">|</span>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateSectionItem("experience", index, "years", e.target.innerText)}
              >
                {exp.years}
              </span>
            </div>
            <p
              className="exp-desc"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) =>
                updateSectionItem("experience", index, "description", e.target.innerText)
              }
            >
              {exp.description}
            </p>
          </div>
        ))}

        <div className="section-header">
          <h3>Projects</h3>
          <button
            className="add-btn"
            onClick={() =>
              addSectionItem("projects", {
                title: "Project Title",
                description: "Project description...",
              })
            }
          >
            ➕
          </button>
        </div>
        {resume.projects.map((proj, index) => (
          <div key={index} className="project-block">
            <p
              className="project-title"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateSectionItem("projects", index, "title", e.target.innerText)}
            >
              {proj.title}
            </p>
            <p
              className="project-desc"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateSectionItem("projects", index, "description", e.target.innerText)}
            >
              {proj.description}
            </p>
          </div>
        ))}

        <div className="section-header">
          <h3>Skills</h3>
        </div>
        <div className="skills-wrapper">
          {resume.skills.map((skill, index) => (
            <span
              key={index}
              contentEditable
              suppressContentEditableWarning
              className="skill-tag"
              onBlur={(e) => updateSkill(index, e.target.innerText)}
            >
              {skill}
            </span>
          ))}
        </div>
        <input
          className="skill-input"
          placeholder="Add skill and hit Enter"
          onKeyDown={addSkill}
        />
      </div>
    </div>
  );
}

export default InlineResumeEditor;
