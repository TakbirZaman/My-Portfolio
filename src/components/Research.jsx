import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FlaskConical, Tag } from "lucide-react";
import { research } from "../data/portfolioData";

export default function Research() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="research" className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-violet-600 font-semibold text-sm tracking-widest uppercase mb-3">Academic Work</p>
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle">Applying CS theory to real-world problems.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {research.map((item, idx) => {
            const palette = [
              { bar: "from-violet-500 to-indigo-500", bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" },
              { bar: "from-teal-500 to-cyan-500",     bg: "bg-teal-50",   text: "text-teal-700",   border: "border-teal-200" },
              { bar: "from-amber-500 to-orange-400",  bg: "bg-amber-50",  text: "text-amber-700",  border: "border-amber-200" },
              { bar: "from-primary-500 to-blue-500",  bg: "bg-primary-50",text: "text-primary-700",border: "border-primary-200" },
            ];
            const c = palette[idx % palette.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="card p-6 hover:-translate-y-1 relative overflow-hidden group flex flex-col"
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.bar}`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4 ${c.bg}`}>
                  {item.icon}
                </div>

                <span className={`badge text-xs font-semibold mb-3 border self-start ${c.bg} ${c.text} ${c.border}`}>
                  {item.status}
                </span>

                <h3 className="font-display font-bold text-slate-900 text-lg leading-snug mb-3 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className={`flex flex-wrap gap-2 mb-4 p-3 rounded-xl ${c.bg}`}>
                  {Object.entries(item.metrics).map(([key, val]) => (
                    <div key={key} className="flex flex-col items-center px-3 py-1">
                      <span className={`font-display font-bold text-base ${c.text}`}>{val}</span>
                      <span className="text-xs text-slate-400 capitalize">{key}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="badge bg-slate-50 text-slate-500 border border-slate-200 text-xs">
                      <Tag size={10} className="mr-1 inline" />{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
