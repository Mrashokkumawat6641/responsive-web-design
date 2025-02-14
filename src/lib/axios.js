import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/api/auth/', // API server
    withCredentials: true, // Matches 'credentials: true' in cors
    headers: {
      'Content-Type': 'application/json',
    },
  });
  