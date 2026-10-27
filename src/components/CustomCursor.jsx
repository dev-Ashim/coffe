import { useEffect, useRef, useState } from "react";

// A small dot + trailing ring that follows the mouse (desktop only).
export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled] = useState(
    () => window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!enabled) return;
    const pos = { x: -100, y: -100 };
    const lag = { x: -100, y: -100 };
    let raf;

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      dot.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    };
    const over = (e) => {
      ring.current.classList.toggle("is-hover", !!e.target.closest("a, button, .tile"));
    };
    const loop = () => {
      lag.x += (pos.x - lag.x) * 0.18;
      lag.y += (pos.y - lag.y) * 0.18;
      ring.current.style.transform = `translate(${lag.x}px, ${lag.y}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div className="cursor-dot" ref={dot} aria-hidden="true" />
      <div className="cursor-ring" ref={ring} aria-hidden="true" />
    </>
  );
}
