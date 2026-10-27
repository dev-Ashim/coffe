import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, site } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // close with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <Link to="/" className="nav__brand" aria-label={`${site.name} home`}>
        <img src="/assets/logo-cup.png" alt="" width="34" height="45" />
        <span>{site.name}</span>
      </Link>

      <nav className="nav__links">
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
        ))}
      </nav>

      <Link to="/visit" className="btn btn--sm nav__cta">Find Us</Link>

      <button
        className="nav__toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span /><span />
      </button>
    </header>

    {/* mobile menu — lives outside <header> so the header's backdrop-filter can't clip it */}
    <div className={`drawer ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
      <nav className="drawer__links">
        {[{ to: "/", label: "Home" }, ...navLinks].map((l, i) => (
          <NavLink key={l.to} to={l.to} end style={{ "--i": i }} tabIndex={open ? 0 : -1}>
            <small>0{i + 1}</small>{l.label}
          </NavLink>
        ))}
      </nav>
      <div className="drawer__foot">
        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn" tabIndex={open ? 0 : -1}>Call Us</a>
        <a href={site.instagram.href} target="_blank" rel="noopener noreferrer" className="btn btn--ghost" tabIndex={open ? 0 : -1}>
          {site.instagram.handle}
        </a>
        <p>{site.address.short}</p>
      </div>
    </div>
    </>
  );
}
