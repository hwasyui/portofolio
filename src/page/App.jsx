// src/App.jsx
import '../css/App.css';
import Header from "../components/header.jsx";
import Landing from "../components/landing.jsx";
import About from "../components/about.jsx";
import { useTheme } from '../context/ThemeContext.jsx';

function App() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 min-h-screen">
        <Header />

        {/* Toggle Theme */}
        <div className="flex justify-end px-6 md:px-20 mt-4">
          <button
            onClick={toggleTheme}
            className="text-2xl p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition"
            title="Toggle Dark Mode"
          >
            {theme === "dark" ? '🌞' : '🌙'}
          </button>
        </div>

        <Landing />
        <About />
      </div>
    </main>
  );
}

export default App;
