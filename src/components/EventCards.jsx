import { happenings } from "../data/content";
import Reveal from "./Reveal";

export default function EventCards({ items = happenings, showWhen = false }) {
  return (
    <div className="cards">
      {items.map((e, i) => (
        <Reveal as="article" className="card" key={e.title} delay={i * 80}>
          <span className="card__num">{String(i + 1).padStart(2, "0")}</span>
          <h3>{e.title}</h3>
          <p>{e.desc}</p>
          {showWhen && <p className="card__when">{e.when}</p>}
        </Reveal>
      ))}
    </div>
  );
}
