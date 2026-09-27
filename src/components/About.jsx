import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const highlights = [
  { icon: GraduationCap, label: "AIUB, BSc CSE", sub: "CGPA 3.76 / 4.0", color: "text-primary-600 bg-primary-50" },
  { icon: Briefcase, label: "WebtrixLab + NNSEL", sub: "n8n workflows and web apps", color: "text-teal-600 bg-teal-50" },
  { icon: Code2, label: "Shipped Projects", sub: "React • Node • Python", color: "text-violet-600 bg-violet-50" },
  { icon: MapPin, label: "Dhaka, Bangladesh", sub: "Open to remote work", color: "text-amber-600 bg-amber-50" },
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
            className="relative h-[480px] max-[380px]:h-[440px]"
          >
            {/* Main photo */}
            <div className="absolute top-0 left-2 sm:left-4 w-52 sm:w-56 h-60 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src={personalInfo.photos.about}
                alt="Takbir Zaman Bhuiyan portrait"
                width="224"
                height="256"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentElement.classList.add("bg-gradient-to-br", "from-indigo-100", "to-violet-100");
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Secondary photo */}
            <div className="absolute bottom-0 right-2 sm:right-4 w-48 sm:w-52 h-56 sm:h-60 rounded-3xl overflow-hidden border-4 border-white shadow-xl">
              <img
                src={personalInfo.photos.gallery}
                alt="Takbir collaborating on project"
                width="208"
                height="240"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentElement.classList.add("bg-gradient-to-br", "from-teal-100", "to-cyan-100");
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Middle overlap card */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 left-0 mx-auto w-40 h-44 rounded-3xl bg-gradient-to-br from-primary-500 to-violet-600 shadow-2xl flex items-center justify-center border-4 border-white pointer-events-none" aria-hidden="true">
              <div className="text-center text-white">
                <p className="font-display font-bold text-3xl">3+</p>
                <p className="text-xs font-medium opacity-90 mt-1">Years of<br/>Coding</p>
              </div>
            </div>

            {/* Decorative dots - non-interactive */}
            <div className="absolute top-4 right-0 grid grid-cols-4 gap-1.5 opacity-30 pointer-events-none" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-400" />
              ))}
            </div>
            <div className="absolute bottom-4 left-0 grid grid-cols-4 gap-1.5 opacity-30 pointer-events-none" aria-hidden="true">
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
              Most of my work is AI, automation,<br />
              <span className="gradient-text">and the web apps that sit behind them.</span>
            </h2>

            <p className="text-slate-600 leading-relaxed mb-4">
              I finished my Computer Science and Engineering degree at <strong className="text-slate-800">AIUB</strong> with a CGPA of <strong className="text-primary-600">3.76</strong>. What I enjoy most is the stretch where an idea turns into something a person can open and use, so my projects usually end up with machine learning, a backend, and a real interface in the same repository.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              At <strong className="text-slate-800">WebtrixLab</strong> I build n8n workflows with Gemini and full stack apps on Next.js, FastAPI, and Node. Before that I interned at <strong className="text-slate-800">NN Services & Engineering Ltd (NNSEL)</strong>, where I worked on React components and REST APIs and spent a lot of time on performance. The recent ones I am happy to walk anyone through: <strong className="text-slate-800">TechCommerce</strong> (a store with an AI advisor and a PC builder), <strong className="text-slate-800">Air Canvas</strong> (drawing with your hand through the webcam), <strong className="text-slate-800">RidePrice BD</strong>, <strong className="text-slate-800">Task Manager</strong>, and <strong className="text-slate-800">Construction Tracker</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              I like owning a feature from the first rough plan through deployment and the bug reports that follow. Right now I am looking for <strong className="text-slate-800">full stack or AI automation</strong> work, in Dhaka or remote.
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