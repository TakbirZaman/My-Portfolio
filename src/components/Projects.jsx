import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/portfolioData";

const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];
const featured = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.caseStudy.rank - b.caseStudy.rank);
const additional = projects.filter((project) => !project.featured);

function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-primary-700 hover:underline"
          aria-label={`Open ${project.title} demo`}
        >
          <ExternalLink size={15} /> Open demo
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-slate-700 hover:underline"
        aria-label={`View ${project.title} source`}
      >
        <FaGithub size={15} /> Source code
      </a>
    </div>
  );
}

function CaseStudy({ project }) {
  const study = project.caseStudy;
  return (
    <details className="group/study mt-5 border-t border-slate-200 pt-4">
      <summary className="cursor-pointer text-sm font-semibold text-primary-700 rounded focus-visible:outline-offset-4">
        Read case study
      </summary>
      <div className="mt-5 space-y-5 text-sm text-slate-600 leading-relaxed">
        <dl className="space-y-4">
          {[
            ["The problem", study.problem],
            ["My contribution", study.contribution],
            ["A key decision", study.decision],
            ["What it demonstrates", study.result],
            ["Scope and limitations", study.limit],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="font-semibold text-slate-900 mb-1">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div>
          <h4 className="font-semibold text-slate-900 mb-2">
            Try it or review the implementation
          </h4>
          <ol className="list-decimal pl-5 space-y-2">
            {study.walkthrough.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-2">
            Supporting evidence
          </h4>
          <ul className="space-y-2">
            {study.evidence.map((item) => (
              <li key={item.url}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 underline underline-offset-4"
                >
                  {item.label}
                  <ArrowUpRight
                    size={13}
                    className="inline ml-1"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </details>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });
  const isAll = activeFilter === "All";
  const filtered = isAll
    ? additional
    : projects.filter((project) => project.category === activeFilter);
  const visible = isAll
    ? showAll
      ? filtered
      : []
    : showAll
      ? filtered
      : filtered.slice(0, 6);
  return (
    <section
      id="projects"
      className="section-padding bg-slate-50 scroll-mt-20"
      ref={ref}
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-10"
        >
          <p className="text-primary-700 font-semibold text-sm tracking-widest uppercase mb-3">
            Selected work
          </p>
          <h2 className="section-title">
            Three projects. A closer look at how I build.
          </h2>
          <p className="section-subtitle max-w-3xl">
            A full-stack storefront, a reliable webhook pipeline, and an
            interactive vision application. Each case study explains the
            problem, my work, and the engineering decisions behind it.
          </p>
        </motion.div>
        <div
          className="flex flex-wrap gap-2 mb-8"
          role="group"
          aria-label="Filter projects by category"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setShowAll(false);
              }}
              aria-pressed={activeFilter === category}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${activeFilter === category ? "bg-primary-600 text-white border-primary-600" : "bg-white text-slate-700 border-slate-200 hover:border-primary-400"}`}
            >
              {category === "All" ? "Selected work" : category}
            </button>
          ))}
        </div>
        {isAll && (
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {featured.map((project) => (
              <article key={project.title} className="card overflow-hidden">
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} interface`}
                    loading="lazy"
                    decoding="async"
                    width="640"
                    height="360"
                    className="w-full aspect-video object-cover object-top border-b border-slate-100"
                  />
                )}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 text-xs font-medium mb-3">
                    <span className="badge bg-primary-50 text-primary-700 text-xs">
                      {project.caseStudy.kind}
                    </span>
                    <span className="badge bg-slate-100 text-slate-600 text-xs">
                      {project.caseStudy.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {project.caseStudy.problem}
                  </p>
                  <ul
                    aria-label="Technologies"
                    className="flex flex-wrap gap-2 mb-5"
                  >
                    {project.tech.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="text-xs text-slate-700 bg-slate-50 border border-slate-200 px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ProjectLinks project={project} />
                  <CaseStudy project={project} />
                </div>
              </article>
            ))}
          </div>
        )}
        <div id="project-archive" className={visible.length ? "mt-10" : ""}>
          {visible.length > 0 && (
            <>
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                {isAll ? "More projects" : `${activeFilter} projects`}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {visible.map((project) => (
                  <article
                    key={project.title}
                    className="card p-5 flex flex-col"
                  >
                    <p className="text-xs font-semibold text-primary-700 mb-2">
                      {project.category}
                    </p>
                    <h4 className="font-bold text-slate-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {project.description}
                    </p>
                    <div className="mt-auto">
                      <ProjectLinks project={project} />
                    </div>
                    {project.caseStudy && <CaseStudy project={project} />}
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
        {(isAll || filtered.length > 6) && (
          <div className="mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
              aria-controls={
                isAll || visible.length ? "project-archive" : undefined
              }
              className="btn-outline"
            >
              {showAll
                ? "Show fewer projects"
                : isAll
                  ? `Explore ${additional.length} more projects`
                  : `Show all ${filtered.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
