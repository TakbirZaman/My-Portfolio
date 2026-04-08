import { motion } from "framer-motion";
import { Mail, ExternalLink, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo, stats } from "../data/portfolioData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/40 to-teal-50/30 pt-16"
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div>
            {/* Availability badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              Searching for opportunities
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Takbir</span>
            </motion.h1>

            <motion.p {...fadeUp(0.3)} className="mt-4 text-xl md:text-2xl font-display font-semibold text-slate-700">
              {personalInfo.title}
            </motion.p>

            <motion.p {...fadeUp(0.4)} className="mt-5 text-slate-500 text-lg leading-relaxed max-w-lg">
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowDown size={16} />
              </a>
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-outline"
              >
                <ExternalLink size={16} />
                Checkout My Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeUp(0.6)} className="mt-8 flex items-center gap-4">
              <span className="text-sm text-slate-400 font-medium">Find me on</span>
              <div className="flex gap-3">
                {[
                  { icon: FaGithub, href: personalInfo.github, label: "GitHub" },
                  { icon: FaLinkedinIn, href: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:text-primary-600 hover:border-primary-300 hover:shadow-md transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Photo + Stats */}
          <div className="flex flex-col items-center gap-8">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative"
            >
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400 via-violet-400 to-teal-400 rotate-3 scale-105 opacity-20 blur-sm" />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-200 to-teal-200 -rotate-2 scale-102" />

              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl animate-float">
                <img
                  src={personalInfo.photos.hero}
                  alt="Takbir Zaman"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add("bg-gradient-to-br", "from-primary-100", "to-teal-100", "flex", "items-center", "justify-center");
                    e.target.parentElement.innerHTML = `<span class="text-6xl font-display font-bold text-primary-300">TZ</span>`;
                  }}
                />
              </div>

              {/* Floating badge: CGPA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-4 top-8 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3"
              >
                <p className="text-xs text-slate-400 font-medium">CGPA</p>
                <p className="text-2xl font-display font-bold text-primary-600">3.75</p>
                <p className="text-xs text-slate-400">/ 4.0</p>
              </motion.div>

              {/* Floating badge: Dean's Award */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0 }}
                className="absolute -left-4 bottom-10 bg-white rounded-2xl shadow-lg border border-slate-100 px-4 py-3"
              >
                <p className="text-xs text-amber-500 font-semibold">🏆 Dean's Award</p>
                <p className="text-sm font-display font-bold text-slate-800">2× Recipient</p>
              </motion.div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="grid grid-cols-3 gap-4 w-full max-w-sm"
            >
              {stats.slice(1).map(({ label, value, suffix }) => (
                <div key={label} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100 shadow-sm p-3 text-center">
                  <p className="font-display font-bold text-xl text-slate-900">
                    {value}<span className="text-primary-500 text-sm">{suffix}</span>
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}