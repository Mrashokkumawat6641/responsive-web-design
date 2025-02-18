import { create } from 'zustand';
import axios from 'axios';

const useCareersStore = create((set) => ({
    jobListings: [],

    fetchJobListings: async () => {
        try {
            const response = await axios.get('http://localhost:8001/api/careers/getAllJobs');
            set({ jobListings: response.data });
        } catch (error) {
            return error.response?.data || error.message
        }
    },

    addJobListing: async (job) => {
        try {
            const response = await axios.post('http://localhost:8001/api/careers/addCareers', job);
            if (response.status === 201) {
                set((state) => ({ jobListings: [...state.jobListings, response.data] }));
            }
        } catch (error) {
            return error.response?.data || error.message
        }
    },

    clearJobListings: () => set({ jobListings: [] }),
}));

export default useCareersStore;
