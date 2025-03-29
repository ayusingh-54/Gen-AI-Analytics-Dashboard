import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentQuery: "",
  queryHistory: [],
  isLoading: false,
  error: null,
};

export const queriesSlice = createSlice({
  name: "queries",
  initialState,
  reducers: {
    setCurrentQuery: (state, action) => {
      state.currentQuery = action.payload;
    },
    addQueryToHistory: (state, action) => {
      // Avoid duplicate queries in history
      if (!state.queryHistory.includes(action.payload)) {
        state.queryHistory.unshift(action.payload);
        // Keep only the last 10 queries
        if (state.queryHistory.length > 10) {
          state.queryHistory.pop();
        }
      }
    },
    deleteQueryFromHistory: (state, action) => {
      state.queryHistory = state.queryHistory.filter(
        (_, index) => index !== action.payload
      );
    },
    clearAllHistory: (state) => {
      state.queryHistory = [];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  setCurrentQuery,
  addQueryToHistory,
  deleteQueryFromHistory,
  clearAllHistory,
  setLoading,
  setError,
  clearError,
} = queriesSlice.actions;

export default queriesSlice.reducer;
