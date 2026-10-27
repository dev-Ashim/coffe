import { useCallback, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Space from "./pages/Space";
import Happenings from "./pages/Happenings";
import Visit from "./pages/Visit";
import NotFound from "./pages/NotFound";
import { COVER_MS, REVEAL_MS, transitionFor } from "./data/routes";

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// the preloader plays once per browser session
const INTRO_KEY = "sb-intro-seen";
const introSeen = () => {
  try { return sessionStorage.getItem(INTRO_KEY) === "1"; } catch { return false; }
};

export default function App() {
  const location = useLocation();
  // the page actually on screen — lags behind `location` while the curtain covers
  const [shown, setShown] = useState(location);
  const [phase, setPhase] = useState("idle");
  const [loading, setLoading] = useState(() => !introSeen());

  useEffect(() => {
    if (location.pathname === shown.pathname) return;

    if (reduceMotion()) {
      setShown(location);
      window.scrollTo(0, 0);
      return;
    }

    setPhase("cover");
    const swap = setTimeout(() => {
      setShown(location);
      window.scrollTo(0, 0);
      setPhase("reveal");
    }, COVER_MS);
    const done = setTimeout(() => setPhase("idle"), COVER_MS + REVEAL_MS);
    return () => {
      clearTimeout(swap);
      clearTimeout(done);
    };
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  // pause on-page animations until the preloader has gone
  useEffect(() => {
    document.body.classList.toggle("is-loading", loading);
  }, [loading]);

  const finishLoading = useCallback(() => {
    try { sessionStorage.setItem(INTRO_KEY, "1"); } catch { /* storage blocked — fine */ }
    setLoading(false);
  }, []);

  return (
    <Layout
      loading={loading}
      onLoaded={finishLoading}
      phase={phase}
      target={transitionFor(location.pathname)}
      enter={transitionFor(shown.pathname).enter}
      pageKey={shown.pathname}
    >
      <Routes location={shown}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="space" element={<Space />} />
        <Route path="happenings" element={<Happenings />} />
        <Route path="visit" element={<Visit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
