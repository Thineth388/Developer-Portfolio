"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { firstName, lastName } = portfolioData.personalInfo;
  

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-zinc-900/60 bg-zinc-950/60 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-mono text-[11px] font-black tracking-[0.25em] text-white hover:text-cyan-400 transition duration-300 uppercase sm:text-xs"
        >
          {firstName}
          <span className="text-cyan-400">_</span>
          {lastName}
        </a>
        
        <ul className="hidden gap-8 text-xs font-semibold uppercase tracking-wider text-zinc-400 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition duration-300 hover:text-cyan-400 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-950/50 sm:text-sm hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
