// src/store/UseAuthStore.js
import { create } from 'zustand';
import axiosInstance from '../lib/axios.js';
import toast from 'react-hot-toast';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const res = await axiosInstance.get("/check", { withCredentials: true });
            set({ authUser: res.data.user, isCheckingAuth: false });
        } catch (error) {
            set({ authUser: null, isCheckingAuth: false });
            return error.response?.data?.message || error.message
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/signup", data);
            set({ authUser: res.data.user });
            toast.success("Account created successfully");
            return res.data;
        } catch (error) {
            toast.error(
                error.response?.data?.message || "An unexpected error occurred during signup."
            );
            throw error;
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/login", data);
            set({ authUser: res.data.user });
            toast.success("Logged in successfully");
            return res.data;
        } catch (error) {
            toast.error(
                error.response?.data?.message || "An unexpected error occurred during login."
            );
            throw error;
        } finally {
            set({ isLoggingIn: false });
        }
    },
}));
