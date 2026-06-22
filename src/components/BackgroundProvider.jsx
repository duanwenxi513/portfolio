import { useEffect, useRef, useState } from "react";
import UnicornScene from "unicornstudio-react";

export function BackgroundProvider({ children }) {
  const [ready, setReady] = useState(false);
  const heroPhotoRef = useRef(null);

  useEffect(() => {
    const tm = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(tm);
  }, []);

  useEffect(() => {
    const clean = () => {
      document.querySelectorAll("a").forEach((el) => {
        if (el.textContent?.toLowerCase().includes("unicorn")) el.remove();
      });
    };
    const interval = setInterval(clean, 800);
    return () => clearInterval(interval);
  }, []);

  // 滚动驱动照片透明度
  useEffect(() => {
    if (!ready) return;
    const hero = document.getElementById("hero");
    if (!hero) return;
    const photo = heroPhotoRef.current;
    if (!photo) return;

    const onScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      const vh = window.innerHeight;
      const start = vh * 0.5;
      const end = vh * 0.05;
      if (heroBottom > start) photo.style.opacity = 1;
      else if (heroBottom < end) photo.style.opacity = 0;
      else photo.style.opacity = ((heroBottom - end) / (start - end)).toFixed(3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ready]);

  return (
    <div className="relative">
      {/* ======== 全站暗底 + Unicorn 粒子 ======== */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[#07070c]" />
        {ready && (
          <div className="absolute inset-0"
            style={{ opacity: 0.35, mixBlendMode: "screen" }}>
            <UnicornScene
              projectId="rwomvxP1uf9MF579lN4v"
              width="100%" height="100%"
              scale={1} dpi={1.5}
              sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.5/dist/unicornStudio.umd.js"
            />
          </div>
        )}
      </div>

      {/* ======== Hero 照片（滚动渐隐） ======== */}
      <div
        ref={heroPhotoRef}
        className="pointer-events-none fixed inset-0 z-[2] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.jpg')",
          opacity: 1,
          filter: "saturate(1.08) brightness(0.85) contrast(1.05)",
          transition: "opacity 1s ease-out",
        }}
      />

      {/* ======== 全局暗角（始终存在，轻量） ======== */}
      <div className="pointer-events-none fixed inset-0 z-[4] bg-gradient-to-b from-[#050508]/40 via-transparent to-[#050508]/60" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
