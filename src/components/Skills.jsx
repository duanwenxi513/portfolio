import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import BorderGlow from "./BorderGlow";
import BlurText from "./BlurText";

const skillGroups = [
  {
    label: "数理基础",
    items: [
      { name: "数学分析", level: "advanced" },
      { name: "高等代数", level: "advanced" },
      { name: "概率统计", level: "intermediate" },
      { name: "金融数学", level: "intermediate" },
    ],
  },
  {
    label: "编程工具",
    items: [
      { name: "Python", level: "intermediate" },
      { name: "数据分析 (Pandas)", level: "intermediate" },
      { name: "机器学习基础", level: "basic" },
      { name: "LaTeX", level: "intermediate" },
    ],
  },
  {
    label: "AI 应用",
    items: [
      { name: "AI 辅助科研", level: "intermediate" },
      { name: "AI 辅助内容创作", level: "advanced" },
      { name: "Prompt Engineering", level: "intermediate" },
    ],
  },
  {
    label: "创意工具",
    items: [
      { name: "摄影 & 后期", level: "intermediate" },
      { name: "视频剪辑", level: "intermediate" },
      { name: "自媒体运营", level: "intermediate" },
    ],
  },
];

const levelColors = {
  advanced: "bg-amber-400",
  intermediate: "bg-amber-400/50",
  basic: "bg-zinc-600",
};

export function Skills() {
  return (
    <section id="skills" className="flex w-full justify-center px-6 py-28 md:py-40">
      <div className="w-full max-w-[1700px]">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-amber-400"
            >
              Skills
            </motion.span>
            <BlurText
              text="能力矩阵"
              delay={100}
              direction="top"
              stepDuration={0.5}
              className="mt-2 font-sans text-3xl font-semibold tracking-tighter text-white md:text-4xl"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-[380px] text-[14px] leading-relaxed text-zinc-500"
          >
            Advanced — 熟练使用 · Intermediate — 日常运用 · Basic — 学习探索中
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group, gi) => (
            <BorderGlow
              key={group.label}
              backgroundColor="#0e0f16"
              className="transition-all duration-300"
            >
              <div className="rounded-[32px] bg-[#0e0f16]/80 p-6 backdrop-blur-md">
                <div className="mb-5 flex items-center gap-2">
                  <Zap size={14} className="text-amber-400" strokeWidth={1.5} />
                  <span className="font-mono text-[12px] font-medium uppercase tracking-[0.14em] text-zinc-400">
                    {group.label}
                  </span>
                </div>
                <div className="space-y-3">
                  {group.items.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + gi * 0.1 + si * 0.05 }}
                      className="flex items-center justify-between rounded-lg border border-white/[0.02] bg-white/[0.02] px-4 py-2.5 transition-all duration-200 hover:border-amber-500/10 hover:bg-amber-500/[0.04]"
                    >
                      <span className="font-sans text-[14px] font-medium text-zinc-300">
                        {skill.name}
                      </span>
                      <span className={`h-1.5 w-1.5 rounded-full ${levelColors[skill.level]}`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </BorderGlow>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
