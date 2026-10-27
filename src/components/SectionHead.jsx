import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, children }) {
  return (
    <div className="section__head">
      <Reveal as="p" className="eyebrow">{eyebrow}</Reveal>
      <Reveal as="h2" className="h2" delay={80}>{title}</Reveal>
      {children && <Reveal as="p" className="section__lede" delay={160}>{children}</Reveal>}
    </div>
  );
}
