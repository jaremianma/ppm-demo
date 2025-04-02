import React from "react";

function ProjectCard({ project, deleteProject }) {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>Cost: {project.cost.toLocaleString()} €</p>
      <p>Value: {project.value.toLocaleString()} €</p>
      <p>Risk: {(project.risk * 100).toFixed(2)}%</p>
      <p>Priority: {project.priority}</p>
      <button onClick={() => deleteProject(project.name)}>
        Delete Project
      </button>
    </div>
  );
}

export default ProjectCard;
