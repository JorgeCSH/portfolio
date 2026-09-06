interface Project {
  id: string | number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// =========================================================================
// WHERE TO WRITE: Add, edit, or remove projects in this array
// =========================================================================
const initialProjects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'Personal portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth scrolling, responsive design, and modular components.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/JorgeCSH/portfolio',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Project Two Title',
    description:
      '/* Where to write: Replace this description with your project details */ A web application that solves an everyday problem with an intuitive UI and efficient architecture.',
    tags: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/your-username/project-two',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Project Three Title',
    description:
      '/* Where to write: Replace this description with your project details */ An interactive tool demonstrating state management, API integration, and clean component patterns.',
    tags: ['TypeScript', 'REST API', 'CSS / Tailwind'],
    githubUrl: 'https://github.com/your-username/project-three',
    liveUrl: '',
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-20 px-6 max-w-[1280px] mx-auto w-full"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-3">
          Featured <span className="text-[#646cff]">Projects</span>
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          A selection of projects I've worked on. Each card showcases the technologies used and links to source code or live previews.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialProjects.map((project) => (
          <article
            key={project.id}
            className="group bg-[#242424] border border-[#38383e] hover:border-[#646cff] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-[#646cff]/10"
          >
            <div>
              {/* Card Top Icon & Title */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#18181b] border border-[#38383e] flex items-center justify-center text-[#646cff]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <span className="text-xs text-gray-500 font-mono">
                  Project #{project.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-[#646cff] transition-colors mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#18181b] text-gray-300 border border-[#38383e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#38383e]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-300 hover:text-[#646cff] transition-colors no-underline"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                    <span>Code</span>
                  </a>
                )}

                {project.liveUrl && project.liveUrl !== '#' && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-300 hover:text-[#646cff] transition-colors no-underline ml-auto"
                  >
                    <span>Live Demo</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* Add Project Placeholder Card */}
        <div className="border-2 border-dashed border-[#38383e] hover:border-[#646cff]/70 rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center transition-colors min-h-[280px] bg-[#242424]/30">
          <div className="w-12 h-12 rounded-full bg-[#242424] border border-[#38383e] flex items-center justify-center text-gray-400 mb-3">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-200 mb-2">
            Add Your Project Here
          </h3>
          <p className="text-xs text-gray-400 max-w-xs">
            Edit the <code className="text-[#a5b4fc]">initialProjects</code> array in{' '}
            <code className="text-[#a5b4fc]">src/components/Projects.tsx</code> to add more cards with your titles, descriptions, and links.
          </p>
        </div>
      </div>
    </section>
  );
};

export const ProjectsPage = Projects;
export default Projects;
