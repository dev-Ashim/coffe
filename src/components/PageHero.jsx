import Reveal from "./Reveal";
import SplitText from "./SplitText";

// Top banner used on every inner page. Use "\n" in `title` for line breaks.
export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="page-hero">
      <div className="hero__sun" aria-hidden="true" />
      <div className="page-hero__inner">
        <Reveal as="p" className="eyebrow">{eyebrow}</Reveal>
        <SplitText className="page-hero__title" text={title} step={22} />
        {children && <Reveal as="p" className="page-hero__lede" delay={400}>{children}</Reveal>}
      </div>
    </section>
  );
}
