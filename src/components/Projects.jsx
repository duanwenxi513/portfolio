import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import BorderGlow from "./BorderGlow";
import BlurText from "./BlurText";

const projects = [
  {
    title: "交通流预测 · AI 科研",
    description:
      "利用机器学习方法对城市交通流进行建模与预测，涉及数据清洗、特征工程、模型评估等完整流程。Python + Scikit-learn + Pandas 实现。",
    tags: ["Python", "ML", "交通", "科研"],
    link: "#",
    color: "gold",
  },
  {
    title: "金融数据分析 · AI 科研",
    description:
      "基于 NLP 与时间序列分析，对金融市场相关文本和指标进行建模。在实践中理解量化研究的底层逻辑与研究范式。",
    tags: ["Python", "NLP", "金融", "科研"],
    link: "#",
    color: "amber",
  },
  {
    title: "自媒体内容创作",
    description:
      "业余做内容创作，发布过多个视频作品。全平台累计播放量刚过 10 万，仍在持续摸索内容风格与增长路径。",
    tags: ["视频制作", "内容策划", "新媒体"],
    link: "#",
    color: "warm",
  },
  {
    title: "摄影作品集",
    description:
      "喜欢拍照，拍了一段时间了，积累了一些自己还算满意的作品。不太追求器材，更在意画面本身是不是有意思。整理中。",
    tags: ["摄影", "后期", "视觉表达"],
    link: "#",
    color: "rosegold",
  },
];

const dotMap = {
  gold: "bg-amber-300",
  amber: "bg-amber-400",
  warm: "bg-orange-400",
  rosegold: "bg-amber-300",
};

export function Projects() {
  return (
    <section id="projects" className="flex w-full justify-center px-6 py-28 md:py-40">
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
              Projects &amp; Works
            </motion.span>
            <BlurText
              text="项目与作品"
              delay={100}
              direction="top"
              stepDuration={0.5}
              className="mt-2 font-sans text-3xl font-semibold tracking-tighter text-white md:text-4xl"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const dotCls = dotMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              >
                <a href={project.link} className="block h-full no-underline">
                  <BorderGlow
                    backgroundColor="#0e0f16"
                    className="group h-full transition-all duration-300"
                  >
                    <div className="flex h-full flex-col rounded-[32px] bg-[#0e0f16]/80 p-8 backdrop-blur-md">
                      <div className={`mb-5 h-2.5 w-2.5 rounded-full ${dotCls}`} />
                      <BlurText
                        text={project.title}
                        delay={50}
                        animateBy="words"
                        stepDuration={0.4}
                        className="font-sans text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-white/90"
                      />
                      <p className="mt-3 max-w-[480px] text-[14px] leading-relaxed text-zinc-500">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-amber-500/10 bg-amber-500/[0.03] px-3 py-1 font-mono text-[11px] text-zinc-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex items-center gap-3">
                        <span className="flex items-center gap-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-600 transition-colors group-hover:text-amber-400/80">
                          查看详情 <ExternalLink size={12} strokeWidth={1.5} />
                        </span>
                      </div>
                    </div>
                  </BorderGlow>
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/10 bg-[#0e0f16]/60 backdrop-blur-sm px-6 py-3 font-sans text-[14px] text-zinc-400 transition-all duration-300 hover:border-amber-500/20 hover:text-amber-300"
          >
            <Github size={16} strokeWidth={1.5} />
            更多作品整理中
          </a>
        </motion.div>
      </div>
    </section>
  );
}
