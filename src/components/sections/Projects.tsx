"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "../SectionHeading";
import { portfolioData, Project } from "@/data/portfolio";

export default function Projects() {
  const allProjects = portfolioData.projects;

  // Dynamically extract unique categories
  const categories = [
    "All",
    ...Array.from(
      new Set(allProjects.flatMap((p) => p.categories))
    ),
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.categories.includes(activeCategory));

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Decorative Blob */}
      <div className="absolute right-10 top-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px] animate-pulse-glow" />

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <SectionHeading label="My Projects" title="Recent Software Creations" />

        {/* Filter Navigation Pills */}
        <div className="flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-950/50"
                  : "border border-zinc-800 bg-zinc-950/20 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((p: Project) => (
          <article
            key={p.title}
            onClick={() => setSelectedProject(p)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/20 transition-all duration-300 hover:border-cyan-500/30 hover:bg-zinc-950/50 hover:shadow-xl cursor-pointer animate-fade-in"
          >
            {/* Image Header / Fallback abstract graphic */}
            <div className="relative h-48 w-full overflow-hidden border-b border-zinc-900 bg-zinc-950">
              {p.imageUrl ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-60 z-10" />
                  <Image
                    src={p.imageUrl}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900/60 via-zinc-950 to-zinc-900/80 p-6 overflow-hidden select-none">
                  {/* Decorative faint grid lines in background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                  {/* Glowing background blob */}
                  <div className="absolute -bottom-8 h-20 w-36 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/20 transition duration-500" />
                  
                  {/* Code icon mock-up */}
                  <svg className="h-10 w-10 text-zinc-700 transition duration-500 group-hover:text-cyan-500/50 group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                  <span className="mt-2 font-mono text-[9px] uppercase tracking-widest text-zinc-600 transition duration-500 group-hover:text-cyan-400/50">
                    Source Code System
                  </span>
                </div>
              )}

              {/* Float category pill on top right */}
              <div className="absolute top-3 right-3 z-20">
                {p.categories.slice(0, 1).map((c) => (
                  <span
                    key={c}
                    className="inline-block rounded bg-zinc-950/80 border border-zinc-800/85 backdrop-blur-md px-2 py-0.5 text-[8px] font-bold text-cyan-400 uppercase tracking-wider"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Content body with padding */}
            <div className="flex flex-1 flex-col justify-between p-5">
              <div>
                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-cyan-300">
                  {p.title}
                </h3>
                
                {/* Tags if more than one category */}
                <div className="flex flex-wrap gap-1 mt-2">
                  {p.categories.map((c) => (
                    <span
                      key={c}
                      className="inline-block rounded bg-cyan-950/20 border border-cyan-800/10 px-2 py-0.5 text-[8px] font-semibold text-cyan-400/80"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* Project Description */}
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 group-hover:text-zinc-300 line-clamp-3">
                  {p.description}
                </p>
              </div>

              <div>
                {/* Technology Tokens */}
                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-zinc-900/60 pt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] font-semibold text-zinc-500 transition duration-300 group-hover:text-zinc-455"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Modal Trigger button */}
                <div className="mt-5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300">
                  <span>View System Architecture</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Interactive Project Detail Modal overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          {/* Dismiss Click-away listener */}
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)} />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl glass-panel glass-panel-glow max-h-[85vh] overflow-y-auto z-10">
            
            {/* Top Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-zinc-450 hover:text-white transition duration-300 z-20 bg-zinc-950/80 border border-zinc-800 rounded-full p-1"
              aria-label="Close modal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image Header */}
            {selectedProject.imageUrl && (
              <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-xl border border-zinc-900 mb-6 bg-zinc-950">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-40" />
              </div>
            )}

            {/* Header info */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-2">
                {selectedProject.categories.map((c) => (
                  <span
                    key={c}
                    className="inline-block rounded bg-cyan-950/40 border border-cyan-800/20 px-2 py-0.5 text-[9px] font-bold text-cyan-400 uppercase tracking-wide"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-wide">
                {selectedProject.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-300">
              {selectedProject.description}
            </p>

            {/* Features Checklist */}
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="mt-6">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-cyan-400">
                  Key Specifications & Features
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-zinc-400">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-950/60 border border-cyan-800/30 text-cyan-400">
                        <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges solved */}
            {selectedProject.challengesSolved && (
              <div className="mt-6 rounded-xl border border-zinc-900 bg-zinc-950/60 p-4">
                <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  Engineering Hurdle Solved
                </h4>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed italic">
                  &ldquo;{selectedProject.challengesSolved}&rdquo;
                </p>
              </div>
            )}

            {/* Tech pills footer */}
            <div className="mt-6 border-t border-zinc-900 pt-4 flex flex-wrap gap-2">
              {selectedProject.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-2.5 py-1 text-xs font-semibold text-zinc-450"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA Links */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition duration-300 hover:border-cyan-500/40 hover:bg-zinc-900 hover:text-white"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
                Github Source
              </a>

              {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-cyan-950/40 transition duration-300 hover:from-cyan-400 hover:to-blue-500"
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View the Website
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
