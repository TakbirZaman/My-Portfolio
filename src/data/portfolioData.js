import heroImg from "../assets/takbir2.jpg";
import aboutImg from "../assets/takbir1.jpg";
import galleryImg from "../assets/takbir.jpg";
import deansAwardImg from "../assets/deansaward.jpg";
import ridePriceImg from "../assets/ridepricebd.png";
import constructionTrackerImg from "../assets/construction-tracker1.png";
import connectHubImg from "../assets/connectHub.png";
import airCanvasImg from "../assets/air-canvas.png";
import techCommerceImg from "../assets/techCommerce.png";
import dhakaTrafficImg from "../assets/dhaka-traffic-predictor.png";
import taskManagerImg from "../assets/task-manager.png";
import beatMeeImg from "../assets/beatMEE.png";
import ragChatbotImg from "../assets/rag-chatbot.png";
import apexDriftImg from "../assets/apex-car-drifting.png";
import turfFootballImg from "../assets/turf-football.png";
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
export const skills = {
  "Web & Frameworks": [
    { name: "ASP.NET Core", level: 88 },
    { name: "React", level: 78 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "EF Core", level: 82 },
    { name: "FastAPI", level: 78 },
    { name: "HTML/CSS", level: 90 },
  ],
  "ML & AI": [
    { name: "Gemini AI / RAG", level: 75 },
    { name: "n8n", level: 75 },
    { name: "scikit-learn", level: 80 },
    { name: "TensorFlow / Keras", level: 78 },
    { name: "NLP (TF-IDF/DBSCAN)", level: 78 },
    { name: "LSTM / Autoencoder", level: 75 },
    { name: "CNN (DenseNet121)", level: 72 },
    { name: "OpenCV / YuNet", level: 70 },
  
  ],
  Languages: [
    { name: "C#", level: 90 },
    { name: "Python", level: 88 },
    { name: "JavaScript", level: 78 },
    { name: "SQL", level: 85 },
    { name: "C++", level: 75 },
  ],
  "Databases & DevOps": [
    { name: "SQL Server", level: 88 },
    { name: "MySQL", level: 82 },
    { name: "Oracle DB", level: 72 },
    { name: "Git & GitHub", level: 88 },
    { name: "Postman", level: 82 },
    { name: "Docker", level: 68 },
    { name: "GitHub Actions", level: 75 },
  ],
  "AI-Augmented Development": [
    { name: "Claude / ChatGPT / Gemini", level: 85 },
    { name: "OpenCode", level: 78 },
    { name: "Prompt Engineering", level: 82 },
    { name: "AI Code Review", level: 80 },
  ],
};
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
    category: "ML Web App",
    color: "teal",
    live: "https://ridepricebd.netlify.app",
    github: "https://github.com/TakbirZaman/RidePriceBD",
    featured: true,
    image: ridePriceImg,
  },

  {
    title: "ConnectHub — Social Platform",
    description:
      "Full-stack social platform built with MVC architecture featuring RBAC-based authentication, post management, and marketplace integration. Designed with modular backend structure and normalized MySQL schema for scalable user interactions.",
    tech: ["PHP", "HTML/CSS", "MySQL", "MVC"],
    category: "Full Stack",
    color: "indigo",
    live: "https://takbir.gt.tc/ConnectHub/index.php?page=login&i=1",
    github: "https://github.com/TakbirZaman/ConnectHub",
    featured: false,
    image: connectHubImg,
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
    category: "Computer Vision",
    color: "violet",
    live: "https://draw-in-air-steel.vercel.app",
    github: "https://github.com/TakbirZaman/Air-Canvas",
    featured: true,
    image: airCanvasImg,
  },
 

 
  {
    title: "RAG Chatbot — Document Q&A",
    description:
      "Retrieval-Augmented Generation chatbot that answers questions from uploaded PDFs. Implements TF-IDF cosine similarity search in pure Python for chunk retrieval, powered by Gemini LLM for accurate, context-grounded answers.",
    tech: ["Python", "Streamlit", "Gemini AI", "RAG"],
    category: "ML / AI",
    color: "indigo",
    live: "https://takbirzaman-rag-chatbot.streamlit.app",
    github: "https://github.com/TakbirZaman/rag-chatbot",
    featured: false,
    image: ragChatbotImg,
  },


  {
    title: "Student Attendance Management ",
    description:
      "RESTful attendance system built with ASP.NET Core Web API using clean 3-layer architecture. Supports secure CRUD operations, attendance tracking, and efficient student-class mapping with optimized database persistence.",
    tech: ["C#", "ASP.NET Core", "EF Core", "SQL"],
    category: "Backend API",
    color: "violet",
    live: "#",
    github: "https://github.com/TakbirZaman/Student_Attendance_Management",
    featured: false,
  },
  {
    title: "Face Recognition System",
    description:
      "Real-time face recognition system using YuNet for detection and SFace embeddings for identification. CLAHE preprocessing + affine alignment, 128-d embeddings, cosine similarity matching. Auto-builds gallery from Google Drive subfolders with augmentation (flip/brightness) and a custom JS–Python bridge for live capture.",
    tech: ["Python", "OpenCV", "YuNet", "SFace", "Jupyter"],
    category: "Computer Vision",
    color: "teal",
    live: "#",
    github: "https://github.com/TakbirZaman/face-recognition-system",
    featured: false,
  },
  {
    title: "Dhaka Traffic Predictor",
    description:
      "AI-integrated congestion prediction platform for Dhaka traffic routes. Combines crowd-sourced reports and historical aggregation with Gemini-generated natural-language explanations of why a route is congested — not just a score. Features Redis caching + BullMQ job queuing, JWT auth with refresh token rotation, Zod-validated APIs, and a distinctive dark asphalt/rickshaw fare-meter UI.",
    tech: ["Next.js", "Express", "TypeScript", "MongoDB", "Redis", "Gemini AI"],
    category: "ML Web App",
    color: "indigo",
    live: "#",
    github: "https://github.com/TakbirZaman/Dhaka-s-traffic-predictor",
    featured: false,
    image: dhakaTrafficImg,
  },
 
   
  
  {
    title: "n8n Automation Workflows",
    description:
      "A collection of production n8n workflows covering AI-powered messaging, recruitment automation, job alerts, and email auto-response: a Messenger AI agent with memory, a Facebook Page auto-responder using Gemini Vision for text and image messages, a Gmail HR recruitment pipeline that scores and logs candidates, a scheduled Telegram job-alert bot, and a lightweight LLM-powered email auto-responder.",
    tech: ["n8n", "Gemini AI", "Gmail API", "Telegram API", "Google Sheets"],
    category: "ML / AI",
    color: "amber",
    live: "#",
    github: "https://github.com/TakbirZaman/Automation-workflows",
    featured: false,
  },
  
  
  {
    title: "Churn Radar — Customer Churn Predictor",
    description:
      "Full-stack ML application that predicts customer churn risk in real time, one customer at a time or in bulk from a CSV upload. FastAPI + scikit-learn Random Forest backend (ROC-AUC 0.80) with a Next.js dashboard that auto-generates its input form and validation directly from the model's schema — no frontend changes needed when the underlying dataset changes.",
    tech: ["Next.js", "TypeScript", "FastAPI", "scikit-learn", "Tailwind CSS"],
    category: "ML / AI",
    color: "violet",
    live: "#",
    github: "https://github.com/TakbirZaman/Customer-Churn-Predictor",
    featured: false,
  },
  {
    title: "Email Agent — AI Task Automation",
    description:
      "Autonomous multi-step AI agent that reads emails, analyzes content using Gemini, and auto-generates prioritized task lists. Runs on a daily schedule via GitHub Actions with zero manual effort.",
    tech: ["Python", "Gemini AI", "GitHub Actions", "Automation"],
    category: "ML / AI",
    color: "teal",
    live: "https://github.com/TakbirZaman/email-agent/actions",
    github: "https://github.com/TakbirZaman/email-agent",
    featured: false,
  },
  {
    title: "Job Alert & Tracker Automation",
    description:
      "End-to-end automation that fetches remote job listings daily, scores them with a custom JavaScript algorithm for junior-friendliness and tech stack match, sends instant Telegram alerts for top matches, and logs everything to Google Sheets.",
    tech: ["n8n", "JavaScript", "Telegram API", "Google Sheets"],
    category: "ML / AI",
    color: "amber",
    live: "#",
    github: "https://github.com/TakbirZaman",
    featured: false,
  },
  {
    title: "Indoor Hospital Management System",
    description:
      "Relational database system with normalized schema covering patients, doctors, wards, appointments, and billing, ensuring data integrity and efficient query performance.",
    tech: ["Oracle", "SQL", "DB Design"],
    category: "Database",
    color: "violet",
    live: "#",
    github: "https://github.com/TakbirZaman/Indoor-Hospital-Management",
    featured: false,
  },
  {
    title: "Online Job Management Portal",
    description:
      "Java Swing-based desktop application for managing jobs, workers, and customer requests with real-time tracking and workflow validation.",
    tech: ["Java", "Swing", "Desktop"],
    category: "Desktop App",
    color: "amber",
    live: "#",
    github: "https://github.com/TakbirZaman/Online-Job-Management-Portal",
    featured: false,
  },
  {
    title: "AI Email Auto-Responder",
    description:
      "Fully automated email management system that detects incoming Gmail messages, passes content to an AI model via OpenRouter, and sends professional contextual replies within 60 seconds — zero human intervention required.",
    tech: ["n8n", "Gmail API", "OpenRouter AI", "JavaScript"],
    category: "ML / AI",
    color: "violet",
    live: "#",
    github: "https://github.com/TakbirZaman/Email-auto-responder",
    featured: false,
  },
  {
    title: "RailView — OpenGL Railway Simulation",
    description:
      "2D railway simulation built in C++ with OpenGL (GLUT) featuring moving trains, drifting clouds, and interactive Day/Night cycle. All scenery — hills, trees, lamps, roads, platforms — drawn with OpenGL primitives and keyboard-controlled animation.",
    tech: ["C++", "OpenGL", "GLUT", "Animation"],
    category: "Graphics / Simulation",
    color: "indigo",
    live: "#",
    github: "https://github.com/TakbirZaman/RailView---OpenGL-Railway-Simulation",
    featured: false,
  },


   {
    title: "Apex Drift — Top-Down Arcade Racer",
    description:
      "Arcade racer built with React + Canvas + Vite. Top-down drift physics, keyboard steering (WASD / arrows), 2-player local multiplayer, garage upgrades, and coin/dollar progression persisted in localStorage with supercar-inspired original designs.",
    tech: ["React", "Canvas API", "Vite", "JavaScript", "Tailwind CSS"],
    category: "Game Dev",
    color: "amber",
    live: "#",
    github: "https://github.com/TakbirZaman/Car-Drift",
    featured: true,
    image: apexDriftImg,
  },
  {
    title: "Energy Anomaly Detection — ML Pipeline",
    description:
      "Unsupervised anomaly detection on energy consumption time-series using Python. Features cleaning, seasonal decomposition, and ML scoring for spike/outage detection; designed for smart-meter datasets.",
    tech: ["Python", "Pandas", "scikit-learn", "ML"],
    category: "ML / AI",
    color: "amber",
    live: "#",
    github: "https://github.com/TakbirZaman/energy-anomaly-ml",
    featured: false,
  }, 
   {
    title: "beatMEE — Browser Fighting Game",
    description:
      "Fast-paced 2D fighting game built with React and HTML5 Canvas without a game engine. Features adaptive AI difficulty, combo mechanics, cinematic effects, and optimized mobile touch controls.",
    tech: ["React", "Canvas API", "Vite", "Game Dev"],
    category: "Game Dev",
    color: "amber",
    live: "https://TakbirZaman.github.io/beatMEE/",
    github: "https://github.com/TakbirZaman/beatMEE",
    featured: false,
    image: beatMeeImg,
  },
  
  
  {
    title: "Turf Football — Turf Booking Platform",
    description:
      "Turf booking platform for football grounds with real-time slot availability, team vs team match scheduling, and payment-ready booking flow. Built with responsive UI, slot locking, and admin management for turfs, pricing, and bookings.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    color: "teal",
    live: "#",
    github: "https://github.com/TakbirZaman",
    featured: false,
    image: turfFootballImg,
  },
  {
    title: "Loan Approval Data Preprocessing",
    description:
      "Automated preprocessing pipeline in R handling missing values, outlier removal using IQR, and feature preparation for machine learning models.",
    tech: ["R", "IQR", "Data Cleaning"],
    category: "ML / AI",
    color: "teal",
    live: "#",
    github: "https://github.com/TakbirZaman/Loan-Approval-Analysis-Data-Cleaning-in-R-language",
    featured: false,
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