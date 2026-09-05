import { motion } from 'framer-motion';
import { EDUCATION, COURSEWORK, EXPERIENCES } from '../data/portfolioData';
import { useScrollToTop } from '../hooks/useScrollToTop';

/**
 * EducationPage Component
 *
 * Showcases academic credentials, engineering experience, and coursework.
 * Formatted as a clean editorial timeline and CV section without card hell.
 */
export const EducationPage = () => {
  useScrollToTop();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="space-y-16 pb-16"
    >
      {/* -------------------------------------------------------------------- */}
      {/* Page Header */}
      {/* -------------------------------------------------------------------- */}
      <div className="border-b border-zinc-800/80 pb-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-semibold">
            curriculum // academic & professional
          </span>
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
            Education & Experience
          </h1>
          <p className="text-sm text-zinc-400 max-w-2xl pt-1">
            Academic credentials, relevant coursework, and software engineering experience.
          </p>
        </div>

        {/* CV Download shortcut link */}
        <a
          href="/cv.pdf"
          download="Jorge_Cummins_CV.pdf"
          className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
          title="Download complete CV as PDF"
        >
          get my resume (pdf) ↓
        </a>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* 1. Academic Credentials Section */}
      {/* -------------------------------------------------------------------- */}
      <section className="space-y-6">
        <div className="border-b border-zinc-800/80 pb-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
            // academic degree
          </h2>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h3 className="text-xl font-semibold text-zinc-100">
                {EDUCATION.degree || "Bachelor of Science in Computer Engineering"}
              </h3>
              <p className="text-sm text-zinc-400 font-medium">
                {EDUCATION.institution || "Universidad de Chile"}
              </p>
            </div>
            {EDUCATION.graduationYear && (
              <span className="text-xs font-mono text-zinc-500 font-medium">
                {EDUCATION.graduationYear}
              </span>
            )}
          </div>

          {/* Academic metrics: GPA and Honors */}
          {(EDUCATION.gpa || (EDUCATION.honors && EDUCATION.honors.length > 0)) && (
            <div className="flex flex-wrap gap-8 pt-2 text-xs">
              {EDUCATION.gpa && (
                <div className="space-y-0.5">
                  <span className="text-zinc-500 font-mono text-[11px] block">academic standing</span>
                  <span className="font-semibold text-zinc-200">GPA: {EDUCATION.gpa}</span>
                </div>
              )}

              {EDUCATION.honors && EDUCATION.honors.length > 0 && (
                <div className="space-y-1">
                  <span className="text-zinc-500 font-mono text-[11px] block">honors & recognition</span>
                  <div className="space-y-1">
                    {EDUCATION.honors.map((honor) => (
                      <span key={honor} className="text-zinc-300 flex items-center gap-1.5">
                        <span className="text-indigo-400 font-semibold">•</span>
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 2. Professional & Campus Experience Timeline */}
      {/* -------------------------------------------------------------------- */}
      <section className="space-y-6">
        <div className="border-b border-zinc-800/80 pb-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
            // experience & roles
          </h2>
        </div>

        {EXPERIENCES.length > 0 ? (
          <div className="divide-y divide-zinc-800/80">
            {EXPERIENCES.map((exp) => (
              <div key={exp.role} className="py-6 first:pt-1 last:pb-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100">{exp.role}</h3>
                    <p className="text-xs font-mono text-indigo-400 font-medium">{exp.organization}</p>
                  </div>
                  <div className="text-xs font-mono text-zinc-500 flex items-center gap-3">
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-1.5 pt-1 text-xs sm:text-sm text-zinc-300">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-zinc-500 italic">No experience added yet.</p>
        )}
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* 3. Relevant Coursework Section */}
      {/* -------------------------------------------------------------------- */}
      <section className="space-y-6">
        <div className="border-b border-zinc-800/80 pb-2">
          <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
            // relevant coursework
          </h2>
        </div>

        {COURSEWORK.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COURSEWORK.map((group) => (
              <div key={group.category} className="space-y-3">
                <h3 className="font-semibold text-sm text-zinc-200 border-b border-zinc-800/60 pb-1.5 font-mono">
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.courses.map((course) => (
                    <li key={course} className="text-xs text-zinc-300 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-400/80 shrink-0" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-zinc-500 italic">
            Coursework can be specified under COURSEWORK in src/data/portfolioData.ts.
          </p>
        )}
      </section>
    </motion.div>
  );
};

