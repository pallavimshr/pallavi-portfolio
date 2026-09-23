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
    slug: "printdeed",
    role: "Software Engineer — Full-Stack",
    company: "PrintDeed",
    location: "Gandhinagar",
    period: "July 2026 – Present",
    order: 1,
    bullets: [
      "Own end-to-end delivery of full-stack features for the GraphX platform (Next.js, Python), taking client requirements through to production across frontend and backend.",
      "Built reusable UI components and backend API integrations that cut repeat effort on new features and gave the team consistent implementation patterns.",
      "Review teammates' code and join design discussions, catching defects and design issues before release.",
      "Run client demos and requirement discussions, turning stakeholder feedback into prioritized technical tasks and reducing requirement-related rework.",
    ],
  },
  {
    id: 2,
    slug: "namami-infotech",
    role: "Software Engineer — Full-Stack",
    company: "Namami Infotech India Pvt. Limited",
    location: "New Delhi",
    period: "Sept 2025 – June 2026",
    order: 2,
    bullets: [
      "Built and maintained multiple SPAs with React.js, Next.js, and Tailwind CSS on a reusable component architecture, cutting frontend build effort on new screens.",
      "Designed and integrated 30+ REST APIs with OAuth2 authentication, session handling, and middleware communication.",
      "Integrated Razorpay: built the initiate and confirmation APIs and verified every transaction server-side before crediting the wallet and recording transaction history.",
      "Built backend workflows for order lifecycle tracking, OTP verification, and notifications; tuned MySQL/PostgreSQL queries to cut response times by ~25%.",
    ],
  },
  {
    id: 3,
    slug: "kindtech",
    role: "Software Engineer — Frontend",
    company: "KindTech Pvt. Limited",
    location: "New Delhi",
    period: "Oct 2024 – Feb 2025",
    order: 3,
    bullets: [
      "Built a carpooling platform with Next.js, TypeScript, and REST APIs, handling 1000+ user interactions/day with responsive, cross-browser UI.",
      "Built type-safe validation pipelines with Zod, catching bad input before it reached the API and cutting runtime validation errors.",
      "Optimized rendering and API integration flows for smoother performance on mobile and desktop.",
    ],
  },
  {
    id: 4,
    slug: "infosol-technosol",
    role: "Software Engineer",
    company: "Infosol Technosol",
    location: "Bangalore",
    period: "July 2022 – Sept 2024",
    order: 4,
    bullets: [
      "Delivered 15+ features across multiple client projects using .NET, C#, ASP.NET Core Web API, React.js, Node.js, and MongoDB.",
      "Improved performance and maintainability through API optimization, SQL query improvements, and reusable React components.",
      "Worked in Agile/Scrum with QA, BAs, and client stakeholders (Jira); cut recurring defects through systematic debugging, code reviews, and API validation.",
    ],
  },
];
