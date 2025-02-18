import { create } from 'zustand';
import axios from 'axios';

const useContactStore = create((set) => ({
    contacts: [],

    addContact: async (contact) => {
        try {
            console.log("API Call Started:", contact);
            const response = await axios.post("http://localhost:8001/api/contactus/addContactpost", contact);
            set((state) => ({ contacts: [...state.contacts, response.data] }));
        } catch (error) {
            return error
        }
    },

    clearContacts: () => set({ contacts: [] })
}));

export default useContactStore;
