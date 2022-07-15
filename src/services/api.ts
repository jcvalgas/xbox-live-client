import axios from "axios";

const api = axios.create({
  baseURL: "https://xbox-live-server-production-4332.up.railway.app",
});

api.interceptors.request.use((config: any) => {
  try {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (err: any) {
    console.log(err);
  }
});

export default api;
