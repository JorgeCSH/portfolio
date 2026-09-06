import RevealOnScroll from './RevealOnScroll';

interface HomeProps {
  onNavigate: (hash: string) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  // triggers cv download
  const handleDownloadResume = () => {
    const resumeUrl = '/cv.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Jorge_Cummins_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="scroll-mt-20 min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-6 py-20"
    >
      <RevealOnScroll className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Main Greeting my name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi There, I'm <p></p>{' '}
          <span className="text-[#646cff]">Jorge Cummins</span>
        </h1>

        {/* Role */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-6">
          Computer Engineering Student
        </h2>

        {/* Greeting */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Welcome to my portfolio/webpage! I’m a Computer Engineering student passionate about technology, software development, and solving real-world problems across different disciplines. I’m interested in combining computing with other fields to build meaningful and innovative solutions. Take a look around to explore my projects, skills, and work.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#646cff] hover:bg-[#535bf2] text-white font-semibold transition-all duration-200 shadow-lg shadow-[#646cff]/20 hover:shadow-[#646cff]/40 hover:-translate-y-0.5 cursor-pointer"
            title="Download PDF CV"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Resume</span>
          </button>

          {/* 2. Who am I?: Jumps to About section */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#about');
            }}
            className="px-6 py-3 rounded-lg bg-[#242424] hover:bg-[#2e2e2e] text-white font-semibold border border-[#38383e] hover:border-gray-500 transition-all duration-200 hover:-translate-y-0.5 no-underline cursor-pointer"
          >
            Who am I?
          </a>

          {/* 3. Contact Me: Goes to Contact section */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('#contact');
            }}
            className="px-6 py-3 rounded-lg bg-transparent hover:bg-[#646cff]/10 text-[#646cff] font-semibold border border-[#646cff] transition-all duration-200 hover:-translate-y-0.5 no-underline cursor-pointer"
          >
            Contact Me
          </a>
        </div>
      </RevealOnScroll>

      {/* Scroll down Indicator */}
      <div className="mt-16 sm:mt-24 text-gray-500 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('#about');
          }}
          className="flex flex-col items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors duration-200 no-underline"
          aria-label="Scroll to About section"
        >
          <span>Scroll down</span>
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Home;
