import { configureStore } from "@reduxjs/toolkit";
import queriesReducer from "./slices/queriesSlice";
import resultsReducer from "./slices/resultsSlice";

export const store = configureStore({
  reducer: {
    queries: queriesReducer,
    results: resultsReducer,
  },
});
