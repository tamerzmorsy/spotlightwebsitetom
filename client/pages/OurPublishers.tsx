import { useState, useMemo, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { Publisher, PublishersResponse, PublisherCategory } from "@shared/api";

const categories: (PublisherCategory | "All")[] = ["All", "Campus", "Local", "National", "Global"];

function useDebounced<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

export default function OurPublishers() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounced(query, 300);
  const [category, setCategory] = useState<PublisherCategory | "All">("All");

  const fetchPage = async ({ pageParam = 0 }): Promise<PublishersResponse> => {
    const params = new URLSearchParams();
    params.set("cursor", String(pageParam));
    params.set("limit", "30");
    if (debouncedQuery) params.set("q", debouncedQuery);
    if (category !== "All") params.set("category", category);
    const res = await fetch(`/api/publishers?${params.toString()}`);
    if (!res.ok) throw new Error("Failed to load publishers");
    return res.json();
  };

  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["publishers", { q: debouncedQuery, category }],
    queryFn: fetchPage,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: 0,
  });

  useEffect(() => {
    refetch();
  }, [debouncedQuery, category, refetch]);

  const items = useMemo(() => (data ? data.pages.flatMap((p) => p.items) : []), [data]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1C2526" }}>
      <Navigation />

      <header className="pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-3">Explore Our Publishers</h1>
          <p className="text-soft-gray/80 text-lg">Hundreds of trusted local, campus, and global publications — all in one place.</p>
        </div>
      </header>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Controls */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6">
            <div className="flex-1">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search publishers…"
                className="w-full rounded-full bg-gray-800/60 text-soft-gray placeholder:text-soft-gray/50 border border-soft-gray/10 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                aria-label="Search publishers"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat as PublisherCategory | "All")}
                    className={`px-4 py-2 rounded-full text-sm transition-colors border ${
                      active
                        ? "bg-electric-blue text-midnight-black border-electric-blue"
                        : "bg-gray-800/40 text-soft-gray/80 hover:text-soft-gray border-soft-gray/10"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {items.map((p: Publisher) => (
              <PublisherCard key={p.id} publisher={p} />)
            )}
          </div>

          {/* Load more */}
          <div className="flex justify-center py-10">
            {hasNextPage ? (
              <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} className="rounded-full">
                {isFetchingNextPage ? "Loading…" : "Load More"}
              </Button>
            ) : (
              !isLoading && <div className="text-soft-gray/60 text-sm">End of list</div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-soft-gray mb-4">
            Want your publication on SpotlightNews? Join 400+ trusted partners.
          </h2>
          <Button asChild className="bg-electric-blue text-midnight-black hover:bg-cyan-400 rounded-full">
            <a href="/onboarding">Become a Publisher</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PublisherCard({ publisher }: { publisher: Publisher }) {
  const logoUrl = `https://logo.clearbit.com/${publisher.domain}?size=200`;
  return (
    <div className="group relative rounded-xl overflow-hidden bg-gray-900/40 border border-soft-gray/10 p-4 flex flex-col items-center text-center transition-transform">
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-md overflow-hidden mb-3">
        <img
          src={logoUrl}
          alt={`${publisher.name} logo`}
          className="w-full h-full object-contain filter grayscale contrast-125 opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      </div>
      <div className="space-y-1">
        <div className="text-soft-gray font-medium text-sm sm:text-base">{publisher.name}</div>
        <div className="text-soft-gray/60 text-xs">{publisher.tagline || publisher.category}</div>
      </div>
      <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button asChild size="sm" className="rounded-full bg-electric-blue text-midnight-black hover:bg-cyan-400 shadow-lg">
          <a href={`/explore?publisher=${encodeURIComponent(publisher.id)}`}>Read on Spotlight</a>
        </Button>
      </div>
    </div>
  );
}
