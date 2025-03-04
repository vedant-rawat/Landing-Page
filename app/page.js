"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaTwitter, FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

export default function LandingPage() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(() => {
    return typeof window !== "undefined" ? localStorage.getItem("theme") === "dark" : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      
      {/* Header */}
      <header className={`py-3 px-4 md:px-6 flex items-center justify-between shadow-lg border-b ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
        
        {/* Left-aligned Navigation */}
        <nav className="hidden sm:flex items-center space-x-4 md:space-x-6 text-sm md:text-lg">
          <a href="#home" className={`hover:text-blue-500 transition ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Home</a>
          <a href="#contact" className={`hover:text-blue-500 transition ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Contact</a>
        </nav>

        {/* Centered Brand Name */}
        <h1 className="text-xl md:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Pixel2Test.ai
        </h1>

        {/* Right Section - Logo & Theme Toggle */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <img src="/logo.png" alt="Company Logo" className="h-8 md:h-10 w-auto rounded-lg bg-white/20 p-1" />
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition transform hover:scale-110 bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? <FaSun className="text-yellow-400 text-lg md:text-xl" /> : <FaMoon className="text-gray-900 text-lg md:text-xl" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 md:px-6">
        {/* Intro Section */}
        <section id="home" className="max-w-3xl py-10">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            AI-Powered Test Case Generation
          </motion.h2>
          <p className="text-base sm:text-lg mb-6">
            Upload a form image and let our AI generate test cases automatically. 
            Reduce manual efforts and enhance efficiency!
          </p>
          <motion.button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-5 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-medium shadow-lg hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105"
            onClick={() => window.location.href = "https://your-streamlit-app-url"}
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.button>
        </section>

        {/* Features Section */}
        <section className="max-w-4xl py-10 px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Automated Test Generation", desc: "Instantly generate test cases by simply uploading an image of your form." },
              { title: "Seamless Integration", desc: "Works effortlessly with testing tools like Selenium." },
              { title: "Supports Various Inputs", desc: "Upload images, enter URLs for comprehensive testing." },
              { title: "Time & Cost Efficiency", desc: "Reduce manual effort and increase productivity with AI-powered automation." },
            ].map((feature, index) => (
              <div key={index} className={`p-4 md:p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h4 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm md:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Use Section */}
        <section className="max-w-4xl py-10 px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">How It Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "📷 Upload a Photo", desc: "Choose an image of the form you want to generate test cases for." },
              { title: "🔗 Enter the URL", desc: "Provide the URL of the form if available for better accuracy." },
              { title: "📌 Select Number of Test Cases", desc: "Specify how many test cases you want to generate." },
              { title: "🚀 Run Test Cases", desc: "Execute the test cases and get instant results." },
            ].map((step, index) => (
              <div key={index} className={`p-4 md:p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
                <h4 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-sm md:text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-4 text-center border-t ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
        <div className="flex justify-center space-x-4 md:space-x-6 mb-2">
          <a href="#" className="text-lg md:text-xl hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-lg md:text-xl hover:text-blue-400"><FaLinkedin /></a>
          <a href="#" className="text-lg md:text-xl hover:text-blue-400"><FaGithub /></a>
        </div>
        <p className="text-xs md:text-sm">&copy; 2025 | Sarvatra Technologies | All rights reserved | Confidential | For internal use only.</p>
      </footer>
    </div>
  );
}
