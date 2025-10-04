import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-8 xs:py-12 sm:py-16 mb-6 xs:mb-8 sm:mb-10 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white mb-6 xs:mb-8 sm:mb-10 transition-colors leading-tight">
            about<span className="text-blue-600 dark:text-blue-400 dark:hover:text-white pl-2 xs:pl-3 sm:pl-5 ease-in-out duration-300 cursor-pointer">meee</span>
          </h2>
          <p className="text-xl text-black dark:text-gray-300 mb-6 transition-colors">
            currently, i’m diving deep into full-stack development with React, Node.js, MongoDB, and exploring modern tools like Vite, Tailwind, and GSAP to bring designs to life with smooth animations. alongside, i’m strengthening my DSA skills to sharpen problem-solving skills and prepare for challenging technical roles.
          </p>
          <p className="text-xl text-black dark:text-gray-300 mb-6 transition-colors">
            i've built projects like Coffee Café (a sleek café website), Lens-AI (a real-time image lookup app), and a personal Portfolio that showcases my journey. i also explore competitive programming on platforms like LeetCode to push my limits in logical thinking.
          </p>
          <p className="text-xl text-black dark:text-gray-300 mb-8 transition-colors">
            Beyond code, i love learning new technologies, experimenting with design, and creating tools that make everyday experiences simpler and better. My goal is to grow as a software engineer who can craft scalable solutions while blending functionality with aesthetics. 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors text-lg"
            >
              get in touch
            </a>
            <a
              href="/resume.pdf"
                            className="w-full xs:w-auto border text-sm xs:text-base sm:text-lg md:text-xl border-black dark:border-gray-400 text-black dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 px-4 xs:px-6 py-2 xs:py-3 rounded-xl transition-colors ease-in-out text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


export default About;