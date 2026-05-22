"use client";

import { useState, FormEvent } from "react";
import SectionHeading from "../SectionHeading";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { email, github, linkedin, whatsapp, phone } = portfolioData.socialLinks;

  // Form states
  const [name, setName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic client validation
    if (!name.trim() || !contactEmail.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(contactEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    const key = portfolioData.socialLinks.web3formsKey;

    // If key is set and is not the default placeholder, send real email using Web3Forms!
    if (key && key !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE" && key.trim() !== "") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: key,
            name: name,
            email: contactEmail,
            message: message,
            subject: `Portfolio Message from ${name}`,
            from_name: "Developer Portfolio Form",
          }),
        });

        const result = await response.json();
        if (result.success) {
          setStatus("success");
          setName("");
          setContactEmail("");
          setMessage("");
        } else {
          setStatus("error");
          setErrorMessage(result.message || "Failed to transmit message. Please try direct channels.");
        }
      } catch {
        setStatus("error");
        setErrorMessage("Network interface failure. Please try direct channels or email.");
      }
    } else {
      // Mock simulation mode when key is default placeholder (perfect for local dev testing)
      setTimeout(() => {
        setStatus("success");
        setName("");
        setContactEmail("");
        setMessage("");
      }, 1500);
    }
  };

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      {/* Decorative Blur Background Spot */}
      <div className="absolute left-1/3 bottom-0 -z-10 h-72 w-72 rounded-full bg-violet-600/5 blur-[120px]" />

      <SectionHeading label="Contact" title="Let's Build Something Together" />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] items-start mt-6">
        {/* Info Column */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/20 p-8 backdrop-blur-sm shadow-xl space-y-6">
          <p className="text-zinc-400 leading-relaxed text-base">
            Interested in hiring me for an internship, collaborating on an open source system, or just discussing software engineering? Let&apos;s connect!
          </p>

          <div className="border-t border-zinc-900 pt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500">Email Address</span>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300 break-all"
                >
                  {email}
                </a>
              </div>

              <div>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500">Phone & WhatsApp</span>
                <div className="mt-1 flex flex-col items-start gap-1">
                  <a
                    href={`tel:${phone}`}
                    className="text-sm font-semibold text-zinc-300 hover:text-cyan-450 transition-colors duration-300"
                  >
                    {phone}
                  </a>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>

            <div>
              <span className="block font-mono text-[10px] uppercase tracking-widest text-zinc-500">Professional Networks</span>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-900 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-900 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-8 backdrop-blur-sm shadow-xl">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-10 space-y-4 animate-fade-in">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white tracking-wide">Message Transmitted!</h3>
              <p className="max-w-xs text-sm text-zinc-400">
                Thank you, machan! Your submission has been captured successfully. I will review it and get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/50 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 transition duration-300 hover:border-zinc-600 hover:bg-zinc-850"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "error" && (
                <div className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 text-xs font-medium text-rose-400">
                  {errorMessage}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="form-name" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-zinc-800/80 bg-zinc-900/20 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition duration-300 focus:border-cyan-500/40 focus:bg-zinc-900/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="form-email" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-zinc-800/80 bg-zinc-900/20 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition duration-300 focus:border-cyan-500/40 focus:bg-zinc-900/40"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="form-message" className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  Message Body
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or offer..."
                  className="w-full rounded-xl border border-zinc-800/80 bg-zinc-900/20 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition duration-300 focus:border-cyan-500/40 focus:bg-zinc-900/40 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-950/50 transition duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-900/50 disabled:opacity-50"
              >
                {status === "sending" ? "Transmitting Signal..." : "Transmit Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
