import { create } from 'zustand';

const useFAQsStore = create((set) => ({
    faqs: [],
    addFAQ: (faq) => set((state) => ({ faqs: [...state.faqs, faq] })),
    clearFAQs: () => set({ faqs: [] }),
}));

export default useFAQsStore;