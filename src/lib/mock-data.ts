import type { ExperienceEntry, Project } from "./wordpress";

// This fallback content lets the project run end-to-end with
// `npm run dev` and no WordPress instance connected. Once
// WORDPRESS_API_URL is set in .env, lib/wordpress.ts fetches real
// content from WordPress instead and this file is never touched.

export const MOCK_PROJECTS: Project[] = [
  {
    id: 1,
    slug: "pushpratan-industries",
    title: "Pushpratan Industries",
    tagline: "Corporate website for a manufacturing company, built for speed and clarity.",
    techStack: "Next.js, React, Tailwind CSS",
    year: "2024",
    githubUrl: null,
    liveUrl: "https://pushpratan-industries.vercel.app/",
    body: [
      "A production website for a manufacturing business, built with Next.js and deployed on Vercel. The brief was straightforward on purpose: fast load times, clean information architecture, and a design that reads as credible to B2B visitors evaluating the company.",
      "Built with reusable React components and Tailwind CSS for consistent styling across pages, with attention to responsive behavior across devices.",
    ],
    highlights: [
      "Deployed and live on Vercel",
      "Built with reusable component architecture",
      "Fully responsive across devices",
    ],
  },
  {
    id: 2,
    slug: "deepsoul",
    title: "DeepSoul",
    tagline: "A mental health and self-help resource platform with theme support.",
    techStack: "React, JavaScript, Tailwind CSS, Context API",
    year: "2024",
    githubUrl: null,
    liveUrl: "https://fabulous-moxie-43367a.netlify.app/",
    body: [
      "DeepSoul is a resource platform organized around therapy information, self-help content, and curated resources, built to feel calm and easy to navigate for people who may be visiting during a stressful moment.",
      "Theme management is handled with React Context API, with the user's dark/light mode preference persisted to local storage so it survives page reloads. A floating scroll-to-top button improves navigation on longer content pages.",
    ],
    highlights: [
      "Dark/light theme toggle persisted via local storage",
      "Modular sections: Hero, Therapy, Self-Help, Resources",
      "Scroll-to-top button for long-form content pages",
    ],
  },
  {
    id: 3,
    slug: "learnx",
    title: "LearnX",
    tagline: "A full-stack community-learning platform with real-time discussion.",
    techStack: "React.js, Node.js, Express.js, MongoDB, Socket.io",
    year: "2023",
    githubUrl: "https://github.com/pallavimshr",
    liveUrl: null,
    body: [
      "LearnX is a community-learning platform built to support real-time discussion around shared learning resources and sessions. The backend exposes REST APIs built with Express and Mongoose, backing a MongoDB schema designed around communities, resources, and sessions.",
      "Real-time bidirectional communication is handled with Socket.io, enabling live discussion without page reloads. File uploads are handled server-side with Multer, and JWT-based authentication with role-based access control governs who can create, moderate, or join a community.",
    ],
    highlights: [
      "Real-time bidirectional communication via Socket.io",
      "JWT authentication with role-based access control",
      "MongoDB schema designed for communities, resources, and sessions",
      "File uploads handled via Multer",
    ],
  },
  {
    id: 4,
    slug: "chat-rooms",
    title: "Chat Rooms",
    tagline: "A real-time discussion platform with Google sign-in and live messaging.",
    techStack: "React.js, Firebase, OAuth2",
    year: "2023",
    githubUrl: "https://github.com/pallavimshr",
    liveUrl: null,
    body: [
      "Chat Rooms is a deployed real-time discussion platform authenticated with Google OAuth2. Messaging is powered by Firebase's real-time database, with room and message search built on top so users can find relevant conversations quickly.",
      "File uploads let users share images and documents directly within a room. The project was built and shipped end-to-end, from authentication through deployment.",
    ],
    highlights: [
      "Google OAuth2 authentication",
      "Live messaging via Firebase real-time database",
      "Room and message search",
      "File uploads within chat rooms",
    ],
  },
  {
    id: 5,
    slug: "easylocker",
    title: "EasyLocker",
    tagline: "A password security tool that checks strength and generates memorable passwords.",
    techStack: "Python, REST API (Datamuse)",
    year: "2022",
    githubUrl: "https://github.com/pallavimshr",
    liveUrl: null,
    body: [
      "EasyLocker checks password strength against brute-force and dictionary-attack patterns, then generates strong passwords that are still memorable — using the Datamuse API to source real, related words instead of pure random character strings.",
      "Built as a standalone Python tool with a focus on the specific, well-defined problem of balancing password strength against human memorability.",
    ],
    highlights: [
      "Checks passwords against brute-force and dictionary-attack patterns",
      "Generates strong, memorable passwords using the Datamuse API",
    ],
  },
];

export const MOCK_EXPERIENCE: ExperienceEntry[] = [
  {
    id: 1,
    slug: "namami-infotech",
    role: "Software Engineer — Full-Stack",
    company: "Namami Infotech India Pvt. Limited",
    location: "New Delhi",
    period: "Mar 2025 – Present",
    order: 1,
    bullets: [
      "Developed and maintained 5+ scalable SPAs using React.js, Next.js, and Tailwind CSS, reducing frontend development effort by 30% through reusable component architecture.",
      "Designed and integrated 30+ RESTful APIs with OAuth2-based authentication, session handling, and middleware communication, improving backend integration efficiency by 25%.",
      "Integrated Razorpay payment gateway — built initiate and confirmation APIs, verified transactions server-side before updating wallet balance and recording transaction history.",
      "Built backend workflows including order lifecycle tracking, OTP verification, and notification systems; optimized MySQL/PostgreSQL queries, reducing response time by 25%.",
    ],
  },
  {
    id: 2,
    slug: "kindtech",
    role: "Software Engineer — Frontend",
    company: "KindTech Pvt. Limited",
    location: "New Delhi",
    period: "Oct 2024 – Feb 2025",
    order: 2,
    bullets: [
      "Developed a scalable carpooling platform using Next.js, TypeScript, and RESTful APIs, supporting 1000+ user interactions/day with responsive cross-browser compatibility.",
      "Built type-safe validation pipelines using Zod (TypeScript), reducing runtime validation issues by 45%.",
      "Optimized frontend rendering and API integration flows, improving page responsiveness by 20% across mobile and desktop devices.",
    ],
  },
  {
    id: 3,
    slug: "factly-labs",
    role: "Frontend Developer Intern",
    company: "FACTLY Labs — Kavach Initiative",
    location: "Hyderabad",
    period: "Mar 2024 – Aug 2024",
    order: 3,
    bullets: [
      "Developed modular Next.js applications and enhanced the Dega Headless CMS, contributing to 10+ scalable user-facing features while working with Docker for local development.",
      "Resolved 15+ critical issues in the Headless CMS involving filters, permissions, pagination, and content management workflows, improving system reliability.",
    ],
  },
];
