import axios from "axios";

const URL = "http://localhost:3001";

export const privateAxios = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
