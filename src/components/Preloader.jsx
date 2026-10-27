import { useEffect, useState } from "react";
import { site } from "../data/site";

const FILL_MS = 1700;
const EXIT_MS = 800;

// First-visit loader: the cup mark fills up like coffee, then the panel lifts away.
export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 200 : FILL_MS;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setPct(Math.round(eased * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setLeaving(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(onDone, EXIT_MS);
    return () => clearTimeout(t);
  }, [leaving, onDone]);

  return (
    <div className={`preloader ${leaving ? "is-leaving" : ""}`} role="status" aria-label="Loading">
      <div className="preloader__cup">
        <img className="preloader__ghost" src="/assets/logo-cup.png" alt="" />
        <div className="preloader__fill" style={{ "--p": `${pct}%` }} />
      </div>
      <p className="preloader__count">{String(pct).padStart(3, "0")}</p>
      <p className="preloader__tag">{site.tagline}</p>
    </div>
  );
}
