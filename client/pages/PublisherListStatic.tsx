import React, { useMemo, useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ITEMS = [
  { img: "https://placehold.co/96x96/svg?text=PI", name: "Philadelphia Inquirer", tagline: "Local journalism in Philly" },
  { img: "https://placehold.co/96x96/svg?text=B", name: "Bloomberg", tagline: "Business & markets" },
  { img: "https://placehold.co/96x96/svg?text=R", name: "Reuters", tagline: "Global news" },
  { img: "https://placehold.co/96x96/svg?text=F", name: "Forbes", tagline: "Business insights" },
  { img: "https://placehold.co/96x96/svg?text=CDT", name: "Centre Daily Times", tagline: "State news" },
  { img: "https://placehold.co/96x96/svg?text=TN", name: "Temple News", tagline: "Campus reporting" },
  { img: "https://placehold.co/96x96/svg?text=B%26W", name: "The Brown and White (Lehigh)", tagline: "Campus news" },
  { img: "https://placehold.co/96x96/svg?text=JH", name: "The Johns Hopkins News-Letter", tagline: "University coverage" },
  { img: "https://placehold.co/96x96/svg?text=SN", name: "The State News (MSU)", tagline: "Campus news" },
  { img: "https://placehold.co/96x96/svg?text=DP", name: "The Daily Pennsylvanian", tagline: "University reporting" },
  { img: "https://placehold.co/96x96/svg?text=HC", name: "The Harvard Crimson", tagline: "Campus journalism" },
  { img: "https://placehold.co/96x96/svg?text=YDN", name: "Yale Daily News", tagline: "Campus journalism" },
  { img: "https://placehold.co/96x96/svg?text=DC", name: "The Daily Californian", tagline: "Campus news" },
  { img: "https://placehold.co/96x96/svg?text=TL", name: "The Lantern (Ohio State)", tagline: "Campus reporting" },
  { img: "https://placehold.co/96x96/svg?text=TMD", name: "The Michigan Daily", tagline: "Campus news" },
  { img: "https://placehold.co/96x96/svg?text=DB", name: "The Diamondback (Maryland)", tagline: "Campus coverage" },
  { img: "https://placehold.co/96x96/svg?text=DN", name: "The Daily Northwestern", tagline: "Campus reporting" },
  { img: "https://placehold.co/96x96/svg?text=SD", name: "The Stanford Daily", tagline: "Campus journalism" },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function PublisherListStatic() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<"All" | "Campus" | "Local" | "National" | "Global">("All");
  const [visible, setVisible] = useState(8);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const lower = q.trim().toLowerCase();
  const filtered = useMemo(() => {
    let list = ITEMS.slice();
    if (lower) list = list.filter((it) => it.name.toLowerCase().includes(lower));
    // For static demo, we won't filter by category (no category data)
    return list;
  }, [lower, category]);

  const visibleItems = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  useEffect(() => {
    if (!sentinelRef.current) return;
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasMore) {
          setVisible((v) => Math.min(v + 8, filtered.length));
        }
      });
    });
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [sentinelRef.current, hasMore, filtered.length]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1C2526', color: '#FFFFFF' }}>
      <Navigation />


      <main>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px' }}>
          {/* Hero banner (above search row) */}
          {/* Search Row (sticky on mobile) */}
          <section>
            <div className="grid grid-cols-1 md:[grid-template-columns:1fr_220px]" style={{ gap: 12 }}>
              <div style={{ position: 'relative' }}>
                <div className="md:hidden sticky top-0 z-50" style={{ backdropFilter: 'blur(6px)', background: 'rgba(28,37,38,0.8)', padding: '8px 0' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: 12 }}>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search publishers..."
                    aria-label="Search publishers"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 8, background: '#17201f', border: '1px solid #223232', color: '#FFFFFF' }}
                  />
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    aria-label="Filter by category"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: 8, background: '#17201f', border: '1px solid #223232', color: '#FFFFFF' }}
                  >
                    <option>All</option>
                    <option>Campus</option>
                    <option>Local</option>
                    <option>National</option>
                    <option>Global</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Publisher Grid */}
          <section style={{ marginTop: 16 }}>
            {visibleItems.length === 0 ? (
              <div style={{ padding: '48px 0', textAlign: 'center' }}>
                <div style={{ width: 120, height: 72, background: '#17201f', margin: '0 auto 16px', borderRadius: 8 }} />
                <h3 style={{ color: '#FFFFFF', fontSize: 20, marginBottom: 8 }}>No publishers found</h3>
                <p style={{ color: '#B8C5C6' }}>Try a different search or filter.</p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 18 }}>
                {visibleItems.map((item) => {
                  const slug = slugify(item.name);
                  return (
                    <Link to={`/publisher/${slug}`} key={item.name} className="block" style={{ textDecoration: 'none' }}>
                      <div
                        role="button"
                        tabIndex={0}
                        style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 16, minHeight: 104, background: '#0F1516', borderRadius: 16, boxShadow: '0 6px 14px rgba(0,0,0,0.25)', transition: 'transform 160ms ease, box-shadow 160ms ease' }}
                        className="publisher-card"
                      >
                        <div style={{ width: 56, height: 56, borderRadius: 12, background: '#222C2D', color: '#D9DFE0', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                          <img src={item.img} alt={`${item.name} logo`} loading="lazy" decoding="async" width={56} height={56} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                        </div>
                        <div style={{ flex: '1 1 auto', minWidth: 0 }}>
                          <h6 title={item.name} style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.2, margin: 0, color: '#FFFFFF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</h6>
                          <div style={{ color: '#B8C5C6', fontSize: 13, lineHeight: '1.35', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', display: '-webkit-box', overflow: 'hidden', marginTop: 6 }}>{item.tagline}</div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

            <div ref={sentinelRef} />

            {hasMore && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
                <button onClick={() => setVisible((v) => Math.min(v + 8, filtered.length))} style={{ padding: '10px 16px', borderRadius: 999, background: '#00C4CC', color: '#FFFFFF', border: 'none' }}>
                  Load more
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
