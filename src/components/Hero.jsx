import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SplitText from "./SplitText";

export default function Hero() {
  const video = useRef(null);

  // Set `muted` on the element itself (React doesn't always write the attribute),
  // so mobile browsers allow autoplay. Visitors who prefer reduced motion get the poster.
  useEffect(() => {
    const v = video.current;
    if (!v) return;
    v.muted = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="hero">
      <div className="hero__sun" aria-hidden="true" />
      <div className="hero__media" aria-hidden="true">
        <video
          ref={video}
          className="hero__video"
          src="/assets/reel.mp4"
          poster="/assets/reel-poster.jpg"
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="hero__badge">
          <img src="/assets/logo-badge.png" alt="" />
        </div>
      </div>
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
    </section>
  );
}
