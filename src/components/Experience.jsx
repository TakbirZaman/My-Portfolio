import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">Work History</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Real-world engineering experience in agile teams.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-teal-200 to-transparent" />

          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 border-4 border-white shadow-md" />

              {/* Card */}
              <div className="card p-6 hover:border-primary-200 hover:-translate-y-0.5 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge bg-primary-50 text-primary-700 border border-primary-200 text-xs font-semibold">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900">{job.role}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Briefcase size={14} className="text-teal-500" />
                      <span className="font-semibold text-teal-600">{job.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-sm text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {job.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
                      <CheckCircle2 size={15} className="text-teal-500 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="badge bg-slate-50 text-slate-600 border border-slate-200 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* "Open to work" tail */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative pl-16"
          >
            <div className="absolute left-3.5 top-3 w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 border-4 border-white shadow-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </div>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2.5 rounded-xl text-sm font-medium">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
              Actively seeking new opportunities — full-time or internship
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
