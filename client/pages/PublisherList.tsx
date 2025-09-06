import React, { useEffect, useMemo, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { Publisher } from "@shared/api";
import { Link } from "react-router-dom";

const LIMIT = 30;

export default function PublisherList() {
  const [q, setQ] = useState("");
  const [debouncedQ, setDebouncedQ] = useState(q);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(q), 250);
    return () => clearTimeout(t);
  }, [q]);

  const fetchPage = async ({ pageParam = 0 }) => {
    const params = new URLSearchParams();
    params.set("limit", String(LIMIT));
    params.set("cursor", String(pageParam));
    if (debouncedQ) params.set("q", debouncedQ);
    const res = await fetch(`/api/publishers?${params.toString()}`);
    if (!res.ok) throw new Error("Failed to load publishers");
    return res.json();
  };

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
    error,
  } = useInfiniteQuery({
    queryKey: ["publisherList", debouncedQ],
    queryFn: fetchPage,
    getNextPageParam: (last) => last.nextCursor,
    initialPageParam: 0,
  });

  useEffect(() => {
    refetch();
  }, [debouncedQ, refetch]);

  const items: Publisher[] = useMemo(() => (data ? data.pages.flatMap((p) => p.items) : []), [data]);
  const total = data?.pages?.[0]?.total ?? null;

  // Infinite scroll sentinel
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!sentinelRef.current) return;
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      });
    });
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [sentinelRef.current, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1C2526' }}>
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-soft-gray">
        <header className="mb-6">
          <h1 className="text-3xl font-display font-bold text-white mb-1">Publisher List</h1>
          <div className="text-sm text-soft-gray/70">{total !== null ? `${total} publishers` : 'Loading total...'}</div>
        </header>

        <div className="mb-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search publishers..."
            className="w-full rounded-md bg-gray-800/40 border border-soft-gray/10 text-soft-gray px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
            aria-label="Search publishers"
          />
        </div>

        <section aria-live="polite">
          {isLoading && (
            <div className="space-y-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-soft-gray/10">
                  <div className="w-12 h-12 bg-gray-800 rounded-md animate-pulse" />
                  <div className="flex-1">
                    <div className="h-4 bg-gray-800 rounded w-1/3 animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && error && (
            <div className="text-center text-red-400 py-8">
              <div>Error loading publishers.</div>
              <button onClick={() => refetch()} className="mt-3 px-4 py-2 rounded-full bg-[#00C4CC] text-midnight-black">Retry</button>
            </div>
          )}

          {!isLoading && !error && items.length === 0 && (
            <div className="text-center py-16 text-soft-gray/70">No publishers match your filters.</div>
          )}

          {!isLoading && !error && items.length > 0 && (
            <ul className="space-y-3">
              {items.map((p) => {
                const slug = (p as any).slug || p.id;
                const logoUrl = (p as any).logoUrl || (p as any).domain ? `https://logo.clearbit.com/${(p as any).domain}?size=96` : null;
                return (
                  <li key={p.id} className="flex items-center gap-4 py-3 border-b border-soft-gray/10">
                    <Link to={`/publisher/${slug}`} className="flex items-center gap-4 w-full">
                      <div className="w-12 h-12 rounded-md bg-gray-800 flex items-center justify-center overflow-hidden">
                        {logoUrl ? (
                          <img src={logoUrl} alt={`${p.name} logo`} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                        ) : (
                          <div className="text-sm font-medium text-soft-gray">{p.name.slice(0,2).toUpperCase()}</div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-soft-gray">{p.name}</div>
                      </div>
                    </Link>
                    {(p as any).website && (
                      <a href={(p as any).website} target="_blank" rel="noreferrer" className="text-soft-gray/60 hover:text-soft-gray px-2">🔗</a>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

          <div ref={sentinelRef} />

          {!('IntersectionObserver' in window) && hasNextPage && (
            <div className="flex justify-center py-6">
              <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} className="px-4 py-2 rounded-full bg-[#00C4CC] text-midnight-black">
                {isFetchingNextPage ? 'Loading…' : 'Load more'}
              </button>
            </div>
          )}

          {('IntersectionObserver' in window) && isFetchingNextPage && (
            <div className="text-center py-4 text-soft-gray/70">Loading more…</div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
