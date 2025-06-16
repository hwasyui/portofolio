import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './page/App.jsx'
import Header from "./components/header.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
