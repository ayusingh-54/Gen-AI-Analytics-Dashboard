// Generate mock data based on query content
export const generateMockData = (query) => {
  const lowercaseQuery = query.toLowerCase();

  // Default data structure
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Generate random values
  const generateValues = (count, min = 10, max = 100) => {
    return Array.from(
      { length: count },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  };

  // Sales data
  if (lowercaseQuery.includes("sales")) {
    const values = generateValues(12, 50, 200);

    const chartData = {
      labels: months,
      datasets: [
        {
          label: "Sales",
          data: values,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgb(54, 162, 235)",
          borderWidth: 1,
        },
      ],
    };

    const rawData = months.map((month, index) => ({
      month,
      sales: values[index],
    }));

    return {
      chartData,
      rawData,
      chartType: lowercaseQuery.includes("trend")
        ? "line"
        : lowercaseQuery.includes("compare")
        ? "bar"
        : "pie",
    };
  }

  // Revenue data
  else if (lowercaseQuery.includes("revenue")) {
    const values = generateValues(12, 100, 500);

    const chartData = {
      labels: months,
      datasets: [
        {
          label: "Revenue",
          data: values,
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 1,
        },
      ],
    };

    const rawData = months.map((month, index) => ({
      month,
      revenue: values[index],
    }));

    return {
      chartData,
      rawData,
      chartType: lowercaseQuery.includes("trend") ? "line" : "bar",
    };
  }

  // User data
  else if (lowercaseQuery.includes("user")) {
    const values = generateValues(12, 20, 150);

    const chartData = {
      labels: months,
      datasets: [
        {
          label: "Active Users",
          data: values,
          backgroundColor: "rgba(153, 102, 255, 0.5)",
          borderColor: "rgb(153, 102, 255)",
          borderWidth: 1,
        },
      ],
    };

    const rawData = months.map((month, index) => ({
      month,
      users: values[index],
    }));

    return {
      chartData,
      rawData,
      chartType: lowercaseQuery.includes("distribution") ? "pie" : "line",
    };
  }

  // Default data
  else {
    const values = generateValues(12, 30, 120);

    const chartData = {
      labels: months,
      datasets: [
        {
          label: "Metrics",
          data: values,
          backgroundColor: "rgba(255, 159, 64, 0.5)",
          borderColor: "rgb(255, 159, 64)",
          borderWidth: 1,
        },
      ],
    };

    const rawData = months.map((month, index) => ({
      month,
      value: values[index],
    }));

    return {
      chartData,
      rawData,
      chartType: "bar",
    };
  }
};
