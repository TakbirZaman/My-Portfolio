import heroImg from "../assets/takbir2.webp";
import aboutImg from "../assets/takbir1.webp";
import galleryImg from "../assets/takbir.webp";
import deansAwardImg from "../assets/deansaward.webp";
import ridePriceImg from "../assets/ridepricebd.webp";
import constructionTrackerImg from "../assets/construction-tracker1.webp";
import airCanvasImg from "../assets/air-canvas.webp";
import techCommerceImg from "../assets/techCommerce.webp";
import dhakaTrafficImg from "../assets/dhaka-traffic-predictor.webp";
import taskManagerImg from "../assets/task-manager.webp";
import beatMeeImg from "../assets/beatMEE.webp";
import ragChatbotImg from "../assets/rag-chatbot.webp";
import apexDriftImg from "../assets/apex-car-drifting.webp";
//import resumePdf from "../assets/resume.pdf";

export const personalInfo = {
  name: "Takbir Zaman Bhuiyan",
  title: "Full-Stack Developer · AI & Automation Engineer",
  tagline: "Full-Stack · AI/ML · Automation",
  bio: "CSE graduate (AIUB — CGPA 3.76) building AI-powered web products. At WebtrixLab I ship n8n + Gemini workflows and FastAPI/Next.js apps; previously SWE Intern at NN Services & Engineering Ltd (NNSEL). I take ideas from 0 → deployed — clean APIs, data pipelines, and polished UX. Open to full-time Software Engineering roles.",
  location: "Dhaka, Bangladesh · Remote",
  email: "takbirzamanbhuiyan@gmail.com",
  phone: "+8801631107100",
  website: "https://takbirzaman.github.io",
  github: "https://github.com/TakbirZaman",
  linkedin: "https://www.linkedin.com/in/takbir-zaman-bhuiyan/",
  resumeUrl: "/TakbirZamanBhuiyan_Resume.pdf",
  photos: {
    hero: heroImg,
    about: aboutImg,
    gallery: galleryImg,
    deansAward: deansAwardImg,
  },
};

export const stats = [
  { label: "CGPA", value: "3.76", suffix: "/4.0" },
  { label: "Projects Built", value: "22", suffix: "+" },
  { label: "Dean's Awards", value: "2", suffix: "×" },
  { label: "Research Projects", value: "4", suffix: "" },
];

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "2022 – 2026 · Graduated",
    cgpa: "3.76 / 4.0",
    highlights: [
      "Graduated — Class of 2026",
      "Dean's Award – Fall 2023–24",
      "Dean's Award – Fall 2024–25",
      "Relevant Coursework: Data Structures & Algorithms, Machine Learning, Computer Vision, Database Systems, Software Engineering, Artificial Intelligence",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Chandpur Government College",
    location: "Chandpur, Bangladesh",
    period: "2020",
    cgpa: "5.00 / 5.00",
    highlights: [
      "Science Group",
      "Achieved maximum GPA",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Hasan Ali Govt. High School",
    location: "Chandpur, Bangladesh",
    period: "2018",
    cgpa: "5.00 / 5.00",
    highlights: [
      "Science Group",
      "Achieved maximum GPA",
    ],
  },
];
export const experience = [
  {
    role: "AI Automation & Full Stack Developer",
    company: "WebtrixLab",
    location: "Dhaka, Bangladesh",
    period: "2025 – Present",
    type: "Part-time",
    highlights: [
      "Building and deploying AI automation workflows using n8n for real client use cases",
      "Developing full-stack web applications from frontend to backend and database",
      "Building automated content pipelines and data-driven growth strategies for digital brand presence",
      "Contributing to client project delivery across web development and automation services",
    ],
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "n8n", "REST APIs", "Git & GitHub"],
  },
  {
    role: "Software Engineer Intern",
    company: "NNSEL",
    location: "Dhaka, Bangladesh",
    period: "Feb 2025 – May 2025",
    type: "Internship",
    highlights: [
      "Developed and maintained responsive React-based frontend components",
      "Built and integrated RESTful APIs using Node.js and Express",
      "Reduced frontend load time by optimizing component rendering and API calls",
      "Collaborated in agile sprint cycles, code reviews, and team stand-ups",
    ],
    tech: ["React", "Node.js", "Express", "REST APIs", "PostgreSQL", "Git & GitHub"],
  },
];
export const skillTags = {
  Languages: ["C#", "Python", "JavaScript", "SQL", "C++", "PHP", "Java"],
  "Web & Frameworks": ["ASP.NET Core", "EF Core", "React", "Node.js", "Express.js", "Tailwind CSS", "FastAPI", "HTML/CSS"],
  "Databases & Tools": ["SQL Server", "MySQL", "Oracle DB", "Git", "GitHub", "Postman", "Docker"],
  "ML & AI": ["TensorFlow", "scikit-learn", "DenseNet121", "EfficientNet-B3", "NLP", "PCA", "Grad-CAM", "OpenCV", "Gemini AI", "RAG"],
  "Automation & DevOps": ["GitHub Actions", "n8n", "Streamlit", "Telegram API", "Google Sheets API"],
};

export const projects = [
  {
    title: "TechCommerce — AI Based E-Commerce Platform",
    description:
      "Full-stack e-commerce with FastAPI + Next.js: 69 products across 14 categories, JWT auth, session cart, coupon system, order tracking, admin panel (products/orders/coupons/customers/delivery zones) + AI Advisor (natural-language recommendations), PC Builder with compatibility engine, and product comparison.",
    tech: ["FastAPI", "Next.js", "TypeScript", "SQLAlchemy", "Tailwind CSS", "JWT"],
    category: "Full Stack",
    color: "teal",
    live: "https://techcommerce-frontend-kappa.vercel.app",
    github: "https://github.com/TakbirZaman/TechCommerce",
    featured: true,
    image: techCommerceImg,
  },
  {
    title: "Construction Tracker",
    description:
      "Construction project management system for planning, task assignment, budget monitoring, material management, and team collaboration with role-based access control and real-time updates.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    category: "Full Stack",
    color: "teal",
    live: "https://construction-tracker-7cy9.onrender.com/",
    github: "https://github.com/TakbirZaman/Construction-Tracker",
    featured: true,
    image: constructionTrackerImg,
  },
  {
    title: "RidePrice BD — Fare Estimator",
    description:
      "Real-time ride fare estimation system using a regression-based ML model trained on Dhaka transport data. Implements client-side inference for zero-latency predictions, incorporating features like distance, demand, weather, and peak-hour multipliers across 76+ locations.",
    tech: ["Python", "scikit-learn", "JavaScript", "Netlify"],
    category: "AI/ML",
    color: "teal",
    live: "https://ridepricebd.netlify.app",
    github: "https://github.com/TakbirZaman/RidePriceBD",
    featured: true,
    image: ridePriceImg,
  },
  {
    title: "Task Manager",
    description:
      "Full-stack task management app with JWT auth, per-user data isolation, CRUD, filtering, sorting, CSV export, and task statistics. Built with a React SPA + Express REST API + PostgreSQL — no ORM, raw parameterized SQL.",
    tech: ["React 19", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS", "Docker"],
    category: "Full Stack",
    color: "indigo",
    live: "https://task-manager-takbirzamans-projects.vercel.app/",
    github: "https://github.com/TakbirZaman/Task-Manager",
    featured: true,
    image: taskManagerImg,
  },
  {
    title: "Air Canvas — Hand-Tracking Drawing Board",
    description:
      "Browser air-drawing via MediaPipe HandLandmarker and webcam. Pinch to draw, open palm to erase, peace sign to undo, fist to clear. Triple-canvas architecture for flicker-free strokes, quadratic curve smoothing, stored stroke data for undo, and live FPS/confidence telemetry.",
    tech: ["Next.js", "MediaPipe", "TypeScript", "Tailwind CSS", "Canvas API"],
    category: "AI/ML",
    color: "violet",
    live: "https://draw-in-air-steel.vercel.app",
    github: "https://github.com/TakbirZaman/Air-Canvas",
    featured: true,
    image: airCanvasImg,
  },
  {
    title: "Dhaka Traffic Predictor",
    description:
      "AI congestion prediction for Dhaka routes. Crowd-sourced reports + historical aggregation with Gemini-generated natural-language explanations, Redis caching + BullMQ queuing, JWT refresh rotation, Zod-validated APIs, and dark asphalt/rickshaw-meter UI.",
    tech: ["Next.js", "Express", "TypeScript", "MongoDB", "Redis", "Gemini AI"],
    category: "AI/ML",
    color: "indigo",
    live: null,
    github: "https://github.com/TakbirZaman/Dhaka-s-traffic-predictor",
    featured: false,
    image: dhakaTrafficImg,
  },
  {
    title: "RAG Chatbot — Document Q&A",
    description:
      "Retrieval-Augmented Generation chatbot that answers questions from uploaded PDFs. TF-IDF cosine similarity search in pure Python for chunk retrieval, powered by Gemini LLM for accurate, context-grounded answers.",
    tech: ["Python", "Streamlit", "Gemini AI", "RAG"],
    category: "AI/ML",
    color: "indigo",
    live: "https://takbirzaman-rag-chatbot.streamlit.app",
    github: "https://github.com/TakbirZaman/rag-chatbot",
    featured: false,
    image: ragChatbotImg,
  },
  {
    title: "Churn Radar — Customer Churn Predictor",
    description:
      "Full-stack ML app predicting churn risk in real time (single + bulk CSV). FastAPI + scikit-learn Random Forest (ROC-AUC 0.80) with Next.js dashboard that auto-generates its form/validation from the model schema — no frontend changes when dataset changes.",
    tech: ["Next.js", "TypeScript", "FastAPI", "scikit-learn", "Tailwind CSS"],
    category: "AI/ML",
    color: "violet",
    live: null,
    github: "https://github.com/TakbirZaman/Customer-Churn-Predictor",
    featured: false,
  },
  {
    title: "n8n Automation Workflows",
    description:
      "Production n8n workflows: Messenger AI agent with memory, Facebook Page auto-responder (Gemini Vision), Gmail HR pipeline that scores/logs candidates, scheduled Telegram job-alert bot, and LLM email auto-responder. Gmail/Telegram/Google Sheets APIs.",
    tech: ["n8n", "Gemini AI", "Gmail API", "Telegram API", "Google Sheets"],
    category: "Automation",
    color: "amber",
    live: null,
    github: "https://github.com/TakbirZaman/Automation-workflows",
    featured: false,
  },
  {
    title: "RailView — OpenGL Railway Simulation",
    description:
      "2D railway simulation in C++ with OpenGL (GLUT): moving trains, drifting clouds, interactive Day/Night cycle. Hills, trees, lamps, roads, platforms — all OpenGL primitives and keyboard-controlled animation.",
    tech: ["C++", "OpenGL", "GLUT", "Animation"],
    category: "Graphics",
    color: "indigo",
    live: null,
    github: "https://github.com/TakbirZaman/RailView---OpenGL-Railway-Simulation",
    featured: false,
  },
  {
    title: "Apex Drift — Top-Down Arcade Racer",
    description:
      "Arcade racer with React + Canvas + Vite. Top-down drift physics, WASD/arrows, 2-player local multiplayer, garage upgrades, and coin progression persisted in localStorage with supercar-inspired designs.",
    tech: ["React", "Canvas API", "Vite", "JavaScript", "Tailwind CSS"],
    category: "Game Dev",
    color: "amber",
    live: null,
    github: "https://github.com/TakbirZaman/Car-Drift",
    featured: true,
    image: apexDriftImg,
  },
  {
    title: "beatMEE — Browser Fighting Game",
    description:
      "Fast-paced 2D fighting game with React + HTML5 Canvas (no engine). Adaptive AI difficulty, combo mechanics, cinematic effects, and optimized mobile touch controls.",
    tech: ["React", "Canvas API", "Vite", "Game Dev"],
    category: "Game Dev",
    color: "amber",
    live: "https://TakbirZaman.github.io/beatMEE/",
    github: "https://github.com/TakbirZaman/beatMEE",
    featured: false,
    image: beatMeeImg,
  },
];

export const research = [
  {
    title: "Sentiment-Based Product Grouping",
    description: "Built an NLP pipeline using TF-IDF and DBSCAN clustering with PCA for dimensionality reduction, enabling sentiment-driven product segmentation.",
    tags: ["NLP", "TF-IDF", "DBSCAN", "PCA"],
    metrics: { method: "DBSCAN", vectorizer: "TF-IDF", reduction: "PCA" },
    status: "Research Project",
    icon: "🛍️",
  },
  {
    title: "Explainable Osteoporosis Detection System",
    description: "DenseNet121-based deep learning model achieving 87.5% recall, enhanced with SE Attention and Grad-CAM for interpretable predictions and clinical relevance.",
    tags: ["DenseNet121", "Grad-CAM", "XAI"],
    metrics: { recall: "87.5%" },
    status: "Research Project",
    icon: "🩻",
  },
  {
    title: "Waste Image Classification Using EfficientNet-B3",
    description: "EfficientNet-B3 model achieving 94% accuracy, outperforming multiple architectures in multi-class waste classification tasks.",
    tags: ["EfficientNet-B3", "Transfer Learning"],
    metrics: { accuracy: "94%" },
    status: "Research Project",
    icon: "♻️",
  },
  {
    title: "Brain Tumor Segmentation & Classification",
    description: "Multi-task deep learning framework for MRI analysis achieving 95.6% accuracy across multiple tumor classes.",
    tags: ["Deep Learning", "MRI"],
    metrics: { accuracy: "95.6%" },
    status: "Research Project",
    icon: "🧠",
  },
];

export const achievements = [
  "Dean's Award (2×)",
  "Cisco IT Essentials Certification",
];