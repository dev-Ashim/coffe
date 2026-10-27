import { brewSteps } from "../data/content";
import Reveal from "./Reveal";

// Bean-to-cup timeline.
export default function BrewSteps() {
  return (
    <ol className="steps">
      {brewSteps.map((s, i) => (
        <Reveal as="li" className="step" key={s.title} delay={i * 120}>
          <span className="step__dot" aria-hidden="true">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </Reveal>
      ))}
    </ol>
  );
}
