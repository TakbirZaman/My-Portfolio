
import heroImg from "../assets/takbir2.jpg";
import aboutImg from "../assets/takbir1.jpg";
import galleryImg from "../assets/takbir.jpg";
//import resumePdf from "../assets/resume.pdf";

export const personalInfo = {
  name: "Takbir Zaman Bhuiyan",
  title: "Software Engineer (Backend & ML Systems)",
  tagline: "CSE Graduate · Full-Stack Engineer · Applied ML Researcher",
  bio: "Computer Science graduate from AIUB with a focus on backend engineering and applied machine learning. I design scalable APIs, structured system architectures, and data-driven applications, bridging software engineering with intelligent systems. Experienced in MERN and ASP.NET ecosystems, with research in NLP and computer vision. Currently seeking software engineering roles where I can build performant, production-grade systems.",
  location: "Dhaka, Bangladesh",
  email: "takbirzamanbhuiyan@gmail.com",
  phone: "+8801631107100",
  website: "https://takbirzaman.github.io",
  github: "https://github.com/TakbirZaman",
  linkedin: "https://linkedin.com/in/takbirzaman",
resumeUrl: "/TAKBIRZAMANBHUIYAN_Resume.pdf",
  photos: {
    hero: heroImg,
    about: aboutImg,
    gallery: galleryImg,
  },
};

export const stats = [
  { label: "CGPA", value: "3.75", suffix: "/4.0" },
  { label: "Projects Built", value: "9", suffix: "+" },
  { label: "Dean's Awards", value: "2", suffix: "×" },
  { label: "Research Projects", value: "4", suffix: "" },
];

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "2022 – Present",
    cgpa: "3.75 / 4.0",
    highlights: [
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
  }
];

export const experience = [
  {
    role: "Software Engineer Intern",
    company: "NNSEL",
    location: "Dhaka, Bangladesh",
    period: "Feb 2025 – May 2025",
    type: "Internship",
    highlights: [
      "Developed and maintained responsive React-based frontend components",
      "Built and integrated RESTful APIs using Node.js and Express",
      "Improved API response time by ~20% through query optimization and efficient routing",
      "Reduced frontend load time by optimizing component rendering and API calls",
      "Collaborated in agile sprint cycles, code reviews, and team stand-ups",
    ],
    tech: ["React", "Node.js", "Express", "REST APIs", "PostgreSQL", "Git & GitHub"],
  },
];

export const skills = {
  Languages: [
    { name: "C#", level: 90 },
    { name: "Python", level: 88 },
    { name: "JavaScript", level: 78 },
    { name: "SQL", level: 85 },
    { name: "C++", level: 75 },
    { name: "PHP", level: 70 },
  ],
  "Web & Frameworks": [
    { name: "ASP.NET Core", level: 88 },
    { name: "React", level: 78 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "EF Core", level: 82 },
    { name: "FastAPI", level: 78 },
    { name: "HTML/CSS", level: 90 },
  ],
  "Databases & DevOps": [
    { name: "SQL Server", level: 88 },
    { name: "MySQL", level: 82 },
    { name: "Oracle DB", level: 72 },
    { name: "Git & GitHub", level: 88 },
    { name: "Postman", level: 82 },
    { name: "Docker", level: 68 },
  ],
  "ML & AI": [
    { name: "scikit-learn", level: 80 },
    { name: "TensorFlow / Keras", level: 78 },
    { name: "NLP (TF-IDF/DBSCAN)", level: 78 },
    { name: "LSTM / Autoencoder", level: 75 },
    { name: "CNN (DenseNet121)", level: 72 },
    { name: "OpenCV / YuNet", level: 70 },
  ],
};

export const skillTags = {
  Languages: ["C#", "Python", "JavaScript", "SQL", "C++", "PHP", "Java"],
  "Web & Frameworks": ["ASP.NET Core", "EF Core", "React", "Node.js", "Express.js", "Tailwind CSS", "FastAPI", "HTML/CSS"],
  "Databases & Tools": ["SQL Server", "MySQL", "Oracle DB", "Git", "GitHub", "Postman", "Docker"],
  "ML & AI": ["TensorFlow", "scikit-learn", "DenseNet121", "EfficientNet-B3", "NLP", "PCA", "Grad-CAM", "OpenCV"],
};

export const projects = [
  {
    title: "ConnectHub — Social Platform",
    description: "Full-stack social platform built with MVC architecture featuring RBAC-based authentication, post management, and marketplace integration. Designed with modular backend structure and normalized MySQL schema for scalable user interactions.",
    tech: ["PHP", "HTML/CSS", "MySQL", "MVC"],
    category: "Full Stack",
    color: "indigo",
    live: "https://takbir.gt.tc/ConnectHub/index.php?page=login&i=1",
    github: "https://github.com/TakbirZaman/ConnectHub",
    featured: true,
  },
  {
    title: "Student Attendance Management API",
    description: "RESTful attendance system built with ASP.NET Core Web API using clean 3-layer architecture. Supports secure CRUD operations, attendance tracking, and efficient student-class mapping with optimized database persistence.",
    tech: ["C#", "ASP.NET Core", "EF Core", "SQL"],
    category: "Backend API",
    color: "violet",
    live: "#",
    github: "https://github.com/TakbirZaman/Student_Attendance_Management",
    featured: false,
  },
  {
    title: "Face Recognition System",
    description: "Real-time face recognition system using YuNet for detection and SFace embeddings for identification. Implements cosine similarity matching with a custom JS–Python bridge for live capture and processing, optimized for low-latency inference and cloud sync.",
    tech: ["Python", "OpenCV", "YuNet", "SFace"],
    category: "Computer Vision",
    color: "teal",
    live: "#",
    github: "https://github.com/TakbirZaman",
    featured: false,
  },
  {
    title: "RidePrice BD — Fare Estimator",
    description: "Real-time ride fare estimation system using a regression-based ML model trained on Dhaka transport data. Implements client-side inference for zero-latency predictions, incorporating features like distance, demand, weather, and peak-hour multipliers across 76+ locations.",
    tech: ["Python", "scikit-learn", "JavaScript", "Netlify"],
    category: "ML Web App",
    color: "teal",
    live: "https://ridepricebd.netlify.app",
    github: "https://github.com/TakbirZaman/RidePriceBD",
    featured: true,
  },
  {
    title: "beatMEE — Browser Fighting Game",
    description: "Fast-paced 2D fighting game built with React and HTML5 Canvas without a game engine. Features adaptive AI difficulty, combo mechanics, cinematic effects, and optimized mobile touch controls.",
    tech: ["React", "Canvas API", "Vite", "Game Dev"],
    category: "Game Dev",
    color: "amber",
    featured: true,
    live: "https://TakbirZaman.github.io/beatMEE/",
    github: "https://github.com/TakbirZaman/beatMEE",
  },
  {
    title: "Indoor Hospital Management System",
    description: "Relational database system with normalized schema covering patients, doctors, wards, appointments, and billing, ensuring data integrity and efficient query performance.",
    tech: ["Oracle", "SQL", "DB Design"],
    category: "Database",
    color: "violet",
    live: "#",
    github: "https://github.com/TakbirZaman/Indoor-Hospital-Management",
    featured: false,
  },
  {
    title: "Online Job Management Portal",
    description: "Java Swing-based desktop application for managing jobs, workers, and customer requests with real-time tracking and workflow validation.",
    tech: ["Java", "Swing", "Desktop"],
    category: "Desktop App",
    color: "amber",
    live: "#",
    github: "https://github.com/TakbirZaman/Online-Job-Management-Portal",
    featured: false,
  },
  {
    title: "RailView — OpenGL Railway Simulation",
    description: "2D railway simulation built in C++ with OpenGL featuring smooth animations, interactive controls, and dynamic day-night transitions.",
    tech: ["C++", "OpenGL", "Animation"],
    category: "Graphics / Simulation",
    color: "indigo",
    live: "#",
    github: "https://github.com/TakbirZaman",
    featured: false,
  },
  {
    title: "Loan Approval Data Preprocessing",
    description: "Automated preprocessing pipeline in R handling missing values, outlier removal using IQR, and feature preparation for machine learning models.",
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
  "Dean’s Award (2×)",
  "Cisco IT Essentials Certification",
];