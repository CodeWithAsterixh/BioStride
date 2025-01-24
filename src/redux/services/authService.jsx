import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login/`, credentials);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${API_URL}/logout/`);
  return response.data;
};
