import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import StoryBlock from "../components/StoryBlock";
import SectionHead from "../components/SectionHead";
import MenuItem from "../components/MenuItem";
import Gallery from "../components/Gallery";
import EventCards from "../components/EventCards";
import Reveal from "../components/Reveal";
import OpenStatus from "../components/OpenStatus";
import { signatures } from "../data/menu";
import { gallery } from "../data/content";
import { site } from "../data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <StoryBlock teaser />

      <section className="menu section">
        <SectionHead eyebrow="Signatures" title={<>The ones people<br />come back for.</>} />
        <div className="menu__panel is-active">
          {signatures.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
        <Reveal className="section__cta">
          <Link to="/menu" className="btn btn--dark">See Full Menu</Link>
        </Reveal>
      </section>

      <section className="section">
        <SectionHead eyebrow="The Space" title={<>Come for the coffee.<br />Stay for the light.</>} />
        <Gallery items={gallery.slice(0, 4)} />
        <Reveal className="section__cta">
          <Link to="/space" className="btn btn--ghost">Step Inside</Link>
        </Reveal>
      </section>

      <section className="events section">
        <SectionHead eyebrow="Happenings" title="More than a cup." />
        <EventCards />
      </section>

      <section className="cta-band section">
        <Reveal as="p" className="eyebrow">Find Us</Reveal>
        <Reveal as="h2" className="h2" delay={80}>Pull up a chair.</Reveal>
        <Reveal as="p" className="cta-band__addr" delay={160}>{site.address.short}</Reveal>
        <Reveal delay={200}><OpenStatus /></Reveal>
        <Reveal delay={240}>
          <Link to="/visit" className="btn">Plan Your Visit</Link>
        </Reveal>
      </section>
    </>
  );
}
