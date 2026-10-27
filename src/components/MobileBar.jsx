import { directionsUrl, site } from "../data/site";

const icons = {
  call: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  map: <><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  insta: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r=".6" /></>,
};

const Icon = ({ name }) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {icons[name]}
  </svg>
);

// Sticky quick-action bar shown on phones only.
export default function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="Quick actions">
      <a href={`tel:${site.phone.replace(/\s/g, "")}`}><Icon name="call" />Call</a>
      <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="is-primary">
        <Icon name="map" />Directions
      </a>
      <a href={site.instagram.href} target="_blank" rel="noopener noreferrer"><Icon name="insta" />Instagram</a>
    </nav>
  );
}
