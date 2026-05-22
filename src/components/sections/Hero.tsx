import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { firstName, lastName, title, subtitle, bioParagraphs, avatarUrl } =
    portfolioData.personalInfo;

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-12 px-6 pb-16 pt-28 md:flex-row md:items-center md:justify-between md:gap-16 md:pt-32"
    >
      {/* Visual Glowing Blob Behind Avatar */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-600/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Avatar Image Block */}
      <div
        className="animate-fade-in order-1 w-full shrink-0 md:order-none md:w-auto animate-float"
        style={{ animationDelay: "0ms" }}
      >
        <div className="group relative mx-auto w-fit md:mx-0">
          {/* Ambient Outer Glow */}
          <div
            className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-blue-600/20 to-violet-600/10 opacity-70 blur-2xl transition duration-700 group-hover:opacity-100 group-hover:duration-200"
            aria-hidden
          />
          {/* Main Photo Frame */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 shadow-2xl ring-1 ring-white/5 glass-panel glass-panel-glow">
            <div className="relative aspect-[4/5] h-[320px] w-[260px] sm:h-[380px] sm:w-[300px] md:h-[440px] md:w-[340px]">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent z-10" />
              <Image
                src={avatarUrl}
                alt={`${firstName} ${lastName}`}
                fill
                className="object-cover object-[center_20%] transition duration-700 ease-out group-hover:scale-[1.03]"
                priority
                sizes="(max-width: 768px) 260px, 340px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content Text Info */}
      <div
        className="animate-fade-in order-2 max-w-xl md:order-none"
        style={{ animationDelay: "120ms" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 font-mono text-xs text-cyan-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Available for Opportunities
        </div>

        <h1 className="mt-5 text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl uppercase">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 text-2xl sm:text-3xl font-mono tracking-[0.25em] mb-2 font-bold">
            {firstName}
          </span>
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)] font-black tracking-tighter block">
            {lastName}
          </span>
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-lg border border-cyan-500/20 bg-cyan-950/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
            {title}
          </span>
          <span className="inline-flex items-center rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-300">
            {subtitle}
          </span>
        </div>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {bioParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Dynamic skills string shortcut */}
        <p className="mt-4 font-mono text-xs text-zinc-500 tracking-wide">
          Primary: Java · Python · JavaScript · Node.js · MySQL · React · Next.js
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/50 transition duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-900/50"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-6 py-3 text-sm font-medium text-zinc-200 transition duration-300 hover:border-zinc-700 hover:bg-zinc-900/80"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
