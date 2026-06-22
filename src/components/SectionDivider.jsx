import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="flex w-full justify-center px-6">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-full max-w-[1700px] origin-center bg-gradient-to-r from-transparent via-amber-500/[0.06] to-transparent"
      />
    </div>
  );
}
