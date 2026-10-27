import PageHero from "../components/PageHero";
import Gallery from "../components/Gallery";

export default function Space() {
  return (
    <>
      <PageHero eyebrow="The Space" title={"Come for the coffee.\nStay for the light."}>
        A corner of Vishesh Khand made for slow mornings, long laptop sessions and longer conversations.
      </PageHero>

      <section className="section">
        <Gallery />
      </section>
    </>
  );
}
