import PageHero from "../components/PageHero";
import StoryBlock from "../components/StoryBlock";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import BrewSteps from "../components/BrewSteps";

const values = [
  { title: "Sourced with care", desc: "Beans chosen for flavour and fairness — we know where our coffee comes from." },
  { title: "Made in small batches", desc: "Bakes and bites come out of our kitchen through the day, never from a freezer." },
  { title: "Built for staying", desc: "Comfortable seats, warm light and no rush. Your table is yours as long as you like." },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="Our Story" title={"Sol. meets\nBean."}>
        A neighbourhood coffee house in Gomti Nagar, built around three simple things: coffee, bites and
        conversations.
      </PageHero>

      <StoryBlock />
      <Marquee />

      <section className="section">
        <SectionHead eyebrow="Bean to Cup" title={<>How every cup<br />comes together.</>} />
        <BrewSteps />
      </section>

      <section className="events section">
        <SectionHead eyebrow="What We Believe" title="Three small promises." />
        <div className="cards">
          {values.map((v, i) => (
            <Reveal as="article" className="card" key={v.title} delay={i * 80}>
              <span className="card__num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
