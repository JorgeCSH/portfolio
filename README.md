# My Portfolio

[![React](https://img.shields.io/badge/React-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

My personal portfolio built using React, TypeScript, and Tailwind CSS. It showcases my engineering projects, academic background, technical skills, and contact information.

## Overview

This repository contains the source code for my personal portfolio website. It was created to showcase my projects, academic background, technical skills, and experience.

---

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## Repository Structure

```text
portfolio/
├── README.md                       # Project documentation
└── frontend/                       # Main application
    ├── index.html                  # Main HTML file
    ├── public/                     # Downloadable resume and favicon
    └── src/
        ├── main.tsx                # Application entry point
        ├── App.tsx                 # Root component
        ├── style/                  # Global styles and Tailwind CSS import
        └── components/
            ├── Header.tsx          # Fixed top navigation bar
            ├── Home.tsx            # Hero section with introduction and navigation buttons
            ├── About.tsx           # Bio, education timeline, and categorized skills
            ├── Projects.tsx        # Project showcases with tags, GitHub, and external links
            ├── Contact.tsx         # Contact form and social links
            ├── Footer.tsx          # Footer with back-to-top button and links
            └── RevealOnScroll.tsx  # Reusable Intersection Observer animation wrapper
```

---

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/JorgeCSH/portfolio.git
   cd portfolio
   ```

2. Navigate to the `frontend` folder and install dependencies:
   ```bash
   cd frontend
   npm install
   ```

### Development Server

Start the Vite development server:

```bash
npm run dev
```

---

## Portfolio Sections
- **Hero** (`Home.tsx`): The main landing section, introducing the portfolio and providing quick access to my contact information and resume.
- **About** (`About.tsx`): A section where I share information about myself, my interests, academic background, and current skills.
- **Featured Projects** (`Projects.tsx`): A showcase of the projects I have worked on, along with some of their main features and technologies.
- **Contact** (`Contact.tsx`): A section for visitors who are interested in getting in touch with me.

---

## TODO

- [x] Finish the base project.
- [x] Add `README`. 
- [ ] Deployment[^1].
- [ ] Add more languages, including spanish (my first language).
- [ ] Implement dark/light theme toggle.
- [ ] Fix mailto.

---

## Contact

**Jorge Cummins**
- **GitHub**: [@JorgeCSH](https://github.com/JorgeCSH)
- **LinkedIn**: [jorge-cummins-holger](https://www.linkedin.com/in/jorge-cummins-holger/)
- **Email**: [jorge.cummins.hs@gmail.com](mailto:jorge.cummins.hs@gmail.com)

[^1]: Waiting for the necessary credentials to complete the deployment
