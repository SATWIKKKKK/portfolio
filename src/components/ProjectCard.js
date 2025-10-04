import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, liveLink, githubLink, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 mx-2 xs:mx-0">
      <div className="h-32 xs:h-40 sm:h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <img src="/image.png" alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      
      <div className="p-3 xs:p-4 sm:p-6">
        <h3 className="text-lg xs:text-xl font-bold text-black dark:text-white mb-2 transition-colors">{title}</h3>
        <p className="text-sm xs:text-base text-black dark:text-gray-300 mb-3 xs:mb-4 transition-colors leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-1 xs:gap-2 mb-3 xs:mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center xs:justify-start text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm xs:text-base"
            >
              <ExternalLink size={14} className="mr-1 flex-shrink-0" />
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center xs:justify-start text-black dark:text-gray-400 hover:text-blue-600 dark:hover:text-gray-200 transition-colors text-sm xs:text-base"
            >
              <Github size={14} className="mr-1 flex-shrink-0" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;