import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuery } from "./redux/slices/queriesSlice";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultsDisplay from "./components/ResultsDisplay";
import LoadingError from "./components/LoadingError";
import { useMockAI } from "./hooks/useMockAI";

function App() {
  const dispatch = useDispatch();
  const { currentQuery } = useSelector((state) => state.queries);
  const { processQuery, chartType } = useMockAI();

  const handleSubmit = (query) => {
    processQuery(query);
  };

  const handleSelectQuery = (query) => {
    dispatch(setCurrentQuery(query));
    processQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Gen AI Analytics Dashboard</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="mb-6">
          <QueryInput onSubmit={handleSubmit} initialQuery={currentQuery} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <QueryHistory onSelectQuery={handleSelectQuery} />
          </div>

          <div className="lg:col-span-3 h-[500px]">
            <ResultsDisplay chartType={chartType} />
          </div>
        </div>
      </main>

      <LoadingError />
    </div>
  );
}

export default App;
