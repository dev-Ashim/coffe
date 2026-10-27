import PageHero from "../components/PageHero";
import MenuTabs from "../components/MenuTabs";
import Reveal from "../components/Reveal";

export default function Menu() {
  return (
    <>
      <PageHero eyebrow="The Menu" title={"Brewed & baked\nfor every hour."}>
        From the first espresso of the morning to a late cold brew — and something good to eat alongside.
      </PageHero>

      <section className="menu section">
        <MenuTabs />
        <Reveal as="p" className="menu__note">
          Prices inclusive of taxes. Ask us about plant-based milk and today's specials.
        </Reveal>
      </section>
    </>
  );
}
