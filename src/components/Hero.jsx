import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import BlurText from "./BlurText";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden px-6 pb-12 pt-32"
    >
      {/* 极轻的上下渐变，只压暗最边缘，不阻断背景 */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#050508]/30 via-transparent to-[#050508]/50" />

      <div className="relative z-10 flex w-full max-w-[1700px] flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-amber-500/10 bg-black/30 px-4 py-1.5 backdrop-blur-sm"
        >
          <Sparkles size={13} className="text-amber-400" strokeWidth={1.5} />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200/70">
            Beijing University of Chemical Technology
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-4xl font-semibold leading-[1.08] tracking-tighter text-white sm:text-5xl md:text-7xl"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block cursor-default"
          >
          <BlurText
            text="Hello, I'm Duan."
            className="text-gradient-gold"
            delay={120}
            direction="top"
            stepDuration={0.35}
          />
          <span className="block" aria-hidden="true" />
          <BlurText
            text="段汶希"
            className="text-gradient-moon"
            delay={140}
            direction="top"
            stepDuration={0.35}
          />
          </motion.div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="mt-8 max-w-[520px] text-[15px] leading-relaxed text-zinc-300"
        >
          北京化工大学 · 金融数学大二在读。
          喜欢在数学、AI、摄影、内容创作之间找到交集，
          对自己感兴趣的事愿意花时间钻下去。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 font-sans text-[14px] font-medium text-black transition-all duration-300 hover:from-amber-300 hover:to-amber-400 active:scale-[0.98]"
          >
            了解更多
            <ArrowDown size={15} strokeWidth={2} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/15 bg-white/[0.02] px-6 py-3 font-sans text-[14px] font-medium text-amber-200 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-white/[0.05] active:scale-[0.98]"
          >
            联系我
          </a>
        </motion.div>
      </div>
    </section>
  );
}
