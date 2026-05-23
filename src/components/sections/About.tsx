import SectionHeading from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { aboutParagraphs } = portfolioData.personalInfo;
  const education = portfolioData.education;

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading label="About Me" title="Student Journey, Software Mindset" />

      {/* Decorative Blur Background Spot */}
      <div className="absolute right-0 top-1/2 -z-10 h-64 w-64 rounded-full bg-blue-600/5 blur-[100px]" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start">
        {/* Paragraphs Panel */}
        <div className="space-y-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {aboutParagraphs.map((para, idx) => (
            <p key={idx} className="text-justify">
              {para}
            </p>
          ))}
          
          <div className="pt-2">
            <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-400">Core Principles</h4>
            <div className="mt-3 grid grid-cols-2 gap-4 text-sm font-medium text-zinc-300">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Clean & Readable Code
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Robust Databases
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                Intuitive User Experience
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Continuous Learning
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline / Career Focus Card */}
        <div className="space-y-6">
          {/* Education panel */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 backdrop-blur-sm shadow-xl">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Education Journey
            </h3>
            
            <div className="mt-5 space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6 border-l border-zinc-800 last:pb-0 pb-2">
                  {/* Bullet */}
                  <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-cyan-400 ring-4 ring-cyan-950" />
                  
                  <span className="inline-block text-xs font-semibold text-cyan-400/90 font-mono mb-1">
                    {edu.period}
                  </span>
                  <h4 className="text-base font-bold text-white leading-tight">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-zinc-300 mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus Panel */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/40 p-6 backdrop-blur-sm shadow-xl">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Current Objectives
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                <span className="text-zinc-300">
                  Seeking full-stack development internships & freelance contracts
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                <span className="text-zinc-300">
                  Experimenting with Next.js Server Actions and microservices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                <span className="text-zinc-300">
                  Contributing to open source tools and real-world system designs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
