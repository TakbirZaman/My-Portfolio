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
    href: `https://www.google.com/maps/search/${encodeURIComponent(personalInfo.location.split("·")[0].trim())}`,
    color: "bg-teal-50 text-teal-700",
    border: "border-teal-200",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copyStatus, setCopyStatus] = useState({ email: "", draft: "" });
  const [mailError, setMailError] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Please enter at least 2 characters for your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "Please write a message of at least 10 characters.";
    if (form.honeypot) e.honeypot = "Spam detected.";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setCopyStatus((prev) => ({ ...prev, draft: "" }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) { setErrors(validation); return; }
    setMailError(false);
    setCopyStatus((prev) => ({ ...prev, draft: "" }));
    setSubmitted(true);
    // Browsers cannot confirm that a mail app opened or that an email was sent.
    // Keep the form intact so the visitor can edit or copy the same draft.
    try {
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(draftSubject)}&body=${encodeURIComponent(draftBody)}`;
    } catch {
      setMailError(true);
    }
  };

  const draftSubject = `Portfolio inquiry from ${form.name.trim()}`;
  const draftBody = `Hi Takbir,\n\n${form.message.trim()}\n\n${form.name.trim()}\n${form.email.trim()}`;
  const draft = `To: ${personalInfo.email}\nSubject: ${draftSubject}\n\n${draftBody}`;

  const copyText = async (text, kind) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus((prev) => ({ ...prev, [kind]: "success" }));
    } catch {
      setCopyStatus((prev) => ({ ...prev, [kind]: "error" }));
    }
  };
  const copyEmail = () => copyText(personalInfo.email, "email");
  const copyDraft = () => copyText(draft, "draft");

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
            Have a role, a project, or a question in mind? I would be glad to hear from you.
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
              Let’s discuss your next project
            </h3>
            <p className="text-slate-500 mb-4 leading-relaxed">
              I am open to <strong className="text-slate-800">full-stack development and AI automation</strong> opportunities in Dhaka and remotely. Email is the best way to reach me.
            </p>
            <button onClick={copyEmail} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1.5 rounded-full hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400">
              <Copy size={14} /> {copyStatus.email === "success" ? "Email copied" : "Copy email"}: {personalInfo.email}
            </button>

            <p role="status" aria-live="polite" className="text-sm text-slate-600 mb-4">
              {copyStatus.email === "error" ? `Could not copy the email address. Please select it manually: ${personalInfo.email}` : ""}
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
                  role="status"
                  aria-live="polite"
                  className="flex flex-col items-center justify-center py-10 text-center"
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-teal-600" />
                  </div>
                  <h4 className="font-display font-bold text-xl text-slate-900 mb-2">Your email draft is ready</h4>
                  <p className="text-slate-500 text-sm">Complete and send your message in your email app. If no app opened, copy the draft below and paste it into Gmail, Outlook, or another email service. Send it to <a href={`mailto:${personalInfo.email}`} className="text-primary-700 underline">{personalInfo.email}</a>.</p>
                  {mailError && <p className="text-sm text-slate-600 mt-3">Your browser could not open an email app. You can still copy your draft below.</p>}
                  <label htmlFor="contact-draft" className="text-sm font-semibold text-slate-700 mt-5 mb-2 self-start">Your draft</label>
                  <textarea id="contact-draft" readOnly value={draft} rows={7} className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700" />
                  <div className="flex flex-wrap gap-3 mt-4">
                    <button onClick={()=>setSubmitted(false)} className="text-sm bg-white border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50">Edit message</button>
                    <button onClick={copyDraft} className="text-sm bg-teal-600 text-white px-4 py-2 rounded-xl hover:bg-teal-700 flex items-center gap-1.5"><Copy size={14}/> Copy draft</button>
                  </div>
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
                      placeholder="Your full name"
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
                      placeholder="Tell me about the role or the project"
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:border-transparent outline-none transition-all text-sm resize-none ${errors.message ? "border-red-300 focus:ring-red-400" : "border-slate-200 focus:ring-teal-500"}`}
                    />
                    {errors.message && <p id="error-message" className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>
                  {/* Honeypot, visually hidden but accessible to bots */}
                  <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                    <label htmlFor="contact-hp">Leave empty</label>
                    <input id="contact-hp" type="text" name="honeypot" value={form.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="flex gap-3">
                    <button type="submit" className="flex-1 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg shadow-teal-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600">
                      <Send size={16} />
                      Open email app
                    </button>
                    <button type="button" onClick={copyDraft} className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 flex items-center gap-1.5 text-sm font-semibold"><Copy size={14}/> Copy draft</button>
                  </div>
                  <p className="text-xs text-slate-400 text-center">This opens a draft in your email app. You will need to send it there. Your message is not submitted to this website. <a href={`mailto:${personalInfo.email}`} className="underline text-slate-600">Email me directly</a>.</p>
                </form>
              )}
              <p role="status" aria-live="polite" className="text-sm text-slate-600 mt-3">
                {copyStatus.draft === "success" && "Draft copied. Paste it into your email app to send it."}
                {copyStatus.draft === "error" && (submitted ? "Could not copy the draft. Select the text above and copy it manually." : "Could not copy the draft. Your text is still in the form; you can select and copy it manually.")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
