import { motion } from "framer-motion";
import { Mail, Send, MapPin, ArrowUpRight, AtSign } from "lucide-react";
import { useState } from "react";
import BorderGlow from "./BorderGlow";
import BlurText from "./BlurText";

export function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="flex w-full justify-center px-6 py-28 md:py-40">
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
              Contact
            </motion.span>
            <BlurText
              text="保持联系"
              delay={100}
              direction="top"
              stepDuration={0.5}
              className="mt-2 font-sans text-3xl font-semibold tracking-tighter text-white md:text-4xl"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
          >
            <BorderGlow backgroundColor="#0e0f16">
              <div className="flex flex-col gap-5 rounded-[20px] bg-[#0e0f16]/80 p-6 backdrop-blur-md">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500">称呼</label>
                  <input type="text" required placeholder="你的名字" className="rounded-xl border border-white/[0.06] bg-[#0e0f16]/80 backdrop-blur-sm px-4 py-3 font-sans text-[14px] text-white placeholder:text-zinc-600 focus:border-amber-500/30 focus:outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500">邮箱</label>
                  <input type="email" required placeholder="your@email.com" className="rounded-xl border border-white/[0.06] bg-[#0e0f16]/80 backdrop-blur-sm px-4 py-3 font-sans text-[14px] text-white placeholder:text-zinc-600 focus:border-amber-500/30 focus:outline-none" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500">想说的话</label>
                  <textarea required rows={4} placeholder="感兴趣的方向、想聊的事情……" className="resize-none rounded-xl border border-white/[0.06] bg-[#0e0f16]/80 backdrop-blur-sm px-4 py-3 font-sans text-[14px] text-white placeholder:text-zinc-600 focus:border-amber-500/30 focus:outline-none" />
                </div>
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-sans text-[14px] font-medium transition-all duration-300 active:scale-[0.98] ${
                    status === "sent"
                      ? "bg-amber-500/20 text-amber-300"
                      : "bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-300 hover:to-amber-400"
                  }`}
                >
                  {status === "idle" && (<><Send size={14} strokeWidth={2} />发送消息</>)}
                  {status === "sending" && "发送中..."}
                  {status === "sent" && "已发送!"}
                </button>
              </div>
            </BorderGlow>
          </motion.form>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-6 md:pl-8"
          >
            <BorderGlow backgroundColor="#0e0f16">
              <div className="rounded-[20px] bg-[#0e0f16]/80 p-8 backdrop-blur-md">
                <div className="mb-5 inline-flex rounded-lg border border-amber-500/10 bg-amber-500/[0.04] p-2.5">
                  <Mail size={20} className="text-amber-400" strokeWidth={1.5} />
                </div>
                <BlurText text="邮箱联系" delay={60} stepDuration={0.4} className="font-sans text-[16px] font-medium text-white" />
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">欢迎通过邮件与我联系，我会尽快回复。</p>
                <a href="mailto:2359628970@qq.com" className="mt-5 inline-flex items-center gap-1.5 font-mono text-[13px] text-amber-400 transition-colors hover:text-amber-300">
                  2359628970@qq.com <ArrowUpRight size={13} strokeWidth={1.5} />
                </a>
              </div>
            </BorderGlow>

            <BorderGlow backgroundColor="#0e0f16">
              <div className="rounded-[20px] bg-[#0e0f16]/80 p-8 backdrop-blur-md">
                <div className="mb-5 inline-flex rounded-lg border border-amber-500/10 bg-amber-500/[0.04] p-2.5">
                  <AtSign size={20} className="text-amber-400" strokeWidth={1.5} />
                </div>
                <BlurText text="社交媒体" delay={60} stepDuration={0.4} className="font-sans text-[16px] font-medium text-white" />
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">
                  全平台同名：<span className="font-medium text-amber-200">Duan</span>
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-zinc-500">欢迎来交流，喜欢跟不同背景的人聊聊各自在做的事。</p>
              </div>
            </BorderGlow>

            <BorderGlow backgroundColor="#0e0f16">
              <div className="rounded-[20px] bg-[#0e0f16]/80 p-8 backdrop-blur-md">
                <div className="mb-5 inline-flex rounded-lg border border-amber-500/10 bg-amber-500/[0.04] p-2.5">
                  <MapPin size={20} className="text-amber-400" strokeWidth={1.5} />
                </div>
                <BlurText text="位置" delay={60} stepDuration={0.4} className="font-sans text-[16px] font-medium text-white" />
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-400">北京市朝阳区<br />北京化工大学</p>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
