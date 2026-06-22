import { useEffect, useRef } from "react";

/**
 * 波纹光晕 — 多层光环跟随鼠标，带延迟和呼吸感。
 *
 * 结构：3 个同心光环，各自以不同的惯性速度追赶光标。
 * 外层光环（波纹）：缓慢追赶 + 周期脉冲，模拟镜头耀斑的衍射环。
 * 中层光环（暖斑）：中等追赶速度，光斑本体。
 * 内层光环（高光）：最贴鼠标，最亮的核心点。
 */
export function LensFlare() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 每层独立坐标，各有自己的惯性速度
    const layers = [
      { mx: 50, my: 50, speed: 0.025 },  // 外层大波纹 — 最慢，最滞后
      { mx: 50, my: 50, speed: 0.06  },  // 中层光斑
      { mx: 50, my: 50, speed: 0.14  },  // 内层高光 — 最贴近鼠标
    ];

    let targetX = 50, targetY = 50;
    let start = performance.now();

    const onMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 100;
      targetY = (e.clientY / window.innerHeight) * 100;
    };

    const animate = (now) => {
      const t = (now - start) / 1000; // seconds

      for (const l of layers) {
        l.mx += (targetX - l.mx) * l.speed;
        l.my += (targetY - l.my) * l.speed;
      }

      // 波纹呼吸：外层半径做 sin 脉冲，1.5s 周期
      const pulse = 1 + Math.sin(t * 4.2) * 0.15;

      // 直接用 CSS 变量驱动，一次 setProperty 全部到位
      el.style.setProperty("--l0-mx", `${layers[0].mx}%`);
      el.style.setProperty("--l0-my", `${layers[0].my}%`);
      el.style.setProperty("--l1-mx", `${layers[1].mx}%`);
      el.style.setProperty("--l1-my", `${layers[1].my}%`);
      el.style.setProperty("--l2-mx", `${layers[2].mx}%`);
      el.style.setProperty("--l2-my", `${layers[2].my}%`);
      el.style.setProperty("--pulse", pulse.toFixed(3));

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    requestAnimationFrame(animate);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[4] overflow-hidden"
      style={{
        "--l0-mx": "50%", "--l0-my": "50%",
        "--l1-mx": "50%", "--l1-my": "50%",
        "--l2-mx": "50%", "--l2-my": "50%",
        "--pulse": "1",
        /* 这里不能在 inline style 用 calc(var)，所以通过 ::before / ::after
           和额外的 div 来实现多层 */
      }}
    >
      {/* 外层大波纹 — 最滞后、直径大、带脉冲呼吸 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              calc(520px * var(--pulse)) at var(--l0-mx) var(--l0-my),
              rgba(255,180,70,0.10) 0%,
              rgba(255,150,50,0.04) 30%,
              transparent 60%
            ),
            radial-gradient(
              calc(320px * var(--pulse)) at var(--l0-mx) var(--l0-my),
              transparent 35%,
              rgba(255,190,90,0.06) 55%,
              transparent 70%
            )
          `,
          willChange: "background",
        }}
      />

      {/* 中层暖斑 — 追得稍快 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              220px at var(--l1-mx) var(--l1-my),
              rgba(255,210,120,0.14) 0%,
              transparent 50%
            ),
            radial-gradient(
              90px at var(--l1-mx) var(--l1-my),
              rgba(255,235,180,0.22) 0%,
              transparent 40%
            )
          `,
          willChange: "background",
        }}
      />

      {/* 内层高光 — 最贴鼠标、最亮最锐 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              28px at var(--l2-mx) var(--l2-my),
              rgba(255,248,225,0.45) 0%,
              rgba(255,240,200,0.15) 30%,
              transparent 55%
            )
          `,
          willChange: "background",
        }}
      />
    </div>
  );
}
