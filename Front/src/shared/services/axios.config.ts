import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("@token");

    if (token) {
      config.headers!["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) return Promise.reject(error.response);

    return Promise.reject(error);
  }
);

export default api;
