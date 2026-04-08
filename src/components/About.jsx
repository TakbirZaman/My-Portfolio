import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const highlights = [
  { icon: GraduationCap, label: "AIUB — BSc CSE", sub: "CGPA 3.75 / 4.0", color: "text-primary-600 bg-primary-50" },
  { icon: Briefcase, label: "NNSEL Intern", sub: "Feb – May 2025", color: "text-teal-600 bg-teal-50" },
  { icon: Code2, label: "Backend + ML", sub: "Systems, APIs, AI", color: "text-violet-600 bg-violet-50" },
  { icon: MapPin, label: "Dhaka, Bangladesh", sub: "Open to remote", color: "text-amber-600 bg-amber-50" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative h-[480px]"
          >
            {/* Main photo */}
            <div className="absolute top-0 left-4 w-56 h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src={personalInfo.photos.about}
                alt="Takbir Zaman"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentElement.classList.add("bg-gradient-to-br", "from-indigo-100", "to-violet-100");
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Secondary photo */}
            <div className="absolute bottom-0 right-4 w-52 h-60 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src={personalInfo.photos.gallery}
                alt="Takbir Zaman"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentElement.classList.add("bg-gradient-to-br", "from-teal-100", "to-cyan-100");
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Middle overlap card */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 left-0 mx-auto w-40 h-44 rounded-3xl bg-gradient-to-br from-primary-500 to-violet-600 shadow-2xl flex items-center justify-center border-4 border-white">
              <div className="text-center text-white">
                <p className="font-display font-bold text-3xl">3+</p>
                <p className="text-xs font-medium opacity-90 mt-1">Years of<br/>Coding</p>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-4 right-0 grid grid-cols-4 gap-1.5 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              ))}
            </div>
            <div className="absolute bottom-4 left-0 grid grid-cols-4 gap-1.5 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">About Me</p>
            <h2 className="section-title mb-5">
              Scalable Backend Systems.<br />
              <span className="gradient-text">Aspiring MERN Developer.</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              I am a Computer Science & Engineering student at <strong className="text-slate-800">AIUB</strong> (CGPA: <strong className="text-primary-600">3.75</strong>), currently completing my thesis and an internship at <strong className="text-slate-800">NN Services & Engineering Ltd</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              My primary focus is on full-stack web development with the goal of becoming a MERN stack developer. I leverage my foundation in structured backend design and N-layer architecture to build scalable APIs with Node.js and dynamic user interfaces with React. I am passionate about writing clean, maintainable code and solving complex problems beyond basic CRUD operations.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Alongside web development, I have a strong, active interest in Artificial Intelligence and Machine Learning. Having built data-driven Python projects, I am actively looking for entry-level opportunities where I can contribute as a software engineer while working more deeply in the AI/ML field.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, label, sub, color }) => (
                <div key={label} className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-slate-200 transition-colors">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${color}`}>
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{label}</p>
                    <p className="text-xs text-slate-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}