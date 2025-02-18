import { create } from 'zustand';
import axios from 'axios';

const useBlogStore = create((set) => ({
    posts: [],
    addPost: async (post) => {
        try {
            const response = await axios.post("http://localhost:8001/api/blog/addposts", post);
            set((state) => ({ posts: [...state.posts, response.data] }));
        } catch (error) {
            return error
        }
    },
    removePost: (id) => set((state) => ({
        posts: state.posts.filter((post) => post._id !== id),
    })),
    clearPosts: () => set({ posts: [] }),
}));

export default useBlogStore;
