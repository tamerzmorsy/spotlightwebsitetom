import React, { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ITEMS = [
  { img: "https://placehold.co/96x96/svg?text=PI", name: "Philadelphia Inquirer" },
  { img: "https://placehold.co/96x96/svg?text=B", name: "Bloomberg" },
  { img: "https://placehold.co/96x96/svg?text=R", name: "Reuters" },
  { img: "https://placehold.co/96x96/svg?text=F", name: "Forbes" },
  { img: "https://placehold.co/96x96/svg?text=CDT", name: "Centre Daily Times" },
  { img: "https://placehold.co/96x96/svg?text=TN", name: "Temple News" },
  { img: "https://placehold.co/96x96/svg?text=B%26W", name: "The Brown and White (Lehigh)" },
  { img: "https://placehold.co/96x96/svg?text=JH", name: "The Johns Hopkins News-Letter" },
  { img: "https://placehold.co/96x96/svg?text=SN", name: "The State News (MSU)" },
  { img: "https://placehold.co/96x96/svg?text=DP", name: "The Daily Pennsylvanian" },
  { img: "https://placehold.co/96x96/svg?text=HC", name: "The Harvard Crimson" },
  { img: "https://placehold.co/96x96/svg?text=YDN", name: "Yale Daily News" },
  { img: "https://placehold.co/96x96/svg?text=DC", name: "The Daily Californian" },
  { img: "https://placehold.co/96x96/svg?text=TL", name: "The Lantern (Ohio State)" },
  { img: "https://placehold.co/96x96/svg?text=TMD", name: "The Michigan Daily" },
  { img: "https://placehold.co/96x96/svg?text=DB", name: "The Diamondback (Maryland)" },
  { img: "https://placehold.co/96x96/svg?text=DN", name: "The Daily Northwestern" },
  { img: "https://placehold.co/96x96/svg?text=SD", name: "The Stanford Daily" },
];

export default function PublisherListStatic() {
  const [q, setQ] = useState("");
  const lower = q.trim().toLowerCase();
  const items = useMemo(() => {
    if (!lower) return ITEMS;
    return ITEMS.filter((it) => it.name.toLowerCase().includes(lower));
  }, [lower]);

  return (
    <div style={{ backgroundColor: '#1C2526', color: '#EDEFF1' }} className="min-h-screen">
      <Navigation />
      <main className="max-w-[840px] mx-auto p-6" style={{ padding: 24 }}>
        <header className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-display font-bold mb-2">Publisher List</h1>
            <p className="text-soft-gray/80">Campus, local, and global newsrooms — all in one trusted feed.</p>
            <div className="mt-4 max-w-md">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search publishers..."
                className="w-full rounded-md bg-gray-800/40 border border-soft-gray/10 text-soft-gray px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00C4CC]"
                aria-label="Search publishers"
              />
            </div>
          </div>

          <div className="md:col-span-1 flex justify-end">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff9a2587e1b874b6e9d34bfb6b703b455%2F93f590eec3684d129be0a4d274bd2174?format=webp&width=800"
              alt="Publishers hero"
              className="w-full max-w-sm rounded-lg object-cover shadow-md"
            />
          </div>
        </header>

        <section>
          <div className="flex flex-col">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 py-3 hover:bg-[rgba(0,196,204,0.06)]"
                style={{ paddingTop: 12, paddingBottom: 12, borderBottom: '1px solid rgba(237,239,241,0.06)' }}
              >
                <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0" style={{ width: 56, height: 56 }}>
                  <span className="text-soft-gray font-medium">{item.name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase()}</span>
                </div>
                <div className="font-semibold">{item.name}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
