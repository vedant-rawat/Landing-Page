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
      <header className={`py-3 px-6 flex items-center justify-between shadow-lg border-b ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
        
        {/* Left-aligned Navigation */}
        <nav className="flex items-center space-x-6 text-lg">
          <a href="#home" className={`hover:text-blue-500 transition ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Home</a>
          <a href="#contact" className={`hover:text-blue-500 transition ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Contact</a>
          {/* <button onClick={() => router.push("/login")} className="hover:text-blue-500 transition">Login</button>
          <button onClick={() => router.push("/signup")} className="hover:text-blue-500 transition">Signup</button> */}
        </nav>

        {/* Centered Brand Name */}
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Pixel2Test.ai
        </h1>

        {/* Right Section - Logo & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Company Logo" className="h-10 w-auto rounded-lg bg-white/20 p-1" />
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition transform hover:scale-110 bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-900 text-xl" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        {/* Intro Section */}
        <section id="home" className="max-w-3xl py-10">
          <motion.h2 
            className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            AI-Powered Test Case Generation
          </motion.h2>
          <p className="text-lg mb-6">
            Upload a form image and let our AI generate test cases automatically. 
            Reduce manual efforts and enhance efficiency!
          </p>
          <motion.button 
  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:from-purple-600 hover:to-pink-600 transition transform hover:scale-105"
  onClick={() => window.location.href = "https://your-streamlit-app-url"}
  whileHover={{ scale: 1.1 }}
>
  Get Started
</motion.button>
        </section>

        {/* Features Section */}
        <section className="max-w-4xl py-10">
          <h3 className="text-3xl font-bold mb-6">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <h4 className="text-xl font-semibold mb-2">Automated Test Generation</h4>
              <p>Instantly generate test cases by simply uploading an image of your form.</p>
            </div>
            <div className={`p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <h4 className="text-xl font-semibold mb-2">Seamless Integration</h4>
              <p>Works effortlessly with testing tools like Selenium</p>
            </div>
            <div className={`p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <h4 className="text-xl font-semibold mb-2">Supports Various Inputs</h4>
              <p>Upload images, enter URLs for comprehensive testing.</p>
            </div>
            <div className={`p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <h4 className="text-xl font-semibold mb-2">Time & Cost Efficiency</h4>
              <p>Reduce manual effort and increase productivity with AI-powered automation.</p>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="max-w-4xl py-10">
          <h3 className="text-3xl font-bold mb-6">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <h4 className="text-xl font-semibold mb-2">📷 Upload a Photo</h4>
              <p>Choose an image of the form you want to generate test cases for.</p>
            </div>
            <div className={`p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <h4 className="text-xl font-semibold mb-2">🔗 Enter the URL</h4>
              <p>Provide the URL of the form if available for better accuracy.</p>
            </div>
            <div className={`p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <h4 className="text-xl font-semibold mb-2">📌 Select Number of Test Cases</h4>
              <p>Specify how many test cases you want to generate.</p>
            </div>
            <div className={`p-5 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <h4 className="text-xl font-semibold mb-2">🚀 Run Test Cases</h4>
              <p>Execute the test cases and get instant results.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-4 text-center border-t ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}>
        <div className="flex justify-center space-x-6 mb-2">
          <a href="#" className="text-xl hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="text-xl hover:text-blue-400"><FaLinkedin /></a>
          <a href="#" className="text-xl hover:text-blue-400"><FaGithub /></a>
        </div>
        <p className="text-sm">&copy; 2025 | Sarvatra Technologies | All rights reserved | Confidential | For internal use only.</p>
      </footer>
    </div>
  );
}



// git add .
// git commit -m "Updated homepage text"
// git push origin main