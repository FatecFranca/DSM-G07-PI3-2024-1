import axios from 'axios';

const api = axios.create({
  baseURL: `https://dsm-g07-pi3-2024-1.onrender.com`,
});

export default api;
