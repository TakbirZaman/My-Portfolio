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
import byteSpaceImg from "../assets/bytespace-new.webp";
import railViewImg from "../assets/railview.webp";
import universalStudioToolkitImg from "../assets/universal-studio-toolkit.webp";
import localConnectImg from "../assets/localconnect.webp";
import hookDeskImg from "../assets/hookdesk.webp";
import clientFlowImg from "../assets/client-flow.webp";
//import resumePdf from "../assets/resume.pdf";

export const personalInfo = {
  name: "Takbir Zaman Bhuiyan",
  title: "Junior Full-Stack Developer",
  tagline: "React · Next.js · Python · FastAPI",
  bio: "I build web applications with React, Next.js, and Python, from user interfaces to APIs and databases. My experience includes a software engineering internship at NNSEL and full-stack development and automation work at WebtrixLab. I am looking for a junior full-stack role in Dhaka or remotely.",
  location: "Dhaka, Bangladesh · Remote",
  email: "takbirzamanbhuiyan@gmail.com",
  phone: "+8801631107100",
  website: "https://takbirzamanbhuiyan-portfolio.vercel.app",
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
  { label: "Case Studies", value: "3", suffix: "" },
  { label: "Dean's Awards", value: "2", suffix: "×" },
  { label: "Research Projects", value: "4", suffix: "" },
];

export const education = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    period: "2022 to 2026 · Graduated",
    cgpa: "3.76 / 4.0",
    highlights: [
      "Graduated, Class of 2026",
      "Dean's Award, Fall 2023-24",
      "Dean's Award, Fall 2024-25",
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
    role: "AI Automation & Full-Stack Developer",
    company: "WebtrixLab",
    location: "Dhaka, Bangladesh",
    period: "2025 to Present",
    type: "Part-time",
    highlights: [
      "Build n8n workflows for messaging, applicant screening, and job alerts using Gemini and external APIs",
      "Develop web applications from user interface to backend services and databases",
      "Create automated content pipelines for scheduled publishing across client accounts",
      "Manage projects from requirements gathering through production deployment",
    ],
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "n8n", "REST APIs", "Git & GitHub"],
  },
  {
    role: "Software Engineer Intern",
    company: "NNSEL",
    location: "Dhaka, Bangladesh",
    period: "Feb 2025 to May 2025",
    type: "Internship",
    highlights: [
      "Built and maintained reusable React components for client dashboards",
      "Developed and integrated REST APIs using Node.js and Express",
      "Improved page performance by reducing unnecessary renders and redundant API calls",
      "Collaborated through development sprints, code reviews, and daily standups",
    ],
    tech: ["React", "Node.js", "Express", "REST APIs", "PostgreSQL", "Git & GitHub"],
  },
];
export const skillTags = {
  Languages: ["TypeScript", "JavaScript", "Python", "SQL", "C++", "C#", "PHP", "Java"],
  "Web & Frameworks": ["React", "Next.js", "FastAPI", "Node.js", "Express.js", "Tailwind CSS", "ASP.NET Core", "EF Core", "HTML/CSS"],
  "Databases & Tools": ["PostgreSQL", "MongoDB", "SQLite", "MySQL", "SQL Server", "Oracle DB", "Git", "GitHub", "Postman", "Docker"],
  "ML & AI": ["TensorFlow", "scikit-learn", "DenseNet121", "EfficientNet-B3", "NLP", "PCA", "Grad-CAM", "OpenCV", "Gemini AI", "RAG"],
  "Automation & DevOps": ["GitHub Actions", "n8n", "Streamlit", "Telegram API", "Google Sheets API"],
};

export const projects = [
  {
    title: "PolyGrep: Multithreaded Code Search Engine",
    description:
      "A C++17 code search engine with a bounded thread pool, Boyer–Moore–Horspool and regex matching, word frequency analysis, live statistics, and cancellation. Includes a CLI and desktop interfaces in Qt 6, MFC, WPF, and WinForms, with CMake builds, automated tests, and Windows releases.",
    tech: ["C++17", "Qt 6", "MFC", "C#", "WPF", ".NET 8", "CMake"],
    category: "Systems",
    color: "indigo",
    live: null,
    github: "https://github.com/TakbirZaman/PolyGrep",
    featured: false,
  },
  {
    title: "ByteSpace: Course Platform Front End",
    description:
      "A responsive course platform frontend built from Figma designs. Includes course search and filtering, pagination, course details, creator profiles, and login and registration forms with validation. Uses React Router and design tokens, with layouts for screens from 375px to 1440px.",
    tech: ["React 19", "Vite", "React Router", "CSS", "Figma"],
    category: "Front End",
    color: "teal",
    live: "https://bytespace-lime-phi.vercel.app",
    github: "https://github.com/TakbirZaman/bytespace-new",
    featured: false,
    image: byteSpaceImg,
  },
  {
    title: "AI Coding Agent: Gemini / OpenAI Tool Use",
    description:
      "A Python coding agent that plans tasks, edits workspace files, runs shell commands, and checks results with tests. Supports Gemini, OpenAI, and a mock provider, with a 12-step execution limit, workspace path checks, and command restrictions. Includes a CLI, Dockerfile, and mocked-provider tests.",
    tech: ["Python", "Gemini AI", "OpenAI", "pytest", "Docker"],
    category: "AI/ML",
    color: "violet",
    live: null,
    github: "https://github.com/TakbirZaman/Coding-Agent",
    featured: false,
  },
  {
    title: "TechCommerce: AI E-Commerce Platform",
    description:
      "An e-commerce platform built with FastAPI and Next.js, featuring authentication, a persistent cart, coupons, order tracking, and an administration dashboard. Includes an AI product advisor, a PC builder with compatibility checks, and product comparisons.",
    tech: ["FastAPI", "Next.js", "TypeScript", "SQLAlchemy", "Tailwind CSS", "JWT"],
    category: "Full Stack",
    color: "teal",
    live: "https://techcommerce-frontend-kappa.vercel.app",
    github: "https://github.com/TakbirZaman/TechCommerce",
    featured: true,
    image: techCommerceImg,
    caseStudy: {
      "rank": 1,
      "kind": "Personal project",
      "status": "Source + web demo",
      "problem": "Help shoppers explore technical products, compare specifications, and assemble compatible PC components in one place.",
      "contribution": "Built the Next.js storefront and FastAPI services for product discovery, shopping workflows, and administration.",
      "decision": "Keep customer and administrator permissions in backend authorization checks. Hiding admin controls in the interface alone cannot protect API endpoints.",
      "result": "A storefront and administration workflow with repository tests covering access control, token rejection, and audit logging.",
      "limit": "The public preview is for exploration. Do not enter payment details or place real orders. No customer or revenue claims are made.",
      "evidence": [
            {
                  "label": "Authorization and audit tests",
                  "url": "https://github.com/TakbirZaman/TechCommerce/blob/main/tests/test_admin_security.py"
            },
            {
                  "label": "Setup and API documentation",
                  "url": "https://github.com/TakbirZaman/TechCommerce#quick-start-3-steps"
            }
      ],
      "walkthrough": [
            "Browse products and compare their specifications.",
            "Open the PC builder to explore compatibility checks.",
            "Review the authorization tests and API documentation for backend implementation details."
      ]
},
  },
  {
    title: "Construction Tracker",
    description:
      "A construction management application for planning work, assigning tasks, tracking budgets and material deliveries, and coordinating site teams. Includes role-based access and live updates.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    category: "Full Stack",
    color: "teal",
    live: "https://construction-tracker-7cy9.onrender.com/",
    github: "https://github.com/TakbirZaman/Construction-Tracker",
    featured: false,
    image: constructionTrackerImg,
  },
  {
    title: "RidePrice BD Fare Estimator",
    description:
      "A browser-based fare estimator for Dhaka, powered by a regression model trained on local transport data. Estimates fares using distance, demand, weather, and peak-hour factors across more than 76 locations.",
    tech: ["Python", "scikit-learn", "JavaScript", "Netlify"],
    category: "AI/ML",
    color: "teal",
    live: "https://ridepricebd.netlify.app",
    github: "https://github.com/TakbirZaman/RidePriceBD",
    featured: false,
    image: ridePriceImg,
  },
  {
    title: "Task Manager",
    description:
      "A full-stack task manager with JWT authentication, private task lists, filtering, sorting, CSV export, and summary statistics. Built with React, Express, and PostgreSQL, using parameterized SQL queries.",
    tech: ["React 19", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS", "Docker"],
    category: "Full Stack",
    color: "indigo",
    live: "https://task-manager-takbirzamans-projects.vercel.app/",
    github: "https://github.com/TakbirZaman/Task-Manager",
    featured: false,
    image: taskManagerImg,
  },
  {
    title: "Air Canvas: Hand Tracking Drawing Board",
    description:
      "A webcam-based drawing application with hand gesture controls for drawing, erasing, undoing, and clearing the canvas. Uses MediaPipe hand tracking, layered canvases, and smooth curve rendering, with live frame rate and tracking confidence indicators.",
    tech: ["Next.js", "MediaPipe", "TypeScript", "Tailwind CSS", "Canvas API"],
    category: "AI/ML",
    color: "violet",
    live: "https://draw-in-air-steel.vercel.app",
    github: "https://github.com/TakbirZaman/Air-Canvas",
    featured: true,
    image: airCanvasImg,
    caseStudy: {
      "rank": 3,
      "kind": "Personal project",
      "status": "Interactive web demo",
      "problem": "Turn webcam hand movements into a drawing interface with persistent strokes and predictable gesture controls.",
      "contribution": "Built the hand-tracking interface, gesture controls, stroke smoothing, undo behavior, and PNG export.",
      "decision": "Separate the video, drawing, and cursor into three canvas layers so refreshing the webcam feed does not erase strokes. Store strokes as data to support undo.",
      "result": "Four documented gestures control drawing, erasing, undo, and clearing. The interface includes tracking confidence and frame-rate telemetry.",
      "limit": "Requires camera permission and a supported browser. Tracking depends on lighting and hardware; no fixed FPS performance claim is made.",
      "evidence": [
            {
                  "label": "Rendering and gesture design",
                  "url": "https://github.com/TakbirZaman/Air-Canvas#how-it-works"
            },
            {
                  "label": "Local setup instructions",
                  "url": "https://github.com/TakbirZaman/Air-Canvas#setup"
            }
      ],
      "walkthrough": [
            "Open the demo and allow camera access.",
            "Pinch to draw, use an open palm to erase, and use a peace sign to undo.",
            "Save the drawing as a PNG."
      ]
},
  },
  {
    title: "Dhaka Traffic Predictor",
    description:
      "A Dhaka traffic prediction application combining community congestion reports with historical data. Uses Gemini for plain-language explanations, Redis for caching, and BullMQ for background aggregation, with an interface inspired by rickshaw meters.",
    tech: ["Next.js", "Express", "TypeScript", "MongoDB", "Redis", "Gemini AI"],
    category: "AI/ML",
    color: "indigo",
    live: null,
    github: "https://github.com/TakbirZaman/Dhaka-s-traffic-predictor",
    featured: false,
    image: dhakaTrafficImg,
  },
  {
    title: "RAG Chatbot for Document Q&A",
    description:
      "A document question-answering chatbot that retrieves PDF passages using TF-IDF and cosine similarity. Uses the retrieved passages as context for Gemini-generated answers, without requiring a vector database.",
    tech: ["Python", "Streamlit", "Gemini AI", "RAG"],
    category: "AI/ML",
    color: "indigo",
    live: "https://takbirzaman-rag-chatbot.streamlit.app",
    github: "https://github.com/TakbirZaman/rag-chatbot",
    featured: false,
    image: ragChatbotImg,
  },
  {
    title: "Churn Radar",
    description:
      "A customer churn prediction application with individual and CSV batch scoring. A Random Forest model served through FastAPI achieves an ROC-AUC of 0.80. The Next.js dashboard generates input fields from the model schema.",
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
      "Five n8n automation workflows for conversational messaging, image-aware Facebook replies, applicant screening, Telegram job alerts, and email reply drafting. Integrates Gemini with Gmail, Telegram, and Google Sheets APIs.",
    tech: ["n8n", "Gemini AI", "Gmail API", "Telegram API", "Google Sheets"],
    category: "Automation",
    color: "amber",
    live: null,
    github: "https://github.com/TakbirZaman/Automation-workflows",
    featured: false,
  },
  {
    title: "RailView: OpenGL Railway Simulation",
    description:
      "A C++ and OpenGL railway simulation with a day-and-night cycle, animated trains and passengers, weather effects, and dynamic lighting. Includes GLSL bloom and color grading, with a fallback for older graphics hardware.",
    tech: ["C++", "OpenGL", "GLUT", "GLSL", "FBO"],
    category: "Graphics",
    color: "indigo",
    live: null,
    github: "https://github.com/TakbirZaman/RailView",
    featured: false,
    image: railViewImg,
  },
  {
    title: "Apex Drift: Top Down Arcade Racer",
    description:
      "A top-down arcade racing game built with React and Canvas. Features drifting, keyboard controls, local two-player racing, collectible coins, and garage upgrades saved in the browser.",
    tech: ["React", "Canvas API", "Vite", "JavaScript", "Tailwind CSS"],
    category: "Game Dev",
    color: "amber",
    live: null,
    github: "https://github.com/TakbirZaman/Car-Drift",
    featured: false,
    image: apexDriftImg,
  },
  {
    title: "beatMEE: Browser Fighting Game",
    description:
      "A 2D browser fighting game built with React and HTML5 Canvas. Features adaptive AI difficulty, combo attacks, impact effects, and touch controls for mobile play.",
    tech: ["React", "Canvas API", "Vite", "Game Dev"],
    category: "Game Dev",
    color: "amber",
    live: "https://TakbirZaman.github.io/beatMEE/",
    github: "https://github.com/TakbirZaman/beatMEE",
    featured: false,
    image: beatMeeImg,
  },
  {
    title: "Universal Studio Toolkit",
    description:
      "A local-first toolkit for preparing photos, signatures, scans, and PDFs. Supports precise image sizing, transparent signature preparation, PDF merging and reordering, watermarks, scan correction, and batch photo print layouts. Built with Flutter and a native Rust processing engine.",
    tech: ["Flutter", "Rust", "Dart", "flutter_rust_bridge", "PDFium", "OpenCV", "SQLite"],
    category: "Systems",
    color: "teal",
    live: null,
    github: "https://github.com/TakbirZaman/Universal-Studio-ToolKit",
    featured: false,
    image: universalStudioToolkitImg,
  },
  {
    title: "LocalConnect: LAN File Transfer",
    description:
      "A LAN-based file transfer and remote control application built with Flutter and Rust. Supports code-based pairing, encrypted transfers, resumable chunks with SHA-256 verification, and persistent recovery state. Includes screen capture and input support across desktop and Android platforms.",
    tech: ["Flutter", "Rust", "Tokio", "rustls", "SPAKE2", "SQLite", "Kotlin"],
    category: "Systems",
    color: "violet",
    live: null,
    github: "https://github.com/TakbirZaman/ConnectLocally",
    featured: false,
    image: localConnectImg,
  },
  {
    title: "hookdesk: Webhook Gateway",
    description:
      "A webhook gateway that verifies HMAC-SHA256 signatures and queues events for background delivery. Includes replay protection, retries with exponential backoff, a dead-letter queue, idempotency checks, and recovery of interrupted deliveries.",
    tech: ["Python", "FastAPI", "SQLite", "HMAC", "n8n", "Docker"],
    category: "Automation",
    color: "amber",
    live: null,
    github: "https://github.com/TakbirZaman/hook-desk",
    featured: true,
    image: hookDeskImg,
    caseStudy: {
      "rank": 2,
      "kind": "Personal project",
      "status": "Runnable locally",
      "problem": "Keep webhook delivery recoverable when a downstream service is unavailable or a sender retries the same event.",
      "contribution": "Built a signed webhook ingestion API, a persistent SQLite event queue, and a background delivery worker with retry and inspection tools.",
      "decision": "Persist an event before acknowledging it, then deliver asynchronously. Use at-least-once delivery and stable event IDs; downstream consumers must still tolerate duplicates.",
      "result": "Repository tests cover duplicate ingestion, invalid signatures, transient retry failures, permanent errors, and delivery status transitions.",
      "limit": "Designed for one process with SQLite. Multiple replicas require a different queue or storage strategy; delivery is not exactly-once.",
      "evidence": [
            {
                  "label": "Delivery and retry tests",
                  "url": "https://github.com/TakbirZaman/hook-desk/blob/main/tests/test_worker.py"
            },
            {
                  "label": "Signature and deduplication tests",
                  "url": "https://github.com/TakbirZaman/hook-desk/blob/main/tests/test_api.py"
            }
      ],
      "walkthrough": [
            "Follow the README quickstart to run the API locally.",
            "Send a signed sample event with the bundled CLI.",
            "Inspect events and retry behavior through the documented admin API."
      ]
},
  },
  {
    title: "ClientFlow: Freelancer Client Ops",
    description:
      "A client operations platform for freelancers and agencies, covering proposals, projects, tasks, time tracking, invoices, and payments. Includes a client portal, Stripe Connect, conditional automations, white-labeling, database-enforced tenant isolation, and an Expo mobile companion.",
    tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Stripe", "Expo"],
    category: "Full Stack",
    color: "indigo",
    live: null,
    github: "https://github.com/TakbirZaman/client-flow",
    featured: false,
    image: clientFlowImg,
  },
];

export const research = [
  {
    title: "Sentiment-Based Product Grouping",
    description: "Grouped products by review sentiment using TF-IDF features and DBSCAN clustering, with PCA for dimensionality reduction and cluster visualization.",
    tags: ["NLP", "TF-IDF", "DBSCAN", "PCA"],
    metrics: { method: "DBSCAN", vectorizer: "TF-IDF", reduction: "PCA" },
    status: "Research Project",
    icon: "🛍️",
  },
  {
    title: "Explainable Osteoporosis Detection System",
    description: "Developed an osteoporosis detection model using DenseNet121 and SE attention. Used Grad-CAM to visualize the image regions contributing to each prediction.",
    tags: ["DenseNet121", "Grad-CAM", "XAI"],
    metrics: { architecture: "DenseNet121", explanation: "Grad-CAM" },
    status: "Research Project",
    icon: "🩻",
  },
  {
    title: "Waste Image Classification Using EfficientNet-B3",
    description: "Compared image classification architectures on a shared waste dataset using transfer learning with EfficientNet-B3.",
    tags: ["EfficientNet-B3", "Transfer Learning"],
    metrics: { architecture: "EfficientNet-B3", approach: "Transfer learning" },
    status: "Research Project",
    icon: "♻️",
  },
  {
    title: "Brain Tumor Segmentation & Classification",
    description: "Developed a deep learning model for brain tumor segmentation and classification in MRI scans.",
    tags: ["Deep Learning", "MRI"],
    metrics: { modality: "MRI", task: "Classification + segmentation" },
    status: "Research Project",
    icon: "🧠",
  },
];

export const achievements = [
  "Dean's Award (2×)",
  "Cisco IT Essentials Certification",
];
