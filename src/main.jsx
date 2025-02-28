import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ syntax
import './index.css'; // If you're using any global styles
import App from './App'; // Import the main App component

// Create the root element where the app will be injected
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
