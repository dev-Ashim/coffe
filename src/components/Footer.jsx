import { Link } from "react-router-dom";
import { navLinks, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="footer__wordmark" src="/assets/logo-wordmark.png" alt={site.fullName} />
      <nav className="footer__links">
        {navLinks.map((l) => (
          <Link key={l.to} to={l.to}>{l.label}</Link>
        ))}
      </nav>
      <a className="footer__insta" href={site.instagram.href} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
        </svg>
        {site.instagram.handle}
      </a>
      <p className="footer__addr">
        <span lang="hi">{site.hindiName}</span> · {site.address.short}
      </p>
      <p className="footer__copy">
        © {new Date().getFullYear()} {site.fullName}. Made with warmth.
      </p>
    </footer>
  );
}
