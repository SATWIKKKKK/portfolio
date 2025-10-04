import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black transition-colors duration-300 px-2 sm:px-0">
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="font-bdo text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-tight xs:leading-none text-black dark:text-white transition-colors break-words">
            hi, i'm <span className="text-blue-600 dark:text-blue-400">satwik chandra.</span>
          </h1>
          <div className="mt-2 xs:mt-4 group cursor-pointer inline-block">
            <div className="h-1 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"></div>
          </div>
          <p className="mt-4 xs:mt-6 max-w-2xl mx-auto text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bdo text-black dark:text-gray-300 transition-colors px-2 sm:px-4 leading-relaxed">
            a passionate frontend developer creating amazing web experiences & learning to apply
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;