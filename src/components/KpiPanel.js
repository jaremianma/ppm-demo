import React from "react";

function KpiPanel({ projects }) {
  // Izračun KPI-ova
  const totalCost = projects.reduce((acc, project) => acc + project.cost, 0);
  const totalValue = projects.reduce((acc, project) => acc + project.value, 0);
  const totalRisk =
    projects.reduce((acc, project) => acc + project.risk, 0) / projects.length;
  const totalPriority =
    projects.reduce((acc, project) => acc + project.priority, 0) /
    projects.length;

  return (
    <div className="kpi-panel">
      <h3>Key Performance Indicators</h3>
      <p>Total Cost: {totalCost.toLocaleString()} €</p>
      <p>Total Value: {totalValue.toLocaleString()} €</p>
      <p>Average Risk: {(totalRisk * 100).toFixed(2)}%</p>
      <p>Average Priority: {totalPriority}</p>
    </div>
  );
}

export default KpiPanel;
