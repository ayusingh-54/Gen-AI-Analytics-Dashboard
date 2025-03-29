import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chartData: null,
  rawData: [],
  activeView: "chart", // 'chart' or 'table'
};

export const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setChartData: (state, action) => {
      state.chartData = action.payload;
    },
    setRawData: (state, action) => {
      state.rawData = action.payload;
    },
    setActiveView: (state, action) => {
      state.activeView = action.payload;
    },
    clearResults: (state) => {
      state.chartData = null;
      state.rawData = [];
    },
  },
});

export const { setChartData, setRawData, setActiveView, clearResults } =
  resultsSlice.actions;

export default resultsSlice.reducer;
