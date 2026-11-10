import { useEffect, useState } from "react";
import { site } from "../data/site";
import { instaFallback } from "../data/content";
import Reveal from "./Reveal";

const canHover = () =>
  window.matchMedia("(hover: hover)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const KindIcon = ({ kind }) =>
  kind === "video" ? (
    <svg viewBox="0 0 24 24" aria-label="Reel"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" /></svg>
  ) : kind === "carousel" ? (
    <svg viewBox="0 0 24 24" aria-label="Multiple photos">
      <rect x="7" y="3" width="14" height="14" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7v11.5A2.5 2.5 0 0 0 5.5 21H17" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  ) : null;

function Tile({ post, index }) {
  const preview = (e, play) => {
    const v = e.currentTarget.querySelector("video");
    if (!v || !canHover()) return;
    if (play) v.play().catch(() => {});
    else { v.pause(); v.currentTime = 0; }
  };

  return (
    <Reveal
      as="a"
      delay={(index % 4) * 70}
      className="insta__tile"
      href={post.href || site.instagram.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={(e) => preview(e, true)}
      onMouseLeave={(e) => preview(e, false)}
    >
      {post.video ? (
        <video src={post.video} poster={post.src || undefined} muted loop playsInline preload="metadata" />
      ) : (
        <img src={post.src} alt={post.caption || `Post by ${site.instagram.handle}`} loading="lazy" />
      )}
      {post.kind !== "image" && <span className="insta__kind"><KindIcon kind={post.kind} /></span>}
      {post.caption && <span className="insta__cap">{post.caption}</span>}
    </Reveal>
  );
}

// Latest Instagram posts from /api/instagram; falls back to our own photos
// when the feed isn't connected (e.g. local dev, or no token set yet).
export default function InstaFeed({ count = 8 }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/instagram")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => alive && setPosts(d.posts?.length ? d.posts : instaFallback))
      .catch(() => alive && setPosts(instaFallback));
    return () => { alive = false; };
  }, []);

  return (
    <div className="insta__grid" aria-busy={!posts}>
      {posts
        ? posts.slice(0, count).map((p, i) => <Tile key={p.id || p.src} post={p} index={i} />)
        : Array.from({ length: count }, (_, i) => <div key={i} className="insta__tile insta__tile--loading" />)}
    </div>
  );
}
