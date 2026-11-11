import { gallery } from "../data/content";
import Reveal from "./Reveal";

export default function Gallery({ items = gallery }) {
  return (
    <div className="gallery">
      {items.map((t, i) => (
        <Reveal
          as="figure"
          key={t.label}
          delay={(i % 3) * 80}
          className={`tile ${t.size ? `tile--${t.size}` : ""}`}
          // full tiles show the whole photo; this feeds the blurred fill behind it
          style={t.size === "full" && t.src ? { "--tile-bg": `url("${t.src}")` } : undefined}
        >
          {t.src && <img src={t.src} alt={t.label} loading="lazy" />}
          {!t.hideLabel && <span>{t.label}</span>}
        </Reveal>
      ))}
    </div>
  );
}
