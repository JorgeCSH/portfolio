export const About = () => {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Tailwind CSS',
    'Node.js',
    'Git & GitHub',
    'REST APIs',
    'Responsive Design',
    '/* Add more skills here */',
  ];

  return (
    <section
      id="about"
      className="scroll-mt-16 w-full py-24 px-6 bg-[#1f1f28] border-y border-[#2d2d3a]"
    >
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            About <span className="text-[#646cff]">Me</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A glimpse into my journey, what drives me, and the technologies I work with.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Who the fuck am I? */}
          <div className="lg:col-span-2 bg-[#272734] border border-[#3b3b4f] rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div className="space-y-5 text-gray-200 leading-relaxed text-base sm:text-lg">
              <p>
                Hi! I’m a Computer Engineering student passionate about applying what I’ve learned throughout my studies to solve problems across different fields, from software development and science to business and beyond.
              </p>
              <p>
                I’m currently studying Computer Engineering at the Universidad de Chile, where I’ve had the opportunity to learn, participate in different activities, and explore new areas of technology. As part of my studies, I also spent six months in Stockholm at the KTH Royal Institue of Technology on an academic exchange, where I took courses and deepened my knowledge of Artificial Intelligence and innovation.
              </p>
              <p>
                I enjoy solving challenging problems and working in multidisciplinary environments, especially when the solution goes beyond traditional software development. I don’t have a single area of preference—I enjoy applying my knowledge wherever it can make an impact, whether that means web development, data science and AI, consulting, the business and banking world, etc.
              </p>
            </div>
          </div>

          {/* Skills & Quick Facts Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Skills Card */}
            <div className="bg-[#272734] border border-[#3b3b4f] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#646cff]">⚡</span> Technologies & Skills
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Here are some of the tools and languages I work with:
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-[#1a1a24] text-gray-200 border border-[#3b3b4f] hover:border-[#646cff] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights / Info Card */}
            <div className="bg-[#272734] border border-[#3b3b4f] rounded-2xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-[#646cff]">📌</span> Quick Highlights
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex justify-between pb-2 border-b border-[#3b3b4f]">
                  <span className="text-gray-400">Focus:</span>
                  <span className="font-medium text-white">Full Stack / Frontend</span>
                </li>
                <li className="flex justify-between pb-2 border-b border-[#3b3b4f]">
                  <span className="text-gray-400">Status:</span>
                  <span className="font-medium text-emerald-400">Available for projects</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="font-medium text-white">Remote / Worldwide</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutPage = About;
export default About;
