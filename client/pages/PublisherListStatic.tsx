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

      {/* Hero */}
      <div className="w-full relative">
        <div
          className="w-full h-[360px] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.15)), url('https://cdn.builder.io/api/v1/image/assets%2Ff9a2587e1b874b6e9d34bfb6b703b455%2F93f590eec3684d129be0a4d274bd2174?format=webp&width=1600')",
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[840px] mx-auto px-6 py-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white">Publisher Directory</h1>
            <h3 className="mt-3 text-lg text-soft-gray/80">Explore campus, local, and global newsrooms — all in one trusted feed.</h3>
            <div className="mt-6">
              <a href="/signup" className="inline-block bg-[#00C4CC] text-white font-semibold px-5 py-3 rounded-full shadow">Create Free Account</a>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-[840px] mx-auto p-6 mt-6 space-y-6" style={{ padding: 24 }}>
        {/* Search + Filter */}
        <div className="w-full">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search publishers..."
                className="w-full rounded-md bg-[#17201f] border border-[#223232] text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                aria-label="Search publishers"
              />
            </div>
            <div className="w-full md:w-56">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full rounded-md bg-[#17201f] border border-[#223232] text-white px-4 py-3"
                aria-label="Filter by category"
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

        {/* Grid */}
        <section>
          {visibleItems.length === 0 ? (
            <div className="py-20 text-center text-soft-gray/70">
              <div className="mx-auto mb-6 w-40 h-24 bg-[#17201f] rounded-md" />
              <div className="text-lg">No publishers found. Try another filter.</div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {visibleItems.map((item) => {
                const slug = slugify(item.name);
                return (
                  <Link to={`/publisher/${slug}`} key={item.name} className="block">
                    <article
                      className="bg-[#1C2526] rounded-2xl p-4 shadow-sm transform transition-all hover:scale-105"
                      style={{ boxShadow: '0 6px 18px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.02)' }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-full bg-[#0f1414] flex items-center justify-center flex-shrink-0">
                          <img src={item.img} alt={`${item.name} logo`} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white truncate">{item.name}</h4>
                          <p className="text-sm text-soft-gray/70 truncate">{item.tagline}</p>
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}

          <div ref={sentinelRef} />

          {hasMore && (
            <div className="flex justify-center mt-6">
              <button onClick={() => setVisible((v) => Math.min(v + 8, filtered.length))} className="px-4 py-2 rounded-full bg-[#00C4CC] text-white">
                Load more
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
