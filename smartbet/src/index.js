import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App"; // Main App component


// Render the root React component
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
