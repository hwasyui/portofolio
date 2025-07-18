// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
