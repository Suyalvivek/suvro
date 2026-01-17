import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0 w-4 h-4 rounded-full
        pointer-events-none z-[9999]
        -translate-x-1/2 -translate-y-1/2
        backdrop-blur-md
        bg-white/10
        border border-red-500/70
        shadow-[0_0_8px_rgba(220,38,38,0.6)]
      "
    >
      {/* center dot */}
      <span className="absolute inset-[3px] bg-red-600 rounded-full" />
    </div>
  );
}