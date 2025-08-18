import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import {
  BookOpen,
  Clock,
  Tag,
  Flame,
  TrendingUp,
  Trophy,
  Target,
  Users,
  Star,
  Heart,
  Award,
  ChevronDown,
  Filter,
  ArrowUp,
  ArrowDown,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Crown,
  GraduationCap,
  Building,
  Briefcase
} from "lucide-react";

// Mock data structures that match real API responses
interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'reading' | 'streak' | 'challenges' | 'social' | 'special';
  requirement: string;
  progress?: number;
  maxProgress?: number;
  earned: boolean;
  earnedDate?: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface ReadingStats {
  articlesRead: {
    total: number;
    thisWeek: number;
    thisMonth: number;
    weeklyData: number[];
  };
  timeSpent: {
    totalMinutes: number;
    thisWeek: number;
    thisMonth: number;
    averagePerDay: number;
  };
  topicsExplored: {
    total: number;
    breakdown: { topic: string; percentage: number; articles: number }[];
  };
  readingStreak: {
    current: number;
    longest: number;
    streakDays: string[];
  };
}

interface LeaderboardUser {
  rank: number;
  id: string;
  name: string;
  avatar: string;
  articlesRead: number;
  challengesWon: number;
  currentStreak: number;
  points: number;
  subscriptionType: 'Premium' | 'Student' | 'Non-Profit' | 'Professional';
  isCurrentUser?: boolean;
}

interface Challenge {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: number;
  prize: string;
  topUsers: {
    rank: number;
    name: string;
    score: number;
    badge?: string;
  }[];
  userRank: number;
  userScore: number;
  likes: number;
  userLiked: boolean;
}

const MyStats = () => {
  const { user, isAuthenticated } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'all'>('week');
  const [leaderboardFilter, setLeaderboardFilter] = useState<'all' | 'campus'>('all');
  const [subscriptionFilter, setSubscriptionFilter] = useState<'all' | 'Premium' | 'Student' | 'Non-Profit' | 'Professional'>('all');
  const [sortBy, setSortBy] = useState<'articles' | 'challenges' | 'streak'>('articles');
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [showDetailedStats, setShowDetailedStats] = useState(false);
  const [badgesTab, setBadgesTab] = useState<'earned' | 'available'>('earned');

  // Mock data - in real app, this would come from API
  const [stats, setStats] = useState<ReadingStats>({
    articlesRead: {
      total: 342,
      thisWeek: 28,
      thisMonth: 105,
      weeklyData: [4, 6, 8, 5, 7, 9, 12]
    },
    timeSpent: {
      totalMinutes: 2840,
      thisWeek: 320,
      thisMonth: 1250,
      averagePerDay: 45
    },
    topicsExplored: {
      total: 12,
      breakdown: [
        { topic: "Campus News", percentage: 35, articles: 120 },
        { topic: "Technology", percentage: 28, articles: 96 },
        { topic: "Sports", percentage: 18, articles: 62 },
        { topic: "Politics", percentage: 12, articles: 41 },
        { topic: "Science", percentage: 7, articles: 23 }
      ]
    },
    readingStreak: {
      current: 15,
      longest: 28,
      streakDays: ["2024-01-01", "2024-01-02", "2024-01-03"] // last 3 days
    }
  });

  const [allLeaderboardData] = useState<LeaderboardUser[]>([
    { rank: 1, id: "1", name: "Sarah Chen", avatar: "SC", articlesRead: 456, challengesWon: 8, currentStreak: 42, points: 2840, subscriptionType: "Premium" },
    { rank: 2, id: "2", name: "Alex Rivera", avatar: "AR", articlesRead: 423, challengesWon: 6, currentStreak: 28, points: 2650, subscriptionType: "Student" },
    { rank: 3, id: "3", name: "Jordan Smith", avatar: "JS", articlesRead: 398, challengesWon: 7, currentStreak: 35, points: 2580, subscriptionType: "Professional" },
    { rank: 4, id: "4", name: "Demo User", avatar: "DU", articlesRead: 342, challengesWon: 3, currentStreak: 15, points: 2180, subscriptionType: "Student", isCurrentUser: true },
    { rank: 5, id: "5", name: "Maya Patel", avatar: "MP", articlesRead: 312, challengesWon: 4, currentStreak: 22, points: 2050, subscriptionType: "Non-Profit" },
    { rank: 6, id: "6", name: "Chris Johnson", avatar: "CJ", articlesRead: 289, challengesWon: 2, currentStreak: 18, points: 1920, subscriptionType: "Premium" },
    { rank: 7, id: "7", name: "Taylor Wong", avatar: "TW", articlesRead: 267, challengesWon: 5, currentStreak: 12, points: 1840, subscriptionType: "Professional" },
    { rank: 8, id: "8", name: "Jamie Lee", avatar: "JL", articlesRead: 245, challengesWon: 3, currentStreak: 8, points: 1720, subscriptionType: "Student" },
    { rank: 9, id: "9", name: "Morgan Davis", avatar: "MD", articlesRead: 228, challengesWon: 4, currentStreak: 25, points: 1650, subscriptionType: "Non-Profit" },
    { rank: 10, id: "10", name: "Casey Brown", avatar: "CB", articlesRead: 215, challengesWon: 2, currentStreak: 14, points: 1580, subscriptionType: "Premium" },
    { rank: 11, id: "11", name: "Quinn Wilson", avatar: "QW", articlesRead: 198, challengesWon: 3, currentStreak: 19, points: 1520, subscriptionType: "Professional" },
    { rank: 12, id: "12", name: "River Garcia", avatar: "RG", articlesRead: 185, challengesWon: 1, currentStreak: 11, points: 1460, subscriptionType: "Student" }
  ]);

  // Filter and sort leaderboard data
  const filteredLeaderboard = React.useMemo(() => {
    let filtered = allLeaderboardData;

    // Apply subscription filter
    if (subscriptionFilter !== 'all') {
      filtered = filtered.filter(user => user.subscriptionType === subscriptionFilter);
    }

    // Apply campus filter (for demo, we'll treat Student as campus)
    if (leaderboardFilter === 'campus') {
      filtered = filtered.filter(user => user.subscriptionType === 'Student');
    }

    // Re-rank the filtered results
    return filtered.map((user, index) => ({ ...user, rank: index + 1 }));
  }, [subscriptionFilter, leaderboardFilter]);

  const [badges, setBadges] = useState<Badge[]>([
    // Earned badges
    {
      id: "first-article",
      name: "First Read",
      description: "Read your first article on Spotlight",
      icon: "📖",
      category: "reading",
      requirement: "Read 1 article",
      earned: true,
      earnedDate: "2024-01-01",
      rarity: "common"
    },
    {
      id: "week-warrior",
      name: "Week Warrior",
      description: "Read articles for 7 consecutive days",
      icon: "🔥",
      category: "streak",
      requirement: "7-day reading streak",
      earned: true,
      earnedDate: "2024-01-08",
      rarity: "rare"
    },
    {
      id: "campus-expert",
      name: "Campus Expert",
      description: "Read 50 campus news articles",
      icon: "🎓",
      category: "reading",
      requirement: "Read 50 campus articles",
      earned: true,
      earnedDate: "2024-01-15",
      rarity: "epic"
    },
    {
      id: "challenger",
      name: "Challenge Accepted",
      description: "Complete your first reading challenge",
      icon: "🏆",
      category: "challenges",
      requirement: "Complete 1 challenge",
      earned: true,
      earnedDate: "2024-01-20",
      rarity: "rare"
    },
    // Available badges (not earned)
    {
      id: "century-club",
      name: "Century Club",
      description: "Read 100 articles in total",
      icon: "💯",
      category: "reading",
      requirement: "Read 100 articles",
      progress: 85,
      maxProgress: 100,
      earned: false,
      rarity: "epic"
    },
    {
      id: "month-master",
      name: "Month Master",
      description: "Read articles for 30 consecutive days",
      icon: "📅",
      category: "streak",
      requirement: "30-day reading streak",
      progress: 15,
      maxProgress: 30,
      earned: false,
      rarity: "legendary"
    },
    {
      id: "speedreader",
      name: "Speed Reader",
      description: "Read 10 articles in a single day",
      icon: "⚡",
      category: "reading",
      requirement: "Read 10 articles in 1 day",
      progress: 0,
      maxProgress: 10,
      earned: false,
      rarity: "rare"
    },
    {
      id: "social-butterfly",
      name: "Social Butterfly",
      description: "Like 50 challenges",
      icon: "🦋",
      category: "social",
      requirement: "Like 50 challenges",
      progress: 23,
      maxProgress: 50,
      earned: false,
      rarity: "rare"
    },
    {
      id: "triple-crown",
      name: "Triple Crown",
      description: "Win challenges in 3 different categories",
      icon: "👑",
      category: "challenges",
      requirement: "Win 3 different challenge types",
      progress: 1,
      maxProgress: 3,
      earned: false,
      rarity: "legendary"
    }
  ]);

  const [challenges, setChallenges] = useState<Challenge[]>([
    {
      id: "1",
      name: "Sports News Sprint",
      description: "Read 50 sports articles this month",
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      participants: 1247,
      prize: "AirPods Pro",
      topUsers: [
        { rank: 1, name: "Mike Torres", score: 47, badge: "🏆" },
        { rank: 2, name: "Lisa Park", score: 44, badge: "🥈" },
        { rank: 3, name: "Ryan Kim", score: 41, badge: "🥉" }
      ],
      userRank: 23,
      userScore: 18,
      likes: 342,
      userLiked: true
    },
    {
      id: "2", 
      name: "Campus News Champion",
      description: "Stay updated with 30 campus stories",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      participants: 856,
      prize: "iPad Mini",
      topUsers: [
        { rank: 1, name: "Emma Davis", score: 28, badge: "🏆" },
        { rank: 2, name: "Noah Wilson", score: 26, badge: "🥈" },
        { rank: 3, name: "Ava Brown", score: 24, badge: "🥉" }
      ],
      userRank: 12,
      userScore: 15,
      likes: 567,
      userLiked: false
    },
    {
      id: "3",
      name: "Tech Tuesday Challenge",
      description: "Read tech news every Tuesday for 4 weeks",
      startDate: "2024-01-02",
      endDate: "2024-01-30",
      participants: 423,
      prize: "Wireless Charger",
      topUsers: [
        { rank: 1, name: "Alex Chen", score: 4, badge: "🏆" },
        { rank: 2, name: "Sam Rodriguez", score: 4, badge: "🥈" },
        { rank: 3, name: "Jordan Martinez", score: 3, badge: "🥉" }
      ],
      userRank: 8,
      userScore: 3,
      likes: 289,
      userLiked: true
    }
  ]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-midnight-black text-soft-gray flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Trophy className="w-16 h-16 text-electric-blue mx-auto mb-6" />
          <h1 className="text-2xl font-display font-bold text-soft-gray mb-4">
            Sign in to view your stats
          </h1>
          <p className="text-soft-gray/70 mb-6">
            Track your reading progress, compete in challenges, and see how you rank among other readers.
          </p>
          <Link to="/login">
            <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold px-8 py-3">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const toggleChallengeLike = (challengeId: string) => {
    setChallenges(prev => prev.map(challenge => 
      challenge.id === challengeId 
        ? { 
            ...challenge, 
            userLiked: !challenge.userLiked,
            likes: challenge.userLiked ? challenge.likes - 1 : challenge.likes + 1
          }
        : challenge
    ));
  };

  const nextChallenge = () => {
    setCurrentChallengeIndex((prev) => 
      prev === challenges.length - 1 ? 0 : prev + 1
    );
  };

  const prevChallenge = () => {
    setCurrentChallengeIndex((prev) => 
      prev === 0 ? challenges.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Personal Stats Dashboard */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-6">
              Your Reading <span className="text-electric-blue">Stats</span>
            </h1>
            <p className="text-xl text-soft-gray/70 max-w-2xl mx-auto">
              Track your progress and beat your bests
            </p>
          </div>

          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Articles Read Card */}
            <Card className="bg-gray-800/30 border-electric-blue/30 p-6 hover:bg-gray-800/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center mr-4">
                  <BookOpen className="w-6 h-6 text-electric-blue" />
                </div>
                <div>
                  <h3 className="font-semibold text-electric-blue">Articles Read</h3>
                  <p className="text-xs text-soft-gray/60">This {selectedPeriod}</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-soft-gray mb-2">
                {selectedPeriod === 'week' ? stats.articlesRead.thisWeek : 
                 selectedPeriod === 'month' ? stats.articlesRead.thisMonth : 
                 stats.articlesRead.total}
              </div>
              <div className="h-16 bg-gray-800/50 rounded-lg flex items-end justify-between px-2 py-1">
                {stats.articlesRead.weeklyData.map((value, index) => (
                  <div
                    key={index}
                    className="bg-electric-blue/60 rounded-sm w-4"
                    style={{ height: `${(value / Math.max(...stats.articlesRead.weeklyData)) * 100}%` }}
                  />
                ))}
              </div>
            </Card>

            {/* Time Spent Card */}
            <Card className="bg-gray-800/30 border-electric-blue/30 p-6 hover:bg-gray-800/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-neon-green">Time Spent Reading</h3>
                  <p className="text-xs text-soft-gray/60">This month</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-soft-gray mb-2">
                {Math.floor(stats.timeSpent.thisMonth / 60)}h {stats.timeSpent.thisMonth % 60}m
              </div>
              <div className="relative w-20 h-20 mx-auto">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-700"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-neon-green"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="75, 100"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-semibold text-neon-green">75%</span>
                </div>
              </div>
            </Card>

            {/* Topics Explored Card */}
            <Card className="bg-gray-800/30 border-electric-blue/30 p-6 hover:bg-gray-800/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-vibrant-pink/20 rounded-xl flex items-center justify-center mr-4">
                  <Tag className="w-6 h-6 text-vibrant-pink" />
                </div>
                <div>
                  <h3 className="font-semibold text-vibrant-pink">Topics Explored</h3>
                  <p className="text-xs text-soft-gray/60">Total categories</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-soft-gray mb-4">
                {stats.topicsExplored.total}
              </div>
              <div className="space-y-2">
                {stats.topicsExplored.breakdown.slice(0, 3).map((topic, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-soft-gray/80">{topic.topic}</span>
                    <span className="text-vibrant-pink font-medium">{topic.percentage}%</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reading Streak Card */}
            <Card className="bg-gray-800/30 border-electric-blue/30 p-6 hover:bg-gray-800/40 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                  <Flame className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange-500">Reading Streak</h3>
                  <p className="text-xs text-soft-gray/60">Current streak</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-soft-gray mb-2">
                {stats.readingStreak.current} days
              </div>
              <div className="flex space-x-1 mb-2">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-4 h-4 rounded-sm ${
                      index < stats.readingStreak.current % 7 
                        ? 'bg-orange-500' 
                        : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-soft-gray/60">
                Best: {stats.readingStreak.longest} days
              </p>
            </Card>
          </div>

          {/* View Full Stats CTA - Show when collapsed */}
          {!showDetailedStats && (
            <div className="text-center">
              <Button
                onClick={() => setShowDetailedStats(true)}
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold px-8 py-4 rounded-full"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                View Full Stats
              </Button>
            </div>
          )}

          {/* Detailed Stats Panel */}
          {showDetailedStats && (
            <div className="mt-16 space-y-8">
              {/* Reading Trends Chart */}
              <Card className="bg-gray-800/30 border-electric-blue/30 p-8">
                <h3 className="text-2xl font-display font-bold text-electric-blue mb-6">
                  Reading Trends
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-soft-gray mb-4">Weekly Progress</h4>
                    <div className="space-y-3">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                        <div key={day} className="flex items-center justify-between hover:bg-gray-700/20 rounded-lg p-2 cursor-pointer transition-colors">
                          <span className="text-soft-gray/70 w-8">{day}</span>
                          <div className="flex-1 mx-4 bg-gray-700/50 rounded-full h-3 hover:h-4 transition-all duration-300">
                            <div
                              className="bg-electric-blue rounded-full h-full transition-all duration-500 hover:bg-cyan-400"
                              style={{ width: `${stats.articlesRead.weeklyData[index] * 10}%` }}
                            />
                          </div>
                          <span className="text-electric-blue font-medium w-8 text-right">
                            {stats.articlesRead.weeklyData[index]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-soft-gray mb-4">Topic Distribution</h4>
                    <div className="space-y-3">
                      {stats.topicsExplored.breakdown.map((topic, index) => (
                        <div key={topic.topic} className="flex items-center justify-between hover:bg-gray-700/20 rounded-lg p-2 cursor-pointer transition-colors">
                          <span className="text-soft-gray/70 text-sm">{topic.topic}</span>
                          <div className="flex items-center space-x-3">
                            <div className="flex-1 mx-4 bg-gray-700/50 rounded-full h-3 w-24 hover:h-4 transition-all duration-300">
                              <div
                                className={`rounded-full h-full transition-all duration-500 ${
                                  index === 0 ? 'bg-electric-blue hover:bg-cyan-400' :
                                  index === 1 ? 'bg-neon-green hover:bg-lime-400' :
                                  index === 2 ? 'bg-vibrant-pink hover:bg-pink-400' :
                                  index === 3 ? 'bg-orange-500 hover:bg-orange-400' : 'bg-purple-500 hover:bg-purple-400'
                                }`}
                                style={{ width: `${topic.percentage}%` }}
                              />
                            </div>
                            <span className={`font-medium text-sm ${
                              index === 0 ? 'text-electric-blue' :
                              index === 1 ? 'text-neon-green' :
                              index === 2 ? 'text-vibrant-pink' :
                              index === 3 ? 'text-orange-500' : 'text-purple-500'
                            }`}>
                              {topic.percentage}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Reading Goals */}
              <Card className="bg-gray-800/30 border-electric-blue/30 p-8">
                <h3 className="text-2xl font-display font-bold text-electric-blue mb-6">
                  Monthly Goals
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-700"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-electric-blue"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="84, 100"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-electric-blue">84%</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-soft-gray mb-1">Articles Goal</h4>
                    <p className="text-sm text-soft-gray/70">105/125 articles</p>
                  </div>
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-700"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-neon-green"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="62, 100"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-neon-green">62%</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-soft-gray mb-1">Time Goal</h4>
                    <p className="text-sm text-soft-gray/70">21h/34h reading</p>
                  </div>
                  <div className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-gray-700"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-vibrant-pink"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="50, 100"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-vibrant-pink">50%</span>
                      </div>
                    </div>
                    <h4 className="font-semibold text-soft-gray mb-1">Streak Goal</h4>
                    <p className="text-sm text-soft-gray/70">15/30 days</p>
                  </div>
                </div>
              </Card>

              {/* Hide Detailed Stats CTA - After Monthly Goals */}
              <div className="text-center">
                <Button
                  onClick={() => setShowDetailedStats(false)}
                  className="bg-gray-700 text-soft-gray hover:bg-gray-600 font-semibold px-8 py-4 rounded-full"
                >
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Hide Detailed Stats
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Badges & Achievements */}
      <section className="py-24 bg-gray-900/40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-6">
              Badges & <span className="text-electric-blue">Achievements</span>
            </h2>
            <p className="text-xl text-soft-gray/70">
              Celebrate your reading milestones
            </p>
          </div>

          {/* Badge Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 rounded-full p-1 flex">
              <Button
                variant={badgesTab === 'earned' ? 'default' : 'ghost'}
                onClick={() => setBadgesTab('earned')}
                className={`rounded-full px-6 py-2 transition-all ${
                  badgesTab === 'earned'
                    ? 'bg-electric-blue text-midnight-black'
                    : 'text-soft-gray hover:text-electric-blue'
                }`}
              >
                <Award className="w-4 h-4 mr-2" />
                Earned ({badges.filter(b => b.earned).length})
              </Button>
              <Button
                variant={badgesTab === 'available' ? 'default' : 'ghost'}
                onClick={() => setBadgesTab('available')}
                className={`rounded-full px-6 py-2 transition-all ${
                  badgesTab === 'available'
                    ? 'bg-electric-blue text-midnight-black'
                    : 'text-soft-gray hover:text-electric-blue'
                }`}
              >
                <Target className="w-4 h-4 mr-2" />
                Available ({badges.filter(b => !b.earned).length})
              </Button>
            </div>
          </div>

          {/* Badges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {badges
              .filter(badge => badgesTab === 'earned' ? badge.earned : !badge.earned)
              .map((badge) => (
                <Card
                  key={badge.id}
                  className={`p-6 transition-all duration-300 hover:scale-105 ${
                    badge.earned
                      ? 'bg-gray-800/40 border-electric-blue/40 shadow-lg shadow-electric-blue/10'
                      : 'bg-gray-800/20 border-gray-700/50 hover:border-electric-blue/30'
                  }`}
                >
                  <div className="text-center">
                    {/* Badge Icon with rarity glow */}
                    <div className={`relative w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl ${
                      badge.earned
                        ? badge.rarity === 'legendary' ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-2 ring-purple-500/50' :
                          badge.rarity === 'epic' ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20 ring-2 ring-orange-500/50' :
                          badge.rarity === 'rare' ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 ring-2 ring-blue-500/50' :
                          'bg-gradient-to-br from-gray-500/20 to-gray-400/20 ring-2 ring-gray-500/50'
                        : 'bg-gray-700/50'
                    }`}>
                      <span className={badge.earned ? '' : 'grayscale opacity-50'}>
                        {badge.icon}
                      </span>
                      {badge.earned && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-electric-blue rounded-full flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                      )}
                    </div>

                    {/* Badge Name */}
                    <h3 className={`text-lg font-bold mb-2 ${
                      badge.earned ? 'text-soft-gray' : 'text-soft-gray/60'
                    }`}>
                      {badge.name}
                    </h3>

                    {/* Badge Description */}
                    <p className={`text-sm mb-3 ${
                      badge.earned ? 'text-soft-gray/70' : 'text-soft-gray/50'
                    }`}>
                      {badge.description}
                    </p>

                    {/* Requirement */}
                    <div className={`text-xs rounded-full px-3 py-1 mb-3 inline-block ${
                      badge.earned
                        ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/30'
                        : 'bg-gray-700/50 text-soft-gray/60 border border-gray-600/50'
                    }`}>
                      {badge.requirement}
                    </div>

                    {/* Progress Bar for Available Badges */}
                    {!badge.earned && badge.progress !== undefined && badge.maxProgress && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs text-soft-gray/60 mb-1">
                          <span>Progress</span>
                          <span>{badge.progress}/{badge.maxProgress}</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2">
                          <div
                            className="bg-electric-blue rounded-full h-2 transition-all duration-500"
                            style={{ width: `${(badge.progress / badge.maxProgress) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Earned Date */}
                    {badge.earned && badge.earnedDate && (
                      <p className="text-xs text-soft-gray/50 mt-2">
                        Earned {new Date(badge.earnedDate).toLocaleDateString()}
                      </p>
                    )}

                    {/* Rarity Indicator */}
                    <div className={`text-xs font-medium mt-2 ${
                      badge.rarity === 'legendary' ? 'text-purple-400' :
                      badge.rarity === 'epic' ? 'text-orange-400' :
                      badge.rarity === 'rare' ? 'text-blue-400' :
                      'text-gray-400'
                    }`}>
                      {badge.rarity.charAt(0).toUpperCase() + badge.rarity.slice(1)}
                    </div>
                  </div>
                </Card>
              ))
            }
          </div>

          {/* Badge Stats Summary */}
          <div className="mt-12 text-center">
            <Card className="bg-gray-800/30 border-electric-blue/30 p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-display font-bold text-electric-blue mb-6">
                Badge Collection Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-gray mb-1">
                    {badges.filter(b => b.earned).length}
                  </div>
                  <div className="text-sm text-soft-gray/70">Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-soft-gray mb-1">
                    {badges.filter(b => !b.earned).length}
                  </div>
                  <div className="text-sm text-soft-gray/70">Available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue mb-1">
                    {Math.round((badges.filter(b => b.earned).length / badges.length) * 100)}%
                  </div>
                  <div className="text-sm text-soft-gray/70">Complete</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-vibrant-pink mb-1">
                    {badges.filter(b => b.earned && b.rarity !== 'common').length}
                  </div>
                  <div className="text-sm text-soft-gray/70">Rare+</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Leaderboard */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-6">
              Global <span className="text-electric-blue">Leaderboard</span>
            </h2>
            <p className="text-xl text-soft-gray/70">
              See how you rank among readers
            </p>
          </div>

          {/* Simplified Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Main Filter Toggle */}
            <div className="flex gap-3">
              <Button
                variant={subscriptionFilter === 'all' ? 'default' : 'ghost'}
                onClick={() => setSubscriptionFilter('all')}
                className={subscriptionFilter === 'all'
                  ? 'bg-electric-blue text-midnight-black'
                  : 'text-soft-gray hover:text-electric-blue hover:bg-electric-blue/10'
                }
              >
                <Users className="w-4 h-4 mr-2" />
                All Readers
              </Button>
              <Button
                variant={subscriptionFilter === 'Student' ? 'default' : 'ghost'}
                onClick={() => setSubscriptionFilter('Student')}
                className={subscriptionFilter === 'Student'
                  ? 'bg-electric-blue text-midnight-black'
                  : 'text-soft-gray hover:text-electric-blue hover:bg-electric-blue/10'
                }
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                Students
              </Button>
              <Button
                variant={subscriptionFilter === 'Premium' ? 'default' : 'ghost'}
                onClick={() => setSubscriptionFilter('Premium')}
                className={subscriptionFilter === 'Premium'
                  ? 'bg-yellow-500 text-midnight-black'
                  : 'text-soft-gray hover:text-yellow-400 hover:bg-yellow-500/10'
                }
              >
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </Button>
            </div>

            {/* Right Side Info */}
            <div className="flex items-center gap-4 ml-auto">
              {subscriptionFilter !== 'all' && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSubscriptionFilter('all')}
                  className="text-soft-gray/60 hover:text-soft-gray text-sm px-3 py-1 h-8"
                >
                  Clear filter ×
                </Button>
              )}
              <div className="flex items-center gap-2 text-soft-gray/50 text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>By {sortBy}</span>
              </div>
            </div>
          </div>

          {/* Leaderboard Table */}
          <Card className="bg-gray-800/30 border-electric-blue/30 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr className="text-left">
                    <th className="px-6 py-4 text-electric-blue font-semibold">Rank</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Reader</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Articles</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Challenges</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Streak</th>
                    <th className="px-6 py-4 text-electric-blue font-semibold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLeaderboard.slice(0, 8).map((user) => (
                    <tr 
                      key={user.id} 
                      className={`border-t border-gray-700/50 hover:bg-gray-800/30 transition-colors ${
                        user.isCurrentUser ? 'bg-electric-blue/10 border-electric-blue/30' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className={`font-bold text-lg ${
                            user.rank === 1 ? 'text-yellow-500' :
                            user.rank === 2 ? 'text-gray-400' :
                            user.rank === 3 ? 'text-orange-600' :
                            user.isCurrentUser ? 'text-electric-blue' : 'text-soft-gray'
                          }`}>
                            #{user.rank}
                          </span>
                          {user.rank <= 3 && (
                            <span className="ml-2">
                              {user.rank === 1 ? '🏆' : user.rank === 2 ? '🥈' : '🥉'}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                            user.isCurrentUser 
                              ? 'bg-electric-blue text-midnight-black' 
                              : 'bg-gray-700 text-soft-gray'
                          }`}>
                            {user.avatar}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`font-medium ${
                                user.isCurrentUser ? 'text-electric-blue' : 'text-soft-gray'
                              }`}>
                                {user.name}
                              </span>
                              {user.isCurrentUser && (
                                <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30 text-xs">
                                  You
                                </Badge>
                              )}
                            </div>
                            <div className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-flex items-center gap-1 ${
                              user.subscriptionType === 'Premium' ? 'bg-yellow-500/20 text-yellow-400' :
                              user.subscriptionType === 'Student' ? 'bg-electric-blue/20 text-electric-blue' :
                              user.subscriptionType === 'Non-Profit' ? 'bg-neon-green/20 text-neon-green' :
                              'bg-vibrant-pink/20 text-vibrant-pink'
                            }`}>
                              {user.subscriptionType === 'Premium' ? '👑' :
                               user.subscriptionType === 'Student' ? '🎓' :
                               user.subscriptionType === 'Non-Profit' ? '💚' : '💼'}
                              <span>{user.subscriptionType}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-soft-gray">{user.articlesRead}</td>
                      <td className="px-6 py-4 font-medium text-soft-gray">{user.challengesWon}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Flame className="w-4 h-4 text-orange-500 mr-1" />
                          <span className="font-medium text-soft-gray">{user.currentStreak}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-electric-blue">{user.points.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <div className="text-center mt-8">
            <Button className="bg-neon-green text-midnight-black hover:bg-lime-400 font-semibold px-8 py-4 rounded-full">
              <Target className="w-5 h-5 mr-2" />
              Climb the Ranks �� Join a Challenge
            </Button>
          </div>
        </div>
      </section>

      {/* Challenge Rankings */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-6">
              Challenge <span className="text-electric-blue">Rankings</span>
            </h2>
            <p className="text-xl text-soft-gray/70">
              Compete in topics like 'Sports News Sprint'
            </p>
          </div>

          {/* Challenge Carousel */}
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-display font-bold text-soft-gray">
                Active Challenges
              </h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevChallenge}
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue/10"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextChallenge}
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue/10"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card 
                  key={challenge.id} 
                  className={`bg-gray-800/30 border-electric-blue/30 p-6 transition-all duration-300 hover:bg-gray-800/40 ${
                    index === currentChallengeIndex ? 'ring-2 ring-electric-blue/50' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-vibrant-pink mb-1">
                        {challenge.name}
                      </h4>
                      <p className="text-sm text-soft-gray/70 mb-2">
                        {challenge.description}
                      </p>
                      <div className="flex items-center text-xs text-soft-gray/60">
                        <Users className="w-3 h-3 mr-1" />
                        {challenge.participants.toLocaleString()} participants
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleChallengeLike(challenge.id)}
                      className="p-1 hover:bg-transparent"
                    >
                      <Heart 
                        className={`w-5 h-5 ${
                          challenge.userLiked 
                            ? 'fill-red-500 text-red-500' 
                            : 'text-soft-gray/60 hover:text-red-500'
                        }`} 
                      />
                      <span className="ml-1 text-xs">{challenge.likes}</span>
                    </Button>
                  </div>

                  {/* Top 3 Users */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-electric-blue mb-2">Leaderboard</h5>
                    <div className="space-y-2">
                      {challenge.topUsers.map((topUser) => (
                        <div key={topUser.rank} className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <span className="text-lg mr-2">{topUser.badge}</span>
                            <span className="text-soft-gray/80">{topUser.name}</span>
                          </div>
                          <span className="font-medium text-neon-green">{topUser.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* User's Rank */}
                  <div className="bg-gray-900/50 rounded-lg p-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-soft-gray/70">Your rank:</span>
                      <span className="font-bold text-electric-blue">#{challenge.userRank}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-soft-gray/70">Your score:</span>
                      <span className="font-bold text-neon-green">{challenge.userScore}</span>
                    </div>
                  </div>

                  {/* Prize */}
                  <div className="text-center">
                    <Badge className="bg-vibrant-pink/20 text-vibrant-pink border-vibrant-pink/30 mb-2">
                      <Award className="w-3 h-3 mr-1" />
                      Prize: {challenge.prize}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold px-8 py-4 rounded-full">
              <Trophy className="w-5 h-5 mr-2" />
              Join a Challenge – Win Rewards
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyStats;
