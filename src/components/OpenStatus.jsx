import { useEffect, useState } from "react";
import { formatHour, site } from "../data/site";

// Current time in Lucknow, as { day: 0-6, hour: decimal }.
function nowInIST() {
  const d = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
  return { day: d.getDay(), hour: d.getHours() + d.getMinutes() / 60 };
}

function getStatus() {
  const { day, hour } = nowInIST();
  const today = site.hours.find((h) => h.dayNums.includes(day));
  if (today && hour >= today.open && hour < today.close) {
    return { open: true, text: `Open now · until ${formatHour(today.close)}` };
  }
  // next opening: later today, else tomorrow
  const tomorrow = site.hours.find((h) => h.dayNums.includes((day + 1) % 7));
  const next = today && hour < today.open ? `today ${formatHour(today.open)}` : `tomorrow ${formatHour(tomorrow.open)}`;
  return { open: false, text: `Closed · opens ${next}` };
}

export default function OpenStatus() {
  const [status, setStatus] = useState(getStatus);

  useEffect(() => {
    const t = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(t);
  }, []);

  return (
    <p className={`open-status ${status.open ? "is-open" : ""}`}>
      <i aria-hidden="true" />
      {status.text}
    </p>
  );
}
