/**
 * Project Interface
 * Represents a single portfolio project item shown in Projects and AboutMe views.
 */
export interface Project {
  id: string;              // Unique identifier (e.g., "smart-home-hub")
  title: string;           // Display title of the project
  category: string;        // Categorization tag (e.g., "Embedded & Hardware", "Systems & Software")
  description: string;     // Short summary describing what the project does
  highlights: string[];    // Key accomplishments, contributions, or bullet points
  technologies: string[];  // List of tools/languages/frameworks used (e.g., ["C++", "FreeRTOS", "KiCad"])
  githubUrl?: string;      // Optional URL to GitHub repository
  liveUrl?: string;        // Optional URL to a deployed demo or live site
}

/**
 * Education Interface
 * Represents university academic degree details and credentials.
 */
export interface Education {
  degree: string;          // Degree title (e.g., "Bachelor of Science in Computer Engineering")
  institution: string;     // University or college name
  graduationYear: string;  // Year or date range (e.g., "Expected May 2026")
  gpa?: string;            // Optional GPA rating (e.g., "3.85 / 4.00")
  honors?: string[];       // Optional array of academic awards or dean's list recognitions
  location: string;        // Campus location (e.g., "Santiago, Chile")
}

/**
 * CourseGroup Interface
 * Groups relevant courses by discipline (e.g., "Hardware & Architecture", "Software & Systems").
 */
export interface CourseGroup {
  category: string;        // Category heading for the course cluster
  courses: string[];       // Array of course names
}

/**
 * Experience Interface
 * Represents an internship, research assistantship, or work role.
 */
export interface Experience {
  role: string;            // Job or role title (e.g., "Firmware Engineering Intern")
  organization: string;    // Company, institution, or laboratory name
  period: string;          // Employment time span (e.g., "Summer 2025")
  location: string;        // City and State/Country
  description: string[];   // Bullet points describing accomplishments and responsibilities
}

/**
 * SkillGroup Interface
 * Clusters technical skills into organized sections (e.g., "Languages", "Hardware", "Tools").
 */
export interface SkillGroup {
  title: string;           // Name of the skill category
  skills: string[];        // List of technical skills or tools in that category
}

/**
 * FocusArea Interface
 * Highlights key sub-disciplines or technical passions in the About view.
 */
export interface FocusArea {
  id: string;              // Unique slug
  title: string;           // Focus area title (e.g., "Embedded Systems & Firmware")
  description: string;     // Short paragraph explaining interest and experience
}


// 1. PERSONAL PROFILE 
// Who the fuck am I
export const PROFILE = {
  name: "Jorge Cummins",
  role: "Computer Engineering Student",
  institution: "Universidad de Chile", // e.g. "University of ..."
  graduation: "",  // e.g. "Expected May 2026"
  location: "Santiago, Chile",    // e.g. "City, State / Country"
  email: "jorge.cummins.hs@gmail.com",       // e.g. "your.email@domain.com"
  github: "https://github.com/JorgeCSH",      // e.g. "https://github.com/your-username"
  linkedin: "https://www.linkedin.com/in/jorge-cummins-holger/",    // e.g. "https://linkedin.com/in/your-profile"
  about: "Professional nigger and nword pass distribuitor",       // e.g. "Write a few sentences introducing yourself, your passions, and what you are learning."
};

// 2. AREAS OF FOCUS
// What I like working on
export const AREAS_OF_FOCUS: FocusArea[] = [
  {
    id: "Low level programming",
    title: "I like  `c` but I prefer rust",
    description: "Computer goes BROOOOM",
  }
  ];

// 3. PROJECTS
// What I have done in my life
export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Pagina de adopcion",
    category: "WebDev", // or "Systems & Software", "Web & Tools", etc.
    description: "Web app developed fo the course 'Desarrollo de Aplicaciones Web'",
    highlights: [
      "For nigger, not by a nigger"
    ],
    technologies: ["JavaScript", "Java", "Python"],
    githubUrl: "https://github.com/JorgeCSH/desarrollo_web_jorge_cummins",
    liveUrl: ""
  }
];

// 4. EDUCATION & ACADEMICS
// I am a student
export const EDUCATION: Education = {
  degree: "Nigger Engineering",
  institution: "Universidad de Chile",     // e.g. "University Name"
  graduationYear: "",  // e.g. "Expected May 2026"
  gpa: "",             // e.g. "3.85 / 4.00" (optional)
  honors: [
     "Estudiante destacado FCFM 2025"
  ],
  location: "Santiago, Chile"         // e.g. "City, State"
};

// 5. EXPERIENCE
// Unemployment
export const EXPERIENCES: Experience[] = [
  {
    role: "Teaching assistant, Differential and Integral Calculus",
    organization: "Facultad de Ciencias Fisicas y Matematicas, Universidad de Chile",
    period: "August 2024 -- December 2026",
    location: "Santiago, Chile",
    description: [
      "I was the responsible of failing first year students"
    ]
  }
];

// 6. RELEVANT COURSEWORK
// Add your courses grouped by topic:
export const COURSEWORK: CourseGroup[] = [
  /*
  Uncomment and add your coursework:
  {
    category: "Hardware & Architecture",
    courses: [
      "Digital Logic Design",
      "Computer Organization & Architecture",
      "Microprocessor Systems"
    ]
  },
  {
    category: "Software & Systems",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Systems Programming"
    ]
  }
  */
];

// -------------------------------------------------------------
// 7. TECHNICAL SKILLS
// Add your skills grouped by category:
// -------------------------------------------------------------
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "TypeScript"]
  },
  {
    title: "Tools & Systems",
    skills: ["Linux", "Git"]
  }
];
