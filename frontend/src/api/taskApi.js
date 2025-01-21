import axios from "axios";

const API_BASE = "http://localhost:5000/api/tasks";

export const fetchTasks = (projectId) => axios.get(`${API_BASE}?projectId=${projectId}`);

export const createTask = (taskData) => axios.post(API_BASE, taskData);

export const updateTask = (id, updates) => axios.put(`${API_BASE}/${id}`, updates);
