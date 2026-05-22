import SectionHeading from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const skillGroups = portfolioData.skills;

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24">
      <SectionHeading label="Skills & Stack" title="Core Technical Capabilities" />

      {/* Decorative Blob */}
      <div className="absolute left-10 top-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.category}
            className="group rounded-2xl border border-zinc-800 bg-zinc-950/20 p-6 backdrop-blur-sm shadow-xl transition-all duration-300 hover:border-cyan-500/20 hover:bg-zinc-950/40"
          >
            {/* Color Accent bar */}
            <div
              className={`mb-4 h-1 w-10 rounded-full bg-gradient-to-r opacity-70 transition-all duration-500 group-hover:w-16 ${
                groupIndex % 3 === 0
                  ? "from-cyan-500 to-blue-600"
                  : groupIndex % 3 === 1
                  ? "from-blue-500 to-indigo-600"
                  : "from-violet-500 to-fuchsia-600"
              }`}
            />
            
            <h3 className="text-base font-bold text-zinc-100 mb-4 tracking-wide group-hover:text-white">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-zinc-900/80 hover:text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
