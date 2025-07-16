import React from 'react';

const ProjectsSection = ({ projects, updateProject, addProject, deleteProject }) => {
  return (
    <div>
      <div className="section-header">
        <h3>🚀 Projects</h3>
        <button className="add-btn" onClick={addProject}>+</button>
      </div>
      {projects.map((project, index) => (
        <div key={index} className="project-block">
          <div className="project-header">
            <h4
              className="project-title"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateProject(index, "title", e.target.innerText)}
            >
              {project.title}
            </h4>
            <button className="delete-btn" onClick={() => deleteProject(index)}>×</button>
          </div>
          <p
            className="project-desc"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => updateProject(index, "description", e.target.innerText)}
          >
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;