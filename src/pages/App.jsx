import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/App.css";
import Landing from "../components/landing.jsx";
import About from "../components/about.jsx";
import Skills from "../components/skills.jsx";
import Projects from "../components/projects.jsx";
import Navigate from "../components/navigate.jsx";
import FullProjects from "./FullProjects.jsx";
import FullOthers from "./FullOthers.jsx";
import Experiences from "../components/experience.jsx"
import ContactMe from "../components/contact.jsx"
import { motion, useInView, useAnimation } from "framer-motion";
import ChatWidget from "../components/chatbot.jsx";
import Educations from "../components/education.jsx";
import Others from "../components/others.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

function AnimatedSection({ id, children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="scroll-mt-24 min-h-[60vh] px-4 py-8"
    >
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}

function App() {
  return (
    <Router>
      <main className="flex flex-col w-full min-h-screen  bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <Navigate />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="landing" className="scroll-mt-20">
                  <Landing />
                </section>
                <AnimatedSection id="about">
                  <About />
                </AnimatedSection>
                <AnimatedSection id="skills">
                  <Skills />
                </AnimatedSection>
                <AnimatedSection id="educations">
                  <Educations />
                </AnimatedSection>
                <AnimatedSection id="experiences">
                  <Experiences />
                </AnimatedSection>
                <AnimatedSection id="projects">
                  <Projects />
                </AnimatedSection>
                <AnimatedSection id="others">
                  <Others />
                </AnimatedSection>
                <AnimatedSection id="contacts">
                  <ContactMe />
                </AnimatedSection>
                <ChatWidget />
              </>
            }
          />
          <Route path="/projects" element={<FullProjects />} />
          <Route path="/others" element={<FullOthers />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
