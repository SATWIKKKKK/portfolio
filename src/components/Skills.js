import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'HTML/CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
    },
    {
      name: 'Node.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Express.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      name: 'MongoDB',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      name: 'Vercel',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'
    }
  ];

  return (
    <section id="skills" className="py-8 xs:py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 xs:mb-12 sm:mb-16">
          <h2 className="font-bdo text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white transition-colors leading-tight">
            <span className="text-blue-600 dark:text-blue-400 cursor-pointer hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">my</span> skills
          </h2>
          <p className="mt-3 xs:mt-4 sm:mt-6 text-sm xs:text-base sm:text-lg md:text-xl text-black dark:text-gray-300 transition-colors px-2 sm:px-0">
            technologies and tools i work with
          </p>
        </div>

        {/* Skills Grid with Logos */}
        <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 xs:mb-12 sm:mb-16 px-2 xs:px-4 sm:px-0">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 text-black dark:text-gray-200 px-3 xs:px-4 sm:px-6 py-2 xs:py-3 sm:py-4 rounded-lg xs:rounded-xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center space-x-2 xs:space-x-3 min-w-fit"
            >
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
                onError={(e) => {e.target.style.display = 'none'}}
              />
              <span className="text-xs xs:text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* GitHub Stats Section */}
        <div className="mt-12 xs:mt-16 sm:mt-24 md:mt-32">
          <div className="text-center mb-6 xs:mb-8 sm:mb-12">
            <h3 className="font-bdo text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white transition-colors mb-2 xs:mb-3 sm:mb-4 leading-tight">
              <span className="text-blue-600 dark:text-blue-400">github</span> stats
            </h3>
            <p className="text-sm xs:text-base sm:text-lg text-black dark:text-gray-300 transition-colors px-2 sm:px-0">
              my coding journey in numbers
            </p>
          </div>

          {/* GitHub Stats Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 max-w-6xl mx-auto px-2 xs:px-4 sm:px-0">
            {/* GitHub Stats Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">GitHub Stats</h4>
              <img 
                src="https://github-readme-stats.vercel.app/api?username=SATWIKKKKK&show_icons=true&theme=radical&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9&icon_color=58A6FF"
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
            </div>

            {/* Top Languages Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">Most Used Languages</h4>
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=SATWIKKKKK&layout=compact&theme=radical&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9"
                alt="Top Languages"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* LeetCode Stats Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="font-bdo text-xl font-bold text-black dark:text-white sm:text-6xl transition-colors mb-4">
              <span className="text-blue-600 dark:text-blue-400">leet</span>        stats
            </h3>
            <p className="text-lg text-black dark:text-gray-300 transition-colors">
              problem solving achievements
            </p>
          </div>

       
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* LeetCode Stats Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="text-xl font-semibold text-black dark:text-white mb-4 text-center">LeetCode Progress</h4>
              <img 
                src="https://leetcard.jacoblin.cool/SATWIKKKKK?theme=dark&font=Nunito&ext=contest"
                alt="LeetCode Stats"
                className="w-full rounded-lg"
              />
            </div>

  
           

            {/* Problem Categories Breakdown */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 transition-colors">
              <h4 className="text-xl font-semibold text-black dark:text-white mb-6 text-center">Problem Categories</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">Array</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Most Solved</div>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">String</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Proficient</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Trees</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Strong</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">DP</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;