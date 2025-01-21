import axios from "axios";

const API_BASE = "http://localhost:5000/api/projects";

export const fetchProjects = () => axios.get(API_BASE);

export const createProject = (projectData) => axios.post(API_BASE, projectData);

export const deleteProject = (id) => axios.delete(`${API_BASE}/${id}`);
