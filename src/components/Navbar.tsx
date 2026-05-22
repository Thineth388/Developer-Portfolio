import { portfolioData } from "@/data/portfolio";

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
    <header className="fixed top-0 z-50 w-full border-b border-zinc-900/60 bg-zinc-950/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4.5">
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
                className="transition duration-300 hover:text-cyan-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-950/50 sm:text-sm"
        >
          Hire Me
        </a>
      </nav>
    </header>
  );
}
