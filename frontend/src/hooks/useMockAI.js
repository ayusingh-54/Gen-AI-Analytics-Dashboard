import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  setLoading,
  setError,
  addQueryToHistory,
} from "../redux/slices/queriesSlice";
import { setChartData, setRawData } from "../redux/slices/resultsSlice";
import { generateMockData } from "../utils/mockDataGenerator";

export const useMockAI = () => {
  const [chartType, setChartType] = useState("bar");
  const dispatch = useDispatch();

  const processQuery = useCallback(
    async (query) => {
      if (!query.trim()) return;

      try {
        // Start loading
        dispatch(setLoading(true));

        // Add query to history
        dispatch(addQueryToHistory(query));

        // Simulate API call with timeout
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Generate mock data based on query
        const { chartData, rawData, chartType } = generateMockData(query);

        // Update state with results
        dispatch(setChartData(chartData));
        dispatch(setRawData(rawData));
        setChartType(chartType);

        // Clear any previous errors
        dispatch(setError(null));
      } catch (error) {
        dispatch(setError("Failed to process query. Please try again."));
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch]
  );

  return { processQuery, chartType };
};
