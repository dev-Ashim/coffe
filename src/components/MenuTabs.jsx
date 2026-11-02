import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { menu } from "../data/menu";
import MenuItem from "./MenuItem";
import Reveal from "./Reveal";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Types the tagline out letter by letter; screen readers get the full text at once.
function Typewriter({ text }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reducedMotion()) { setCount(text.length); return; }
    setCount(0);
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) { clearInterval(id); return c; }
        return c + 1;
      });
    }, 38);
    return () => clearInterval(id);
  }, [text]);

  return (
    <p className="menu__tagline">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span className="menu__caret" aria-hidden="true" />
    </p>
  );
}

export default function MenuTabs() {
  const [active, setActive] = useState(menu[0].id);
  const [pill, setPill] = useState(null);
  const tabsRef = useRef(null);
  const panelRef = useRef(null);
  const category = menu.find((c) => c.id === active);

  // slide the highlight pill under the active tab
  useLayoutEffect(() => {
    const measure = () => {
      const btn = tabsRef.current?.querySelector(".tab.is-active");
      if (!btn) return;
      setPill({ left: btn.offsetLeft, top: btn.offsetTop, width: btn.offsetWidth, height: btn.offsetHeight });
    };
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  // cascade panel content in as it scrolls into view
  useEffect(() => {
    const els = panelRef.current.querySelectorAll("[data-anim]");
    const io = new IntersectionObserver(
      (entries) => {
        let i = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.setProperty("--d", `${Math.min(i++, 10) * 70}ms`);
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [active]);

  const select = (id, e) => {
    setActive(id);
    e.currentTarget.scrollIntoView({ behavior: reducedMotion() ? "auto" : "smooth", block: "nearest", inline: "center" });
  };

  return (
    <>
      <Reveal>
        <div className={`tabs ${pill ? "has-pill" : ""}`} role="tablist" ref={tabsRef}>
          {pill && <span className="tabs__pill" style={pill} aria-hidden="true" />}
          {menu.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={c.id === active}
              className={`tab ${c.id === active ? "is-active" : ""}`}
              onClick={(e) => select(c.id, e)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* key forces the entrance animations to replay on tab change */}
      <div className="menu__panel menu-anim is-active" role="tabpanel" key={active} ref={panelRef}>
        {category.tagline && <Typewriter text={category.tagline} />}
        {category.groups ? (
          category.groups.map((group) => (
            <section className="menu__group" key={group.label}>
              <h2 data-anim>{group.label}</h2>
              {group.note && <p className="menu__group-note" data-anim>{group.note}</p>}
              <div className="menu__group-grid">
                {group.items.map((item) => (
                  <MenuItem key={item.name} {...item} />
                ))}
              </div>
            </section>
          ))
        ) : (
          category.items.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))
        )}
        {category.addOns && (
          <section className="menu__group menu__addons">
            <h2 data-anim>Add Ons</h2>
            {category.addOns.map((tier) => (
              <p key={tier.price} data-anim>
                <b>+ ₹{tier.price}</b>
                <span>{tier.items.join(" · ")}</span>
              </p>
            ))}
          </section>
        )}
      </div>
    </>
  );
}
