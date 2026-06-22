import { Github, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative flex w-full justify-center border-t border-amber-500/[0.04] px-6 py-10">
      <div className="flex w-full max-w-[1700px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[14px] font-semibold tracking-tighter text-white">
            DUAN
          </span>
          <span className="font-mono text-[12px] text-zinc-600">
            FINANCIAL MATH · AI · CONTENT
          </span>
        </div>

        <p className="font-mono text-[12px] text-zinc-600">
          &copy; {year} Beijing University of Chemical Technology. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-mono text-[12px] text-zinc-500 transition-colors hover:text-amber-400"
          >
            GitHub <ArrowUpRight size={10} strokeWidth={1.5} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-mono text-[12px] text-zinc-500 transition-colors hover:text-amber-400"
          >
            Twitter <ArrowUpRight size={10} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
