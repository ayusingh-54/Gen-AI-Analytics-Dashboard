import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoadingError = () => {
  const { isLoading, error } = useSelector((state) => state.queries);

  // Show error toast when error changes
  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (!isLoading) {
    return <ToastContainer position="top-right" autoClose={5000} />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center">
        <div className="loader mb-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h3 className="text-lg font-medium">Processing your query...</h3>
        <p className="text-gray-500 mt-2">The AI is analyzing your request</p>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default LoadingError;
