// src/slices/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Use Vite's environment variables with import.meta.env
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';

export const apiSlice = createApi({
  reducerPath: 'api', // The key in the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({}), // This is intentionally empty
});

export default apiSlice;