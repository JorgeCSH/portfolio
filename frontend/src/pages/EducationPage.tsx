import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, FileDown } from 'lucide-react';
import { EDUCATION, COURSEWORK, EXPERIENCES } from '../data/portfolioData';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * Props for the EducationPage component:
 * - nightMode: boolean indicating dark mode state for dynamic border and background styling.
 */
interface EducationPageProps {
  nightMode: boolean;
}

/**
 * EducationPage Component
 *
 * Showcases academic background and work experience:
 * 1. Degree & Honors Card: University, degree, graduation year, GPA, and awards.
 * 2. Experience & Roles: Internships, campus roles, and engineering projects with responsibilities.
 * 3. Coursework Catalog: Categorized curriculum relevant to computer engineering.
 * 
 * Note: Uses useScrollToTop hook instead of useLocation for automatic smooth scroll restoration.
 */
export const EducationPage = ({ nightMode }: EducationPageProps) => {
  // Smoothly scroll to the top of the window on mount
  useScrollToTop();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="space-y-12 pb-16"
    >
      {/* -------------------------------------------------------------------- */}
      {/* Page Header */}
      {/* -------------------------------------------------------------------- */}
      <div
        className="border-b pb-4 space-y-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-inherit">
            Education & Experience
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl">
            Academic background, relevant coursework, and engineering experience.
          </p>
        </div>

        {/* CV Download shortcut */}
        <a
          href="/cv.pdf"
          download="Jorge_Cummins_CV.pdf"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white transition-colors shadow-xs shrink-0 cursor-pointer self-start sm:self-auto"
          title="Download complete CV as PDF"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>Download CV</span>
        </a>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* 1. Academic Degree Card */}
      {/* -------------------------------------------------------------------- */}
      <section
        className="p-6 rounded-xl border space-y-4 shadow-xs"
        style={{
          backgroundColor: nightMode ? '#161b24' : '#ffffff',
          borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
        }}
      >
        {/* Degree title, university, and graduation date */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-teal-500/10 text-teal-400 border border-teal-500/20">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-semibold text-base text-inherit">
                {EDUCATION.degree || "Bachelor of Science in Computer Engineering"}
              </h2>
              <p className="text-xs text-zinc-400">
                {EDUCATION.institution || "Your University"}
              </p>
            </div>
          </div>
          {EDUCATION.graduationYear && (
            <span className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-500" />
              {EDUCATION.graduationYear}
            </span>
          )}
        </div>

        {/* Academic metrics: GPA and Honors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {EDUCATION.gpa && (
            <div>
              <span className="text-zinc-500 block uppercase text-[10px]">Academic Standing</span>
              <span className="font-semibold text-zinc-200">GPA: {EDUCATION.gpa}</span>
            </div>
          )}

          {EDUCATION.honors && EDUCATION.honors.length > 0 && (
            <div>
              <span className="text-zinc-500 block uppercase text-[10px]">Honors & Recognition</span>
              <div className="space-y-1 mt-0.5">
                {EDUCATION.honors.map((honor) => (
                  <span key={honor} className="text-zinc-300 flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-amber-400" />
                    {honor}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. Professional & Campus Experience Section */}
      {/* -------------------------------------------------------------------- */}
      <section className="space-y-4">
        <div
          className="border-b pb-2 flex items-center justify-between"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
            Experience & Roles
          </h2>
        </div>

        {EXPERIENCES.length > 0 ? (
          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.role}
                className="p-6 rounded-xl border space-y-3 shadow-xs"
                style={{
                  backgroundColor: nightMode ? '#161b24' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                {/* Role title, company/lab name, period, and location */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-base text-inherit">{exp.role}</h3>
                    <p className="text-xs text-teal-400 font-medium">{exp.organization}</p>
                  </div>
                  <div className="text-xs text-zinc-400 flex items-center gap-3">
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-teal-500" />
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Bullet points of achievements and contributions */}
                <ul className="space-y-1.5 pt-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="p-6 rounded-xl border text-center space-y-2"
            style={{
              backgroundColor: nightMode ? 'rgba(22, 27, 36, 0.5)' : 'rgba(243, 244, 246, 0.5)',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
            }}
          >
            <p className="text-xs text-zinc-400">
              No experiences added yet. Add your internships, research, or work experience in <code>EXPERIENCES</code> in <code>src/data/portfolioData.ts</code>.
            </p>
          </div>
        )}
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 3. Relevant Coursework Section */}
      {/* -------------------------------------------------------------------- */}
      <section className="space-y-4">
        <div
          className="border-b pb-2 flex items-center justify-between"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-teal-400 font-semibold">
            Relevant Coursework
          </h2>
        </div>

        {COURSEWORK.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COURSEWORK.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-xl border space-y-3 shadow-xs"
                style={{
                  backgroundColor: nightMode ? '#161b24' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                <h3
                  className="font-semibold text-sm text-zinc-200 border-b pb-2"
                  style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
                >
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.courses.map((course) => (
                    <li key={course} className="text-xs text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400/80 shrink-0" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="p-6 rounded-xl border text-center space-y-2"
            style={{
              backgroundColor: nightMode ? 'rgba(22, 27, 36, 0.5)' : 'rgba(243, 244, 246, 0.5)',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
            }}
          >
            <p className="text-xs text-zinc-400">
              No coursework added yet. Add your courses under <code>COURSEWORK</code> in <code>src/data/portfolioData.ts</code>.
            </p>
          </div>
        )}
      </section>
    </motion.div>
  );
};
