import React from "react";
import ProjectList from "../components/Dashboard/ProjectList";
import TaskList from "../components/Dashboard/TaskList";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ProjectList />
      <TaskList />
    </div>
  );
};

export default Dashboard;
