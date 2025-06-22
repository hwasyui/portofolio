// src/App.jsx
import '../css/App.css';
import Header from "../components/header.jsx";
import Landing from "../components/landing.jsx";
import About from "../components/about.jsx";
import { useTheme } from '../context/ThemeContext.jsx';

function App() {
  return (
    <main>
      <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 min-h-screen">
        <Header />
        <Landing />
        <About />
      </div>
    </main>
  );
}

export default App;
