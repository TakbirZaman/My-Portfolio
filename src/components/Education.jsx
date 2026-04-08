import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { education } from "../data/portfolioData";

export default function Education() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="section-padding bg-slate-50" ref={ref}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic foundation.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-8 relative overflow-hidden"
            >
              {/* Decorative gradient corner */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary-50 via-violet-50 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                {/* Icon + degree */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                    <GraduationCap size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-primary-600 font-semibold mt-1">{edu.institution}</p>
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-slate-400" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-slate-400" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-primary-600">
                    <Award size={14} />
                    CGPA: {edu.cgpa}
                  </div>
                </div>

                {/* CGPA visual bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-slate-500">Academic Performance</span>
                    <span className="text-xs font-bold text-primary-600">{edu.cgpa}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: "93.75%" } : {}}
                      transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary-500 to-violet-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {edu.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${i < 2 ? "bg-amber-50" : "bg-primary-50"}`}>
                        {i < 2 ? (
                          <Award size={11} className="text-amber-500" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        )}
                      </div>
                      <span className={`text-sm ${i < 2 ? "font-semibold text-amber-700" : "text-slate-600"}`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
