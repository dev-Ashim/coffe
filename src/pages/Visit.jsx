import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import Accordion from "../components/Accordion";
import { MapEmbed, Storefront, VisitDetails } from "../components/VisitInfo";
import { faqs } from "../data/content";
import { site } from "../data/site";

export default function Visit() {
  return (
    <>
      <PageHero eyebrow="Visit Us" title="Pull up a chair.">
        <span lang="hi">{site.hindiName}</span> — find us at {site.address.short}.
      </PageHero>

      <section className="visit section">
        <div className="visit__info">
          <VisitDetails />
        </div>
        <div className="visit__media">
          <Storefront />
          <MapEmbed />
        </div>
      </section>

      <section className="faq section">
        <SectionHead eyebrow="Good to Know" title="Questions, answered." />
        <Accordion items={faqs} />
      </section>
    </>
  );
}
