import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveView } from "../../redux/slices/resultsSlice";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const ResultsDisplay = ({ chartType }) => {
  const dispatch = useDispatch();
  const { chartData, rawData, activeView } = useSelector(
    (state) => state.results
  );
  const { isLoading, currentQuery } = useSelector((state) => state.queries);

  if (isLoading) {
    return null; // LoadingError component will handle the loading state
  }

  if (!chartData || !rawData.length) {
    return (
      <div className="bg-card p-6 rounded-lg shadow-md h-full flex items-center justify-center">
        <p className="text-gray-500">
          Enter a query to see visualizations and data.
        </p>
      </div>
    );
  }

  const toggleView = () => {
    dispatch(setActiveView(activeView === "chart" ? "table" : "chart"));
  };

  // Render the appropriate chart based on the chartType
  const renderChart = () => {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: `Results for: "${currentQuery}"`,
        },
      },
    };

    switch (chartType) {
      case "line":
        return <Line data={chartData} options={options} />;
      case "pie":
        return <Pie data={chartData} options={options} />;
      case "bar":
      default:
        return <Bar data={chartData} options={options} />;
    }
  };

  // Render data table
  const renderTable = () => {
    if (!rawData.length) return null;

    const headers = Object.keys(rawData[0]);

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rawData.map((row, i) => (
              <tr key={i}>
                {headers.map((header, j) => (
                  <td
                    key={j}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                  >
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow-md h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Results</h2>
        <button
          onClick={toggleView}
          className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-opacity-90"
        >
          {activeView === "chart" ? "Show Table" : "Show Chart"}
        </button>
      </div>

      <div className="flex-grow">
        {activeView === "chart" ? (
          <div className="h-full">{renderChart()}</div>
        ) : (
          renderTable()
        )}
      </div>
    </div>
  );
};

export default ResultsDisplay;
