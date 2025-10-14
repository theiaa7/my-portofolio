import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Sun, Moon, Code, Database, Globe, Terminal, Youtube, ChartLine, BrainCircuit, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



export default function App() {
  const [page, setPage] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);

  const experiences = [
    {
      title: "Production Planner and Inventory Control",
      at: "PT.Mulia Cemerlang Abadi Multi Industry",
      time: "1 Year.",
      desc: "Create Production Planning based on order and time on delivery, controlling production running from materials arrival until shipping.",
    },
    {
      title: "Practical Lecturer Assistant, Lead coordinator of operations",
      at: "Mathematics and Science Faculty, Computer Science Major, Universitas Pakuan",
      time: "3 Years.",
      desc: "Work under lecturer for practice class session, teaching and create learning modules for practice session, become lead operations coordinator for 1 year. Mainly rensponsible for Software Engineering fields and Data Science fields practice sessions.",
    },
    {
      title: "Tech support intern",
      at: "Badan Kesatuan Bangsa dan Politik Kota Bogor",
      time: "3 Months.",
      desc: "IT support for BAKESBANGPOL, mainly responsible for software and hardware operations.",
    },
    {
      title: "Advance Teacher",
      at: "Koding Next",
      time: "1 Year.",
      desc: "Teaching advance website development, and game development.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      desc: "A modern personal portfolio built with React, TailwindCSS, and Framer Motion. Designed to showcase skills and experiences with smooth animations, dark/light mode, and responsive layouts.Focused on clean UI, accessibility, and subtle transitions that make the user experience engaging and minimalistic.",
      demo: "https://bryanpyoh.com/",
      github: "https://github.com/theiaa7/my-portofolio",
      tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
      id: 2,
      title: "ERP System Total Production",
      desc: "A modular Enterprise Resource Planning (ERP) system that integrates production, inventory, and employee management. Designed to streamline business operations by providing real-time visibility into resources, orders, and workflow efficiency. Includes user authentication, data visualization, and scalable architecture.",
      demo: "https://erps.bryanpyoh.com/",
      github: "https://github.com/theiaa7/erps",
      tech: ["React", "Express.js", "Prisma", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Student Performance Prediction",
      desc: "A data science project using XGBoost to analyze and predict factors influencing students’ academic outcomes.",
      demo: "https://huggingface.co/spaces/bryanpyoh/student-prediction",
      github: "https://github.com/bryanpyoh/student-performance",
      tech: ["Python", "XGBoost", "Pandas"],
    },
    {
      id: 4,
      title: "Inventory Management System",
      desc: "A full-stack application for managing product inventory, suppliers, and stock movement. Built with an emphasis on data integrity, CRUD efficiency, and seamless backend–frontend communication. Supports search, pagination, and analytics features for smarter inventory tracking.",
      demo: "https://erps.bryanpyoh.com/",
      github: "https://github.com/theiaa7/erps",
      tech: ["Node.js", "Express", "Prisma", "React"],
    },
    {
      id: 5,
      title: "Inventory Management System",
      desc: "A full-stack application for managing product inventory, suppliers, and stock movement. Built with an emphasis on data integrity, CRUD efficiency, and seamless backend–frontend communication. Supports search, pagination, and analytics features for smarter inventory tracking.",
      demo: "https://erps.bryanpyoh.com/",
      github: "https://github.com/theiaa7/erps",
      tech: ["Node.js", "Express", "Prisma", "React"],
    },
    {
      id: 6,
      title: "Google Collab Notebook Collection I",
      desc: "Collections of my learning and experiments on data science, starting from basics of python until comparing applications between ML Model.",
      demo: "https://drive.google.com/drive/folders/1F2_5Ckyj7UHlmwaieargRGDZDM3sqJjk?usp=drive_link",
      github: "https://drive.google.com/drive/folders/1F2_5Ckyj7UHlmwaieargRGDZDM3sqJjk?usp=drive_link",
      tech: ["Python"],
    },
    {
      id: 7,
      title: "Google Collab Notebook Collection II",
      desc: "Collections of my learning and experiments on data science, starting from basics of python until comparing applications between ML Model.",
      demo: "https://drive.google.com/drive/folders/1ai1u-yfachTmlPB0LYod5fuD9upVuazf?usp=drive_link",
      github: "https://drive.google.com/drive/folders/1ai1u-yfachTmlPB0LYod5fuD9upVuazf?usp=drive_link",
      tech: ["Python"],
    },
  ];
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
        <h1 className="text-2xl font-bold">theiacode</h1>
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
            <h2 className="text-xl font-semibold">Febryan Gerald El Baari Pyoh</h2>
            <p className="text-sm text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300">
              Software Engineer & Data Analyst
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Freelance, Part of Google Developer Group Bogor
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-800"
          >
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <div className="space-y-2 transition-colors duration-300">
              <div className="flex items-center gap-3 cursor-pointer group hover:text-blue-500">
                <Github className="w-5 h-5 transition-colors duration-300 group-hover:text-blue-500" />
                <span><a href="github.com/theiaa7" className="no-underline text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300">Github</a></span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Youtube className="w-5 h-5" />
                <span><a href="youtube.com/@theiacode" className="no-underline text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300">Youtube</a></span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Linkedin className="w-5 h-5" />
                <span><a href="linkedin.com/in/theiaa7" className="no-underline text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300">LinkedIn</a></span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Mail className="w-5 h-5" />
                <span><a href="ryan.alsty@gmail.com" className="no-underline text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300">ryan.alsty@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-3 hover:text-blue-500 cursor-pointer">
                <Mail className="w-5 h-5" />
                <span><a href="bryanpyoh@gmail.com" className="no-underline text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-500 transition-colors duration-300">bryanpyoh@gmail.com</a></span>
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
                <span>Laravel</span>
              </div>
              <div className="flex items-center gap-2">
                <ChartLine className="w-4 h-4" />
                <span>Tableau</span>
              </div>
              <div className="flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" />
                <span>Machine Learning</span>
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
            <h2 className="text-3xl font-bold mb-2">Never too late.</h2>
            <p className="text-lg">
              Explore about my world, experience, and skills!
            </p>
          </motion.div>

          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative p-4 rounded-2xl shadow-lg bg-white dark:bg-gray-800 overflow-visible"
          >
            {/* HEADER TAB SWITCHER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">About & Projects</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage("about")}
                  className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${page === "about"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                >
                  About
                </button>
                <button
                  onClick={() => setPage("projects")}
                  className={`px-3 py-1 rounded-lg text-sm font-semibold transition ${page === "projects"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                >
                  Projects
                </button>
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="relative">
              <AnimatePresence mode="wait">
                {page === "about" ? (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="grid sm:grid-cols-1 gap-4 min-h-[320px] h-[320px] pr-2"
                  >
                    {/* About items (tidak perlu scroll) */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 shadow"
                    >
                      <h3 className="font-semibold">As a Software Engineer</h3>
                      <p className="text-sm text-justify">I’m a passionate software engineer who loves exploring and experimenting with new ideas. I enjoy working in a team environment where I can learn from others, share insights, and grow together. While I may not have years of experience yet, I bring strong curiosity, adaptability, and enthusiasm to every project I take on. For me, software engineering isn’t just about writing code—it’s about solving problems, creating meaningful solutions, and continuously improving.</p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.08 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 shadow"
                    >
                      <h3 className="font-semibold">As a Data Analyst</h3>
                      <p className="text-sm text-justify">Whilst I mainly focusing on Software Engineering, I am also fascinated by the power of data to uncover insights and drive decisions. My experience includes working with machine learning models, data analysis, and predictive modeling. I enjoy translating raw data into actionable knowledge that can support real-world applications.</p>
                    </motion.div>
                  </motion.div>
                ) : (
                  /* Projects: this wrapper has fixed height + scroll enabled */
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 60 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="min-h-[320px] h-[320px] overflow-y-auto pr-2
                   [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                  >
                    <div className="grid sm:grid-cols-1 gap-4 pb-4">
                      {/* project items */}
                      {projects.map((p) => (
                        <motion.div
                          key={p.id}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.35 }}
                          whileHover={{ scale: 1.02 }}
                          className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 shadow relative"
                        >
                          <h3 className="font-semibold">{p.title}</h3>
                          <p className="text-sm text-justify">{p.desc}</p>
                          <button
                            onClick={() => setSelectedProject(p)}
                            className="absolute bottom-3 right-3 text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 cursor-pointer"
                          >
                            See project →
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/*Modal Selection*/}
            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <motion.div
                    onClick={(e) => e.stopPropagation()}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg max-w-md w-full"
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
                    >
                      <X size={20} />
                    </button>
                    <h3 className="text-xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-sm mb-4 text-justify">
                      {selectedProject.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end gap-3">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        GitHub
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Live Demo →
                      </a>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
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
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="p-3 rounded-xl bg-gray-100 dark:bg-gray-700 shadow cursor-pointer"
                >
                  <h3 className="font-semibold"><b>{exp.title}</b></h3>
                  <p className="text-m"><b>{exp.time}</b> at {exp.at}</p>
                  <hr class="my-4 border-gray-800"></hr>
                  <p className="text-sm text-justify mt-2 mb-2">{exp.desc}</p>
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
