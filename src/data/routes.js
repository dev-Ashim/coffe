// Per-page transition settings.
// curtain: rise | drop | wipe | iris | doors | blinds — the overlay shown while navigating
// enter:   rise | blur | slide | zoom | skew | fade  — how the new page animates in

export const transitions = {
  "/": { label: "Home", curtain: "rise", enter: "rise" },
  "/about": { label: "Our Story", curtain: "doors", enter: "blur" },
  "/menu": { label: "The Menu", curtain: "wipe", enter: "slide" },
  "/space": { label: "The Space", curtain: "iris", enter: "zoom" },
  "/happenings": { label: "Happenings", curtain: "blinds", enter: "skew" },
  "/visit": { label: "Visit Us", curtain: "drop", enter: "fade" },
};

export const fallbackTransition = { label: "Sol. & Bean", curtain: "wipe", enter: "fade" };

export const transitionFor = (path) => transitions[path] ?? fallbackTransition;

export const COVER_MS = 650;
export const REVEAL_MS = 750;
