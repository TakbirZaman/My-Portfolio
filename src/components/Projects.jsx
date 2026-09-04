import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub, FaStar } from "react-icons/fa";
import { projects } from "../data/portfolioData";

const colorMap = {
  teal:   { badge: "bg-teal-50 text-teal-700 border-teal-200", bar: "bg-teal-500", dot: "bg-teal-400" },
  amber:  { badge: "bg-amber-50 text-amber-700 border-amber-200", bar: "bg-amber-500", dot: "bg-amber-400" },
  indigo: { badge: "bg-primary-50 text-primary-700 border-primary-200", bar: "bg-primary-500", dot: "bg-primary-400" },
  violet: { badge: "bg-violet-50 text-violet-700 border-violet-200", bar: "bg-violet-500", dot: "bg-violet-400" },
};

const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))].sort((a, b) => (a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)));

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const featured = projects.filter((p) => p.featured);
  const nonFeatured = projects.filter((p) => !p.featured);
  const visible = showAll ? filtered : filtered.slice(0, 6);
  const showFeatured = activeFilter === "All";
  const gridProjects = showFeatured ? visible.filter((p) => !p.featured) : visible;

  return (
    <section id="projects" className="section-padding bg-slate-50" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-violet-600 font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Things I've built — solo and in teams.</p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveFilter(cat); setShowAll(false); }}
              aria-pressed={activeFilter === cat}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 ${
                activeFilter === cat
                  ? "bg-primary-600 text-white border-primary-600 shadow-md"
                  : "bg-white text-slate-600 border-slate-200 hover:border-primary-300 hover:text-primary-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured projects (large cards) — curated 6 */}
        {showFeatured && (
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {featured.slice(0, 6).map((project, idx) => {
              const colors = colorMap[project.color] || colorMap.indigo;
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="card p-0 group relative overflow-hidden hover:-translate-y-1 flex flex-col"
                >
                  {/* Top color bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${colors.bar} z-10`} />

                  {/* Featured star */}
                  <div className="absolute top-3 right-3 text-amber-400 z-10 drop-shadow">
                    <FaStar size={14} />
                  </div>

                  {/* Project image */}
                  {project.image ? (
                    <div className="h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="h-1" />
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <div className={`badge border mb-3 text-xs font-semibold ${colors.badge}`}>
                      {project.category}
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{project.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 mt-auto">
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-700 ml-auto"
                      >
                        <FaGithub size={14} /> Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* All other projects (compact list or filtered grid) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridProjects.map((project, idx) => {
            const colors = colorMap[project.color] || colorMap.indigo;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className="card p-0 group hover:-translate-y-0.5 overflow-hidden flex flex-col"
              >
                {project.image && (
                  <div className="h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`badge border text-xs font-medium ${colors.badge}`}>
                      {project.category}
                    </div>
                    <div className="flex gap-2">
                      {project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary-500 transition-colors">
                          <ExternalLink size={15} />
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-slate-600 transition-colors">
                        <FaGithub size={15} />
                      </a>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="text-xs bg-slate-50 border border-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show more */}
        {filtered.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            >
              {showAll ? "Show Less" : `Show All (${filtered.length})`}
            </button>
          </div>
        )}
        {filtered.length === 0 && (
          <p className="text-center text-slate-400 text-sm mt-8">No projects in this category.</p>
        )}
      </div>
    </section>
  );
}
