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
    } hover:text-blue-500`;

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg  shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            N<span className="text-blue-500">K</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8 text-lg">
            <a href="#home" className={linkClasses("home")}>Home</a>
            <a href="#about" className={linkClasses("about")}>About</a>
            <a href="#projects" className={linkClasses("projects")}>Projects</a>
            <a href="#contact" className={linkClasses("contact")}>Contact</a>
            <button className=" fill-hover-button text-white px-4 py-2 rounded border ">
              <a href="https://navneet-resume.tiiny.site/" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
