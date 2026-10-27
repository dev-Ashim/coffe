import { Fragment } from "react";
import { marqueeWords } from "../data/content";

export default function Marquee({ words = marqueeWords }) {
  // doubled so the loop is seamless
  const loop = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((w, i) => (
          <Fragment key={i}>
            <span>{w}</span>
            <i>✦</i>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
