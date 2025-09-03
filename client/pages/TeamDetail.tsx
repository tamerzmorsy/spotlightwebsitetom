import React from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Trophy, Star, BookOpen, ArrowLeft } from "lucide-react";

interface Member {
  id: string;
  name: string;
  avatar: string;
  articlesRead: number;
  points: number;
  currentStreak: number;
  role: "owner" | "admin" | "member";
  isOnline: boolean;
}

interface TeamDetailData {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  memberCount: number;
  totalArticlesRead: number;
  totalPoints: number;
  rank: number;
  category: "campus" | "tech" | "sports" | "general";
  joinType: "open" | "restricted";
  members: Member[];
}

const slugify = (s: string) => s
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9\s-]/g, "")
  .replace(/\s+/g, "-")
  .replace(/-+/g, "-");

const TEAMS: TeamDetailData[] = [
  {
    id: "team-3",
    name: "Campus News Crusaders",
    slug: slugify("Campus News Crusaders"),
    description: "Staying informed about campus events and breaking news that matters to our university community",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    memberCount: 24,
    totalArticlesRead: 1247,
    totalPoints: 8420,
    rank: 3,
    category: "campus",
    joinType: "restricted",
    members: [
      { id: "1", name: "Alex Rivera", avatar: "AR", articlesRead: 156, points: 980, currentStreak: 12, role: "owner", isOnline: true },
      { id: "2", name: "Sarah Chen", avatar: "SC", articlesRead: 142, points: 890, currentStreak: 8, role: "admin", isOnline: true },
      { id: "3", name: "Jordan Smith", avatar: "JS", articlesRead: 134, points: 840, currentStreak: 15, role: "member", isOnline: false }
    ]
  },
  {
    id: "team-4",
    name: "Tech Enthusiasts",
    slug: slugify("Tech Enthusiasts"),
    description: "Passionate about technology trends, gadgets, and the latest in software development",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    memberCount: 20,
    totalArticlesRead: 1750,
    totalPoints: 7750,
    rank: 4,
    category: "tech",
    joinType: "open",
    members: [
      { id: "m7", name: "Sarah Lee", avatar: "SL", articlesRead: 145, points: 980, currentStreak: 11, role: "owner", isOnline: true },
      { id: "m8", name: "Tom Brown", avatar: "TB", articlesRead: 132, points: 890, currentStreak: 9, role: "member", isOnline: false }
    ]
  },
  {
    id: "team-7",
    name: "Study Squad",
    slug: slugify("Study Squad"),
    description: "Students helping students stay informed about academic news and campus life",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    memberCount: 16,
    totalArticlesRead: 1224,
    totalPoints: 6120,
    rank: 7,
    category: "campus",
    joinType: "open",
    members: [
      { id: "m13", name: "Kevin Park", avatar: "KP", articlesRead: 118, points: 780, currentStreak: 6, role: "owner", isOnline: true },
      { id: "m14", name: "Nina Cooper", avatar: "NC", articlesRead: 104, points: 690, currentStreak: 4, role: "member", isOnline: false }
    ]
  }
];

const TeamDetail: React.FC = () => {
  const { teamSlug } = useParams<{ teamSlug: string }>();
  const team = TEAMS.find(t => t.slug === teamSlug);

  if (!team) {
    return (
      <div className="min-h-screen bg-midnight-black text-soft-gray">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-display font-bold text-vibrant-pink mb-4">Team not found</h1>
          <p className="text-soft-gray/70 mb-6">The team you’re looking for doesn’t exist or the link is incorrect.</p>
          <Link to="/teams">
            <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Teams
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-72 bg-gradient-to-r from-electric-blue/20 to-electric-blue/10 overflow-hidden">
          <img src={team.coverImage} alt={`${team.name} cover`} className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-6xl mx-auto px-4 pb-8">
              <div className="flex items-end justify-between">
                <div>
                  <Badge className={`${team.joinType === 'open' ? 'bg-neon-green/30 text-neon-green border-neon-green/50' : 'bg-yellow-500/30 text-yellow-400 border-yellow-500/50'} font-semibold px-3 py-1 mb-3`}>{team.joinType === 'open' ? 'Open Team' : 'Restricted'}</Badge>
                  <h1 className="text-4xl font-display font-bold text-white mb-2">{team.name}</h1>
                  <p className="text-soft-gray/90 max-w-2xl">{team.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-gray-900/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-gray-800/30 border-electric-blue/30 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-electric-blue" />
                <span className="text-soft-gray/80">Members</span>
              </div>
              <div className="font-semibold text-electric-blue">{team.memberCount}</div>
            </Card>
            <Card className="bg-gray-800/30 border-electric-blue/30 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="text-soft-gray/80">Rank</span>
              </div>
              <div className="font-semibold text-yellow-500">#{team.rank}</div>
            </Card>
            <Card className="bg-gray-800/30 border-electric-blue/30 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-vibrant-pink" />
                <span className="text-soft-gray/80">Points</span>
              </div>
              <div className="font-semibold text-vibrant-pink">{team.totalPoints.toLocaleString()}</div>
            </Card>
            <Card className="bg-gray-800/30 border-electric-blue/30 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-neon-green" />
                <span className="text-soft-gray/80">Articles</span>
              </div>
              <div className="font-semibold text-neon-green">{team.totalArticlesRead}</div>
            </Card>
          </div>

          {/* Members list */}
          <Card className="bg-gray-800/30 border-electric-blue/30 p-6">
            <h2 className="text-xl font-semibold text-electric-blue mb-4">Top Members</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {team.members
                .slice()
                .sort((a, b) => b.points - a.points)
                .map((m) => (
                  <div key={m.id} className="flex items-center justify-between bg-gray-700/30 rounded-lg p-4 border border-electric-blue/10">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-10 h-10 bg-electric-blue text-midnight-black rounded-full flex items-center justify-center font-semibold text-sm">{m.avatar}</div>
                        {m.isOnline && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-neon-green rounded-full border border-gray-800" />}
                      </div>
                      <div>
                        <div className="font-medium text-soft-gray">{m.name}</div>
                        <div className="text-xs text-soft-gray/70">{m.articlesRead} articles • {m.points} pts • streak {m.currentStreak}</div>
                      </div>
                    </div>
                    <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20 capitalize">{m.role}</Badge>
                  </div>
                ))}
            </div>
          </Card>

          <div className="mt-6 text-center">
            <Link to="/teams">
              <Button variant="outline" className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Teams
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamDetail;
