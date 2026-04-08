import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaHeart } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-2xl text-white mb-1">
              TZ<span className="text-primary-400">.</span>
            </p>
            <p className="text-sm">Takbir Zaman Bhuiyan · Software Engineer · Dhaka, BD</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {["About", "Skills", "Experience", "Projects", "Research", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
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
                className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm">
          <p>
            © {year} Takbir Zaman Bhuiyan· Built with{" "}
            <span className="text-red-400 inline-flex items-center gap-0.5">
              <FaHeart size={12} />
            </span>{" "}
            using React + Tailwind CSS + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
