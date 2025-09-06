export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const q = (req.query.q as string | undefined)?.toLowerCase() || "";
  const category = (req.query.category as string | undefined) || "";
  const limit = Math.max(1, Math.min(100, parseInt((req.query.limit as string) || "24", 10)));
  const cursor = Math.max(0, parseInt((req.query.cursor as string) || "0", 10));

  type Publisher = {
    id: string;
    name: string;
    domain: string;
    category: "Campus" | "Local" | "National" | "Global";
    tagline?: string;
  };

  const data: Publisher[] = [
    // National
    { id: "nytimes", name: "The New York Times", domain: "nytimes.com", category: "National", tagline: "All the News That's Fit to Print" },
    { id: "washpost", name: "The Washington Post", domain: "washingtonpost.com", category: "National", tagline: "Democracy Dies in Darkness" },
    { id: "wsj", name: "The Wall Street Journal", domain: "wsj.com", category: "National" },
    { id: "usatoday", name: "USA Today", domain: "usatoday.com", category: "National" },
    { id: "npr", name: "NPR", domain: "npr.org", category: "National" },
    // Global
    { id: "bbc", name: "BBC News", domain: "bbc.com", category: "Global" },
    { id: "guardian", name: "The Guardian", domain: "theguardian.com", category: "Global" },
    { id: "reuters", name: "Reuters", domain: "reuters.com", category: "Global" },
    { id: "aljazeera", name: "Al Jazeera", domain: "aljazeera.com", category: "Global" },
    { id: "ap", name: "Associated Press", domain: "apnews.com", category: "Global" },
    // Local
    { id: "latimes", name: "Los Angeles Times", domain: "latimes.com", category: "Local" },
    { id: "sfchron", name: "San Francisco Chronicle", domain: "sfchronicle.com", category: "Local" },
    { id: "chitrib", name: "Chicago Tribune", domain: "chicagotribune.com", category: "Local" },
    { id: "seattletimes", name: "The Seattle Times", domain: "seattletimes.com", category: "Local" },
    { id: "bostonglobe", name: "The Boston Globe", domain: "bostonglobe.com", category: "Local" },
    // Campus
    { id: "dailycal", name: "The Daily Californian", domain: "dailycal.org", category: "Campus" },
    { id: "thedp", name: "The Daily Pennsylvanian", domain: "thedp.com", category: "Campus" },
    { id: "crimson", name: "The Harvard Crimson", domain: "thecrimson.com", category: "Campus" },
    { id: "yalenews", name: "Yale Daily News", domain: "yaledailynews.com", category: "Campus" },
    { id: "stanforddaily", name: "The Stanford Daily", domain: "stanforddaily.com", category: "Campus" },
    // More Local/National/Global for pagination depth
    { id: "denverpost", name: "The Denver Post", domain: "denverpost.com", category: "Local" },
    { id: "phillyinquirer", name: "The Philadelphia Inquirer", domain: "inquirer.com", category: "Local" },
    { id: "houchron", name: "Houston Chronicle", domain: "houstonchronicle.com", category: "Local" },
    { id: "dallasnews", name: "The Dallas Morning News", domain: "dallasnews.com", category: "Local" },
    { id: "miamiherald", name: "Miami Herald", domain: "miamiherald.com", category: "Local" },
    { id: "economist", name: "The Economist", domain: "economist.com", category: "Global" },
    { id: "ft", name: "Financial Times", domain: "ft.com", category: "Global" },
    { id: "bloomberg", name: "Bloomberg", domain: "bloomberg.com", category: "Global" },
    { id: "axios", name: "Axios", domain: "axios.com", category: "National" },
    { id: "politico", name: "POLITICO", domain: "politico.com", category: "National" }
  ];

  const filtered = data.filter((p) => {
    const matchesQuery = q ? (p.name.toLowerCase().includes(q) || p.domain.includes(q)) : true;
    const matchesCategory = category ? p.category.toLowerCase() === category.toLowerCase() : true;
    return matchesQuery && matchesCategory;
  });

  const total = filtered.length;
  const slice = filtered.slice(cursor, cursor + limit);
  const nextCursor = cursor + limit < total ? cursor + limit : null;

  // Cache for 300s with stale-while-revalidate
  res.setHeader?.("Cache-Control", "public, max-age=0, s-maxage=300, stale-while-revalidate=300");
  res.status(200).json({ items: slice, nextCursor, total });
}
