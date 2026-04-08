import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { skillTags } from "../data/portfolioData";

const categoryColors = {
  "Languages": "bg-primary-50 text-primary-700 border-primary-200 hover:bg-primary-100",
  "Web & Frameworks": "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100",
  "Databases & Tools": "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
  "ML & AI": "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100",
};

const categoryIcons = {
  "Languages": "⚡",
  "Web & Frameworks": "🌐",
  "Databases & Tools": "🛢️",
  "ML & AI": "🤖",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = ["All", ...Object.keys(skillTags)];

  const displayTags =
    activeCategory === "All"
      ? Object.entries(skillTags)
      : [[activeCategory, skillTags[activeCategory]]];

  return (
    <section id="skills" className="section-padding bg-slate-50" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">Technical Expertise</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mt-3 max-w-xl mx-auto">
            Tools and languages I work with — from systems programming to full-stack web and machine learning.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary-600 text-white border-primary-600 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-primary-300 hover:text-primary-600"
              }`}
            >
              {cat !== "All" && <span className="mr-1">{categoryIcons[cat]}</span>}
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill tags */}
        <div className="space-y-8">
          {displayTags.map(([category, tags], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{categoryIcons[category]}</span>
                <h3 className="font-display font-semibold text-slate-800">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: catIdx * 0.05 + i * 0.04 }}
                    className={`badge border font-medium transition-all duration-150 cursor-default ${categoryColors[category]}`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-slate-400 text-sm mt-8"
        >
          Always learning — currently exploring advanced LLM fine-tuning and cloud deployments.
        </motion.p>
      </div>
    </section>
  );
}
