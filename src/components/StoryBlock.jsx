import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

// "Sol + Bean" story with the cup mark. `teaser` adds a link to the About page.
export default function StoryBlock({ teaser = false }) {
  return (
    <section className="story section">
      <Reveal className="story__mark">
        <img src="/assets/logo-cup.png" alt="Sol. & Bean cup mark" />
      </Reveal>
      <div className="story__copy">
        <Reveal as="p" className="eyebrow">Our Story</Reveal>
        <Reveal as="h2" className="h2" delay={80}>Sun in the cup,<br />bean at the heart.</Reveal>
        <Reveal as="p" delay={160}>
          <strong>Sol</strong> is the sun — the warmth, the morning light, the people who walk in.{" "}
          <strong>Bean</strong> is the craft — sourced with care, roasted with patience, brewed with intent.
          Put them together and you get a coffee house built for slow mornings and long conversations.
        </Reveal>
        {!teaser && (
          <Reveal as="p" delay={200}>
            We pull every shot like it matters, bake in small batches, and keep the playlist low enough
            for you to hear the person across the table.
          </Reveal>
        )}
        <Reveal as="ul" className="stats" delay={240}>
          <li><CountUp to={100} suffix="%" /><span>Arabica</span></li>
          <li><CountUp to={18} suffix="hr" /><span>Cold brew steep</span></li>
          <li><b>∞</b><span>Conversations</span></li>
        </Reveal>
        {teaser && (
          <Reveal delay={280} className="story__more">
            <Link to="/about" className="btn btn--ghost">Read Our Story</Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
