import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Dashboard from "../pages/Dashboard";
import ProjectDetails from "../pages/ProjectDetails";
import TaskDetails from "../pages/TaskDetails.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects/:id" element={<ProjectDetails />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
    </Routes>
  );
};

export default AppRoutes;
