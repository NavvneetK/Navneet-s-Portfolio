import React from 'react'
import { techStackIcons } from '../constants/index.js'
import Techicon from './Techicon.jsx'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const TechStack = () => {

    // Animate the tech cards in the skills section
    useGSAP(() => {
        // This animation is triggered when the user scrolls to the #skills wrapper
        // The animation starts when the top of the wrapper is at the center of the screen
        // The animation is staggered, meaning each card will animate in sequence
        // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
        gsap.fromTo(
            ".tech-card",
            {
                // Initial values
                y: 50, // Move the cards down by 50px
                opacity: 0, // Set the opacity to 0
            },
            {
                // Final values
                y: 0, // Move the cards back to the top
                opacity: 1, // Set the opacity to 1
                duration: 1, // Duration of the animation
                ease: "power2.inOut", // Ease of the animation
                stagger: 0.2, // Stagger the animation by 0.2 seconds
                scrollTrigger: {
                    trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
                    start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
                },
            }
        );
    });


    return (
        <div id="skills" className='flex flex-center px-5 md:px-10 md:mt-40 mt-20'>
            <div className="w-full h-full px-5 md:px-10 py-10 text-center">
                <h5 className="inline-block bg-gray-800 text-white-800 text-sm font-medium px-4 py-2 rounded-full mb-3">
                    🤝 The Skills I Bring to the Table
                </h5>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    My Preferred Tech Stack
                </h2>

                {/* bg-[#2D3240] */}
                <div className='tech-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-10'>
                    {techStackIcons.map((icon) => (
                        <div
                            key={icon.name}
                            className='group relative overflow-hidden rounded-lg shadow-lg h-60 flex flex-col items-center justify-center'
                        >
                            {/* Hover overlay - inside the box */}
                            <div className='absolute inset-0 bg-[#2D3240] translate-y-full group-hover:translate-y-0 transition-transform duration-700 z-0' />

                            {/* 3D Component + Name */}
                            <div className='relative z-10 flex flex-col items-center justify-center h-full w-full'>
                                <div className='flex justify-center items-center h-40'>
                                    <Techicon model={icon} />
                                </div>
                                <div className='mt-2 text-white'>
                                    <p className='text-sm font-medium'>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                    
            </div>
        </div>
        
    )
}

export default TechStack;
