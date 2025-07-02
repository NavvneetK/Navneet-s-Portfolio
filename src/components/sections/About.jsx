import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect } from "react";
import { initializeTilt } from "../../helpcomponents/TiltCard";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

export const About = () => {
  useEffect(() => {
    initializeTilt();
  }, []);

  const frontendSkills = ["React", "TailwindCSS", "JavaScript"];
  const backendSkills = ["Node.js", "Python", "MongoDB"];
  const toolSkills = ["Git", "Firebase", "Postman"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Main Tilt Card */}
          <div
            className="rounded-2xl p-10 border border-white/10 bg-white/5 backdrop-blur-md hover:-translate-y-1 transition-all shadow-xl"
            data-tilt
            data-tilt-glare
          >
            {/* Title */}
            <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-center mb-10 text-lg max-w-2xl mx-auto">
              DOM Tamer 🕸️ building interactive, scalable web apps with a love for fast UIs, clean code, and modern tools.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Frontend Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 flex justify-center items-center gap-2">
                  <FaCode className="text-blue-400" /> Frontend
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:shadow-md hover:scale-105 transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 flex justify-center items-center gap-2">
                  <FaServer className="text-cyan-400" /> Backend
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-400 py-1 px-3 rounded-full text-sm font-medium hover:bg-cyan-500/20 hover:shadow-md hover:scale-105 transition duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 flex justify-center items-center gap-2">
                  <FaTools className="text-purple-400" /> Tools
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {toolSkills.map((tool, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-400 py-1 px-3 rounded-full text-sm font-medium hover:bg-purple-500/20 hover:shadow-md hover:scale-105 transition duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
