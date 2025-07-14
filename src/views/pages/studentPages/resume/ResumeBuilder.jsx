import { useState } from "react";
import "./styles/ResumeBuilder.css";
import ResumePreview from "../../../components/ui/student/ResumePreview.jsx";

function ResumeBuilder() {
  const [resumeData, setResumeData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    experience: [],
    projects: [],
    skills: [],
  });

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, { company: "", role: "", years: "" }],
    });
  };

  const updateExperience = (index, field, value) => {
    const updated = [...resumeData.experience];
    updated[index][field] = value;
    setResumeData({ ...resumeData, experience: updated });
  };

  const addProject = () => {
    setResumeData({ ...resumeData, projects: [...resumeData.projects, ""] });
  };

  const updateProject = (index, value) => {
    const updated = [...resumeData.projects];
    updated[index] = value;
    setResumeData({ ...resumeData, projects: updated });
  };

  const updateSkillList = (e) => {
    const skills = e.target.value.split(",").map((s) => s.trim());
    setResumeData({ ...resumeData, skills });
  };

  return (
    <div className="builder-container">
      <div className="builder-form">
        <h2>📝 Resume Editor</h2>

        <div className="section-card">
          <h3>👤 Personal Info</h3>
          <input type="text" name="name" placeholder="Full Name" onChange={handleChange} />
          <input type="text" name="title" placeholder="Job Title" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input type="text" name="location" placeholder="Location" onChange={handleChange} />
        </div>

        <div className="section-card">
          <h3>💼 Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div className="exp-item" key={index}>
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) => updateExperience(index, "company", e.target.value)}
              />
              <input
                type="text"
                placeholder="Role"
                value={exp.role}
                onChange={(e) => updateExperience(index, "role", e.target.value)}
              />
              <input
                type="text"
                placeholder="Years (e.g. 2020-2023)"
                value={exp.years}
                onChange={(e) => updateExperience(index, "years", e.target.value)}
              />
            </div>
          ))}
          <button onClick={addExperience}>➕ Add Experience</button>
        </div>

        <div className="section-card">
          <h3>🚀 Projects</h3>
          {resumeData.projects.map((proj, index) => (
            <input
              key={index}
              type="text"
              placeholder="Project Title"
              value={proj}
              onChange={(e) => updateProject(index, e.target.value)}
            />
          ))}
          <button onClick={addProject}>➕ Add Project</button>
        </div>

        <div className="section-card">
          <h3>🛠️ Skills</h3>
          <input
            type="text"
            placeholder="e.g. React, Node.js, Python"
            onChange={updateSkillList}
          />
        </div>
      </div>

      <div className="builder-preview">
        <ResumePreview data={resumeData} />
      </div>
    </div>
  );
}

export default ResumeBuilder;
