import { directionsUrl, formatHour, mapEmbedUrl, site } from "../data/site";
import Reveal from "./Reveal";
import OpenStatus from "./OpenStatus";

export function VisitDetails() {
  const { address, hours, phone, email, instagram } = site;
  return (
    <>
      <Reveal><OpenStatus /></Reveal>
      <Reveal className="visit__grid">
        <div>
          <h4>Address</h4>
          <p>{address.line1}<br />{address.line2}<br />{address.line3}</p>
        </div>
        <div>
          <h4>Hours</h4>
          <p>
            {hours.map((h) => (
              <span key={h.days} className="block">{h.days} · {formatHour(h.open)} – {formatHour(h.close)}</span>
            ))}
          </p>
        </div>
        <div>
          <h4>Say Hello</h4>
          <p>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a><br />
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <div>
          <h4>Follow</h4>
          <p>
            <a href={instagram.href} target="_blank" rel="noopener noreferrer">Instagram {instagram.handle}</a>
          </p>
        </div>
      </Reveal>
      <Reveal>
        <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="btn">Get Directions</a>
      </Reveal>
    </>
  );
}

export function Storefront() {
  return (
    <Reveal as="figure" className="visit__photo">
      <img src="/assets/storefront-night.jpg" alt={`${site.fullName} storefront at night`} loading="lazy" width="960" height="1280" />
      <figcaption>Look for the glowing signboard</figcaption>
    </Reveal>
  );
}

export function MapEmbed() {
  return (
    <Reveal className="visit__map">
      <iframe
        title={`${site.name} on Google Maps`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={mapEmbedUrl}
      />
    </Reveal>
  );
}
