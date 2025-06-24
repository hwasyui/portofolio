// src/App.jsx
import '../css/App.css';
import Header from "../components/header.jsx";
import Landing from "../components/landing.jsx";
import About from "../components/about.jsx";
import { useTheme } from '../context/ThemeContext.jsx';

function App() {
  return (
    <main className="flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
  <Header className="fixed top-0 w-full h-20 z-50" />
  <Landing />
  <div className="snap-start scroll-mt-16 min-h-screen">
    <About />
  </div>
</main>


  );
}

export default App;
