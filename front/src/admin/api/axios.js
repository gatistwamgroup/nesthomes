import axios from "axios";

let baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
if (baseURL && !baseURL.endsWith('/api')) {
  baseURL = baseURL.replace(/\/$/, '') + '/api';
}

const API = axios.create({
  baseURL,
});

// Add a response interceptor to handle token expiration globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // If the backend returns 401 Unauthorized
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("adminToken");
      // Redirect to login page if we are not already there
      if (window.location.pathname !== "/admin/login") {
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(error);
  }
);

export default API;