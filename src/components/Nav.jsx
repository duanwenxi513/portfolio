import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 z-50 mt-4 flex w-[calc(100%-2rem)] max-w-[1700px] items-center justify-between rounded-2xl px-6 py-3.5 transition-all duration-500 ${
          scrolled
            ? "bg-[#0e0f16]/80 border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 no-underline">
          <span className="font-mono text-lg font-semibold tracking-tighter text-white">
            DUAN
          </span>
          <span className="hidden rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500 sm:block">
            FINANCIAL MATH
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 font-sans text-[13px] font-medium text-zinc-400 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile trigger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-lg p-2 text-zinc-400 transition-colors hover:text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#08080d]/95 backdrop-blur-2xl md:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-6 top-6 rounded-lg p-2 text-zinc-400 transition-colors hover:text-white"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sans text-2xl font-light tracking-tight text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
