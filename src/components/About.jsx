import { motion } from "framer-motion";
import { Brain, Camera, Sparkles, Users } from "lucide-react";
import BorderGlow from "./BorderGlow";
import BlurText from "./BlurText";
import CircularGallery from "./CircularGallery";

const highlightData = [
  {
    icon: Brain,
    label: "金融数学",
    desc: "扎实的数理与逻辑分析基础，学新东西上手比较快，遇到不熟悉的领域不害怕。",
  },
  {
    icon: Sparkles,
    label: "AI 探索",
    desc: "对 AI 有热情，日常学习和工作流中用它辅助思考、提高效率，是个人工具箱里重要的一环。",
  },
  {
    icon: Camera,
    label: "摄影与视觉",
    desc: "喜欢拍照，积累了一些满意的作品。不在意器材，更关注画面本身是不是有意思。",
  },
  {
    icon: Users,
    label: "跨领域交流",
    desc: "兴趣比较广，乐意认识新朋友。喜欢跟不同背景的人聊各自在做的事。",
  },
];

const galleryItems = [
  { image: "https://picsum.photos/seed/brain/800/600?grayscale", text: "金融数学" },
  { image: "https://picsum.photos/seed/sparkles/800/600?grayscale", text: "AI 探索" },
  { image: "https://picsum.photos/seed/camera/800/600?grayscale", text: "摄影与视觉" },
  { image: "https://picsum.photos/seed/users/800/600?grayscale", text: "跨领域交流" },
  { image: "https://picsum.photos/seed/math2/800/600?grayscale", text: "数理基础" },
  { image: "https://picsum.photos/seed/ai2/800/600?grayscale", text: "持续学习" },
];

function HighlightCard({ item, i }) {
  return (
    <motion.div
      key={item.label}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
    >
      <BorderGlow
        backgroundColor="#0e0f16"
        className="group h-full transition-all duration-300 hover:border-transparent"
      >
        <div className="p-6 backdrop-blur-md rounded-[20px] bg-[#0e0f16]/80">
          <div className="mb-3 inline-flex rounded-lg border border-amber-500/10 bg-amber-500/[0.03] p-2.5">
            <item.icon size={20} className="text-amber-400" strokeWidth={1.5} />
          </div>
          <BlurText
            text={item.label}
            delay={50}
            animateBy="words"
            stepDuration={0.4}
            className="font-sans text-[15px] font-medium tracking-tight text-white"
          />
          <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">
            {item.desc}
          </p>
        </div>
      </BorderGlow>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="flex w-full justify-center px-6 py-28 md:py-40">
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
              About
            </motion.span>
            <BlurText
              text="关于我"
              delay={120}
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
            className="max-w-[440px] text-[15px] leading-relaxed text-zinc-400"
          >
            不是什么都会，但对自己感兴趣的事情愿意花时间钻下去。
          </motion.p>
        </div>

        {/* 环形画廊卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 h-[500px] w-full"
        >
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#d4af37"
            borderRadius={0.05}
            font="bold 30px Outfit"
            scrollSpeed={2}
          />
        </motion.div>

        {/* Bio paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <p className="text-[15px] leading-relaxed text-zinc-400">
            目前在北京化工大学读金融数学，大二。平时喜欢折腾的东西比较杂——
            数学、AI、摄影、做视频，都在玩。自认为学新东西的速度还可以，
            遇到不熟悉的领域不会太害怕，敢于搜集探索。
          </p>
          <p className="text-[15px] leading-relaxed text-zinc-400">
            目前同时在跟两个科研项目——一个交通方向，一个金融方向，
            都与人工智能结合比较紧密。边做边学，慢慢积累，
            主要是在实践中去理解学术研究到底是怎么一回事。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
