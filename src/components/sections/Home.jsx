import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import pp from '../../assets/pp.jpg';
import Spline from "@splinetool/react-spline";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import Button from '../../helpcomponents/Button';

export const Home = () => {
  return (
    
    <section id="home" className="min-h-screen relative ">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <RevealOnScroll>
        <div className="flex flex-row h-full relative z-10 mt-20">
          
          {/* LEFT SIDE: Text Content */}
          <div className="w-2/3 z-10 px-4 ml-8">
            <div className="flex flex-col justify-center mb-8">
              <div className="w-60 h-60 rounded-full overflow-hidden mb-4 shadow-lg">
                <img src={pp} alt="Profile" />
              </div>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm Navneet Kaur
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Passionate web developer with a keen eye for creating dynamic, 
              user-friendly experiences. Enthusiastic about building innovative solutions
              that blend creativity with cutting-edge technology.
            </p>

            

            <div className="flex space-x-10">
              {/* <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a> */}
              <Button
                text="View Projects"
                id="projects"></Button>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: 3D Spline Model */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 blur-3xl opacity-20 rounded-full"></div>

            

          <div className="w-2/3 h-[40rem] mt-0 mb-20rem z-20">
            <Spline scene="https://prod.spline.design/DTvYqmGyGkHL5LlQ/scene.splinecode" />
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
