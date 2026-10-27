import PageHero from "../components/PageHero";
import EventCards from "../components/EventCards";
import Reveal from "../components/Reveal";
import { site } from "../data/site";

export default function Happenings() {
  return (
    <>
      <PageHero eyebrow="Happenings" title="More than a cup.">
        Workshops, open mics and private gatherings — there's usually something brewing at Sol. &amp; Bean.
      </PageHero>

      <section className="events section">
        <EventCards showWhen />
        <Reveal className="section__cta">
          <a href={`mailto:${site.email}?subject=Booking enquiry`} className="btn">Book a Gathering</a>
        </Reveal>
      </section>
    </>
  );
}
