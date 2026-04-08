import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
// Added FaFacebookF to the imports
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "takbirzamanbhuiyan@gmail.com",
    href: "mailto:takbirzamanbhuiyan@gmail.com",
    color: "bg-primary-50 text-primary-600 hover:bg-primary-100",
    border: "border-primary-200",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/TakbirZaman",
    href: personalInfo.github,
    color: "bg-slate-50 text-slate-700 hover:bg-slate-100",
    border: "border-slate-200",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/takbirzaman",
    href: personalInfo.linkedin,
    color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    border: "border-blue-200",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    value: "facebook.com/takbirzamanbhuiyan",
    href: "https://www.facebook.com/takbirzamanbhuiyan",
    color: "bg-blue-50 text-blue-700 hover:bg-blue-100",
    border: "border-blue-200",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
    color: "bg-teal-50 text-teal-600",
    border: "border-teal-200",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For a real backend, you could use fetch() or an email service here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-teal-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="section-title text-4xl font-bold">Contact Me</h2>
          <p className="section-subtitle max-w-lg mx-auto text-slate-500 mt-4">
            Whether it's a job opportunity, collaboration, or just a hello — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
              Let's build something great
            </h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              I'm actively looking for new opportunities as a Software Engineer. 
              If you have a role that fits my skills or just want to connect, don't hesitate to reach out.
            </p>

            <div className="grid gap-4">
              {contactLinks.map(({ icon: Icon, label, value, href, color, border }) => (
                <div key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 transform hover:-translate-y-1 ${color} ${border}`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider opacity-60">{label}</p>
                        <p className="font-medium text-sm">{value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className={`flex items-center gap-4 p-4 rounded-2xl border ${color} ${border}`}>
                      <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center shadow-sm">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider opacity-60">{label}</p>
                        <p className="font-medium text-sm">{value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-teal-600" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-500 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about the project..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all text-sm resize-none"
                    />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-teal-200">
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}