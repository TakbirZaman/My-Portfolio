import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Globe2, Copy } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "bg-primary-50 text-primary-700 hover:bg-primary-100",
    border: "border-primary-200",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: personalInfo.github.replace(/https?:\/\//, ""),
    href: personalInfo.github,
    color: "bg-slate-50 text-slate-800 hover:bg-slate-100",
    border: "border-slate-200",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: personalInfo.linkedin.replace(/https?:\/\//, ""),
    href: personalInfo.linkedin,
    color: "bg-blue-50 text-blue-700 hover:bg-blue-100",
    border: "border-blue-200",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    value: "leetcode.com/u/takbirzaman",
    href: "https://leetcode.com/u/takbirzaman/",
    color: "bg-orange-50 text-orange-700 hover:bg-orange-100",
    border: "border-orange-200",
  },
  {
    icon: Globe2,
    label: "Website",
    value: personalInfo.website.replace(/https?:\/\//, ""),
    href: personalInfo.website,
    color: "bg-slate-50 text-slate-800 hover:bg-slate-100",
    border: "border-slate-200",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: `https://www.google.com/maps/search/${encodeURIComponent(personalInfo.location)}`,
    color: "bg-teal-50 text-teal-700",
    border: "border-teal-200",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter your name (min 2 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    if (form.honeypot) e.honeypot = "Spam detected.";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) { setErrors(validation); return; }
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Takbir,\n\n${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setForm({ name: "", email: "", message: "", honeypot: "" });
  };

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(personalInfo.email); setCopied(true); setTimeout(()=>setCopied(false),2000);} catch {}
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
            <p className="text-slate-500 mb-4 leading-relaxed">
              Open to <strong className="text-slate-800">Full-Stack / AI Automation</strong> roles — Dhaka & remote. Best way to reach me is email; I reply within 24h.
            </p>
            <button onClick={copyEmail} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1.5 rounded-full hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400">
              <Copy size={14} /> {copied ? "Copied!" : "Copy email"} — {personalInfo.email}
            </button>

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
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-teal-600" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-900 mb-2">Opening your email app…</h4>
                  <p className="text-slate-500 text-sm">Your message was prepared in your default mail client. If it didn't open, email me at <a href={`mailto:${personalInfo.email}`} className="text-primary-700 underline">{personalInfo.email}</a>.</p>
                  <button onClick={()=>setSubmitted(false)} className="mt-4 text-sm text-slate-500 underline">Send another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "error-name" : undefined}
                      placeholder="Takbir Zaman"
                      autoComplete="name"
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:border-transparent outline-none transition-all text-sm ${errors.name ? "border-red-300 focus:ring-red-400" : "border-slate-200 focus:ring-teal-500"}`}
                    />
                    {errors.name && <p id="error-name" className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "error-email" : undefined}
                      placeholder="you@company.com"
                      autoComplete="email"
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:border-transparent outline-none transition-all text-sm ${errors.email ? "border-red-300 focus:ring-red-400" : "border-slate-200 focus:ring-teal-500"}`}
                    />
                    {errors.email && <p id="error-email" className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "error-message" : undefined}
                      placeholder="Hi Takbir, we have a Full-Stack role..."
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:border-transparent outline-none transition-all text-sm resize-none ${errors.message ? "border-red-300 focus:ring-red-400" : "border-slate-200 focus:ring-teal-500"}`}
                    />
                    {errors.message && <p id="error-message" className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>
                  {/* Honeypot */}
                  <input type="text" name="honeypot" value={form.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600">
                    <Send size={16} />
                    Send via Email
                  </button>
                  <p className="text-xs text-slate-400 text-center">Opens your email app — no data stored. Prefer direct? <a href={`mailto:${personalInfo.email}`} className="underline text-slate-600">Email me</a>.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}