import { create } from 'zustand';
import { axiosInstance } from '../lib/axios.js';
import toast from 'react-hot-toast';
export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIng: false,
    isUpdatingProfile: false,
    isForgotPassword: false,
    isCheckingAuth: true,


    // checkAuth: async () => {
    //     try {   
    //         const res = await axiosInstance.get("/check");
    //         set({ authUser: res.data });
    //     } catch (error) {
    //         // console.log("Error in checkAuth", error)x
    //         set({ authUser: null })
    //     } finally {
    //         set({ isCheckingAuth: false })
    //     }
    // },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/signup", data);
            set({ authUser: res.data.token });

            toast.success("Account created successfully");
        } catch (error) {
            // toast.error(error.response.data.message);
            toast.error(error.response?.data?.message || "An unexpected error occurred.");
        } finally {
            set({ isSigningUp: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIng: true });
        try {
            // console.log("Login request data: ", data)
            const res = await axiosInstance.post("/login", data);
            console.log("Login request data: ", data)
            set({ authUser: res.data });
            console.log("Login request data: ", data)
            toast.success("Logged in successfully");
        } catch (error) {
            console.log("Login API error: ", error.response || error.message);
            toast.error(error.response?.data?.message || "An unexpected error occurred.");

        } finally {
            set({ isLoggingIng: false });
        }
    },

    logout: async () => {
        try {
            await axiosInstance.post("/logout");
            set({ authUser: null });
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },


    updateProfile: async (data) => {
        set({ isUpdatingProfile: true });
        try {
            const res = await axiosInstance.put("/updateProfile", data);
            set({ authUser: res.data });
            toast.success("Profile updated successfully");
        } catch (error) {
            console.log("Update profile API error: ", error.responce || error.message)
            toast.error(error.response.data.message);
        } finally {
            set({ isUpdatingProfile: false });
        }
    },

    // updateProfile: async (data) => {
    //     set({ isUpdatingProfile: true });
    //     try {
    //         const formData = new FormData();
    //         if (data.profileFile) formData.append('profileFile', data.profileFile); // Profile image
    //         if (data.fullName) formData.append('fullName', data.fullName); // Other fields
    //         const res = await axiosInstance.put("/updateProfile", formData, {
    //             headers: { 'Content-Type': 'multipart/form-data' },
    //         });

    //         set({ authUser: res.data });
    //         toast.success("Profile updated successfully");
    //     } catch (error) {
    //         console.log("Update profile API error: ", error.response || error.message);
    //         toast.error(error.response?.data?.message || "An unexpected error occurred.");
    //     } finally {
    //         set({ isUpdatingProfile: false });
    //     }
    // },

    // forgotPassword: async (email) => {
    //     set({ isForgotPassword: true });
    //     try {
    //         console.log("Forgot password email: ", email);
    //         const res = await axiosInstance.post("/forgotPassword", { email });
    //         toast.success(res.data.message || "Password reset link sent successfully");
    //     } catch (error) {
    //         console.log('Forgot password API error:', error.response?.data || error.message);
    //         toast.error(error.response?.data?.message || "An unexpected error occurred.");
    //     }
    //     finally {
    //         set({ isForgotPassword: false });
    //     }
    // }

    forgotPassword: async (email) => {
        set({ isForgotPassword: true });
        try {
            const res = await axiosInstance.post('/forgotPassword', { email });
            toast.success(res.data.message || "Password reset link sent successfully");
        } catch (error) {
            console.log("Forgot password API error: ", error.response || error.message);
            toast.error(error.response?.data?.message || "An unexpected error occurred.");
        } finally {
            set({ isForgotPassword: false });
        }
    },

}));


// import { create } from 'zustand';
// import { axiosInstance } from '../lib/axios.js';
// import toast from 'react-hot-toast';

// export const useAuthStore = create((set) => ({
//     authUser: JSON.parse(localStorage.getItem('authUser')) || null,
//     isSigningUp: false,
//     isLoggingIn: false,
//     isUpdatingProfile: false,
//     isForgotPassword: false,
//     isCheckingAuth: !localStorage.getItem('authUser'),

//     checkAuth: async () => {
//         try {
//             const res = await axiosInstance.get("/check");
//             set({ authUser: res.data });
//         } catch (error) {
//             set({ authUser: null });
//         } finally {
//             set({ isCheckingAuth: false });
//         }
//     },

//     signup: async (data) => {
//         set({ isSigningUp: true });
//         try {
//             const res = await axiosInstance.post("/signup", data);
//             set({ authUser: res.data.token });
//             localStorage.setItem('authUser', JSON.stringify(res.data.token));
//             toast.success("Account created successfully");
//         } catch (error) {
//             toast.error(error.response?.data?.message || error.message || "An unexpected error occurred.");
//         } finally {
//             set({ isSigningUp: false });
//         }
//     },

//     login: async (data) => {
//         set({ isLoggingIn: true });
//         try {
//             const res = await axiosInstance.post("/login", data);
//             set({ authUser: res.data });
//             localStorage.setItem('authUser', JSON.stringify(res.data));
//             toast.success("Logged in successfully");
//         } catch (error) {
//             console.log("Login API error: ", error.response || error.message);
//             toast.error(error.response?.data?.message || error.message || "An unexpected error occurred.");
//         } finally {
//             set({ isLoggingIn: false });
//         }
//     },

//     logout: async () => {
//         try {
//             await axiosInstance.post("/logout");
//             set({ authUser: null });
//             localStorage.removeItem('authUser');
//             toast.success("Logged out successfully");
//         } catch (error) {
//             toast.error(error.response?.data?.message || "An unexpected error occurred.");
//         }
//     },

//     updateProfile: async (data) => {
//         set({ isUpdatingProfile: true });
//         try {
//             const formData = new FormData();
//             if (data.profileFile) formData.append('profileFile', data.profileFile);
//             if (data.fullName) formData.append('fullName', data.fullName);
//             const res = await axiosInstance.put("/updateProfile", formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             set({ authUser: res.data });
//             toast.success("Profile updated successfully");
//         } catch (error) {
//             console.log("Update profile API error: ", error.response || error.message);
//             toast.error(error.response?.data?.message || error.message || "An unexpected error occurred.");
//         } finally {
//             set({ isUpdatingProfile: false });
//         }
//     },

//     forgotPassword: async (email) => {
//         set({ isForgotPassword: true });
//         try {
//             const res = await axiosInstance.post('/forgotPassword', { email });
//             toast.success(res.data.message || "Password reset link sent successfully");
//         } catch (error) {
//             console.log("Forgot password API error: ", error.response || error.message);
//             toast.error(error.response?.data?.message || "An unexpected error occurred.");
//         } finally {
//             set({ isForgotPassword: false });
//         }
//     },
// }));
