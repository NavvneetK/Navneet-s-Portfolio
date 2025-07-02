// import { socialImgs } from "../constants";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="flex flex-row justify-between items-center px-2 pb-2 text-gray-300">
//         <div className="flex flex-col justify-center">
//           <p>Terms & Conditions</p>
//         </div>
//         <div className="flex flex-row justify-center gap-4">
//           {socialImgs.map((socialImg, index) => (
//             <div key={index} className="icon">
//               <img src={socialImg.imgPath} alt="social icon" />
//             </div>
//           ))}
//         </div>
//         <div className="flex flex-col justify-center">
//           <p className="text-center md:text-end">
//             © {new Date().getFullYear()} Navneet Kaur. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import GitHubIcon from '../../public/github.svg'
import InstagramIcon from '../../public/instagram.svg';
import LinkedInIcon from '../../public/linkedin.svg';
const Footer = () => {
  return (
    <footer className="bg-black text-white px-10">
      <div className="flex justify-between items-start">

      
      {/* Left Logo */}
      
       <DotLottieReact
        src="https://lottie.host/95102b20-a4df-4f44-b403-4c05139ea49b/rSz7Uyv24R.lottie"
        loop
        autoplay
        className="  h-32"
        />
      

      {/* Right Section: Socials and Navigation */}
      <div className="flex flex-col items-center md:items-end gap-4 pr-48">
        
        {/* Social Icons */}
        <div className="social-icon flex gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/github.svg" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="Instagram" className="w-8 h-8 hover:scale-110 transition-transform" />
          </a>
        </div>



        {/* Navigation Links */}
        <div className="flex flex-col text-md text-gray-400 space-y-1 ">
          <a href="#home" className="hover:text-white underline hover:no-underline">Home</a>
          <a href="#skills" className="hover:text-white underline hover:no-underline">Skills</a>
          <a href="#projects" className="hover:text-white underline hover:no-underline">Project</a>
          <a href="#contact" className="hover:text-white underline hover:no-underline">Connect</a>
        </div>
      </div>

      
      </div>
      <div className=" bottom-2 text-sm text-gray-400 text-center w-full mt-4">
        © CopyRight 2025. All Rights Reserved
      </div>
    </footer>
    
      
  );
};

export default Footer;
