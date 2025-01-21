import axios from "axios";

const API_BASE = "http://localhost:5000/api/auth";

export const loginUser = (credentials) => axios.post(`${API_BASE}/login`, credentials);

export const registerUser = (userData) => axios.post(`${API_BASE}/register`, userData);
