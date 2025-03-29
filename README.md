# Gen AI Analytics Dashboard

![Dashboard Screenshot](https://via.placeholder.com/800x400?text=Gen+AI+Analytics+Dashboard)

## 📊 Project Overview

Gen AI Analytics Dashboard is a React-based simulation of an AI-powered analytics tool that allows users to query data using natural language. The application demonstrates how a real-world AI analytics platform might work by providing visualizations and data representations based on user queries.

### Key Features

- **Natural Language Query Interface**: Type questions in plain English
- **Query Suggestions**: Get intelligent autocomplete suggestions
- **Simulated AI Processing**: Experience realistic AI processing with loading indicators
- **Dynamic Visualizations**: See data presented in multiple chart formats based on query context
- **Query History**: Review and reuse previous queries
- **Responsive Design**: Fully functional on mobile and desktop devices

## 🚀 Live Demo

[View Live Demo](https://gen-ai-dashboard.vercel.app) (Replace with your actual deployment URL)

## 🛠️ Technologies Used

- **React**: Frontend UI library
- **Redux Toolkit**: State management
- **Chart.js / React-Chartjs-2**: Data visualization
- **Tailwind CSS**: Styling and responsive design
- **React-Toastify**: Toast notifications
- **Lodash**: Utility functions like debounce
- **Vite**: Fast build tool and development server

## 📋 Installation and Setup

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/gen-ai-analytics-dashboard.git
   cd gen-ai-analytics-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## 🎮 How to Use

1. **Enter a Query**: Type a question in the search bar (e.g., "Show monthly sales trends", "Compare quarterly revenue")
2. **Select Suggestions**: Click on autocomplete suggestions that appear as you type
3. **View Results**: See the AI-generated visualization based on your query
4. **Switch Views**: Toggle between chart and table views using the button above the results
5. **Reuse Queries**: Click on items in the query history to re-run previous queries
6. **Manage History**: Delete individual queries or clear all history

## 📁 Project Structure

```
frontend/
├── public/             # Static files (HTML, manifest, favicon)
├── src/                # Application source code
│   ├── components/     # React components
│   │   ├── QueryInput/       # Search input and autocomplete
│   │   ├── QueryHistory/     # History sidebar
│   │   ├── ResultsDisplay/   # Charts and data tables
│   │   └── LoadingError/     # Loading indicators and error messages
│   ├── redux/          # Redux state management
│   │   ├── slices/     # Redux Toolkit slices
│   │   └── store.js    # Redux store configuration
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions and mock data generation
│   ├── App.js          # Main application component
│   └── index.js        # Application entry point
└── package.json        # Dependencies and scripts
```

## 💡 How It Works

### Query Processing Flow

1. User submits a natural language query
2. Query is stored in history and loading state is activated
3. Mock AI processing simulates analysis (2-second delay)
4. Based on keywords in the query, appropriate mock data is generated
5. Chart type is determined by query context (e.g., "trend" → line chart)
6. Visualization is rendered with the generated data

### Mock Data Generation

The application analyzes keywords in queries to determine:

- The type of data to display (sales, revenue, users, etc.)
- The appropriate visualization type (line, bar, pie)
- Sample data points to populate the charts

## 🔮 Future Enhancements

- User authentication and personal query history
- Export functionality for charts and data
- More advanced natural language processing
- Additional visualization types
- Dashboard customization options
- Real backend integration options

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Chart.js](https://www.chartjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Create React App](https://create-react-app.dev/)
