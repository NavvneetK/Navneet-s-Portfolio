import { useEffect } from "react";
import useActiveSection from "./useActiveSection";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const activeSection = useActiveSection(["home", "about", "projects", "contact"]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const linkClasses = (id) =>
    `transition-colors ${
      activeSection === id ? "text-blue-500" : "text-gray-300"
    } hover:text-white`;

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            N<span className="text-blue-500">K</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={linkClasses("home")}>Home</a>
            <a href="#about" className={linkClasses("about")}>About</a>
            <a href="#projects" className={linkClasses("projects")}>Projects</a>
            <a href="#contact" className={linkClasses("contact")}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
