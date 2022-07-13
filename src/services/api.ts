import axios from "axios";

const api = axios.create({
  baseURL: "https://xbox-live-server-production-4332.up.railway.app",
});

export default api;
