import Navbar from "./Navbar";
import Footer from "./Footer";
import Preloader from "./Preloader";
import Curtain from "./Curtain";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import CustomCursor from "./CustomCursor";
import MobileBar from "./MobileBar";

export default function Layout({ loading, onLoaded, phase, target, enter, pageKey, children }) {
  return (
    <>
      {loading && <Preloader onDone={onLoaded} />}
      <Curtain phase={phase} type={target.curtain} label={target.label} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      {/* key remounts the page so its entrance animation replays */}
      <main className={`page page--${enter}`} key={pageKey}>
        {children}
      </main>

      <Footer />
      <BackToTop />
      <MobileBar />
    </>
  );
}
