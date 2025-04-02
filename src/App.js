import React, { useState } from "react";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Project A",
      cost: 500000,
      value: 700000,
      risk: 0.1,
      priority: 90,
    },
    {
      id: 2,
      name: "Project B",
      cost: 300000,
      value: 500000,
      risk: 0.3,
      priority: 70,
    },
    {
      id: 3,
      name: "Project C",
      cost: 800000,
      value: 1000000,
      risk: 0.2,
      priority: 80,
    },
  ]);

  const [newProject, setNewProject] = useState({
    name: "",
    cost: "",
    value: "",
    risk: "",
    priority: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const addProject = () => {
    if (
      newProject.name &&
      newProject.cost &&
      newProject.value &&
      newProject.risk &&
      newProject.priority
    ) {
      setProjects([
        ...projects,
        {
          ...newProject,
          id: projects.length + 1,
          cost: parseFloat(newProject.cost),
          value: parseFloat(newProject.value),
          risk: parseFloat(newProject.risk),
          priority: parseInt(newProject.priority),
        },
      ]);
      setNewProject({
        name: "",
        cost: "",
        value: "",
        risk: "",
        priority: "",
      });
    }
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const totalCost = projects.reduce((acc, project) => acc + project.cost, 0);
  const totalValue = projects.reduce((acc, project) => acc + project.value, 0);
  const totalRisk =
    projects.reduce((acc, project) => acc + project.risk, 0) / projects.length;
  const totalPriority =
    projects.reduce((acc, project) => acc + project.priority, 0) /
    projects.length;

  return (
    <div className="App">
      <div className="kpi-panel">
        <h3>Key Performance Indicators</h3>
        <p>Total Cost: {totalCost.toLocaleString()} €</p>
        <p>Total Value: {totalValue.toLocaleString()} €</p>
        <p>Average Risk: {(totalRisk * 100).toFixed(2)}%</p>
        <p>Average Priority: {totalPriority}</p>
      </div>

      <div className="add-project">
        <h3>Add New Project</h3>
        <input
          type="text"
          name="name"
          value={newProject.name}
          onChange={handleChange}
          placeholder="Project Name"
        />
        <input
          type="number"
          name="cost"
          value={newProject.cost}
          onChange={handleChange}
          placeholder="Cost"
        />
        <input
          type="number"
          name="value"
          value={newProject.value}
          onChange={handleChange}
          placeholder="Value"
        />
        <input
          type="number"
          name="risk"
          value={newProject.risk}
          onChange={handleChange}
          placeholder="Risk"
        />
        <input
          type="number"
          name="priority"
          value={newProject.priority}
          onChange={handleChange}
          placeholder="Priority"
        />
        <button onClick={addProject}>Add Project</button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h4>{project.name}</h4>
            <p>Cost: {project.cost.toLocaleString()} €</p>
            <p>Value: {project.value.toLocaleString()} €</p>
            <p>Risk: {(project.risk * 100).toFixed(2)}%</p>
            <p>Priority: {project.priority}</p>
            <button onClick={() => deleteProject(project.id)}>
              Delete Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
