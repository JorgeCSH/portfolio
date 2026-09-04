import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { EDUCATION, COURSEWORK, EXPERIENCES } from '../data/portfolioData';

interface EducationProps {
  nightMode: boolean;
}

export const Education = ({ nightMode }: EducationProps) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <div className="border-b pb-4 space-y-1.5"
        style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-inherit">
          Education & Experience
        </h1>
        <p className="text-sm text-neutral-400 max-w-2xl">
          Academic background, relevant coursework, and campus or industry experience.
        </p>
      </div>

      {/* Education Degree Card */}
      <section className="p-6 rounded-xl border space-y-4"
        style={{
          backgroundColor: nightMode ? '#101726' : '#ffffff',
          borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10 text-blue-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-semibold text-base text-inherit">
                {EDUCATION.degree || " of Science in Computer Engineering"}
              </h2>
              <p className="text-xs text-neutral-400">
                {EDUCATION.institution || "Your University"}
              </p>
            </div>
          </div>
          {EDUCATION.graduationYear && (
            <span className="text-xs font-medium text-neutral-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {EDUCATION.graduationYear}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {EDUCATION.gpa && (
            <div>
              <span className="text-neutral-500 block uppercase text-[10px]">Academic Standing</span>
              <span className="font-semibold text-neutral-200">GPA: {EDUCATION.gpa}</span>
            </div>
          )}

          {EDUCATION.honors && EDUCATION.honors.length > 0 && (
            <div>
              <span className="text-neutral-500 block uppercase text-[10px]">Honors & Recognition</span>
              <div className="space-y-1 mt-0.5">
                {EDUCATION.honors.map((honor) => (
                  <span key={honor} className="text-neutral-300 flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-blue-400" />
                    {honor}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-4">
        <div className="border-b pb-2 flex items-center justify-between"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
            Experience & Roles
          </h2>
        </div>

        {EXPERIENCES.length > 0 ? (
          <div className="space-y-4">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.role}
                className="p-6 rounded-xl border space-y-3"
                style={{
                  backgroundColor: nightMode ? '#101726' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-base text-inherit">{exp.role}</h3>
                    <p className="text-xs text-blue-400 font-medium">{exp.organization}</p>
                  </div>
                  <div className="text-xs text-neutral-400 flex items-center gap-3">
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-1.5 pt-1">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-xs text-neutral-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-neutral-500 mt-1">•</span>
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
              backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.2)' : 'rgba(243, 244, 246, 0.4)',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
            }}
          >
            <p className="text-xs text-neutral-400">
              No experiences added yet. Add your internships, research, or work experience in <code>EXPERIENCES</code> in <code>src/data/portfolioData.ts</code>.
            </p>
          </div>
        )}
      </section>

      {/* Relevant Coursework */}
      <section className="space-y-4">
        <div className="border-b pb-2 flex items-center justify-between"
          style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)' }}
        >
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
            Relevant Coursework
          </h2>
        </div>

        {COURSEWORK.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COURSEWORK.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-xl border space-y-3"
                style={{
                  backgroundColor: nightMode ? '#101726' : '#ffffff',
                  borderColor: nightMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)'
                }}
              >
                <h3 className="font-semibold text-sm text-neutral-200 border-b pb-2"
                  style={{ borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)' }}
                >
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.courses.map((course) => (
                    <li key={course} className="text-xs text-neutral-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
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
              backgroundColor: nightMode ? 'rgba(17, 24, 39, 0.2)' : 'rgba(243, 244, 246, 0.4)',
              borderColor: nightMode ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)'
            }}
          >
            <p className="text-xs text-neutral-400">
              No coursework added yet. Add your courses under <code>COURSEWORK</code> in <code>src/data/portfolioData.ts</code>.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};
