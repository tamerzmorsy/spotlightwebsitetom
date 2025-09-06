import React from "react";
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
  return (
    <div style={{ backgroundColor: '#1C2526', color: '#EDEFF1' }} className="min-h-screen">
      <Navigation />
      <main className="max-w-[840px] mx-auto p-6" style={{ padding: 24 }}>
        <header className="mb-4">
          <h1 className="text-3xl font-display font-bold mb-2">Publisher List</h1>
        </header>

        <section>
          <div className="flex flex-col">
            {ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 py-3"
                style={{ paddingTop: 12, paddingBottom: 12, borderBottom: '1px solid rgba(237,239,241,0.06)' }}
              >
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0" style={{ width: 56, height: 56 }}>
                  <img src={item.img} alt={`${item.name} logo`} loading="lazy" decoding="async" className="w-full h-full object-contain" />
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
