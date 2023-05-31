import axios from "axios";

export const APIInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})