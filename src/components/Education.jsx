import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, FlaskConical, BookOpen } from "lucide-react";
import BorderGlow from "./BorderGlow";
import BlurText from "./BlurText";

const eduData = {
  school: "北京化工大学",
  en: "Beijing University of Chemical Technology",
  degree: "本科 · 金融数学",
  period: "2024 — 2028 (预计)",
  location: "北京市朝阳区",
  highlights: [
    "金融数学专业在读，数理基础扎实，逻辑分析能力强",
    "同时在跟两个科研项目：交通方向（AI 相关）和金融方向（AI 相关），边做边学",
    "在实践中理解学术研究方法论，对新领域知识吸收速度较快",
  ],
  courses: [
    "数学分析",
    "高等代数",
    "概率论与数理统计",
    "金融数学",
    "Python 编程",
    "机器学习导论",
  ],
};

export function Education() {
  return (
    <section id="education" className="flex w-full justify-center px-6 py-28 md:py-40">
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
              Education &amp; Research
            </motion.span>
            <BlurText
              text="学术与科研"
              delay={100}
              direction="top"
              stepDuration={0.5}
              className="mt-2 font-sans text-3xl font-semibold tracking-tighter text-white md:text-4xl"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <BorderGlow
            backgroundColor="#0e0f16"
            className="transition-all duration-300"
          >
            <div className="rounded-[32px] bg-[#0e0f16]/80 p-8 backdrop-blur-md md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="inline-flex rounded-lg border border-amber-500/10 bg-amber-500/[0.03] p-2">
                      <GraduationCap size={22} className="text-amber-400" strokeWidth={1.5} />
                    </div>
                    <BlurText
                      text={eduData.school}
                      delay={60}
                      direction="top"
                      animateBy="words"
                      stepDuration={0.45}
                      className="font-sans text-2xl font-semibold tracking-tight text-white"
                    />
                  </div>
                  <p className="mt-1 ml-[50px] text-[14px] text-zinc-500">{eduData.en}</p>
                </div>
                <div className="ml-[50px] flex flex-wrap gap-4 md:ml-0">
                  <div className="flex items-center gap-1.5 text-[13px] text-zinc-500">
                    <Calendar size={13} strokeWidth={1.5} />
                    {eduData.period}
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] text-zinc-500">
                    <MapPin size={13} strokeWidth={1.5} />
                    {eduData.location}
                  </div>
                </div>
              </div>

              <p className="ml-[50px] mt-4 font-sans text-[16px] font-medium text-amber-400">
                {eduData.degree}
              </p>

              <ul className="ml-[50px] mt-8 space-y-3">
                {eduData.highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="flex items-start gap-3 text-[14px] leading-relaxed text-zinc-400"
                  >
                    <span className="mt-[6px] block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/60" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="ml-[50px] mt-8 flex items-start gap-4 rounded-xl border border-amber-500/10 bg-amber-500/[0.02] p-5">
                <div className="mt-0.5 rounded-lg border border-amber-500/10 bg-amber-500/[0.04] p-2">
                  <FlaskConical size={18} className="text-amber-400" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[14px] font-medium text-white">在研项目</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-zinc-400">
                    交通方向（AI 结合）与金融方向（AI 结合）两个课题组并行推进，
                    涵盖数据建模、算法优化等核心环节。在实践中积累，在交流中成长。
                  </p>
                </div>
              </div>

              <div className="ml-[50px] mt-8">
                <div className="mb-3 flex items-center gap-2 text-[12px] text-zinc-500">
                  <BookOpen size={13} strokeWidth={1.5} />
                  课程基础
                </div>
                <div className="flex flex-wrap gap-2">
                  {eduData.courses.map((course, i) => (
                    <motion.span
                      key={course}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                      className="rounded-full border border-amber-500/10 bg-amber-500/[0.03] px-3.5 py-1.5 font-mono text-[12px] text-zinc-400"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}
