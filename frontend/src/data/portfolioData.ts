export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  graduationYear: string;
  gpa?: string;
  honors?: string[];
  location: string;
}

export interface CourseGroup {
  category: string;
  courses: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface FocusArea {
  id: string;
  title: string;
  description: string;
}

// -------------------------------------------------------------
// 1. PERSONAL PROFILE & BIO
// Fill in your personal details below:
// -------------------------------------------------------------
export const PROFILE = {
  name: "Jorge Cummins",
  role: "Computer Engineering Student",
  institution: "", // e.g. "University of ..."
  graduation: "",  // e.g. "Expected May 2026"
  location: "",    // e.g. "City, State / Country"
  email: "",       // e.g. "your.email@domain.com"
  github: "",      // e.g. "https://github.com/your-username"
  linkedin: "",    // e.g. "https://linkedin.com/in/your-profile"
  about: "",       // e.g. "Write a few sentences introducing yourself, your passions, and what you are learning."
};

// -------------------------------------------------------------
// 2. AREAS OF FOCUS
// Fill in your key engineering interests or disciplines below:
// -------------------------------------------------------------
export const AREAS_OF_FOCUS: FocusArea[] = [
  /*
  Uncomment and add your areas of focus:
  {
    id: "embedded-systems",
    title: "Embedded Systems & Firmware",
    description: "Brief description of your focus in embedded systems, microcontrollers, and firmware."
  },
  {
    id: "digital-design",
    title: "Computer Architecture & Digital Design",
    description: "Brief description of your focus in digital logic, HDLs (SystemVerilog/VHDL), or FPGA design."
  },
  {
    id: "systems-software",
    title: "Systems Software",
    description: "Brief description of your focus in C/C++, operating systems, and developer tools."
  }
  */
];

// -------------------------------------------------------------
// 3. PROJECTS
// Add your personal, academic, or team projects below:
// -------------------------------------------------------------
export const PROJECTS: Project[] = [
  /*
  Uncomment and fill with your projects:
  {
    id: "project-1",
    title: "Project Name",
    category: "Embedded & Hardware", // or "Systems & Software", "Web & Tools", etc.
    description: "A short 1-2 sentence summary of what this project is and what it does.",
    highlights: [
      "Key feature, contribution, or technical detail 1",
      "Key feature, contribution, or technical detail 2"
    ],
    technologies: ["C", "C++", "FreeRTOS"],
    githubUrl: "https://github.com/...",
    liveUrl: ""
  }
  */
];

// -------------------------------------------------------------
// 4. EDUCATION & ACADEMICS
// Fill in your university, degree, and academic honors:
// -------------------------------------------------------------
export const EDUCATION: Education = {
  degree: "Nigger Engineering",
  institution: "",     // e.g. "University Name"
  graduationYear: "",  // e.g. "Expected May 2026"
  gpa: "",             // e.g. "3.85 / 4.00" (optional)
  honors: [
    // "Dean's Honor List",
    // "Academic Scholarship"
  ],
  location: ""         // e.g. "City, State"
};

// -------------------------------------------------------------
// 5. EXPERIENCE
// Add any internships, research assistantships, or jobs:
// -------------------------------------------------------------
export const EXPERIENCES: Experience[] = [
  /*
  Uncomment and add your experiences:
  {
    role: "Undergraduate Research Assistant",
    organization: "Lab Name / Department",
    period: "Month Year – Present",
    location: "City, State",
    description: [
      "Key responsibility or achievement in this role.",
      "Another contribution or technique used."
    ]
  }
  */
];

// -------------------------------------------------------------
// 6. RELEVANT COURSEWORK
// Add your courses grouped by topic:
// -------------------------------------------------------------
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
  /*
  Uncomment and add your skills:
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "TypeScript", "SystemVerilog"]
  },
  {
    title: "Hardware & Embedded",
    skills: ["ARM Cortex-M", "STM32", "FPGA", "Vivado", "KiCad"]
  },
  {
    title: "Tools & Systems",
    skills: ["Linux", "Git", "GDB", "Make", "Docker"]
  }
  */
];
