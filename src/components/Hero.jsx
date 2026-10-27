import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__sun" aria-hidden="true" />
      <div className="hero__inner">
        <Reveal as="p" className="eyebrow">Coffee House · Gomti Nagar, Lucknow</Reveal>
        <SplitText
          className="hero__title"
          text={"Coffee.\nBites.\nConversations."}
          lineClass={{ 2: "outline" }}
        />
        <Reveal as="p" className="hero__lede" delay={500}>
          Small-batch coffee, fresh bites from the kitchen, and a table that's always worth staying a
          little longer at.
        </Reveal>
        <Reveal className="hero__actions" delay={650}>
          <Link to="/menu" className="btn">Explore the Menu</Link>
          <Link to="/visit" className="btn btn--ghost">Plan a Visit</Link>
        </Reveal>
      </div>
      <div className="hero__badge" aria-hidden="true">
        <img src="/assets/logo-badge.png" alt="" />
      </div>
    </section>
  );
}
