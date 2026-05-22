interface SectionHeadingProps {
  label: string;
  title: string;
}

export default function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col items-start">
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400">
          {label}
        </span>
      </div>
      <h2 className="mt-3 bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
