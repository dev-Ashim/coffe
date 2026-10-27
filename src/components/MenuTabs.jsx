import { useState } from "react";
import { menu } from "../data/menu";
import MenuItem from "./MenuItem";
import Reveal from "./Reveal";

export default function MenuTabs() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active);

  return (
    <>
      <Reveal className="tabs" role="tablist">
        {menu.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === active}
            className={`tab ${c.id === active ? "is-active" : ""}`}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </Reveal>

      {/* key forces the fade-in animation to replay on tab change */}
      <div className="menu__panel is-active" role="tabpanel" key={active}>
        {category.items.map((item) => (
          <MenuItem key={item.name} {...item} />
        ))}
      </div>
    </>
  );
}
