// Vercel serverless function — GET /api/instagram
// Returns the latest @sol.andbean posts as JSON for the "On Instagram" section.
// Needs the INSTAGRAM_TOKEN environment variable (see README → Instagram feed).
// The token never reaches the browser; responses are cached at the edge for an hour.

const FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
const LIMIT = 12;
const API = "https://graph.instagram.com";

const json = (body, status, cache) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": cache },
  });

export async function GET() {
  const token = process.env.INSTAGRAM_TOKEN;
  if (!token) return json({ error: "INSTAGRAM_TOKEN is not set" }, 503, "no-store");

  try {
    const res = await fetch(`${API}/me/media?fields=${FIELDS}&limit=${LIMIT}&access_token=${encodeURIComponent(token)}`);
    const data = await res.json();
    if (!res.ok) return json({ error: data?.error?.message || "Instagram request failed" }, 502, "no-store");

    // Long-lived tokens last 60 days; refreshing pushes that out again.
    // Runs at most about once an hour because of the cache below. Failures are harmless.
    await fetch(`${API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${encodeURIComponent(token)}`).catch(() => {});

    const posts = (data.data || []).map((p) => {
      const isVideo = p.media_type === "VIDEO";
      return {
        id: p.id,
        kind: isVideo ? "video" : p.media_type === "CAROUSEL_ALBUM" ? "carousel" : "image",
        src: isVideo ? p.thumbnail_url || null : p.media_url,
        video: isVideo ? p.media_url : null,
        href: p.permalink,
        caption: (p.caption || "").slice(0, 180),
        date: p.timestamp,
      };
    });

    return json({ posts }, 200, "public, s-maxage=3600, stale-while-revalidate=86400");
  } catch {
    return json({ error: "Could not reach Instagram" }, 502, "no-store");
  }
}
