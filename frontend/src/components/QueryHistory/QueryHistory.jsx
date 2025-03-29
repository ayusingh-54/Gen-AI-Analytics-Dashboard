import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteQueryFromHistory,
  clearAllHistory,
} from "../../redux/slices/queriesSlice";

const QueryHistory = ({ onSelectQuery }) => {
  const { queryHistory } = useSelector((state) => state.queries);
  const dispatch = useDispatch();

  const handleDelete = (e, index) => {
    e.stopPropagation(); // Prevent triggering the parent onClick
    dispatch(deleteQueryFromHistory(index));
  };

  const handleClearAll = () => {
    dispatch(clearAllHistory());
  };

  if (!queryHistory.length) {
    return (
      <div className="bg-card p-4 rounded-lg shadow-md h-full">
        <h2 className="text-lg font-semibold mb-4">Query History</h2>
        <p className="text-gray-500 text-sm">
          No queries yet. Try asking something!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card p-4 rounded-lg shadow-md h-full overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Query History</h2>
        <button
          onClick={handleClearAll}
          className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Clear All
        </button>
      </div>
      <ul className="space-y-2">
        {queryHistory.map((query, index) => (
          <li
            key={index}
            className="p-2 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer text-sm truncate relative group"
            onClick={() => onSelectQuery(query)}
            title={query}
          >
            <div className="pr-8 overflow-hidden text-ellipsis">{query}</div>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-red-100 hover:bg-red-200 text-red-500 rounded-full p-1"
              onClick={(e) => handleDelete(e, index)}
              title="Delete query"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
