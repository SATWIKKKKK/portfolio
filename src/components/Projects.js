import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "coffee-cafe",
      description: "beautifully designed coffee showcase with smooth animations and responsive UI.",
      technologies: [ "JS", "Tailwind CSS",  "React", "Node.js", "MongoDB", "Clerk" ],
      liveLink: "https://coffee-cafe-blush.vercel.app/",
      githubLink: "https://github.com/SATWIKKKKK/coffee-cafe",
      image: "/image.png" 
    },
    {
      title: "lens-ai",
      description: "responsive UI for semantic image lookup and exploration.",
      technologies: [ "JS", "React", "Tailwind CSS", "Gemini API"],
      liveLink: "https://image-searcher-psi.vercel.app/",
      githubLink: "https://github.com/SATWIKKKKK/Image-Searcher",
      image: "/image2.png" 
    }
  ];

  return (
    <section id="projects" className="font-bdo py-8 xs:py-12 sm:py-16 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white transition-colors leading-tight">
            <span className="text-blue-600 dark:text-blue-400 dark:hover:text-white cursor-pointer ease-in-out duration-300">my </span>projects
          </h2>
          <p className="mt-3 xs:mt-4 sm:mt-6 px-2 xs:px-4 sm:px-6 text-sm xs:text-base sm:text-lg md:text-xl text-black dark:text-gray-300 transition-colors leading-relaxed">
            here are some of the projects I've worked on recently
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;