import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import {
  Users,
  Plus,
  Upload,
  Settings,
  Crown,
  Medal,
  Trophy,
  Target,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Filter,
  ArrowUpDown,
  UserPlus,
  Share2,
  Flag,
  Flame,
  Star,
  Heart,
  Gift,
  Zap,
  BookOpen,
  Clock,
  TrendingUp,
  Award,
  Shield,
  Check,
  X,
  Eye,
  Download,
  MessageCircle,
  ThumbsUp
} from "lucide-react";

// Mock data interfaces
interface TeamMember {
  id: string;
  name: string;
  avatar: string;
  articlesRead: number;
  points: number;
  currentStreak: number;
  joinDate: string;
  role: 'owner' | 'admin' | 'member';
  isOnline: boolean;
}

interface Team {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  memberCount: number;
  maxMembers: number;
  joinType: 'open' | 'restricted';
  totalArticlesRead: number;
  totalPoints: number;
  rank: number;
  createdAt: string;
  owner: string;
}

interface Competition {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'active' | 'completed';
  participants: number;
  prize: string;
  prizeIcon: string;
  topTeams: {
    rank: number;
    teamName: string;
    points: number;
    members: number;
  }[];
  userTeamRank?: number;
  userTeamPoints?: number;
  category: 'sports' | 'politics' | 'tech' | 'campus' | 'general';
}

interface JoinRequest {
  id: string;
  userName: string;
  userAvatar: string;
  articlesRead: number;
  points: number;
  message: string;
  requestDate: string;
}

const Teams = () => {
  const { user, isAuthenticated } = useAuth();
  
  // Team Creation Form State
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [coverImagePreview, setCoverImagePreview] = useState("");
  const [joinType, setJoinType] = useState<'open' | 'restricted'>('open');
  const [memberLimit, setMemberLimit] = useState(30);
  const [minArticles, setMinArticles] = useState(10);
  const [minPoints, setMinPoints] = useState(100);

  // Team Dashboard State
  const [activeTab, setActiveTab] = useState<'members' | 'requests'>('members');
  const [inviteEmail, setInviteEmail] = useState("");

  // Leaderboard State
  const [sortBy, setSortBy] = useState<'articles' | 'points' | 'streak'>('points');
  const [timeFilter, setTimeFilter] = useState<'all-time' | 'this-week'>('all-time');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  // Competition State
  const [currentCompetitionIndex, setCurrentCompetitionIndex] = useState(0);
  const [competitionFilter, setCompetitionFilter] = useState<'all' | 'active' | 'upcoming'>('active');

  // Mock data
  const [userTeam] = useState<Team>({
    id: "team-1",
    name: "Campus News Crusaders",
    description: "Staying informed about campus events and breaking news that matters to our university community",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    memberCount: 24,
    maxMembers: 30,
    joinType: "restricted",
    totalArticlesRead: 1247,
    totalPoints: 8420,
    rank: 3,
    createdAt: "2024-01-15",
    owner: "currentUser"
  });

  const [teamMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Alex Rivera",
      avatar: "AR",
      articlesRead: 156,
      points: 980,
      currentStreak: 12,
      joinDate: "2024-01-15",
      role: "owner",
      isOnline: true
    },
    {
      id: "2", 
      name: "Sarah Chen",
      avatar: "SC",
      articlesRead: 142,
      points: 890,
      currentStreak: 8,
      joinDate: "2024-01-16",
      role: "admin",
      isOnline: true
    },
    {
      id: "3",
      name: "Jordan Smith",
      avatar: "JS",
      articlesRead: 134,
      points: 840,
      currentStreak: 15,
      joinDate: "2024-01-18",
      role: "member",
      isOnline: false
    },
    {
      id: "4",
      name: "Maya Patel",
      avatar: "MP",
      articlesRead: 128,
      points: 820,
      currentStreak: 6,
      joinDate: "2024-01-20",
      role: "member",
      isOnline: true
    },
    {
      id: "5",
      name: "Chris Johnson",
      avatar: "CJ",
      articlesRead: 119,
      points: 780,
      currentStreak: 10,
      joinDate: "2024-01-22",
      role: "member",
      isOnline: false
    },
    {
      id: "6",
      name: "Taylor Wong",
      avatar: "TW",
      articlesRead: 115,
      points: 750,
      currentStreak: 5,
      joinDate: "2024-01-24",
      role: "member",
      isOnline: true
    },
    {
      id: "7",
      name: "Jamie Lee",
      avatar: "JL",
      articlesRead: 108,
      points: 720,
      currentStreak: 9,
      joinDate: "2024-01-25",
      role: "member",
      isOnline: false
    },
    {
      id: "8",
      name: "Morgan Davis",
      avatar: "MD",
      articlesRead: 102,
      points: 680,
      currentStreak: 4,
      joinDate: "2024-01-26",
      role: "member",
      isOnline: true
    }
  ]);

  const [joinRequests] = useState<JoinRequest[]>([
    {
      id: "req-1",
      userName: "Emma Wilson",
      userAvatar: "EW",
      articlesRead: 45,
      points: 320,
      message: "I'm passionate about staying updated with campus news and would love to contribute to the team!",
      requestDate: "2024-01-28"
    },
    {
      id: "req-2",
      userName: "Ryan Kim",
      userAvatar: "RK", 
      articlesRead: 38,
      points: 280,
      message: "Active reader looking to join a team that values staying informed about university happenings.",
      requestDate: "2024-01-27"
    },
    {
      id: "req-3",
      userName: "Lisa Park",
      userAvatar: "LP",
      articlesRead: 52,
      points: 390,
      message: "Journalism major who reads news daily. Would be great to compete together!",
      requestDate: "2024-01-26"
    }
  ]);

  const [competitions] = useState<Competition[]>([
    {
      id: "comp-1",
      name: "Campus News Sprint",
      description: "Read 100 campus-related articles this month and stay connected to university life",
      startDate: "2024-02-01",
      endDate: "2024-02-29",
      status: "active",
      participants: 84,
      prize: "AirPods Pro & Team Trophy",
      prizeIcon: "🎧",
      topTeams: [
        { rank: 1, teamName: "University Updates", points: 2840, members: 28 },
        { rank: 2, teamName: "Dorm Room News", points: 2650, members: 22 },
        { rank: 3, teamName: "Campus News Crusaders", points: 2580, members: 24 }
      ],
      userTeamRank: 3,
      userTeamPoints: 2580,
      category: "campus"
    },
    {
      id: "comp-2",
      name: "Tech News Challenge",
      description: "Explore 75 technology articles and stay ahead of innovation trends",
      startDate: "2024-02-15",
      endDate: "2024-03-15", 
      status: "active",
      participants: 67,
      prize: "iPad Mini & Certificates",
      prizeIcon: "📱",
      topTeams: [
        { rank: 1, teamName: "Code & Coffee", points: 1920, members: 18 },
        { rank: 2, teamName: "Digital Innovators", points: 1840, members: 25 },
        { rank: 3, teamName: "Tech Enthusiasts", points: 1750, members: 20 }
      ],
      userTeamRank: 8,
      userTeamPoints: 1420,
      category: "tech"
    },
    {
      id: "comp-3",
      name: "Sports News Showdown",
      description: "Read 60 sports articles and stay updated on all the athletic action",
      startDate: "2024-03-01",
      endDate: "2024-03-31",
      status: "upcoming",
      participants: 0,
      prize: "Wireless Earbuds & Team Medals",
      prizeIcon: "🏆",
      topTeams: [],
      category: "sports"
    },
    {
      id: "comp-4",
      name: "World News Championship",
      description: "Read 120 international news articles and expand your global perspective",
      startDate: "2024-03-15",
      endDate: "2024-04-15",
      status: "upcoming", 
      participants: 0,
      prize: "Mechanical Keyboard & Trophy",
      prizeIcon: "🌍",
      topTeams: [],
      category: "general"
    }
  ];

  // Computed values
  const sortedMembers = useMemo(() => {
    return [...teamMembers].sort((a, b) => {
      let aValue: number, bValue: number;
      
      switch (sortBy) {
        case 'articles':
          aValue = a.articlesRead;
          bValue = b.articlesRead;
          break;
        case 'points':
          aValue = a.points;
          bValue = b.points;
          break;
        case 'streak':
          aValue = a.currentStreak;
          bValue = b.currentStreak;
          break;
        default:
          aValue = a.points;
          bValue = b.points;
      }

      return sortOrder === 'desc' ? bValue - aValue : aValue - bValue;
    });
  }, [teamMembers, sortBy, sortOrder]);

  const filteredCompetitions = useMemo(() => {
    if (competitionFilter === 'all') return competitions;
    return competitions.filter(comp => comp.status === competitionFilter);
  }, [competitions, competitionFilter]);

  // Event handlers
  const handleCreateTeam = () => {
    console.log("Creating team:", { teamName, teamDescription, joinType, memberLimit });
    // In real app, this would make an API call
  };

  const handleInviteFriend = () => {
    console.log("Inviting friend:", inviteEmail);
    setInviteEmail("");
  };

  const handleApproveRequest = (requestId: string) => {
    console.log("Approving request:", requestId);
  };

  const handleRejectRequest = (requestId: string) => {
    console.log("Rejecting request:", requestId);
  };

  const handleJoinCompetition = (competitionId: string) => {
    console.log("Joining competition:", competitionId);
  };

  const nextCompetition = () => {
    setCurrentCompetitionIndex((prev) => 
      prev === filteredCompetitions.length - 1 ? 0 : prev + 1
    );
  };

  const prevCompetition = () => {
    setCurrentCompetitionIndex((prev) => 
      prev === 0 ? filteredCompetitions.length - 1 : prev - 1
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-midnight-black text-soft-gray flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <Users className="w-16 h-16 text-electric-blue mx-auto mb-6" />
          <h1 className="text-2xl font-display font-bold text-soft-gray mb-4">
            Sign in to join teams
          </h1>
          <p className="text-soft-gray/70 mb-6">
            Create teams, compete together, and climb the leaderboards with friends.
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

  return (
    <div className="min-h-screen bg-light-gray text-soft-white">
      <Navigation />

      {/* Team Creation Form */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-soft-white border-deep-teal/20 p-8 shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-deep-teal mb-4">
                Create Your Team
              </h1>
              <p className="text-lg text-soft-white/80">
                Build a reading squad and compete together
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-deep-teal mb-2">
                    Team Name *
                  </label>
                  <Input
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter team name"
                    className="border-deep-teal/30 focus:border-deep-teal focus:ring-warm-orange/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-teal mb-2">
                    Description
                  </label>
                  <Textarea
                    value={teamDescription}
                    onChange={(e) => setTeamDescription(e.target.value)}
                    placeholder="Describe your team's purpose (max 150 characters)"
                    maxLength={150}
                    rows={3}
                    className="border-deep-teal/30 focus:border-deep-teal focus:ring-warm-orange/20"
                  />
                  <p className="text-xs text-soft-white/60 mt-1">
                    {teamDescription.length}/150 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-teal mb-2">
                    Join Type
                  </label>
                  <select
                    value={joinType}
                    onChange={(e) => setJoinType(e.target.value as 'open' | 'restricted')}
                    className="w-full px-3 py-2 border border-deep-teal/30 rounded-md focus:border-deep-teal focus:ring-warm-orange/20 bg-soft-white text-deep-teal"
                  >
                    <option value="open">Open - Anyone can join</option>
                    <option value="restricted">Restricted - Approval required</option>
                  </select>
                </div>

                {joinType === 'restricted' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">
                        Min Articles
                      </label>
                      <Input
                        type="number"
                        value={minArticles}
                        onChange={(e) => setMinArticles(Number(e.target.value))}
                        className="border-deep-teal/30 focus:border-deep-teal focus:ring-warm-orange/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-teal mb-2">
                        Min Points
                      </label>
                      <Input
                        type="number"
                        value={minPoints}
                        onChange={(e) => setMinPoints(Number(e.target.value))}
                        className="border-deep-teal/30 focus:border-deep-teal focus:ring-warm-orange/20"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-deep-teal mb-2">
                    Member Limit
                  </label>
                  <Input
                    type="number"
                    value={memberLimit}
                    onChange={(e) => setMemberLimit(Number(e.target.value))}
                    min={10}
                    max={50}
                    className="border-deep-teal/30 focus:border-deep-teal focus:ring-warm-orange/20"
                  />
                  <p className="text-xs text-soft-white/60 mt-1">
                    Range: 10-50 members
                  </p>
                </div>
              </div>

              {/* Cover Image Upload */}
              <div>
                <label className="block text-sm font-medium text-deep-teal mb-2">
                  Cover Image
                </label>
                <div className="border-2 border-dashed border-deep-teal/30 rounded-lg p-6 text-center hover:border-warm-orange/50 transition-colors">
                  {coverImagePreview ? (
                    <div className="relative">
                      <img
                        src={coverImagePreview}
                        alt="Cover preview"
                        className="w-full h-32 object-cover rounded-lg ring-2 ring-warm-orange/50"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCoverImagePreview("")}
                        className="absolute top-2 right-2 bg-subtle-red text-soft-white hover:bg-subtle-red/80"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="w-12 h-12 text-deep-teal/50 mx-auto mb-4" />
                      <p className="text-deep-teal/70 mb-2">
                        Upload team cover image
                      </p>
                      <p className="text-xs text-soft-white/60 mb-4">
                        Recommended: 1920x1080px, max 5MB
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-deep-teal text-deep-teal hover:bg-warm-orange/10"
                        onClick={() => setCoverImagePreview("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")}
                      >
                        Choose File
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={handleCreateTeam}
                className="bg-deep-teal text-soft-white hover:bg-deep-teal/90 hover:shadow-lg hover:shadow-warm-orange/20 font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                <Plus className="w-5 h-5 mr-2" />
                Create Team
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Team Dashboard */}
      <section className="py-16 bg-soft-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-teal mb-4">
              Your Team Dashboard
            </h2>
          </div>

          {/* Team Cover & Info */}
          <Card className="bg-light-gray border-deep-teal/20 overflow-hidden mb-8 shadow-lg">
            <div className="relative h-64 bg-gradient-to-r from-deep-teal to-deep-teal/80">
              <img
                src={userTeam.coverImage}
                alt="Team cover"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-soft-white mb-2">
                      {userTeam.name}
                    </h3>
                    <p className="text-soft-white/90 mb-4 max-w-2xl">
                      {userTeam.description}
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-soft-white/80">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {userTeam.memberCount}/{userTeam.maxMembers} members
                      </span>
                      <span className="flex items-center">
                        <Trophy className="w-4 h-4 mr-1" />
                        Rank #{userTeam.rank}
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {userTeam.totalArticlesRead} articles read
                      </span>
                    </div>
                  </div>
                  <Badge className="bg-warm-orange text-deep-teal font-semibold px-3 py-1">
                    {userTeam.joinType === 'open' ? 'Open Team' : 'Restricted'}
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Member List & Join Requests */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Member List */}
            <div className="lg:col-span-2">
              <Card className="bg-light-gray border-deep-teal/20 p-6 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-4">
                    <Button
                      variant={activeTab === 'members' ? 'default' : 'ghost'}
                      onClick={() => setActiveTab('members')}
                      className={activeTab === 'members' 
                        ? 'bg-deep-teal text-soft-white' 
                        : 'text-deep-teal hover:bg-deep-teal/10'
                      }
                    >
                      Members ({teamMembers.length})
                    </Button>
                    <Button
                      variant={activeTab === 'requests' ? 'default' : 'ghost'}
                      onClick={() => setActiveTab('requests')}
                      className={activeTab === 'requests' 
                        ? 'bg-subtle-red text-soft-white' 
                        : 'text-subtle-red hover:bg-subtle-red/10'
                      }
                    >
                      Join Requests ({joinRequests.length})
                    </Button>
                  </div>
                </div>

                {activeTab === 'members' && (
                  <div className="max-h-96 overflow-y-auto space-y-3">
                    {teamMembers.map((member) => (
                      <div
                        key={member.id}
                        className="flex items-center justify-between p-4 bg-soft-white rounded-lg border border-deep-teal/10 hover:border-warm-orange/30 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className="w-12 h-12 bg-deep-teal text-soft-white rounded-full flex items-center justify-center font-semibold">
                              {member.avatar}
                            </div>
                            {member.isOnline && (
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-soft-white" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-deep-teal">
                                {member.name}
                              </h4>
                              {member.role === 'owner' && (
                                <Crown className="w-4 h-4 text-warm-orange" />
                              )}
                              {member.role === 'admin' && (
                                <Shield className="w-4 h-4 text-deep-teal" />
                              )}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-soft-white/70">
                              <span>{member.articlesRead} articles</span>
                              <span>{member.points} points</span>
                              <span className="flex items-center">
                                <Flame className="w-3 h-3 mr-1 text-warm-orange" />
                                {member.currentStreak}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Badge className="bg-deep-teal/10 text-deep-teal border-deep-teal/20">
                          {member.role}
                        </Badge>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'requests' && (
                  <div className="max-h-96 overflow-y-auto space-y-4">
                    {joinRequests.map((request) => (
                      <div
                        key={request.id}
                        className="p-4 bg-soft-white rounded-lg border border-subtle-red/20"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-deep-teal text-soft-white rounded-full flex items-center justify-center font-semibold text-sm">
                              {request.userAvatar}
                            </div>
                            <div>
                              <h4 className="font-semibold text-deep-teal">
                                {request.userName}
                              </h4>
                              <div className="flex items-center space-x-4 text-sm text-soft-white/70">
                                <span>{request.articlesRead} articles</span>
                                <span>{request.points} points</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              onClick={() => handleApproveRequest(request.id)}
                              className="bg-subtle-red text-soft-white hover:bg-subtle-red/90"
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleRejectRequest(request.id)}
                              className="border-deep-teal/30 text-deep-teal hover:bg-deep-teal/10"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-sm text-soft-white/80 bg-light-gray p-3 rounded">
                          "{request.message}"
                        </p>
                        <p className="text-xs text-soft-white/60 mt-2">
                          Requested {new Date(request.requestDate).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </div>

            {/* Invite Friends */}
            <div>
              <Card className="bg-light-gray border-deep-teal/20 p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-deep-teal mb-4">
                  Invite Friends
                </h3>
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter friend's email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    className="border-deep-teal/30 focus:border-warm-orange"
                  />
                  <Button
                    onClick={handleInviteFriend}
                    className="w-full bg-warm-orange text-soft-white hover:bg-warm-orange/90 hover:shadow-lg hover:shadow-warm-orange/20 transition-all duration-300"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Send Invite
                  </Button>
                  <div className="pt-4 border-t border-deep-teal/10">
                    <p className="text-sm text-soft-white/70 mb-3">Quick share:</p>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-deep-teal/30 text-deep-teal hover:bg-deep-teal/10"
                      >
                        <Share2 className="w-4 h-4 mr-1" />
                        Link
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-deep-teal/30 text-deep-teal hover:bg-deep-teal/10"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        SMS
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Team Stats */}
              <Card className="bg-light-gray border-deep-teal/20 p-6 shadow-lg mt-6">
                <h3 className="text-lg font-semibold text-deep-teal mb-4">
                  Team Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-soft-white/70">Total Articles</span>
                    <span className="font-semibold text-deep-teal">{userTeam.totalArticlesRead}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-soft-white/70">Total Points</span>
                    <span className="font-semibold text-deep-teal">{userTeam.totalPoints}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-soft-white/70">Global Rank</span>
                    <span className="font-semibold text-warm-orange">#{userTeam.rank}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-soft-white/70">Active Members</span>
                    <span className="font-semibold text-deep-teal">
                      {teamMembers.filter(m => m.isOnline).length}/{teamMembers.length}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leaderboard */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-deep-teal mb-4">
              Team Leaderboard
            </h2>
            <p className="text-lg text-soft-white/80">
              Track articles read and points
            </p>
          </div>

          <Card className="bg-soft-white border-deep-teal/20 shadow-lg">
            {/* Filters */}
            <div className="p-6 border-b border-deep-teal/10">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-deep-teal" />
                    <select
                      value={timeFilter}
                      onChange={(e) => setTimeFilter(e.target.value as 'all-time' | 'this-week')}
                      className="px-3 py-1 border border-deep-teal/30 rounded text-deep-teal bg-soft-white focus:border-warm-orange"
                    >
                      <option value="all-time">All Time</option>
                      <option value="this-week">This Week</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-soft-white/70">Sort by:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as 'articles' | 'points' | 'streak')}
                      className="px-3 py-1 border border-deep-teal/30 rounded text-deep-teal bg-soft-white focus:border-warm-orange"
                    >
                      <option value="points">Points</option>
                      <option value="articles">Articles</option>
                      <option value="streak">Streak</option>
                    </select>
                  </div>
                </div>
                <Button
                  onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                  variant="outline"
                  size="sm"
                  className="border-deep-teal/30 text-deep-teal hover:bg-deep-teal/10"
                >
                  <ArrowUpDown className="w-4 h-4 mr-1" />
                  {sortOrder === 'desc' ? 'High to Low' : 'Low to High'}
                </Button>
              </div>
            </div>

            {/* Leaderboard Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-deep-teal/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-deep-teal">
                      Rank
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-deep-teal">
                      Member
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-deep-teal">
                      Articles Read
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-deep-teal">
                      Points
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-deep-teal">
                      Streak
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-deep-teal">
                      Progress
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedMembers.slice(0, 8).map((member, index) => (
                    <tr
                      key={member.id}
                      className={`border-t border-deep-teal/10 hover:bg-light-gray/50 transition-colors ${
                        member.id === "1" ? "bg-warm-orange/10 border-warm-orange/20" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className={`font-bold text-lg ${
                            index === 0 ? 'text-warm-orange' :
                            index === 1 ? 'text-deep-teal' :
                            index === 2 ? 'text-warm-orange/70' :
                            member.id === "1" ? 'text-warm-orange' : 'text-soft-white/70'
                          }`}>
                            #{index + 1}
                          </span>
                          {index <= 2 && (
                            <span className="ml-2">
                              {index === 0 ? '🏆' : index === 1 ? '🥈' : '🥉'}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="relative">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                              member.id === "1" 
                                ? 'bg-warm-orange text-soft-white' 
                                : 'bg-deep-teal text-soft-white'
                            }`}>
                              {member.avatar}
                            </div>
                            {member.isOnline && (
                              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-soft-white" />
                            )}
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className={`font-medium ${
                                member.id === "1" ? 'text-warm-orange' : 'text-deep-teal'
                              }`}>
                                {member.name}
                              </span>
                              {member.id === "1" && (
                                <Badge className="bg-warm-orange/20 text-warm-orange border-warm-orange/30 text-xs">
                                  You
                                </Badge>
                              )}
                              {member.role === 'owner' && (
                                <Crown className="w-4 h-4 text-warm-orange" />
                              )}
                            </div>
                            <p className="text-xs text-soft-white/60">
                              Joined {new Date(member.joinDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <span className="font-medium text-deep-teal">
                            {member.articlesRead}
                          </span>
                          <div className="flex-1 bg-light-gray rounded-full h-2 w-20">
                            <div
                              className="bg-warm-orange rounded-full h-2 transition-all duration-300"
                              style={{ width: `${(member.articlesRead / Math.max(...teamMembers.map(m => m.articlesRead))) * 100}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <span className="font-bold text-deep-teal">
                            {member.points}
                          </span>
                          <div className="flex-1 bg-light-gray rounded-full h-2 w-20">
                            <div
                              className="bg-deep-teal rounded-full h-2 transition-all duration-300"
                              style={{ width: `${(member.points / Math.max(...teamMembers.map(m => m.points))) * 100}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <Flame className="w-4 h-4 text-warm-orange" />
                          <span className="font-medium text-deep-teal">
                            {member.currentStreak}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-deep-teal" />
                          <span className="text-sm text-soft-white/70">
                            {index <= 2 ? 'Rising' : 'Steady'}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t border-deep-teal/10 text-center">
              <Button className="bg-subtle-red text-soft-white hover:bg-subtle-red/90 hover:shadow-lg hover:shadow-subtle-red/20 font-semibold px-8 py-3 rounded-full transition-all duration-300">
                <Target className="w-5 h-5 mr-2" />
                Compete Now – Join a Challenge
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Inter-Team Competitions */}
      <section className="py-16 bg-soft-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-deep-teal mb-4">
              Team Competitions
            </h2>
            <p className="text-lg text-soft-white/80">
              Battle other teams for top spots
            </p>
          </div>

          {/* Competition Filters */}
          <div className="flex justify-center mb-8">
            <div className="bg-light-gray rounded-full p-1 flex">
              <Button
                variant={competitionFilter === 'active' ? 'default' : 'ghost'}
                onClick={() => setCompetitionFilter('active')}
                className={`rounded-full px-6 py-2 transition-all ${
                  competitionFilter === 'active'
                    ? 'bg-deep-teal text-soft-white'
                    : 'text-deep-teal hover:text-warm-orange'
                }`}
              >
                Active ({competitions.filter(c => c.status === 'active').length})
              </Button>
              <Button
                variant={competitionFilter === 'upcoming' ? 'default' : 'ghost'}
                onClick={() => setCompetitionFilter('upcoming')}
                className={`rounded-full px-6 py-2 transition-all ${
                  competitionFilter === 'upcoming'
                    ? 'bg-deep-teal text-soft-white'
                    : 'text-deep-teal hover:text-warm-orange'
                }`}
              >
                Upcoming ({competitions.filter(c => c.status === 'upcoming').length})
              </Button>
              <Button
                variant={competitionFilter === 'all' ? 'default' : 'ghost'}
                onClick={() => setCompetitionFilter('all')}
                className={`rounded-full px-6 py-2 transition-all ${
                  competitionFilter === 'all'
                    ? 'bg-deep-teal text-soft-white'
                    : 'text-deep-teal hover:text-warm-orange'
                }`}
              >
                All ({competitions.length})
              </Button>
            </div>
          </div>

          {/* Competitions Carousel */}
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-deep-teal">
                {competitionFilter === 'active' ? 'Active' : 
                 competitionFilter === 'upcoming' ? 'Upcoming' : 'All'} Competitions
              </h3>
              {filteredCompetitions.length > 3 && (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevCompetition}
                    className="border-deep-teal text-deep-teal hover:bg-deep-teal/10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextCompetition}
                    className="border-deep-teal text-deep-teal hover:bg-deep-teal/10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCompetitions.slice(currentCompetitionIndex, currentCompetitionIndex + 3).map((competition) => (
                <Card
                  key={competition.id}
                  className="bg-light-gray border-deep-teal/20 p-6 hover:border-warm-orange/40 hover:shadow-lg hover:shadow-warm-orange/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-subtle-red mb-2 group-hover:text-warm-orange transition-colors">
                        {competition.name}
                      </h4>
                      <p className="text-sm text-soft-white/80 mb-3">
                        {competition.description}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-soft-white/60">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(competition.startDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {competition.participants || 0} teams
                        </span>
                      </div>
                    </div>
                    <div className="text-2xl">{competition.prizeIcon}</div>
                  </div>

                  {/* Competition Status */}
                  <div className="mb-4">
                    <Badge className={`${
                      competition.status === 'active' ? 'bg-green-500/20 text-green-700' :
                      competition.status === 'upcoming' ? 'bg-blue-500/20 text-blue-700' :
                      'bg-gray-500/20 text-gray-700'
                    } font-medium`}>
                      {competition.status.charAt(0).toUpperCase() + competition.status.slice(1)}
                    </Badge>
                  </div>

                  {/* Top Teams Leaderboard */}
                  {competition.topTeams.length > 0 && (
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-deep-teal mb-2">
                        Leaderboard
                      </h5>
                      <div className="space-y-2">
                        {competition.topTeams.slice(0, 3).map((team) => (
                          <div key={team.rank} className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-2">
                              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                team.rank === 1 ? 'bg-warm-orange text-soft-white' :
                                team.rank === 2 ? 'bg-deep-teal/20 text-deep-teal' :
                                'bg-light-gray text-soft-white/70'
                              }`}>
                                {team.rank}
                              </span>
                              <span className={`${
                                team.teamName === userTeam.name ? 'text-warm-orange font-semibold' : 'text-soft-white/80'
                              }`}>
                                {team.teamName}
                              </span>
                            </div>
                            <span className="font-medium text-deep-teal">
                              {team.points} pts
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Your Team's Rank */}
                  {competition.userTeamRank && (
                    <div className="bg-warm-orange/10 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-soft-white/80">Your team's rank:</span>
                        <span className="font-bold text-warm-orange">
                          #{competition.userTeamRank}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-soft-white/80">Your team's points:</span>
                        <span className="font-bold text-deep-teal">
                          {competition.userTeamPoints}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Prize */}
                  <div className="mb-4">
                    <div className="bg-deep-teal/10 rounded-lg p-3 text-center">
                      <span className="text-2xl mb-2 block">{competition.prizeIcon}</span>
                      <p className="text-sm font-semibold text-deep-teal">
                        Prize: {competition.prize}
                      </p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => handleJoinCompetition(competition.id)}
                    disabled={competition.status === 'completed'}
                    className={`w-full transition-all duration-300 ${
                      competition.status === 'upcoming'
                        ? 'bg-warm-orange text-soft-white hover:bg-warm-orange/90 hover:shadow-lg hover:shadow-warm-orange/20'
                        : competition.status === 'active'
                        ? 'bg-subtle-red text-soft-white hover:bg-subtle-red/90 hover:shadow-lg hover:shadow-subtle-red/20'
                        : 'bg-gray-500 text-soft-white cursor-not-allowed'
                    }`}
                  >
                    {competition.status === 'upcoming' ? (
                      <>
                        <Calendar className="w-4 h-4 mr-2" />
                        Register Now
                      </>
                    ) : competition.status === 'active' ? (
                      <>
                        <Zap className="w-4 h-4 mr-2" />
                        Join Competition
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4 mr-2" />
                        View Results
                      </>
                    )}
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Championship CTA */}
          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-deep-teal to-deep-teal/80 p-8 text-center border-none shadow-lg">
              <h3 className="text-2xl font-bold text-soft-white mb-4">
                Ready for the Ultimate Challenge?
              </h3>
              <p className="text-soft-white/90 mb-6 max-w-2xl mx-auto">
                Join our Championship Events and compete against the best teams for amazing prizes and eternal glory!
              </p>
              <Button className="bg-deep-teal text-soft-white hover:bg-deep-teal/90 hover:shadow-lg hover:shadow-warm-orange/20 font-semibold px-8 py-3 rounded-full transition-all duration-300 border-2 border-soft-white/20">
                <Trophy className="w-5 h-5 mr-2" />
                Enter Championship – Win Prizes
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teams;