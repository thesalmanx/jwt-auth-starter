import axios from 'axios';

const API_URL = 'http://localhost:8080/users';

export const loginAPI = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

export const registerAPI = (credentials) => {
  return axios.post(`${API_URL}/register`, credentials);
};

export const checkAuthAPI = () => {
  const token = localStorage.getItem('token');
  return axios.get(`${API_URL}/protected`, {
    headers: {
      Authorization: token,
    },
  });
};
