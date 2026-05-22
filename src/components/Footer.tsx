import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { fullName } = portfolioData.personalInfo;

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/40 py-12 text-center backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 font-medium">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-zinc-300">
            {fullName}
          </span>
          . All Rights Reserved.
        </p>
        <p className="text-xs text-zinc-600 font-mono">
          Engineered with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
