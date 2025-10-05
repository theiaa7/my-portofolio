import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Sun, Moon, Code, Database, Globe, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      {/* HEADER */}
      <header className="w-full border-b border-gray-300 dark:border-gray-700 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </header>

      {/* MAIN GRID */}
      <main className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* SIDEBAR */}
        <aside className="md:col-span-1 space-y-6">
          {/* Profile Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800 text-center"
          >
            <img
              src="/img/wpf.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-300 dark:border-gray-700 object-cover object-center"
            />
            <h2 className="text-xl font-semibold">Bryan Alsty</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Web Developer & Data Enthusiast
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <div className="space-y-2">
              <div className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Github className="w-5 h-5" />
                <span>github.com/username</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/username</span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Mail className="w-5 h-5" />
                <span>email@example.com</span>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-2">Skills</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Tailwind</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                <span>Python</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>Go</span>
              </div>
            </div>
          </motion.div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="md:col-span-2 space-y-6">
          {/* Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white"
          >
            <h2 className="text-3xl font-bold mb-2">Welcome to My Portfolio</h2>
            <p className="text-lg">
              Explore my projects, experience, and skills!
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
          >
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((p) => (
                <motion.div
                  key={p}
                  whileHover={{ scale: 1.05 }}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 shadow cursor-pointer"
                >
                  <h3 className="font-semibold">Project {p}</h3>
                  <p className="text-sm">Deskripsi singkat project {p}...</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
          >
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-3">
              {[1, 2].map((e) => (
                <motion.div
                  key={e}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 shadow cursor-pointer"
                >
                  <h3 className="font-semibold">Experience {e}</h3>
                  <p className="text-sm">Deskripsi pengalaman {e}...</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      {/* FOOTER */}
      <footer className="w-full p-4 text-center border-t border-gray-300 dark:border-gray-700 text-sm bg-gray-200 dark:bg-gray-800">
        © {new Date().getFullYear()} Bryan Alsty. All rights reserved.
      </footer>
    </div>
  );
}
