import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ projects }) {
  const data = projects.map((project) => ({
    name: project.name,
    roi: project.value / project.cost,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="roi" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
