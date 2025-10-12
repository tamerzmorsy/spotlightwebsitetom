import React, { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const ALL_CATEGORIES = [
  "Premium",
  "Business Publication",
  "College Newspaper",
  "Entertainment Publication",
  "Lifestyle",
  "Local Newspaper",
  "Local Publication",
  "Magazine",
  "News Wire",
  "Newsletter",
  "Political News",
  "Satire",
  "Science Publication",
  "Sports Publication",
  "Student Government",
  "University Media",
] as const;

type Category = (typeof ALL_CATEGORIES)[number];

type Publisher = {
  name: string;
  logoUrl?: string;
  url: string;
  description?: string;
  isPremium?: boolean;
  isLocal?: boolean;
  categories?: Category[];
};

const MOCK_PUBLISHERS: Publisher[] = [
  {
    name: "Daily Beacon",
    logoUrl: "https://via.placeholder.com/300x300.png?text=Daily+Beacon",
    url: "https://example.com/daily-beacon",
    description: "Campus-focused daily covering student life, sports, and local news.",
    isPremium: true,
    isLocal: false,
    categories: ["Premium", "College Newspaper", "University Media"],
  },
  {
    name: "Town Herald",
    logoUrl: "https://via.placeholder.com/300x300.png?text=Town+Herald",
    url: "https://example.com/town-herald",
    description: "Local community reporting with a focus on human interest stories.",
    isPremium: false,
    isLocal: true,
    categories: ["Local Newspaper", "Local Publication", "Lifestyle"],
  },
  {
    name: "Metro Ledger",
    logoUrl: "https://via.placeholder.com/300x300.png?text=Metro+Ledger",
    url: "https://example.com/metro-ledger",
    description: "Regional coverage with investigative reporting and features.",
    isPremium: true,
    isLocal: true,
    categories: ["Premium", "Local Newspaper", "News Wire"],
  },
  // Additional sample items for demonstration and load-more behavior
  ...Array.from({ length: 12 }).map((_, i) => ({
    name: `Community Press ${i + 1}`,
    logoUrl: `https://via.placeholder.com/300x300.png?text=Press+${i + 1}`,
    url: `https://example.com/press-${i + 1}`,
    description: `Local press edition ${i + 1} covering neighborhoods and events.`,
    isPremium: i % 7 === 0,
    isLocal: true,
    categories: [i % 5 === 0 ? "Magazine" : "Local Publication"],
  })),
];

const PublisherDirectory: React.FC = () => {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set(["Local Publication"]));

  const toggleCategory = (c: Category) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOCK_PUBLISHERS.filter((p) => {
      // category filtering
      if (selectedCategories.size > 0) {
        const has = (p.categories || []).some((cat) => selectedCategories.has(cat));
        if (!has) return false;
      }
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) || (p.description || "").toLowerCase().includes(q)
      );
    });
  }, [query, filterPremium, filterLocal, selectedCategories]);

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-midnight-black text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="relative w-full h-[48vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-50"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="https://via.placeholder.com/1600x900.png?text=Spotlight+Hero"
        >
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-glow-blue">
            Explore Trusted Publishers
          </h1>
          <div className="w-20 h-0.5 bg-[#00CCDD] mt-4 mb-4 rounded" />
          <p className="max-w-2xl text-soft-gray/90 text-base md:text-lg">
            Discover premium, local, and college newspapers all in one place.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <main className="max-w-8xl mx-auto px-4 py-8">
        {/* Search & Filters - sticky */}
        <div className="sticky top-14 z-30 bg-midnight-black/80 backdrop-blur-sm py-4 rounded-md">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or type…"
                className="w-full rounded-full px-4 py-3 bg-card text-foreground border border-soft-gray/10 focus:outline-none focus:ring-2 focus:ring-[#00CCDD] transition"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setFilterPremium((s) => !s)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filterPremium
                    ? "bg-[#00CCDD] text-white shadow-md"
                    : "bg-transparent text-[#00CCDD] border border-[#00CCDD]/30"
                }`}
              >
                Premium
              </button>

              <button
                onClick={() => setFilterLocal((s) => !s)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  filterLocal
                    ? "bg-[#00CCDD] text-white shadow-md"
                    : "bg-transparent text-[#00CCDD] border border-[#00CCDD]/30 text-[#00CCDD]"
                }`}
              >
                Local Paper
              </button>
            </div>
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-4">
          <div className="max-w-6xl mx-auto px-2">
            <div className="flex flex-wrap gap-3">
              {ALL_CATEGORIES.map((cat) => {
                const active = selectedCategories.has(cat as any);
                return (
                  <button
                    key={cat}
                    onClick={() => toggleCategory(cat as any)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${active ? 'bg-[#00CCDD] text-white shadow-md' : 'bg-transparent border border-[#00CCDD]/30 text-[#00CCDD]'}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Grid */}
        <section className="mt-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {visible.map((p, idx) => (
                <article
                  key={p.url + idx}
                  onClick={() => window.open(p.url, "_blank")}
                  className="relative bg-card rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-[1.01] transform transition overflow-hidden"
                >
                  {/* label */}
                  {(p.isPremium || p.isLocal) && (
                    <span className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full text-white ${p.isPremium ? 'bg-yellow-500' : 'bg-[#00CCDD]'}`}>
                      {p.isPremium ? 'Premium' : 'Local Paper'}
                    </span>
                  )}

                  <div className="flex flex-col items-center text-center">
                    <img
                      src={p.logoUrl}
                      alt={p.name}
                      width={160}
                      height={160}
                      className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-cover rounded-md mb-4"
                    />

                    <h3 className="font-semibold text-lg text-foreground mb-2">{p.name}</h3>

                    {p.description && (
                      <p className="text-sm text-soft-gray/80 line-clamp-3">{p.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              {canLoadMore ? (
                <Button onClick={() => setVisibleCount((v) => v + 9)}>Load more</Button>
              ) : (
                <p className="text-soft-gray/70">No more publishers to show.</p>
              )}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default PublisherDirectory;
