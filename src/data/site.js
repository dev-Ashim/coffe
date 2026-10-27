// Business details — edit here and every page updates.

export const site = {
  name: "Sol. & Bean",
  fullName: "Sol. & Bean Coffee House",
  hindiName: "सोल. & बीन",
  tagline: "Coffee. Bites. Conversations.",

  address: {
    line1: "B1/1, Vishesh Khand",
    line2: "Gomti Nagar, Lucknow",
    line3: "Uttar Pradesh — 226010",
    short: "B1/1, Vishesh Khand, Gomti Nagar, Lucknow 226010",
  },

  coords: { lat: 26.86117172241211, lng: 81.01394653320312 },

  // TODO: replace with real hours / contact / social links
  // dayNums: 0 = Sunday … 6 = Saturday. open/close are 24h decimals (23.5 = 11:30 pm).
  hours: [
    { days: "Mon – Fri", dayNums: [1, 2, 3, 4, 5], open: 8, close: 23 },
    { days: "Sat – Sun", dayNums: [0, 6], open: 9, close: 23.5 },
  ],
  phone: "+91 99196 66550",
  email: "hello@solandbean.com",
  instagram: { handle: "@sol.andbean", href: "https://www.instagram.com/sol.andbean/" },
};

// 23.5 -> "11:30 pm"
export function formatHour(h) {
  const hr = Math.floor(h);
  const min = Math.round((h - hr) * 60);
  const suffix = hr >= 12 && hr < 24 ? "pm" : "am";
  return `${hr % 12 || 12}:${String(min).padStart(2, "0")} ${suffix}`;
}

const { lat, lng } = site.coords;
export const mapEmbedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=17&hl=en&output=embed`;
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

export const navLinks = [
  { to: "/about", label: "Our Story" },
  { to: "/menu", label: "Menu" },
  { to: "/space", label: "The Space" },
  { to: "/happenings", label: "Happenings" },
  { to: "/visit", label: "Visit" },
];
