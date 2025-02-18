import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8001/api/auth/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;


