// Import necessary modules from React and ReactDOM
import React from 'react';
import {createRoot} from 'react-dom/client'; // Import createRoot instead of ReactDOM.render
import './index.css'; // Import global styles
import App from './App'; // Import your main App component
import {VideoProvider} from './VideoContext'; // Import the VideoProvider
// Get the root DOM node where the React app will be rendered
const container = document.getElementById('root');

// Create a root and render the app component
const root = createRoot(container); // Create a root using the root DOM node
root.render(
  <React.StrictMode>
    <VideoProvider>
      <App/>
    </VideoProvider>
  </React.StrictMode>
);