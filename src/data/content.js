// Gallery + happenings content.

// Each tile: `label` (also the alt text), `src`, optional `size` ("tall" | "wide" | "full"),
// optional `hideLabel` for photos that already carry their own text.
// The home page shows the first 4 tiles — keep those without a size so they sit in one row.
const g = (file) => `/assets/gallery/${file}.jpg`;

export const gallery = [
  { label: "The Storefront", src: "/assets/storefront.jpg", size: "full", hideLabel: true },
  { label: "The Signboard", src: g("signboard") },
  { label: "Latte Art", src: g("latte-art") },
  { label: "Cane Lights", src: g("cane-lights") },
  { label: "The Long Table", src: g("long-table"), size: "wide" },
  { label: "Window Seats", src: g("window-seating"), size: "tall" },
  { label: "Iced Matcha", src: g("matcha") },
  { label: "Our Mark", src: g("wall-mark") },
  { label: "Avocado Toast", src: g("avocado-toast"), size: "wide" },
  { label: "Blueberry Mojito", src: g("blueberry-mojito"), size: "tall" },
  { label: "Garden Pizza", src: g("pizza") },
  { label: "Waffle & Ice Cream", src: g("waffle") },
  { label: "Bean A While", src: g("bean-a-while") },
  { label: "Iced Latte", src: g("iced-coffee") },
  { label: "Frozen Cooler", src: g("frozen-cooler") },
];

export const happenings = [
  {
    title: "Brew Workshops",
    desc: "Learn pour-over, AeroPress and milk steaming from our baristas. Small groups, lots of tasting.",
    when: "Saturdays · 11 am",
  },
  {
    title: "Open Mic Evenings",
    desc: "Poetry, acoustic sets and stories. Bring a friend — or bring a song.",
    when: "Fridays · 7 pm",
  },
  {
    title: "Private Gatherings",
    desc: "Birthdays, book clubs, team catch-ups. Book a corner and we'll take care of the rest.",
    when: "On request",
  },
];

export const brewSteps = [
  { title: "Source", desc: "Beans picked for flavour and fairness, from growers we know by name." },
  { title: "Roast", desc: "Roasted in small batches so every bag is fresh and full of character." },
  { title: "Brew", desc: "Dialled in every morning — grind, dose and time, until the shot sings." },
  { title: "Serve", desc: "Handed across the counter with a smile, and maybe a little latte art." },
];

// TODO: confirm these answers before going live
export const faqs = [
  { q: "Do I need a reservation?", a: "Walk-ins are always welcome. For groups of 6 or more, give us a call and we'll hold a table." },
  { q: "Is there Wi-Fi and space to work?", a: "Yes — ask the barista for the password. Plug points are along the long table." },
  { q: "Do you have plant-based milk?", a: "Oat and almond milk are available for any drink at a small extra charge." },
  { q: "Is parking available?", a: "Street parking is available around Vishesh Khand. Look for the glowing Sol. & Bean signboard." },
  { q: "Can I book the café for an event?", a: "Absolutely. Drop us an email with the date and headcount and we'll plan it with you." },
];

export const marqueeWords = ["Espresso", "Cold Brew", "Fresh Bakes", "Pour Over", "All-Day Bites", "Good Company"];

// Shown in the "On Instagram" section until the live feed is connected
// (or if Instagram is unreachable). Same shape as /api/instagram posts.
export const instaFallback = [
  { kind: "video", video: "/assets/reel.mp4", src: "/assets/reel-poster.jpg", caption: "Now pouring in Vishesh Khand. Coffee, bites, conversations." },
  { kind: "image", src: g("latte-art"), caption: "Rosetta, every single time." },
  { kind: "image", src: g("avocado-toast"), caption: "Avocado toast & salsa on sourdough." },
  { kind: "image", src: g("blueberry-mojito"), caption: "Blueberry mojito for the golden hour." },
  { kind: "image", src: g("cane-lights"), caption: "Cane lights, warm corners." },
  { kind: "image", src: g("waffle"), caption: "Waffle, ice cream, chocolate. No notes." },
  { kind: "image", src: g("matcha"), caption: "Iced matcha over berry." },
  { kind: "image", src: g("pizza"), caption: "Garden pizza, fresh from the oven." },
];
