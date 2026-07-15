// ── Edit this file to update your entire portfolio content ──

export const profile = {
  name: 'Anil Gouda',
  role: 'Java Backend Developer',
  tagline: 'Building reliable, scalable server-side systems.',
  location: 'Odisha, India',
  available: true,
  learning: 'React & full-stack development',
  email: 'goudaanil106@gmail.com',
  resumeUrl: '/AnilProfile.pdf',
  avatar: '/Anil_Image.png',
  bio: [
    "I'm a Java backend developer who enjoys the part of software most people don't see — the APIs, the data model, the part that has to work correctly every single time.",
    "My core toolkit is Java and Spring Boot on top of Oracle and MySQL, and I care a lot about clean REST design, sensible schemas, and code that's easy for the next person to reason about.",
    "I also work comfortably across the stack when needed — HTML, CSS, JavaScript manipulation, and React — and I'm actively deepening my front-end skills to become a stronger full-stack engineer.",
  ],
}

export const social = {
  github: 'https://github.com/AnilGouda',
  linkedin: 'https://www.linkedin.com/in/anilgouda07/',
  instagram: 'https://instagram.com/anil___official_07',
}

export const coreSkills = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 85 },
  { name: 'Oracle', level: 78 },
  { name: 'MySQL', level: 82 },
]

export const supportingSkills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'React' },
]

export const toolset = [
  'Java', 'Spring Boot', 'Oracle DB', 'MySQL', 'HTML', 'CSS', 'JavaScript',, 'React', 'Maven', 'Junit', 'Docker', 'Git', 'Agile', 'Postman', 'IntelliJ IDEA', 'Eclipse IDE', 'Visual Studio Code',
]

export const experience = [
  {
    role: 'Freelance Java Developer',
    org: 'Freelance',
    period: '2025 — 2026',
    description: 'Building and maintaining REST APIs with Spring Boot, backed by MySQL, serving internal and customer-facing applications.',
  },
  {
    role: 'Software Engineering Intern',
    org: 'Datacore Solutions',
    period: '2023 — 2024',
    description: 'Worked on backend services and database schema design; wrote integration tests and helped migrate a legacy module to Spring Boot.',
  },
]

export const education = [
  {
    degree: 'Bachelore of computer application (BCA)',
    org: 'Berhampur University',
    period: '2021 — 2024',
  },
]

export const certifications = [
  { name: 'Java Fullstack', issuer: 'Naresh It', year: '2025' },
]

export const projects = [
  {
    id: 'proj-1',
    title: 'InventoryHub',
    description: 'A REST API for multi-warehouse inventory tracking with role-based access control.',
    architecture: 'Spring Boot + MySQL, JWT auth, deployed on Render',
    tags: ['Spring Boot', 'MySQL', 'REST API', 'JWT'],
    category: 'Backend',
    demo: 'https://example.com',
    repo: 'https://github.com/AnilGouda/InventoryHub.git',
  },
  {
    id: 'proj-2',
    title: 'PatientCare DB',
    description: 'A normalized clinic management schema with stored procedures for appointment scheduling.',
    architecture: 'Oracle DB, PL/SQL procedures, ER-modeled schema',
    tags: ['Oracle', 'PL/SQL', 'Database Design'],
    category: 'Database',
    demo: 'https://example.com',
    repo: 'https://github.com/yourusername/patientcare-db',
  },
  {
    id: 'proj-3',
    title: 'TaskFlow',
    description: 'A full-stack task manager — Spring Boot API on the backend, a small React UI on the front.',
    architecture: 'Spring Boot + MySQL backend, React basics frontend',
    tags: ['Spring Boot', 'MySQL', 'React', 'REST API'],
    category: 'Full Stack',
    demo: 'https://example.com',
    repo: 'https://github.com/yourusername/taskflow',
  },
  {
    id: 'proj-4',
    title: 'Expense Tracker',
    description: 'A personal finance tracker with monthly summaries and category-based reporting.',
    architecture: 'Spring Boot + Oracle DB, HTML/CSS/JS frontend with DOM manipulation',
    tags: ['Spring Boot', 'Oracle', 'JavaScript'],
    category: 'Full Stack',
    demo: 'https://example.com',
    repo: 'https://github.com/yourusername/expense-tracker',
  },
]

export const projectCategories = ['All', 'Backend', 'Full Stack', 'Database']
