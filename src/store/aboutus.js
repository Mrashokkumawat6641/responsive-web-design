import { create } from 'zustand';
import axios from 'axios';

const useAboutStore = create((set) => ({
    teamMembers: [],

    addTeamMember: async (member) => {
        try {
            const response = await axios.post('http://localhost:8001/api/add/addpost', {
                name: member.name,
                position: member.position,
                bio: member.bio
            });

            if (response.status === 201) {
                set((state) => ({ teamMembers: [...state.teamMembers, response.data] }));
            }
        } catch (error) {
            console.error('Error adding team member:', error.response?.data || error.message);
        }
    },

    deleteTeamMember: async (id) => {
        try {
            console.log("Deleting ID from frontend:", id);  // ✅ Check ID before API call
            const response = await axios.delete(`http://localhost:8001/api/add/deletepost/${id}`);

            if (response.status === 200) {
                set((state) => ({
                    teamMembers: state.teamMembers.filter((member) => member._id !== id)
                }));
                console.log("Deleted successfully:", response.data);
            }
        } catch (error) {
            return error.response?.data || error.message;
        }
    },
    clearTeamMembers: () => set({ teamMembers: [] }),
}));

export default useAboutStore;
