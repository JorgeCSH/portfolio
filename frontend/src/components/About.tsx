import RevealOnScroll from './RevealOnScroll';

interface EducationItem {
  institution: string;
  degree: string;
  period?: string;
  description?: string;
}

interface TechnologyGroup {
  category: string;
  items: string[];
}

export const About = () => {
  const educationList: EducationItem[] = [
    {
      institution: 'Universidad de Chile',
      degree: 'Computer Engineering (Santiago, Chile)',
      period: 'In progress',
      description:
        'Undergraduate studies in computer science, software engineering, and applied sciences.',
    },
    {
      institution: 'KTH Royal Institute of Technology',
      degree: 'Academic Exchange (Stockholm, Sweden)',
      period: 'spring semester 2026',
      description:
        'Focused coursework in Artificial Intelligence and technological innovation from the departmen in electrical engineering and computer science.',
    },
  ];

  const technologyGroups: TechnologyGroup[] = [
    {
      category: 'Programming Languages',
      items: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'C/C++', 'SQL', 'Java', 'Scala'],
    },
    {
      category: 'Web Development',
      items: ['HTML5 & CSS3', 'React', 'Tailwind CSS', 'Node.js', 'Flask', 'Django'],
    },
    {
      category: 'Data Science, AI, and Data Management',
      items: ['Power BI', 'SQL', 'PSQL', 'MongoDB'],
    },
    {
      category: 'Tools',
      items: ['Git (GitHub)', 'Linux', 'Claude Code', 'Codex', 'CopilotCLI'],
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-16 w-full py-24 px-6 bg-[#1f1f28] border-y border-[#2d2d3a]"
    >
      <div className="max-w-[1000px] mx-auto w-full">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
              About <span className="text-[#646cff]">Me</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              My journy, my motivations and my technologies
            </p>
          </div>
        </RevealOnScroll>

        {/* Top line */}
        <RevealOnScroll delay={100}>
          <div className="w-24 h-0.5 bg-[#646cff] mx-auto my-8 opacity-70"></div>
        </RevealOnScroll>

        {/* About Me Text */}
        <RevealOnScroll delay={150}>
          <div className="max-w-3xl mx-auto space-y-5 text-gray-300 leading-relaxed text-base sm:text-lg">
            <p>
              Hi! I’m a Computer Engineering student passionate about applying what
              I’ve learned throughout my studies to solve problems across different
              fields, from software development and science to business and beyond.
            </p>
            <p>
              I’m currently studying Computer Engineering at the Universidad de Chile,
              where I’ve had the opportunity to learn, participate in different activities,
              and explore new areas of technology. As part of my studies, I also spent
              six months in Stockholm at the KTH Royal Institute of Technology on an
              academic exchange, where I took courses and deepened my knowledge of
              Artificial Intelligence and innovation.
            </p>
            <p>
              I enjoy learning new tools, solving challenging problems and working in multidisciplinary
              environments, especially when the solution goes beyond traditional software
              development. I don’t have a single area of preference. I enjoy applying
              my knowledge wherever it can make an impact, whether that means web
              development, data science and AI, consulting, the business and banking
              world, etc.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bottom line */}
        <RevealOnScroll delay={200}>
          <div className="w-full max-w-3xl h-px bg-[#2d2d3a] mx-auto my-12"></div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-4xl mx-auto">
          {/*  Education */}
          <RevealOnScroll delay={250}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Education
              </h3>

              <div className="space-y-6">
                {educationList.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-[#646cff] pl-4 py-1"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-base sm:text-lg font-semibold text-white">
                        {item.institution}
                      </h4>
                      {item.period && (
                        <span className="text-xs font-mono text-[#a5b4fc] shrink-0">
                          {item.period}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-300 mt-1">
                      {item.degree}
                    </p>
                    {item.description && (
                      <p className="text-xs sm:text-sm text-gray-400 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/*  Technologies */}
          <RevealOnScroll delay={300}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
                Technologies
              </h3>

              <div className="space-y-6">
                {technologyGroups.map((group) => (
                  <div key={group.category}>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#646cff]"></span>
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs sm:text-sm font-medium rounded-lg bg-[#272734] text-gray-200 border border-[#3b3b4f] hover:border-[#646cff] transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export const AboutPage = About;
export default About;
