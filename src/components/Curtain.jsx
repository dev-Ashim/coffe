const PANELS = { doors: 2, blinds: 5 };

// Overlay that covers the screen between pages. `phase` is idle | cover | reveal.
export default function Curtain({ phase, type, label }) {
  const count = PANELS[type] ?? 1;
  return (
    <div className={`curtain curtain--${type} is-${phase}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <div className="curtain__panel" key={i} style={{ "--i": i }} />
      ))}
      <div className="curtain__label">
        <img src="/assets/logo-cup.png" alt="" />
        <span>{label}</span>
      </div>
    </div>
  );
}
