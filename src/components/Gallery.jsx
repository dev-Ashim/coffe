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
        >
          {t.src && <img src={t.src} alt={t.label} loading="lazy" />}
          <span>{t.label}</span>
        </Reveal>
      ))}
    </div>
  );
}
