import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-white)] py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-lg font-semibold">© {new Date().getFullYear()} #hacksinstacks</h2>
        <nav className="flex gap-6 text-sm">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white/80 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-white/80 transition"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="hover:underline hover:text-white/80 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;