import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import TextSelectionHandler from "../../../../components/ui/student/TextSelectionHandler.jsx";
import AIInsightsModal from "../../../../components/ui/student/AIInsightsModal.jsx";
import ResumeHeader from "../../../../components/ui/student/ResumeHeader.jsx";
import EducationSection from "../../../../components/ui/student/EducationSection.jsx";
import ExperienceSection from "../../../../components/ui/student/ExperienceSection.jsx";
import ProjectsSection from "../../../../components/ui/student/ProjectsSection.jsx";
import SkillsSection from "../../../../components/ui/student/SkillsSection.jsx";
import { getAIInsights } from "../../../../../Services/aiInsights.js";
import "../styles/InlineResumeEditor.css"

function InlineResumeEditor() {
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiInsights, setAiInsights] = useState(null);
  const [currentSelection, setCurrentSelection] = useState({ text: '', element: null });

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

  const updateField = (field, value) => {
    setResume(prev => ({ ...prev, [field]: value }));
  };

  const updateEducation = (index, field, value) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const updateExperience = (index, field, value) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const updateProject = (index, field, value) => {
    setResume(prev => ({
      ...prev,
      projects: prev.projects.map((proj, i) =>
        i === index ? { ...proj, [field]: value } : proj
      )
    }));
  };

  const updateSkill = (index, value) => {
    setResume(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };

  const addEducation = () => {
    setResume(prev => ({
      ...prev,
      education: [...prev.education, { degree: "New Degree", institution: "Institution", duration: "Year - Year" }]
    }));
  };

  const addExperience = () => {
    setResume(prev => ({
      ...prev,
      experience: [...prev.experience, { role: "New Role", company: "Company", years: "Year", description: "Description" }]
    }));
  };

  const addProject = () => {
    setResume(prev => ({
      ...prev,
      projects: [...prev.projects, { title: "New Project", description: "Project description" }]
    }));
  };

  const addSkill = (skill) => {
    setResume(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));
  };

  const deleteEducation = (index) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const deleteExperience = (index) => {
    setResume(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const deleteProject = (index) => {
    setResume(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const deleteSkill = (index) => {
    setResume(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const exportToPDF = () => {
    const element = resumeRef.current;
    const options = {
      margin: 0.5,
      filename: `${resume.name.replace(/\s+/g, '_')}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };

  const handleAIInsight = async (selectedText, userPrompt) => {
    try {
      const response = await getAIInsights(selectedText, userPrompt);
      setCurrentSelection({ text: selectedText, element: window.getSelection().anchorNode });
      setAiInsights({
        originalText: selectedText,
        suggestions: response.suggestions || [
          {
            text: "Enhanced version with better professional language",
            reason: "Improved clarity and impact for ATS systems"
          },
          {
            text: "Concise alternative focusing on key achievements",
            reason: "Better readability and hiring manager appeal"
          }
        ]
      });
      setAiModalOpen(true);
    } catch (error) {
      console.error('Failed to get AI insights:', error);
      setAiInsights({
        originalText: selectedText,
        suggestions: [
          {
            text: "Professional enhancement of the selected text",
            reason: "AI service unavailable - showing sample suggestion"
          }
        ]
      });
      setAiModalOpen(true);
    }
  };

  const handleApplySuggestion = (suggestion) => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(suggestion));
    }
    setAiModalOpen(false);
  };

  return (
    <div className="resume-editor">
      <TextSelectionHandler onAIInsight={handleAIInsight} />
      <AIInsightsModal 
        isOpen={aiModalOpen}
        onClose={() => setAiModalOpen(false)}
        insights={aiInsights}
        onApplySuggestion={handleApplySuggestion}
      />
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <button className="export-btn" onClick={exportToPDF}>
          📄 Export as PDF
        </button>

        <div className="resume-container" ref={resumeRef}>
        <ResumeHeader resume={resume} updateField={updateField} />
        <hr />
        <EducationSection 
          education={resume.education}
          updateEducation={updateEducation}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />
        <hr />

        <ExperienceSection 
          experience={resume.experience}
          updateExperience={updateExperience}
          addExperience={addExperience}
          deleteExperience={deleteExperience}
        />
         <hr />


        <ProjectsSection 
          projects={resume.projects}
          updateProject={updateProject}
          addProject={addProject}
          deleteProject={deleteProject}
        />
        <hr />
        <SkillsSection 
          skills={resume.skills}
          updateSkill={updateSkill}
          addSkill={addSkill}
          deleteSkill={deleteSkill}
        />
        </div>
      </div>
    </div>
  );
}

export default InlineResumeEditor;