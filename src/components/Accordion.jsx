import { useState } from "react";
import Reveal from "./Reveal";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const open = i === openIndex;
        return (
          <Reveal className={`acc ${open ? "is-open" : ""}`} key={item.q} delay={i * 60}>
            <button
              className="acc__q"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              {item.q}
              <span className="acc__icon" aria-hidden="true" />
            </button>
            <div className="acc__a">
              <div><p>{item.a}</p></div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
