import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";
import angelLogo from "../assets/angel-logo.svg";
import skills from '../data/skills.json';
import educations from '../data/educations.json';
import experiences from '../data/experiences.json';
import projects from '../data/projects.json';
import { useTheme } from '../context/ThemeContext';
import ReactMarkdown from "react-markdown";

const GEMINI_API_KEY = "AIzaSyDsaKMXPhiC6n0AGy_oADaSC9tFARjh_zs";

const RAGChat = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const { theme } = useTheme();
  const headerChatSvgRef = useRef(null);

  const personalData = { skills, educations, experiences, projects };

  const applyThemeToSVG = () => {
    const g = headerChatSvgRef.current?.contentDocument?.querySelector("g");
    if (g) {
      g.setAttribute("fill", theme === "dark" ? "#FFFFFF" : "#000000");
    }
  };

  useEffect(() => {
    if (open) applyThemeToSVG();
  }, [theme, open]);

  useEffect(() => {
    const svgObject = headerChatSvgRef.current;
    if (!svgObject) return;
    const handleLoad = () => applyThemeToSVG();
    svgObject.addEventListener("load", handleLoad);
    if (svgObject.contentDocument?.readyState === "complete") applyThemeToSVG();
    return () => svgObject.removeEventListener("load", handleLoad);
  }, [open]);

  const sendToGemini = async (message) => {
    const prompt = `You are a helpful assistant. Use the following personal data to answer questions:

Skills: ${JSON.stringify(personalData.skills)}
Education: ${JSON.stringify(personalData.educations)}
Experience: ${JSON.stringify(personalData.experiences)}
Projects: ${JSON.stringify(personalData.projects)}

User: ${message}`;

    setIsTyping(true);
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
        }),
      }
    );

    const result = await res.json();
    const response = result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
    setMessages(prev => [...prev, { role: "bot", text: response }]);
    setIsTyping(false);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const message = input.trim();
    setMessages(prev => [...prev, { role: "user", text: message }]);
    setInput("");
    sendToGemini(message);
  };

  const toggleOpen = () => {
    setOpen(prev => !prev);
    setTimeout(() => {
      applyThemeToSVG();
    }, 100);
  };

  return (
    <div>
      <Button
        onClick={toggleOpen}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full dark:bg-zinc-900 border-zinc-200 dark:text-white text-black shadow-lg hover:scale-105 transition"
      >
        <Bot size={20} />
      </Button>

      {open && (
        <div className="fixed bottom-20 right-4 w-[320px] max-h-[500px] rounded-2xl shadow-xl overflow-hidden z-50 bg-white dark:bg-zinc-900 border-2 shadow-2xl border-zinc-200 dark:border-zinc-700">
          <div className="px-5 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold text-sm flex items-center">
            <object
              data={angelLogo}
              type="image/svg+xml"
              className="h-6"
              ref={headerChatSvgRef}
            />
            <span className='pl-2'>Angel's</span>
          </div>

          <div className="h-[360px] overflow-y-auto px-4 py-3 space-y-2 text-sm">
            {messages.length === 0 && (
              <div className="text-zinc-500 dark:text-zinc-400">
                Hello there! 👋 If you have any  regarding the portofolio, I'm here to help.
                For example you can ask things such as: "Show me projects related to Web Development."
                Then, I'll send you the related projects!
              </div>
            )}
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-xl max-w-[85%] whitespace-pre-wrap break-words ${
                  m.role === "user"
                    ? "bg-zinc-600 text-white ml-auto"
                    : "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 mr-auto"
                }`}
              >
                <ReactMarkdown>{m.text}</ReactMarkdown>
              </div>
            ))}
            {isTyping && (
              <div className="bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-4 py-2 rounded-xl max-w-[85%] mr-auto animate-pulse">
                Typing...
              </div>
            )}
          </div>

          <div className="px-3 py-2 border-t border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
            <div className="relative flex items-center bg-white dark:bg-zinc-800 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-blue-400">
              <Input
                className="flex-grow border-none shadow-none rounded-2xl px-4 py-2 text-sm bg-transparent focus:outline-none focus:ring-0 placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type something..."
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="absolute right-2 p-2 rounded-full  hover:bg-zinc-900 text-white"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RAGChat;
