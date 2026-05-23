"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";

const TypewriterText = ({ text, delay = 0, speed = 10, skip = false }: { text: string, delay?: number, speed?: number, skip?: boolean }) => {
  const [displayedText, setDisplayedText] = useState(skip ? text : "");

  useEffect(() => {
    if (skip) {
      setDisplayedText(text);
      return;
    }
    
    setDisplayedText("");
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText((prev) => {
          if (prev.length >= text.length) {
            clearInterval(interval);
            return text;
          }
          return text.slice(0, prev.length + 1);
        });
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed, skip]);

  return <span>{displayedText}</span>;
};

interface TerminalLine {
  text: string;
  type: "input" | "output" | "error" | "system";
  skipTypewriter?: boolean;
}

export default function TerminalConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: "Thineth Developer Terminal [Version 2.6.0]", type: "system", skipTypewriter: true },
    { text: "Copyright (c) 2026 R.M. Thineth Shalinda. All rights reserved.", type: "system", skipTypewriter: true },
    { text: "Type 'help' and press Enter to see a list of commands.", type: "system", skipTypewriter: true },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto Scroll
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommandSubmit = (cmdText: string) => {
    const trimmed = cmdText.trim();
    const cleanCmd = trimmed.toLowerCase();

    // If input is empty, just output a blank line
    if (!trimmed) {
      setHistory((prev) => [...prev, { text: "", type: "input" }]);
      return;
    }

    // Add user's command line to history
    const userLine: TerminalLine = { text: `thineth@shalinda:~$ ${trimmed}`, type: "input", skipTypewriter: true };
    let responseLines: TerminalLine[] = [];

    // Map command variations to canonical command values
    let canonicalCmd = cleanCmd;
    if (["skill", "skills"].includes(cleanCmd)) {
      canonicalCmd = "skills";
    } else if (["project", "projects", "work", "works", "proj"].includes(cleanCmd)) {
      canonicalCmd = "projects";
    } else if (["about", "me", "bio", "profile", "info"].includes(cleanCmd)) {
      canonicalCmd = "about";
    } else if (["contact", "contacts", "phone", "email", "whatsapp", "call"].includes(cleanCmd)) {
      canonicalCmd = "contact";
    } else if (["clear", "cls"].includes(cleanCmd)) {
      canonicalCmd = "clear";
    } else if (["hi", "hello", "hey", "sup", "greet", "yo"].includes(cleanCmd)) {
      canonicalCmd = "greet";
    } else if (["help", "h", "?"].includes(cleanCmd)) {
      canonicalCmd = "help";
    }

    switch (canonicalCmd) {
      case "help":
        responseLines = [
          { text: "Available commands in this shell:", type: "system" },
          { text: "  about    - Displays developer biography and current stats.", type: "output" },
          { text: "  skills   - Lists categorized programming languages & frameworks.", type: "output" },
          { text: "  projects - Lists summary of projects developed.", type: "output" },
          { text: "  contact  - Outputs secure email, phone, and WhatsApp channels.", type: "output" },
          { text: "  clear    - Wipes the console history.", type: "output" },
        ];
        break;
      case "greet":
        responseLines = [
          { text: "Hello! Welcome to Thineth Shalinda's interactive console terminal.", type: "system" },
          { text: "Feel free to type 'skills', 'about', or 'projects' to browse.", type: "output" },
        ];
        break;
      case "about":
        responseLines = [
          { text: `Name: R.M. Thineth Shalinda`, type: "output" },
          { text: `Age: ${portfolioData.personalInfo.age} Years`, type: "output" },
          { text: `Institution: ICBT Colombo`, type: "output" },
          { text: `Status: Undergraduate Student (CS)`, type: "output" },
          { text: `Biography: I build desktop softwares, responsive web APIs, and IoT frameworks. My goal is to build secure, scalable code architectures.`, type: "output" },
        ];
        break;
      case "skills":
        responseLines = [
          { text: "Categorized Technical Skills:", type: "system" as const },
          ...portfolioData.skills.flatMap((group) => [
            { text: `[${group.category}]:`, type: "system" as const },
            { text: `  ${group.skills.join(", ")}`, type: "output" as const }
          ])
        ];
        break;
      case "projects":
        responseLines = [
          { text: "Developed Software Solutions:", type: "system" },
          ...portfolioData.projects.map((p, idx) => ({
            text: `  ${idx + 1}. ${p.title} - [${p.tech.join(", ")}]`,
            type: "output" as const
          }))
        ];
        break;
      case "contact":
        responseLines = [
          { text: "Secure Connections Protocol:", type: "system" },
          { text: `  Email:    ${portfolioData.socialLinks.email}`, type: "output" },
          { text: `  Phone:    ${portfolioData.socialLinks.phone}`, type: "output" },
          { text: `  WhatsApp: Active at direct link wa.me/94762519388`, type: "output" },
        ];
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        responseLines = [
          { text: `Command not found: '${trimmed}'. Type 'help' to see list of valid signals.`, type: "error" }
        ];
    }

    setHistory((prev) => [...prev, userLine, ...responseLines]);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommandSubmit(input);
    }
  };

  return (
    <section id="developer-terminal" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Decorative Blob */}
      <div className="absolute left-1/4 bottom-10 -z-10 h-72 w-72 rounded-full bg-cyan-600/5 blur-[120px] animate-pulse-glow" />

      <SectionHeading label="Developer Tool" title="Interactive CLI Console" />

      <div className="max-w-4xl mx-auto">
        <p className="text-zinc-400 mb-6 text-sm sm:text-base leading-relaxed">
          Recruiters or developers who prefer command-line navigation can query my portfolio details directly using the interactive emulator console below.
        </p>

        {/* Terminal Shell Window */}
        <motion.div
          onClick={focusInput}
          drag
          dragConstraints={{ left: -50, right: 50, top: -20, bottom: 50 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/80 shadow-2xl glass-panel glass-panel-glow overflow-hidden cursor-text relative"
        >
          {/* Header Panel */}
          <div className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950/40 px-4 py-3 select-none">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors" />
              <span className="h-3.5 w-3.5 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors" />
              <span className="h-3.5 w-3.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors" />
            </div>
            <div className="font-mono text-xs text-zinc-500">thineth@shalinda-portfolio:~</div>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Console Output Screen */}
          <div className="p-6 font-mono text-xs sm:text-sm h-80 overflow-y-auto space-y-2 select-text leading-relaxed">
            {history.map((line, index) => {
              let textClass = "text-zinc-300";
              if (line.type === "input") textClass = "text-cyan-400 font-semibold";
              if (line.type === "system") textClass = "text-zinc-500";
              if (line.type === "error") textClass = "text-rose-400 font-bold";

              return (
                <div key={index} className={`whitespace-pre-wrap break-words ${textClass}`}>
                  <TypewriterText text={line.text} skip={line.skipTypewriter || line.type === "input"} speed={15} />
                </div>
              );
            })}
            
            {/* Input Prompt row */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-emerald-400 font-bold shrink-0">thineth@shalinda:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent text-cyan-300 border-none outline-none caret-cyan-400 p-0 m-0"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>
            
            <div ref={terminalEndRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
