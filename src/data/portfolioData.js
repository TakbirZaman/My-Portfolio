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
  title: "Full-Stack Developer & AI Automation Engineer",
  tagline: "Full-Stack, AI/ML, Automation",
  bio: "I finished my CSE degree at AIUB in 2026 with a 3.76 CGPA. Lately I have been building web apps with FastAPI and Next.js, and setting up automation workflows on n8n at WebtrixLab. Before that I was a software engineering intern at NN Services & Engineering, working mostly in React and REST APIs. I am looking for a full-time software engineering role, either in Dhaka or remote.",
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
    role: "AI Automation & Full Stack Developer",
    company: "WebtrixLab",
    location: "Dhaka, Bangladesh",
    period: "2025 to Present",
    type: "Part-time",
    highlights: [
      "Build and ship n8n automation workflows that clients actually use day to day",
      "Develop web apps end to end, from the interface down to the database",
      "Set up automated content pipelines so client accounts keep posting without someone logging in to do it",
      "Handle the whole project cycle, from the scoping call to deploying to production",
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
      "Built and maintained the React components their client dashboards ran on",
      "Wired up REST APIs in Node.js and Express to feed those components",
      "Cut page load time by trimming render work and removing redundant API calls",
      "Worked in sprints, with code reviews and a standup every morning",
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
    title: "TechCommerce: AI E-Commerce Platform",
    description:
      "An online store built with FastAPI and Next.js. It runs 69 products across 14 categories, with JWT login, a cart that survives a page refresh, coupons, order tracking, and an admin panel for products, orders, coupons, customers, and delivery zones. I also built an AI Advisor that recommends products from a typed question, a PC Builder that flags incompatible parts, and a side by side compare view.",
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
      "A project tracker for construction sites. Site managers use it to plan the work, assign tasks, watch the budget, log delivered materials, and coordinate the crew, with role based access so everyone sees the part that is theirs. The numbers update live instead of waiting for a refresh.",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    category: "Full Stack",
    color: "teal",
    live: "https://construction-tracker-7cy9.onrender.com/",
    github: "https://github.com/TakbirZaman/Construction-Tracker",
    featured: true,
    image: constructionTrackerImg,
  },
  {
    title: "RidePrice BD Fare Estimator",
    description:
      "A fare estimator for rides around Dhaka. I trained a regression model on local transport data, then moved the model into the browser so the estimate comes back without a round trip to a server. It reads distance, current demand, weather, and peak hour multipliers, and it covers more than 76 locations.",
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
      "A task manager where JWT login keeps each person's tasks to themselves. You can filter, sort, export to CSV, and check a small stats panel. The front end is a React SPA, the back end is an Express REST API on PostgreSQL, and I wrote the SQL by hand with parameterized queries rather than pulling in an ORM.",
    tech: ["React 19", "Node.js", "Express", "PostgreSQL", "JWT", "Tailwind CSS", "Docker"],
    category: "Full Stack",
    color: "indigo",
    live: "https://task-manager-takbirzamans-projects.vercel.app/",
    github: "https://github.com/TakbirZaman/Task-Manager",
    featured: true,
    image: taskManagerImg,
  },
  {
    title: "Air Canvas: Hand Tracking Drawing Board",
    description:
      "Draw on your webcam with your hand. Pinch to draw, open your palm to erase, two fingers to undo, a fist to wipe the canvas. Three stacked canvases keep the strokes from flickering, points get joined with quadratic curves so the lines come out smooth, and the app shows live FPS along with the hand tracker's confidence score.",
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
      "A traffic prediction app for Dhaka routes. People report congestion when they see it, and the app mixes those reports with history to guess what a route will look like later. Gemini writes a short plain explanation for each guess. Redis caches the results and BullMQ runs the heavier aggregation in the background. The interface is styled after a rickshaw meter.",
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
      "A chatbot that answers questions about PDFs you upload. Finding the right passage is plain TF-IDF cosine similarity written in Python, no vector database involved. Gemini writes the answer, but only from the chunks that actually matched, so it stays tied to the document.",
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
      "Predicts which customers are about to leave. You can score a single record or upload a whole CSV. The model is a Random Forest in scikit-learn, served through FastAPI, sitting at an ROC-AUC of 0.80. The Next.js dashboard builds its own form fields straight from the model schema, so swapping in a new dataset does not mean rewriting the front end.",
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
      "Five n8n workflows that run in production. A Messenger bot that remembers what you told it earlier, a Facebook Page auto responder that looks at images with Gemini Vision, a Gmail pipeline that scores and logs job applicants, a scheduled Telegram bot for new job alerts, and an LLM that drafts replies to email. They talk to the Gmail, Telegram, and Google Sheets APIs.",
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
      "A 2D railway scene written in C++ with OpenGL and GLUT. Trains run along the track, clouds drift past, and you can switch between day and night. The hills, trees, street lamps, roads, and platforms are all built from OpenGL primitives, and the animation is driven from the keyboard.",
    tech: ["C++", "OpenGL", "GLUT", "Animation"],
    category: "Graphics",
    color: "indigo",
    live: null,
    github: "https://github.com/TakbirZaman/RailView---OpenGL-Railway-Simulation",
    featured: false,
  },
  {
    title: "Apex Drift: Top Down Arcade Racer",
    description:
      "A top down arcade racer in React and Canvas. The cars drift through corners, WASD or the arrow keys steer, and two people can race on the same keyboard. Coins and garage upgrades are saved to localStorage, and the car designs are loosely based on supercars.",
    tech: ["React", "Canvas API", "Vite", "JavaScript", "Tailwind CSS"],
    category: "Game Dev",
    color: "amber",
    live: null,
    github: "https://github.com/TakbirZaman/Car-Drift",
    featured: true,
    image: apexDriftImg,
  },
  {
    title: "beatMEE: Browser Fighting Game",
    description:
      "A 2D fighting game built in React and HTML5 Canvas, with no game engine underneath. The AI raises or lowers its difficulty based on how the round is going, combos chain into each other, hits get a short screen shake, and the touch controls are set up properly for playing on a phone.",
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
    description: "Grouped products by the sentiment in their reviews. The reviews went through TF-IDF first, then DBSCAN to cluster them, with PCA pulling the dimensions down so the clusters were actually readable.",
    tags: ["NLP", "TF-IDF", "DBSCAN", "PCA"],
    metrics: { method: "DBSCAN", vectorizer: "TF-IDF", reduction: "PCA" },
    status: "Research Project",
    icon: "🛍️",
  },
  {
    title: "Explainable Osteoporosis Detection System",
    description: "A DenseNet121 model for spotting osteoporosis in scans, sitting at 87.5% recall. I added SE Attention and used Grad-CAM so the model can point at the part of the image that drove each prediction.",
    tags: ["DenseNet121", "Grad-CAM", "XAI"],
    metrics: { recall: "87.5%" },
    status: "Research Project",
    icon: "🩻",
  },
  {
    title: "Waste Image Classification Using EfficientNet-B3",
    description: "An EfficientNet-B3 classifier for waste images that hit 94% accuracy. I ran it against a few other architectures on the same dataset before settling on this one.",
    tags: ["EfficientNet-B3", "Transfer Learning"],
    metrics: { accuracy: "94%" },
    status: "Research Project",
    icon: "♻️",
  },
  {
    title: "Brain Tumor Segmentation & Classification",
    description: "A model that classifies and segments brain tumors in MRI scans, reaching 95.6% accuracy across the tumor classes.",
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