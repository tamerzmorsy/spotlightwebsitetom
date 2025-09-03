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
  ThumbsUp,
  LogOut
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

interface TeamRanking {
  id: string;
  name: string;
  avatar: string;
  memberCount: number;
  totalPoints: number;
  totalArticlesRead: number;
  rank: number;
  isCurrentTeam?: boolean;
  category: 'campus' | 'tech' | 'sports' | 'general';
  joinType: 'open' | 'restricted';
  minArticles?: number;
  minPoints?: number;
  description: string;
  coverImage: string;
  members: TeamMember[];
}

const Teams = () => {
  const { user, isAuthenticated } = useAuth();
  
  // Main page state
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'ranking' | 'members'>('leaderboard');
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Team Creation Form State
  const [teamName, setTeamName] = useState("");
  const [teamDescription, setTeamDescription] = useState("");
  const [coverImagePreview, setCoverImagePreview] = useState("");
  const [joinType, setJoinType] = useState<'open' | 'restricted'>('open');
  const [memberLimit, setMemberLimit] = useState(30);
  const [minArticles, setMinArticles] = useState(10);
  const [minPoints, setMinPoints] = useState(100);

  // Image upload and Unsplash state
  const [isDragOver, setIsDragOver] = useState(false);
  const [showUnsplashPicker, setShowUnsplashPicker] = useState(false);
  const [unsplashImages, setUnsplashImages] = useState<any[]>([]);
  const [unsplashQuery, setUnsplashQuery] = useState("");
  const [isLoadingUnsplash, setIsLoadingUnsplash] = useState(false);
  const [unsplashError, setUnsplashError] = useState<string | null>(null);

  // Save state
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [teamUpdated, setTeamUpdated] = useState(false);

  // Team view modal state
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<TeamRanking | null>(null);

  // Members tab state
  const [membersSubTab, setMembersSubTab] = useState<'members' | 'requests'>('members');
  const [inviteEmail, setInviteEmail] = useState("");
  const [isInviting, setIsInviting] = useState(false);
  const [inviteSuccess, setInviteSuccess] = useState(false);
  const [inviteError, setInviteError] = useState<string | null>(null);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [processingRequest, setProcessingRequest] = useState<string | null>(null);
  const [requestSuccess, setRequestSuccess] = useState<string | null>(null);
  const [isLeavingTeam, setIsLeavingTeam] = useState(false);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);

  // Leaderboard State
  const [sortBy, setSortBy] = useState<'articles' | 'points' | 'streak'>('points');
  const [timeFilter, setTimeFilter] = useState<'all-time' | 'this-week'>('all-time');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  // Competition State
  const [currentCompetitionIndex, setCurrentCompetitionIndex] = useState(0);
  const [competitionFilter, setCompetitionFilter] = useState<'all' | 'active' | 'upcoming'>('active');

  // Mock data - now editable
  const [userTeam, setUserTeam] = useState<Team>({
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

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Alex Rivera",
      avatar: "AR",
      articlesRead: 156,
      points: 980,
      currentStreak: 12,
      joinDate: "2024-01-15",
      role: "member",
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

  const [joinRequests, setJoinRequests] = useState<JoinRequest[]>([
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
  ]);

  const [teamRankings] = useState<TeamRanking[]>([
    {
      id: "team-1",
      name: "University Updates",
      avatar: "UU",
      memberCount: 28,
      totalPoints: 12840,
      totalArticlesRead: 2840,
      rank: 1,
      category: "campus",
      joinType: "open",
      description: "Your source for breaking university news and campus announcements",
      coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      members: [
        { id: "m1", name: "Maria Garcia", avatar: "MG", articlesRead: 234, points: 1520, currentStreak: 18, joinDate: "2024-01-01", role: "owner", isOnline: true },
        { id: "m2", name: "James Wilson", avatar: "JW", articlesRead: 198, points: 1380, currentStreak: 15, joinDate: "2024-01-02", role: "admin", isOnline: true },
        { id: "m3", name: "Lisa Chen", avatar: "LC", articlesRead: 187, points: 1250, currentStreak: 12, joinDate: "2024-01-05", role: "member", isOnline: false }
      ]
    },
    {
      id: "team-2",
      name: "Digital Innovators",
      avatar: "DI",
      memberCount: 25,
      totalPoints: 11650,
      totalArticlesRead: 2650,
      rank: 2,
      category: "tech",
      joinType: "restricted",
      minArticles: 50,
      minPoints: 500,
      description: "Tech enthusiasts exploring the future of digital innovation and emerging technologies",
      coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      members: [
        { id: "m4", name: "David Kim", avatar: "DK", articlesRead: 189, points: 1420, currentStreak: 22, joinDate: "2024-01-03", role: "owner", isOnline: true },
        { id: "m5", name: "Anna Rodriguez", avatar: "AR", articlesRead: 176, points: 1320, currentStreak: 14, joinDate: "2024-01-04", role: "admin", isOnline: false },
        { id: "m6", name: "Mike Johnson", avatar: "MJ", articlesRead: 165, points: 1180, currentStreak: 8, joinDate: "2024-01-07", role: "member", isOnline: true }
      ]
    },
    {
      id: "team-3",
      name: "Campus News Crusaders",
      avatar: "CN",
      memberCount: 24,
      totalPoints: 8420,
      totalArticlesRead: 1247,
      rank: 3,
      isCurrentTeam: true,
      category: "campus",
      joinType: "restricted",
      minArticles: 20,
      minPoints: 200,
      description: "Staying informed about campus events and breaking news that matters to our university community",
      coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      members: teamMembers
    },
    {
      id: "team-4",
      name: "Tech Enthusiasts",
      avatar: "TE",
      memberCount: 20,
      totalPoints: 7750,
      totalArticlesRead: 1750,
      rank: 4,
      category: "tech",
      joinType: "open",
      description: "Passionate about technology trends, gadgets, and the latest in software development",
      coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      members: [
        { id: "m7", name: "Sarah Lee", avatar: "SL", articlesRead: 145, points: 980, currentStreak: 11, joinDate: "2024-01-08", role: "owner", isOnline: true },
        { id: "m8", name: "Tom Brown", avatar: "TB", articlesRead: 132, points: 890, currentStreak: 9, joinDate: "2024-01-10", role: "member", isOnline: false }
      ]
    },
    {
      id: "team-5",
      name: "Sports Central",
      avatar: "SC",
      memberCount: 22,
      totalPoints: 7200,
      totalArticlesRead: 1600,
      rank: 5,
      category: "sports",
      joinType: "open",
      description: "All things sports - from college athletics to professional leagues and everything in between",
      coverImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      members: [
        { id: "m9", name: "Carlos Martinez", avatar: "CM", articlesRead: 134, points: 920, currentStreak: 16, joinDate: "2024-01-12", role: "owner", isOnline: true },
        { id: "m10", name: "Emma Davis", avatar: "ED", articlesRead: 128, points: 850, currentStreak: 7, joinDate: "2024-01-15", role: "member", isOnline: true }
      ]
    },
    {
      id: "team-6",
      name: "News Nerds",
      avatar: "NN",
      memberCount: 18,
      totalPoints: 6850,
      totalArticlesRead: 1370,
      rank: 6,
      category: "general",
      joinType: "restricted",
      minArticles: 30,
      minPoints: 300,
      description: "Dedicated news readers exploring diverse topics and staying current with global events",
      coverImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      members: [
        { id: "m11", name: "Rachel Green", avatar: "RG", articlesRead: 142, points: 980, currentStreak: 13, joinDate: "2024-01-18", role: "owner", isOnline: false },
        { id: "m12", name: "Alex Thompson", avatar: "AT", articlesRead: 126, points: 820, currentStreak: 9, joinDate: "2024-01-20", role: "member", isOnline: true }
      ]
    },
    {
      id: "team-7",
      name: "Study Squad",
      avatar: "SS",
      memberCount: 16,
      totalPoints: 6120,
      totalArticlesRead: 1224,
      rank: 7,
      category: "campus",
      joinType: "open",
      description: "Students helping students stay informed about academic news and campus life",
      coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      members: [
        { id: "m13", name: "Kevin Park", avatar: "KP", articlesRead: 118, points: 780, currentStreak: 6, joinDate: "2024-01-22", role: "owner", isOnline: true },
        { id: "m14", name: "Nina Cooper", avatar: "NC", articlesRead: 104, points: 690, currentStreak: 4, joinDate: "2024-01-25", role: "member", isOnline: false }
      ]
    },
    {
      id: "team-8",
      name: "Code & Coffee",
      avatar: "CC",
      memberCount: 19,
      totalPoints: 5920,
      totalArticlesRead: 1184,
      rank: 8,
      category: "tech",
      joinType: "restricted",
      minArticles: 40,
      minPoints: 400,
      description: "Developers and programmers discussing tech news over virtual coffee breaks",
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      members: [
        { id: "m15", name: "Oliver Zhang", avatar: "OZ", articlesRead: 125, points: 850, currentStreak: 14, joinDate: "2024-01-28", role: "owner", isOnline: true },
        { id: "m16", name: "Sophie Williams", avatar: "SW", articlesRead: 112, points: 740, currentStreak: 8, joinDate: "2024-01-30", role: "member", isOnline: true }
      ]
    }
  ]);

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

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFile = files.find(file => file.type.startsWith('image/'));

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Unsplash API integration
  const searchUnsplashImages = async (query: string) => {
    setIsLoadingUnsplash(true);
    setUnsplashError(null);

    try {
      const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12&orientation=landscape`;
      console.log('Fetching from URL:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Client-ID Lras8-LGdNyxv0YGEJa8p2pAaLX4mIGs_ySlB6GRq5I'
        }
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Unsplash API Error Response:', errorText);

        if (response.status === 401) {
          setUnsplashError('API key authentication failed. Using demo images instead.');
        } else {
          setUnsplashError(`Unsplash API error (${response.status}). Using demo images instead.`);
        }
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }

      const data = await response.json();
      console.log('Unsplash API Success:', data);
      setUnsplashImages(data.results || []);
      setUnsplashError(null);
    } catch (error) {
      console.error('Error fetching Unsplash images:', error);

      if (!unsplashError) {
        setUnsplashError('Unable to connect to Unsplash. Using demo images instead.');
      }

      // Fallback with mock data for demo
      setUnsplashImages([
        {
          id: '1',
          urls: { regular: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
          alt_description: 'Team collaboration',
          user: { name: 'John Doe' }
        },
        {
          id: '2',
          urls: { regular: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
          alt_description: 'Office teamwork',
          user: { name: 'Jane Smith' }
        },
        {
          id: '3',
          urls: { regular: 'https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
          alt_description: 'People meeting',
          user: { name: 'Alex Johnson' }
        },
        {
          id: '4',
          urls: { regular: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
          alt_description: 'Team brainstorming',
          user: { name: 'Sarah Wilson' }
        },
        {
          id: '5',
          urls: { regular: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
          alt_description: 'Office collaboration',
          user: { name: 'Mike Chen' }
        },
        {
          id: '6',
          urls: { regular: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
          alt_description: 'Team working together',
          user: { name: 'Emily Davis' }
        }
      ]);
    }
    setIsLoadingUnsplash(false);
  };

  const selectUnsplashImage = (imageUrl: string) => {
    setCoverImagePreview(imageUrl);
    setShowUnsplashPicker(false);
  };

  // Join team functionality
  const handleJoinTeam = (team: TeamRanking) => {
    if (team.joinType === 'open') {
      console.log(`Joining open team: ${team.name}`);
      alert(`Successfully joined ${team.name}!`);
    } else {
      console.log(`Requesting to join restricted team: ${team.name}`);
      alert(`Join request sent to ${team.name}!`);
    }
    setShowTeamModal(false);
  };

  // Event handlers
  const handleCreateTeam = async () => {
    // Basic validation
    if (!teamName.trim()) {
      alert("Team name is required");
      return;
    }

    if (teamDescription.trim().length > 150) {
      alert("Description must be 150 characters or less");
      return;
    }

    if (memberLimit < 10 || memberLimit > 50) {
      alert("Member limit must be between 10 and 50");
      return;
    }

    // Check if any changes were made
    const hasChanges =
      teamName.trim() !== userTeam.name ||
      teamDescription.trim() !== userTeam.description ||
      (coverImagePreview && coverImagePreview !== userTeam.coverImage) ||
      joinType !== userTeam.joinType ||
      memberLimit !== userTeam.maxMembers;

    if (!hasChanges) {
      alert("No changes detected");
      return;
    }

    setIsSaving(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update the team data
      const updatedTeam: Team = {
        ...userTeam,
        name: teamName.trim(),
        description: teamDescription.trim(),
        coverImage: coverImagePreview || userTeam.coverImage,
        joinType: joinType,
        maxMembers: memberLimit
      };

      setUserTeam(updatedTeam);

      // Show success feedback
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);

      // Show team updated notification
      setTeamUpdated(true);
      setTimeout(() => setTeamUpdated(false), 5000);

      console.log("Team updated successfully:", updatedTeam);

      // Close modal after successful save
      setTimeout(() => {
        setShowCreateModal(false);
      }, 1500);

      // In real app, this would make an API call to update team
      // const response = await fetch(`/api/teams/${userTeam.id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updatedTeam)
      // });

    } catch (error) {
      console.error("Error saving team:", error);
      alert("Failed to save changes. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  // Pre-populate form when opening edit modal
  React.useEffect(() => {
    if (showCreateModal) {
      setTeamName(userTeam.name);
      setTeamDescription(userTeam.description);
      setCoverImagePreview(userTeam.coverImage);
      setJoinType(userTeam.joinType);
      setMemberLimit(userTeam.maxMembers);
      // Reset save states
      setIsSaving(false);
      setSaveSuccess(false);
    }
  }, [showCreateModal, userTeam]);

  // Load default images when Unsplash picker opens
  React.useEffect(() => {
    if (showUnsplashPicker && unsplashImages.length === 0) {
      setUnsplashQuery("teamwork");
      searchUnsplashImages("teamwork");
    }
  }, [showUnsplashPicker]);

  const handleInviteFriend = async () => {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inviteEmail.trim()) {
      setInviteError("Please enter an email address");
      return;
    }
    if (!emailRegex.test(inviteEmail)) {
      setInviteError("Please enter a valid email address");
      return;
    }

    setIsInviting(true);
    setInviteError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In real app, this would make an API call:
      // const response = await fetch('/api/teams/invite', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     teamId: userTeam.id,
      //     email: inviteEmail,
      //     inviterName: user?.firstName
      //   })
      // });

      // Show success feedback
      setInviteSuccess(true);
      setInviteEmail("");
      setTimeout(() => setInviteSuccess(false), 3000);

      console.log(`Invitation sent to ${inviteEmail} for team: ${userTeam.name}`);
    } catch (error) {
      console.error("Error sending invite:", error);
      setInviteError("Failed to send invitation. Please try again.");
    } finally {
      setIsInviting(false);
    }
  };

  const handleCopyTeamLink = async () => {
    const teamLink = `${window.location.origin}/teams/${userTeam.name.toLowerCase().replace(/\s+/g, '-')}`;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(teamLink);
        setShowCopySuccess(true);
        setTimeout(() => setShowCopySuccess(false), 2000);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = teamLink;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setShowCopySuccess(true);
        setTimeout(() => setShowCopySuccess(false), 2000);
      }
      console.log("Team link copied:", teamLink);
    } catch (error) {
      console.error("Failed to copy link:", error);
      setInviteError("Failed to copy link. Please try again.");
    }
  };

  const handleSMSShare = () => {
    const teamLink = `${window.location.origin}/teams/${userTeam.name.toLowerCase().replace(/\s+/g, '-')}`;
    const message = `Hey! Join our team "${userTeam.name}" on Spotlight News! ${teamLink}`;
    const smsUrl = `sms:?body=${encodeURIComponent(message)}`;

    try {
      window.open(smsUrl, '_self');
      console.log("SMS share opened for team:", userTeam.name);
    } catch (error) {
      console.error("Failed to open SMS:", error);
      setInviteError("Unable to open SMS app. Please try copying the link instead.");
    }
  };

  const handleApproveRequest = async (requestId: string) => {
    const request = joinRequests.find(r => r.id === requestId);
    if (!request) return;

    setProcessingRequest(requestId);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In real app, this would make an API call:
      // const response = await fetch(`/api/teams/${userTeam.id}/requests/${requestId}/approve`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' }
      // });

      // Remove from join requests and add to team members
      setJoinRequests(prev => prev.filter(r => r.id !== requestId));

      // Add new member to team
      const newMember: TeamMember = {
        id: `member-${Date.now()}`,
        name: request.userName,
        avatar: request.userAvatar,
        articlesRead: request.articlesRead,
        points: request.points,
        currentStreak: 1,
        joinDate: new Date().toISOString().split('T')[0],
        role: 'member',
        isOnline: true
      };

      setTeamMembers(prev => [...prev, newMember]);

      // Update team member count
      setUserTeam(prev => ({
        ...prev,
        memberCount: prev.memberCount + 1
      }));

      setRequestSuccess(`${request.userName} has been approved and added to the team!`);
      setTimeout(() => setRequestSuccess(null), 4000);

      console.log(`Approved request from ${request.userName}`);
    } catch (error) {
      console.error("Error approving request:", error);
      setInviteError("Failed to approve request. Please try again.");
    } finally {
      setProcessingRequest(null);
    }
  };

  const handleRejectRequest = async (requestId: string) => {
    const request = joinRequests.find(r => r.id === requestId);
    if (!request) return;

    setProcessingRequest(requestId);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // In real app, this would make an API call:
      // const response = await fetch(`/api/teams/${userTeam.id}/requests/${requestId}/reject`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' }
      // });

      // Remove from join requests
      setJoinRequests(prev => prev.filter(r => r.id !== requestId));

      setRequestSuccess(`${request.userName}'s request has been declined.`);
      setTimeout(() => setRequestSuccess(null), 3000);

      console.log(`Rejected request from ${request.userName}`);
    } catch (error) {
      console.error("Error rejecting request:", error);
      setInviteError("Failed to reject request. Please try again.");
    } finally {
      setProcessingRequest(null);
    }
  };

  const handleJoinCompetition = (competitionId: string) => {
    console.log("Joining competition:", competitionId);
  };

  // Get current user's role in the team
  const getCurrentUserRole = (): 'owner' | 'admin' | 'member' | null => {
    // In this demo, the current user is represented by the first team member (id: "1")
    // In a real app, you'd match against the authenticated user's ID
    const currentUser = teamMembers.find(member => member.id === "1");
    return currentUser?.role || null;
  };

  // Check if current user can edit the team (owner or admin)
  const canEditTeam = (): boolean => {
    const role = getCurrentUserRole();
    return role === 'owner' || role === 'admin';
  };

  const handleLeaveTeam = async () => {
    const currentRole = getCurrentUserRole();

    // Safety check: Team owner cannot leave if they're the only owner
    if (currentRole === 'owner') {
      const otherOwners = teamMembers.filter(member => member.role === 'owner' && member.id !== "1");
      if (otherOwners.length === 0) {
        setInviteError("As the team owner, you cannot leave the team. Please transfer ownership to another member first or delete the team.");
        setShowLeaveConfirm(false);
        return;
      }
    }

    setIsLeavingTeam(true);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In real app, this would make an API call:
      // const response = await fetch(`/api/teams/${userTeam.id}/leave`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' }
      // });

      // Remove current user from team members
      setTeamMembers(prev => prev.filter(member => member.id !== "1"));

      // Update team member count
      setUserTeam(prev => ({
        ...prev,
        memberCount: prev.memberCount - 1
      }));

      console.log(`Left team: ${userTeam.name}`);

      // In a real app, you might redirect to teams page or show a success message
      // For demo purposes, we'll just show an alert
      alert(`You have successfully left ${userTeam.name}. You would normally be redirected to the teams page.`);

    } catch (error) {
      console.error("Error leaving team:", error);
      setInviteError("Failed to leave team. Please try again.");
    } finally {
      setIsLeavingTeam(false);
      setShowLeaveConfirm(false);
    }
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
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Team Hero Section */}
      <section className="relative">
        {/* Team Updated Notification */}
        {teamUpdated && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 bg-neon-green/90 text-midnight-black px-6 py-3 rounded-full shadow-lg shadow-neon-green/30 animate-pulse">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5" />
              <span className="font-semibold">Team updated successfully!</span>
            </div>
          </div>
        )}

        {/* Full-width immersive hero */}
        <div className="relative h-80 sm:h-96 lg:h-[28rem] xl:h-[32rem] bg-gradient-to-r from-electric-blue/20 to-electric-blue/10 overflow-hidden">
          <img
            src={userTeam.coverImage}
            alt="Team cover"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-gray-900/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <div className="flex items-end justify-between">
                <div className="flex-1">
                  <div className="mb-4">
                    <Badge className="bg-neon-green/30 text-neon-green border-neon-green/50 font-semibold px-4 py-2 backdrop-blur-sm">
                      {userTeam.joinType === 'open' ? 'Open Team' : 'Restricted'}
                    </Badge>
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 text-glow-blue">
                    {userTeam.name}
                  </h1>
                  <p className="text-lg text-soft-gray/90 mb-6 max-w-3xl leading-relaxed">
                    {userTeam.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-soft-gray/90">
                    <div className="flex items-center bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-electric-blue/30">
                      <Users className="w-5 h-5 mr-2 text-electric-blue" />
                      <span className="font-semibold">{userTeam.memberCount}/{userTeam.maxMembers}</span>
                      <span className="ml-1 text-sm">members</span>
                    </div>
                    <div className="flex items-center bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-500/30">
                      <Trophy className="w-5 h-5 mr-2 text-yellow-500" />
                      <span className="font-semibold">Rank #{userTeam.rank}</span>
                    </div>
                    <div className="flex items-center bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-vibrant-pink/30">
                      <Star className="w-5 h-5 mr-2 text-vibrant-pink" />
                      <span className="font-semibold">{userTeam.totalPoints.toLocaleString()}</span>
                      <span className="ml-1 text-sm">total points</span>
                    </div>
                    <div className="flex items-center bg-gray-900/50 backdrop-blur-sm rounded-full px-4 py-2 border border-neon-green/30">
                      <BookOpen className="w-5 h-5 mr-2 text-neon-green" />
                      <span className="font-semibold">{userTeam.totalArticlesRead}</span>
                      <span className="ml-1 text-sm">articles read</span>
                    </div>
                  </div>
                </div>
                <div className="ml-8 flex-shrink-0">
                  {canEditTeam() ? (
                    <Button
                      onClick={() => setShowCreateModal(true)}
                      className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-electric-blue/30 hover:shadow-electric-blue/50 transition-all duration-300 neon-glow-blue"
                    >
                      <Settings className="w-5 h-5 mr-2" />
                      Edit
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setShowLeaveConfirm(true)}
                      className="bg-red-500 text-white hover:bg-red-600 font-semibold px-8 py-4 rounded-full text-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
                    >
                      <LogOut className="w-5 h-5 mr-2" />
                      Leave Team
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-8 bg-gray-900/40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 rounded-full p-1 flex">
              <Button
                variant={activeTab === 'leaderboard' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('leaderboard')}
                className={`rounded-full px-6 py-3 transition-all ${
                  activeTab === 'leaderboard'
                    ? 'bg-electric-blue text-midnight-black'
                    : 'text-soft-gray hover:text-electric-blue'
                }`}
              >
                <Trophy className="w-5 h-5 mr-2" />
                Leaderboard
              </Button>
              <Button
                variant={activeTab === 'ranking' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('ranking')}
                className={`rounded-full px-6 py-3 transition-all ${
                  activeTab === 'ranking'
                    ? 'bg-electric-blue text-midnight-black'
                    : 'text-soft-gray hover:text-electric-blue'
                }`}
              >
                <Flag className="w-5 h-5 mr-2" />
                Ranking
              </Button>
              <Button
                variant={activeTab === 'members' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('members')}
                className={`rounded-full px-6 py-3 transition-all ${
                  activeTab === 'members'
                    ? 'bg-electric-blue text-midnight-black'
                    : 'text-soft-gray hover:text-electric-blue'
                }`}
              >
                <Users className="w-5 h-5 mr-2" />
                Members
              </Button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'leaderboard' && (
            <div>
              {/* Team Leaderboard */}
              <Card className="bg-gray-800/30 border-electric-blue/30 shadow-lg mb-8">
                {/* Filters */}
                <div className="p-6 border-b border-electric-blue/10">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Filter className="w-4 h-4 text-electric-blue" />
                        <select
                          value={timeFilter}
                          onChange={(e) => setTimeFilter(e.target.value as 'all-time' | 'this-week')}
                          className="px-3 py-1 bg-gray-800/50 border border-electric-blue/30 rounded text-soft-gray focus:border-electric-blue"
                        >
                          <option value="all-time">All Time</option>
                          <option value="this-week">This Week</option>
                        </select>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-soft-gray/70">Sort by:</span>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value as 'articles' | 'points' | 'streak')}
                          className="px-3 py-1 bg-gray-800/50 border border-electric-blue/30 rounded text-soft-gray focus:border-electric-blue"
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
                      className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
                    >
                      <ArrowUpDown className="w-4 h-4 mr-1" />
                      {sortOrder === 'desc' ? 'High to Low' : 'Low to High'}
                    </Button>
                  </div>
                </div>

                {/* Leaderboard Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Rank
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Member
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Articles Read
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Points
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Streak
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Progress
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedMembers.slice(0, 8).map((member, index) => (
                        <tr
                          key={member.id}
                          className={`border-t border-gray-700/50 hover:bg-gray-800/30 transition-colors ${
                            member.id === "1" ? "bg-electric-blue/10 border-electric-blue/30" : ""
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <span className={`font-bold text-lg ${
                                index === 0 ? 'text-yellow-500' :
                                index === 1 ? 'text-gray-400' :
                                index === 2 ? 'text-orange-600' :
                                member.id === "1" ? 'text-electric-blue' : 'text-soft-gray'
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
                                    ? 'bg-electric-blue text-midnight-black' 
                                    : 'bg-gray-700 text-soft-gray'
                                }`}>
                                  {member.avatar}
                                </div>
                                {member.isOnline && (
                                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-neon-green rounded-full border border-gray-800" />
                                )}
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className={`font-medium ${
                                    member.id === "1" ? 'text-electric-blue' : 'text-soft-gray'
                                  }`}>
                                    {member.name}
                                  </span>
                                  {member.id === "1" && (
                                    <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30 text-xs">
                                      You
                                    </Badge>
                                  )}
                                  {member.role === 'owner' && (
                                    <Crown className="w-4 h-4 text-yellow-500" />
                                  )}
                                </div>
                                <p className="text-xs text-soft-gray/60">
                                  Joined {new Date(member.joinDate).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <span className="font-medium text-soft-gray">
                                {member.articlesRead}
                              </span>
                              <div className="flex-1 bg-gray-700 rounded-full h-2 w-20">
                                <div
                                  className="bg-neon-green rounded-full h-2 transition-all duration-300"
                                  style={{ width: `${(member.articlesRead / Math.max(...teamMembers.map(m => m.articlesRead))) * 100}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <span className="font-bold text-electric-blue">
                                {member.points}
                              </span>
                              <div className="flex-1 bg-gray-700 rounded-full h-2 w-20">
                                <div
                                  className="bg-electric-blue rounded-full h-2 transition-all duration-300"
                                  style={{ width: `${(member.points / Math.max(...teamMembers.map(m => m.points))) * 100}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span className="font-medium text-soft-gray">
                                {member.currentStreak}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="w-4 h-4 text-electric-blue" />
                              <span className="text-sm text-soft-gray/70">
                                {index <= 2 ? 'Rising' : 'Steady'}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-6 border-t border-electric-blue/10 text-center">
                  <Button className="bg-vibrant-pink text-midnight-black hover:bg-pink-400 font-semibold px-8 py-3 rounded-full transition-all duration-300">
                    <Target className="w-5 h-5 mr-2" />
                    Compete Now – Join a Challenge
                  </Button>
                </div>
              </Card>

              {/* Inter-Team Competitions */}
              <Card className="bg-gray-800/30 border-electric-blue/30 shadow-lg">
                <div className="p-6 border-b border-electric-blue/10">
                  <h3 className="text-xl font-semibold text-electric-blue mb-2">
                    Team Competitions
                  </h3>
                  <p className="text-soft-gray/70">
                    Battle other teams for top spots
                  </p>
                </div>

                <div className="p-6">
                  {/* Competition Filters */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gray-700/50 rounded-full p-1 flex">
                      <Button
                        variant={competitionFilter === 'active' ? 'default' : 'ghost'}
                        onClick={() => setCompetitionFilter('active')}
                        className={`rounded-full px-4 py-2 transition-all text-sm ${
                          competitionFilter === 'active'
                            ? 'bg-electric-blue text-midnight-black'
                            : 'text-soft-gray hover:text-electric-blue'
                        }`}
                      >
                        Active ({competitions.filter(c => c.status === 'active').length})
                      </Button>
                      <Button
                        variant={competitionFilter === 'upcoming' ? 'default' : 'ghost'}
                        onClick={() => setCompetitionFilter('upcoming')}
                        className={`rounded-full px-4 py-2 transition-all text-sm ${
                          competitionFilter === 'upcoming'
                            ? 'bg-electric-blue text-midnight-black'
                            : 'text-soft-gray hover:text-electric-blue'
                        }`}
                      >
                        Upcoming ({competitions.filter(c => c.status === 'upcoming').length})
                      </Button>
                    </div>
                  </div>

                  {/* Competitions Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCompetitions.slice(0, 3).map((competition) => (
                      <Card
                        key={competition.id}
                        className="bg-gray-700/30 border-electric-blue/20 p-4 hover:border-electric-blue/50 hover:shadow-lg hover:shadow-electric-blue/10 transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="text-md font-bold text-vibrant-pink mb-1 group-hover:text-electric-blue transition-colors">
                              {competition.name}
                            </h4>
                            <p className="text-sm text-soft-gray/80 mb-2">
                              {competition.description}
                            </p>
                            <div className="flex items-center space-x-3 text-xs text-soft-gray/60">
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
                          <div className="text-xl">{competition.prizeIcon}</div>
                        </div>

                        <Badge className={`mb-3 ${
                          competition.status === 'active' ? 'bg-neon-green/20 text-neon-green border-neon-green/40' :
                          'bg-blue-500/20 text-blue-400 border-blue-500/40'
                        } font-medium`}>
                          {competition.status.charAt(0).toUpperCase() + competition.status.slice(1)}
                        </Badge>

                        <div className="bg-gray-800/50 rounded-lg p-3 mb-3 text-center">
                          <span className="text-lg mb-1 block">{competition.prizeIcon}</span>
                          <p className="text-xs font-semibold text-electric-blue">
                            Prize: {competition.prize}
                          </p>
                        </div>

                        <Button
                          onClick={() => handleJoinCompetition(competition.id)}
                          className={`w-full transition-all duration-300 text-sm ${
                            competition.status === 'upcoming'
                              ? 'bg-neon-green text-midnight-black hover:bg-lime-400'
                              : 'bg-vibrant-pink text-midnight-black hover:bg-pink-400'
                          }`}
                        >
                          {competition.status === 'upcoming' ? (
                            <>
                              <Calendar className="w-4 h-4 mr-1" />
                              Register
                            </>
                          ) : (
                            <>
                              <Zap className="w-4 h-4 mr-1" />
                              Join
                            </>
                          )}
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Ranking Tab Content - Team Leaderboard */}
          {activeTab === 'ranking' && (
            <div>
              <Card className="bg-gray-800/30 border-electric-blue/30 shadow-lg">
                <div className="p-6 border-b border-electric-blue/10">
                  <h3 className="text-2xl font-semibold text-electric-blue mb-2">
                    Team Rankings
                  </h3>
                  <p className="text-soft-gray/70">
                    See how teams rank by combined points and performance
                  </p>
                </div>

                {/* Team Rankings Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Rank
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Team
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Members
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Total Points
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Articles Read
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Category
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-electric-blue">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamRankings.map((team, index) => (
                        <tr
                          key={team.id}
                          className={`border-t border-gray-700/50 hover:bg-gray-800/30 transition-colors ${
                            team.isCurrentTeam ? "bg-electric-blue/10 border-electric-blue/30" : ""
                          }`}
                        >
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <span className={`font-bold text-lg ${
                                index === 0 ? 'text-yellow-500' :
                                index === 1 ? 'text-gray-400' :
                                index === 2 ? 'text-orange-600' :
                                team.isCurrentTeam ? 'text-electric-blue' : 'text-soft-gray'
                              }`}>
                                #{team.rank}
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
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                                team.isCurrentTeam
                                  ? 'bg-electric-blue text-midnight-black'
                                  : team.category === 'campus' ? 'bg-neon-green/20 text-neon-green border border-neon-green/40' :
                                    team.category === 'tech' ? 'bg-electric-blue/20 text-electric-blue border border-electric-blue/40' :
                                    team.category === 'sports' ? 'bg-orange-500/20 text-orange-500 border border-orange-500/40' :
                                    'bg-vibrant-pink/20 text-vibrant-pink border border-vibrant-pink/40'
                              }`}>
                                {team.avatar}
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className={`font-semibold ${
                                    team.isCurrentTeam ? 'text-electric-blue' : 'text-soft-gray'
                                  }`}>
                                    {team.name}
                                  </span>
                                  {team.isCurrentTeam && (
                                    <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30 text-xs">
                                      Your Team
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-xs text-soft-gray/60 capitalize">
                                  {team.category} focused
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4 text-electric-blue" />
                              <span className="font-medium text-soft-gray">
                                {team.memberCount}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-3">
                              <span className="font-bold text-electric-blue text-lg">
                                {team.totalPoints.toLocaleString()}
                              </span>
                              <div className="flex-1 bg-gray-700 rounded-full h-3 w-24">
                                <div
                                  className="bg-gradient-to-r from-electric-blue to-vibrant-pink rounded-full h-3 transition-all duration-300"
                                  style={{ width: `${(team.totalPoints / Math.max(...teamRankings.map(t => t.totalPoints))) * 100}%` }}
                                />
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center space-x-2">
                              <BookOpen className="w-4 h-4 text-neon-green" />
                              <span className="font-medium text-soft-gray">
                                {team.totalArticlesRead}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge className={`${
                              team.category === 'campus' ? 'bg-neon-green/20 text-neon-green border-neon-green/40' :
                              team.category === 'tech' ? 'bg-electric-blue/20 text-electric-blue border-electric-blue/40' :
                              team.category === 'sports' ? 'bg-orange-500/20 text-orange-500 border-orange-500/40' :
                              'bg-vibrant-pink/20 text-vibrant-pink border-vibrant-pink/40'
                            } font-medium capitalize`}>
                              {team.category}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setSelectedTeam(team);
                                setShowTeamModal(true);
                              }}
                              className="text-electric-blue hover:bg-electric-blue/10 hover:text-cyan-400"
                              aria-label={`View ${team.name} details`}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="p-6 border-t border-electric-blue/10 text-center">
                  <div className="flex items-center justify-center space-x-8 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-electric-blue mb-1">
                        #{userTeam.rank}
                      </div>
                      <div className="text-sm text-soft-gray/70">Your Team Rank</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-vibrant-pink mb-1">
                        {userTeam.totalPoints.toLocaleString()}
                      </div>
                      <div className="text-sm text-soft-gray/70">Total Points</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-green mb-1">
                        {userTeam.totalArticlesRead}
                      </div>
                      <div className="text-sm text-soft-gray/70">Articles Read</div>
                    </div>
                  </div>
                  <Button className="bg-neon-green text-midnight-black hover:bg-lime-400 font-semibold px-8 py-3 rounded-full transition-all duration-300">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Improve Team Ranking
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Members Tab Content */}
          {activeTab === 'members' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Member List */}
              <div className="lg:col-span-2">
                <Card className="bg-gray-800/30 border-electric-blue/30 p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-4">
                      <Button
                        variant={membersSubTab === 'members' ? 'default' : 'ghost'}
                        onClick={() => setMembersSubTab('members')}
                        className={membersSubTab === 'members' 
                          ? 'bg-electric-blue text-midnight-black' 
                          : 'text-soft-gray hover:text-electric-blue hover:bg-electric-blue/10'
                        }
                      >
                        Members ({teamMembers.length})
                      </Button>
                      <Button
                        variant={membersSubTab === 'requests' ? 'default' : 'ghost'}
                        onClick={() => setMembersSubTab('requests')}
                        className={membersSubTab === 'requests' 
                          ? 'bg-vibrant-pink text-midnight-black' 
                          : 'text-vibrant-pink hover:bg-vibrant-pink/10'
                        }
                      >
                        Join Requests ({joinRequests.length})
                      </Button>
                    </div>
                  </div>

                  {/* Request Success Message */}
                  {requestSuccess && (
                    <div className="p-3 bg-neon-green/20 border border-neon-green/40 rounded-lg mb-6">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-neon-green mr-2" />
                        <p className="text-neon-green text-sm font-semibold">{requestSuccess}</p>
                      </div>
                    </div>
                  )}

                  {membersSubTab === 'members' && (
                    <div className="max-h-96 overflow-y-auto space-y-3">
                      {teamMembers.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg border border-electric-blue/10 hover:border-electric-blue/30 transition-colors"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <div className="w-12 h-12 bg-electric-blue text-midnight-black rounded-full flex items-center justify-center font-semibold">
                                {member.avatar}
                              </div>
                              {member.isOnline && (
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-neon-green rounded-full border-2 border-gray-800" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center space-x-2">
                                <h4 className="font-semibold text-soft-gray">
                                  {member.name}
                                </h4>
                                {member.role === 'owner' && (
                                  <Crown className="w-4 h-4 text-yellow-500" />
                                )}
                                {member.role === 'admin' && (
                                  <Shield className="w-4 h-4 text-electric-blue" />
                                )}
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-soft-gray/70">
                                <span>{member.articlesRead} articles</span>
                                <span>{member.points} points</span>
                                <span className="flex items-center">
                                  <Flame className="w-3 h-3 mr-1 text-orange-500" />
                                  {member.currentStreak}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-electric-blue/10 text-electric-blue border-electric-blue/20">
                            {member.role}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}

                  {membersSubTab === 'requests' && (
                    <div className="max-h-96 overflow-y-auto space-y-4">
                      {joinRequests.map((request) => (
                        <div
                          key={request.id}
                          className="p-4 bg-gray-700/30 rounded-lg border border-vibrant-pink/20"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-electric-blue text-midnight-black rounded-full flex items-center justify-center font-semibold text-sm">
                                {request.userAvatar}
                              </div>
                              <div>
                                <h4 className="font-semibold text-soft-gray">
                                  {request.userName}
                                </h4>
                                <div className="flex items-center space-x-4 text-sm text-soft-gray/70">
                                  <span>{request.articlesRead} articles</span>
                                  <span>{request.points} points</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button
                                size="sm"
                                onClick={() => handleApproveRequest(request.id)}
                                disabled={processingRequest === request.id}
                                className="bg-neon-green text-midnight-black hover:bg-neon-green/80 disabled:opacity-50"
                              >
                                {processingRequest === request.id ? (
                                  <div className="w-4 h-4 border-2 border-midnight-black border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <Check className="w-4 h-4" />
                                )}
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRejectRequest(request.id)}
                                disabled={processingRequest === request.id}
                                className="border-red-500/30 text-red-400 hover:bg-red-500/10 disabled:opacity-50"
                              >
                                {processingRequest === request.id ? (
                                  <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
                                ) : (
                                  <X className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                          <p className="text-sm text-soft-gray/80 bg-gray-800/50 p-3 rounded">
                            "{request.message}"
                          </p>
                          <p className="text-xs text-soft-gray/60 mt-2">
                            Requested {new Date(request.requestDate).toLocaleDateString()}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </div>

              {/* Invite Friends & Team Stats */}
              <div>
                <Card className="bg-gray-800/30 border-electric-blue/30 p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-electric-blue mb-4">
                    Invite Friends
                  </h3>
                  <div className="space-y-4">
                    {/* Success Message */}
                    {inviteSuccess && (
                      <div className="p-3 bg-neon-green/20 border border-neon-green/40 rounded-lg">
                        <div className="flex items-center">
                          <Check className="w-4 h-4 text-neon-green mr-2" />
                          <p className="text-neon-green text-sm font-semibold">Invitation sent successfully!</p>
                        </div>
                      </div>
                    )}

                    {/* Error Message */}
                    {inviteError && (
                      <div className="p-3 bg-red-900/30 border border-red-500/40 rounded-lg">
                        <div className="flex items-center">
                          <X className="w-4 h-4 text-red-400 mr-2" />
                          <p className="text-red-400 text-sm">{inviteError}</p>
                        </div>
                      </div>
                    )}

                    {/* Copy Success */}
                    {showCopySuccess && (
                      <div className="p-3 bg-electric-blue/20 border border-electric-blue/40 rounded-lg">
                        <div className="flex items-center">
                          <Check className="w-4 h-4 text-electric-blue mr-2" />
                          <p className="text-electric-blue text-sm font-semibold">Team link copied to clipboard!</p>
                        </div>
                      </div>
                    )}

                    <Input
                      type="email"
                      placeholder="Enter friend's email"
                      value={inviteEmail}
                      onChange={(e) => {
                        setInviteEmail(e.target.value);
                        if (inviteError) setInviteError(null);
                      }}
                      className={`bg-gray-800/50 text-soft-gray focus:border-electric-blue ${
                        inviteError ? 'border-red-500/50' : 'border-electric-blue/30'
                      }`}
                      disabled={isInviting}
                    />
                    <Button
                      onClick={handleInviteFriend}
                      disabled={isInviting || !inviteEmail.trim()}
                      className="w-full bg-neon-green text-midnight-black hover:bg-lime-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isInviting ? (
                        <>
                          <div className="w-4 h-4 mr-2 border-2 border-midnight-black border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-4 h-4 mr-2" />
                          Send Invite
                        </>
                      )}
                    </Button>
                    <div className="pt-4 border-t border-electric-blue/10">
                      <p className="text-sm text-soft-gray/70 mb-3">Quick share:</p>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleCopyTeamLink}
                          className="flex-1 border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
                        >
                          <Share2 className="w-4 h-4 mr-1" />
                          {showCopySuccess ? 'Copied!' : 'Link'}
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleSMSShare}
                          className="flex-1 border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          SMS
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Team Stats */}
                <Card className="bg-gray-800/30 border-electric-blue/30 p-6 shadow-lg mt-6">
                  <h3 className="text-lg font-semibold text-electric-blue mb-4">
                    Team Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-soft-gray/70">Total Articles</span>
                      <span className="font-semibold text-electric-blue">{userTeam.totalArticlesRead}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-soft-gray/70">Total Points</span>
                      <span className="font-semibold text-electric-blue">{userTeam.totalPoints}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-soft-gray/70">Global Rank</span>
                      <span className="font-semibold text-vibrant-pink">#{userTeam.rank}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-soft-gray/70">Active Members</span>
                      <span className="font-semibold text-neon-green">
                        {teamMembers.filter(m => m.isOnline).length}/{teamMembers.length}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Create Team Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="bg-gray-800/95 border-electric-blue/30 p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-electric-blue">Edit Team</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCreateModal(false)}
                className="text-soft-gray hover:text-electric-blue"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Success Message */}
            {saveSuccess && (
              <div className="mb-6 p-4 bg-neon-green/20 border border-neon-green/40 rounded-lg">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-neon-green mr-2" />
                  <p className="text-neon-green font-semibold">Team updated successfully! Changes will appear shortly.</p>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {/* Form Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-electric-blue mb-2">
                    Team Name *
                  </label>
                  <Input
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="Enter team name"
                    className={`bg-gray-800/50 text-soft-gray focus:border-electric-blue ${
                      teamName.trim() === '' ? 'border-red-500/50' : 'border-electric-blue/30'
                    }`}
                  />
                  {teamName.trim() === '' && (
                    <p className="text-red-400 text-xs mt-1">Team name is required</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-electric-blue mb-2">
                    Description
                  </label>
                  <Textarea
                    value={teamDescription}
                    onChange={(e) => setTeamDescription(e.target.value)}
                    placeholder="Describe your team's purpose (max 150 characters)"
                    maxLength={150}
                    rows={3}
                    className={`bg-gray-800/50 text-soft-gray focus:border-electric-blue ${
                      teamDescription.length > 150 ? 'border-red-500/50' : 'border-electric-blue/30'
                    }`}
                  />
                  <p className={`text-xs mt-1 ${
                    teamDescription.length > 150 ? 'text-red-400' :
                    teamDescription.length > 120 ? 'text-yellow-400' : 'text-soft-gray/60'
                  }`}>
                    {teamDescription.length}/150 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-electric-blue mb-2">
                    Join Type
                  </label>
                  <select
                    value={joinType}
                    onChange={(e) => setJoinType(e.target.value as 'open' | 'restricted')}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-electric-blue/30 rounded-md text-soft-gray focus:border-electric-blue"
                  >
                    <option value="open">Open - Anyone can join</option>
                    <option value="restricted">Restricted - Approval required</option>
                  </select>
                </div>

                {joinType === 'restricted' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-electric-blue mb-2">
                        Min Articles
                      </label>
                      <Input
                        type="number"
                        value={minArticles}
                        onChange={(e) => setMinArticles(Number(e.target.value))}
                        className="bg-gray-800/50 border-electric-blue/30 text-soft-gray focus:border-electric-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-electric-blue mb-2">
                        Min Points
                      </label>
                      <Input
                        type="number"
                        value={minPoints}
                        onChange={(e) => setMinPoints(Number(e.target.value))}
                        className="bg-gray-800/50 border-electric-blue/30 text-soft-gray focus:border-electric-blue"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-electric-blue mb-2">
                    Member Limit
                  </label>
                  <Input
                    type="number"
                    value={memberLimit}
                    onChange={(e) => setMemberLimit(Number(e.target.value))}
                    min={10}
                    max={50}
                    className={`bg-gray-800/50 text-soft-gray focus:border-electric-blue ${
                      memberLimit < 10 || memberLimit > 50 ? 'border-red-500/50' : 'border-electric-blue/30'
                    }`}
                  />
                  <p className={`text-xs mt-1 ${
                    memberLimit < 10 || memberLimit > 50 ? 'text-red-400' : 'text-soft-gray/60'
                  }`}>
                    Range: 10-50 members {memberLimit < 10 || memberLimit > 50 ? '(Invalid)' : ''}
                  </p>
                </div>
              </div>

              {/* Cover Image Upload */}
              <div>
                <label className="block text-sm font-medium text-electric-blue mb-2">
                  Cover Image
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300 ${
                    isDragOver
                      ? 'border-electric-blue bg-electric-blue/10 scale-105'
                      : 'border-electric-blue/30 hover:border-electric-blue/50'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {coverImagePreview ? (
                    <div className="relative">
                      <img
                        src={coverImagePreview}
                        alt="Cover preview"
                        className="w-full h-40 object-cover rounded-lg ring-2 ring-electric-blue/50"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCoverImagePreview("")}
                        className="absolute top-2 right-2 bg-red-500 text-white hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <Upload className={`w-12 h-12 mx-auto mb-4 transition-colors ${
                        isDragOver ? 'text-electric-blue' : 'text-electric-blue/50'
                      }`} />
                      <p className={`mb-2 transition-colors ${
                        isDragOver ? 'text-electric-blue font-semibold' : 'text-electric-blue/70'
                      }`}>
                        {isDragOver ? 'Drop your image here' : 'Drag and drop your image here'}
                      </p>
                      <p className="text-xs text-soft-gray/60 mb-4">
                        Recommended: 1920x1080px, max 5MB. Supports JPG, PNG, WebP
                      </p>
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                          id="file-upload"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="border-electric-blue text-electric-blue hover:bg-electric-blue/10"
                          onClick={() => document.getElementById('file-upload')?.click()}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Choose File
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Unsplash CTA - Always visible outside drop zone */}
                <div className="mt-4 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="bg-gray-800 px-2 text-soft-gray/60">or</span>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-neon-green text-neon-green hover:bg-neon-green/10 mt-3"
                    onClick={() => setShowUnsplashPicker(true)}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Choose from Unsplash
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-8">
              <Button
                variant="outline"
                onClick={() => setShowCreateModal(false)}
                disabled={isSaving}
                className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
              >
                Cancel
              </Button>
              <Button
                onClick={handleCreateTeam}
                disabled={isSaving}
                className={`font-semibold px-8 py-3 transition-all duration-300 ${
                  saveSuccess
                    ? 'bg-neon-green text-midnight-black hover:bg-lime-400'
                    : 'bg-electric-blue text-midnight-black hover:bg-cyan-400'
                }`}
              >
                {isSaving ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-midnight-black border-t-transparent rounded-full animate-spin" />
                    Saving...
                  </>
                ) : saveSuccess ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Saved!
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Team View Modal */}
      {showTeamModal && selectedTeam && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="bg-gray-800/95 border-electric-blue/30 p-0 max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Team Cover Header */}
            <div className="relative h-48 bg-gradient-to-r from-electric-blue/20 to-electric-blue/10 overflow-hidden">
              <img
                src={selectedTeam.coverImage}
                alt={`${selectedTeam.name} cover`}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowTeamModal(false)}
                  className="bg-gray-900/80 text-soft-gray hover:text-electric-blue backdrop-blur-sm"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {selectedTeam.name}
                    </h2>
                    <p className="text-soft-gray/90 mb-3 max-w-2xl">
                      {selectedTeam.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-soft-gray/80">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {selectedTeam.memberCount} members
                      </span>
                      <span className="flex items-center">
                        <Trophy className="w-4 h-4 mr-1" />
                        Rank #{selectedTeam.rank}
                      </span>
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {selectedTeam.totalPoints.toLocaleString()} points
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge className={`${
                      selectedTeam.joinType === 'open'
                        ? 'bg-neon-green/20 text-neon-green border-neon-green/40'
                        : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40'
                    } font-semibold px-3 py-1`}>
                      {selectedTeam.joinType === 'open' ? 'Open Team' : 'Restricted'}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-96">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Team Info & Join Section */}
                <div className="lg:col-span-1">
                  <div className="space-y-6">
                    {/* Join Requirements */}
                    {selectedTeam.joinType === 'restricted' && (
                      <Card className="bg-gray-700/30 border-yellow-500/30 p-4">
                        <h3 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center">
                          <Shield className="w-5 h-5 mr-2" />
                          Join Requirements
                        </h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-soft-gray/70">Minimum Articles:</span>
                            <span className="font-semibold text-yellow-400">{selectedTeam.minArticles}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-soft-gray/70">Minimum Points:</span>
                            <span className="font-semibold text-yellow-400">{selectedTeam.minPoints}</span>
                          </div>
                        </div>
                      </Card>
                    )}

                    {/* Join CTA */}
                    {!selectedTeam.isCurrentTeam && (
                      <Card className="bg-gray-700/30 border-electric-blue/30 p-4">
                        <h3 className="text-lg font-semibold text-electric-blue mb-3">
                          Join This Team
                        </h3>
                        {selectedTeam.joinType === 'open' ? (
                          <Button
                            onClick={() => handleJoinTeam(selectedTeam)}
                            className="w-full bg-neon-green text-midnight-black hover:bg-lime-400 font-semibold py-3"
                          >
                            <UserPlus className="w-5 h-5 mr-2" />
                            Join Team
                          </Button>
                        ) : (
                          // Check if user meets requirements (mock logic)
                          stats.articlesRead.total >= (selectedTeam.minArticles || 0) &&
                          (stats.articlesRead.total * 6) >= (selectedTeam.minPoints || 0) ? (
                            <Button
                              onClick={() => handleJoinTeam(selectedTeam)}
                              className="w-full bg-neon-green text-midnight-black hover:bg-lime-400 font-semibold py-3"
                            >
                              <UserPlus className="w-5 h-5 mr-2" />
                              Request to Join
                            </Button>
                          ) : (
                            <div>
                              <Button
                                disabled
                                className="w-full bg-gray-600 text-gray-400 cursor-not-allowed py-3 mb-3"
                              >
                                <X className="w-5 h-5 mr-2" />
                                Requirements Not Met
                              </Button>
                              <p className="text-xs text-red-400">
                                You need {selectedTeam.minArticles} articles and {selectedTeam.minPoints} points to join.
                              </p>
                            </div>
                          )
                        )}
                      </Card>
                    )}

                    {selectedTeam.isCurrentTeam && (
                      <Card className="bg-electric-blue/10 border-electric-blue/30 p-4">
                        <div className="flex items-center text-electric-blue">
                          <Check className="w-5 h-5 mr-2" />
                          <span className="font-semibold">Your Current Team</span>
                        </div>
                      </Card>
                    )}

                    {/* Team Stats */}
                    <Card className="bg-gray-700/30 border-electric-blue/30 p-4">
                      <h3 className="text-lg font-semibold text-electric-blue mb-3">Team Stats</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-soft-gray/70">Total Points</span>
                          <span className="font-semibold text-electric-blue">{selectedTeam.totalPoints.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-soft-gray/70">Articles Read</span>
                          <span className="font-semibold text-neon-green">{selectedTeam.totalArticlesRead}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-soft-gray/70">Global Rank</span>
                          <span className="font-semibold text-yellow-500">#{selectedTeam.rank}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-soft-gray/70">Category</span>
                          <Badge className={`${
                            selectedTeam.category === 'campus' ? 'bg-neon-green/20 text-neon-green border-neon-green/40' :
                            selectedTeam.category === 'tech' ? 'bg-electric-blue/20 text-electric-blue border-electric-blue/40' :
                            selectedTeam.category === 'sports' ? 'bg-orange-500/20 text-orange-500 border-orange-500/40' :
                            'bg-vibrant-pink/20 text-vibrant-pink border-vibrant-pink/40'
                          } font-medium capitalize`}>
                            {selectedTeam.category}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Members Leaderboard */}
                <div className="lg:col-span-2">
                  <Card className="bg-gray-700/30 border-electric-blue/30 p-4">
                    <h3 className="text-lg font-semibold text-electric-blue mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Team Members ({selectedTeam.members.length})
                    </h3>

                    <div className="overflow-y-auto max-h-64">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-800/50">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-electric-blue">Rank</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-electric-blue">Member</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-electric-blue">Articles</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-electric-blue">Points</th>
                            <th className="px-3 py-2 text-left text-xs font-semibold text-electric-blue">Streak</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedTeam.members
                            .sort((a, b) => b.points - a.points)
                            .slice(0, 10)
                            .map((member, index) => (
                            <tr key={member.id} className="border-t border-gray-700/50 hover:bg-gray-800/30">
                              <td className="px-3 py-2">
                                <span className={`font-bold ${
                                  index === 0 ? 'text-yellow-500' :
                                  index === 1 ? 'text-gray-400' :
                                  index === 2 ? 'text-orange-600' : 'text-soft-gray'
                                }`}>
                                  #{index + 1}
                                </span>
                              </td>
                              <td className="px-3 py-2">
                                <div className="flex items-center space-x-2">
                                  <div className="relative">
                                    <div className="w-6 h-6 bg-electric-blue text-midnight-black rounded-full flex items-center justify-center text-xs font-semibold">
                                      {member.avatar}
                                    </div>
                                    {member.isOnline && (
                                      <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-neon-green rounded-full border border-gray-800" />
                                    )}
                                  </div>
                                  <div>
                                    <div className="flex items-center space-x-1">
                                      <span className="font-medium text-soft-gray text-xs">{member.name}</span>
                                      {member.role === 'owner' && <Crown className="w-3 h-3 text-yellow-500" />}
                                      {member.role === 'admin' && <Shield className="w-3 h-3 text-electric-blue" />}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-2 font-medium text-soft-gray">{member.articlesRead}</td>
                              <td className="px-3 py-2 font-bold text-electric-blue">{member.points}</td>
                              <td className="px-3 py-2">
                                <div className="flex items-center space-x-1">
                                  <Flame className="w-3 h-3 text-orange-500" />
                                  <span className="text-soft-gray">{member.currentStreak}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {selectedTeam.members.length > 10 && (
                      <p className="text-xs text-soft-gray/60 mt-3 text-center">
                        Showing top 10 members of {selectedTeam.members.length}
                      </p>
                    )}
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Unsplash Image Picker Modal */}
      {showUnsplashPicker && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="bg-gray-800/95 border-electric-blue/30 p-6 max-w-6xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-electric-blue">Choose from Unsplash</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowUnsplashPicker(false)}
                className="text-soft-gray hover:text-electric-blue"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
              <div className="flex space-x-3">
                <Input
                  placeholder="Search for team images (e.g., collaboration, teamwork, meeting)"
                  value={unsplashQuery}
                  onChange={(e) => setUnsplashQuery(e.target.value)}
                  className="bg-gray-800/50 border-electric-blue/30 text-soft-gray focus:border-electric-blue"
                  onKeyPress={(e) => e.key === 'Enter' && searchUnsplashImages(unsplashQuery)}
                />
                <Button
                  onClick={() => searchUnsplashImages(unsplashQuery)}
                  disabled={isLoadingUnsplash || !unsplashQuery.trim()}
                  className="bg-electric-blue text-midnight-black hover:bg-cyan-400 px-6"
                >
                  {isLoadingUnsplash ? (
                    <div className="w-4 h-4 border-2 border-midnight-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Eye className="w-4 h-4 mr-2" />
                      Search
                    </>
                  )}
                </Button>
              </div>

              {/* Quick search suggestions */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-sm text-soft-gray/60">Popular:</span>
                {['teamwork', 'collaboration', 'meeting', 'office', 'students', 'workspace'].map((suggestion) => (
                  <Button
                    key={suggestion}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setUnsplashQuery(suggestion);
                      searchUnsplashImages(suggestion);
                    }}
                    className="text-xs text-electric-blue hover:bg-electric-blue/10 px-3 py-1 h-auto"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {unsplashError && (
              <div className="mb-4 p-3 bg-yellow-900/30 border border-yellow-500/30 rounded-lg">
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin mr-2" />
                  <p className="text-yellow-400 text-sm">{unsplashError}</p>
                </div>
              </div>
            )}

            {/* Image Grid */}
            <div className="overflow-y-auto max-h-96">
              {isLoadingUnsplash ? (
                <div className="flex items-center justify-center py-12">
                  <div className="text-center">
                    <div className="w-8 h-8 border-2 border-electric-blue border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-soft-gray/70">Searching Unsplash...</p>
                  </div>
                </div>
              ) : unsplashImages.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {unsplashImages.map((image) => (
                    <div
                      key={image.id}
                      className="relative group cursor-pointer rounded-lg overflow-hidden hover:ring-2 hover:ring-electric-blue/50 transition-all duration-300"
                      onClick={() => selectUnsplashImage(image.urls.regular)}
                    >
                      <img
                        src={image.urls.regular}
                        alt={image.alt_description || 'Unsplash image'}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs font-medium truncate">
                            {image.alt_description || 'Team image'}
                          </p>
                          <p className="text-white/70 text-xs">
                            by {image.user?.name || 'Unknown'}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-electric-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-electric-blue text-midnight-black px-3 py-1 rounded-full text-sm font-semibold">
                          Select
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Upload className="w-12 h-12 text-soft-gray/30 mx-auto mb-4" />
                  <p className="text-soft-gray/70 mb-2">Search for images to get started</p>
                  <p className="text-soft-gray/50 text-sm">
                    Try searching for "teamwork", "collaboration", or "meeting"
                  </p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-electric-blue/10">
              <p className="text-xs text-soft-gray/60">
                Images provided by{' '}
                <a
                  href="https://unsplash.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-blue hover:underline"
                >
                  Unsplash
                </a>
              </p>
              <Button
                variant="outline"
                onClick={() => setShowUnsplashPicker(false)}
                className="border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
              >
                Cancel
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Leave Team Confirmation Modal */}
      {showLeaveConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="bg-gray-800/95 border-red-500/30 p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-red-400 flex items-center">
                <X className="w-5 h-5 mr-2" />
                Leave Team
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowLeaveConfirm(false)}
                className="text-soft-gray hover:text-electric-blue"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="mb-6">
              <p className="text-soft-gray mb-4">
                Are you sure you want to leave <span className="font-semibold text-electric-blue">{userTeam.name}</span>?
              </p>
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                <p className="text-red-400 text-sm">
                  ⚠️ You will lose access to team discussions, leaderboards, and competitions. You'll need to request to rejoin if this is a restricted team.
                </p>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={() => setShowLeaveConfirm(false)}
                disabled={isLeavingTeam}
                className="flex-1 border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
              >
                Cancel
              </Button>
              <Button
                onClick={handleLeaveTeam}
                disabled={isLeavingTeam}
                className="flex-1 bg-red-500 text-white hover:bg-red-600 font-semibold"
              >
                {isLeavingTeam ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Leaving...
                  </>
                ) : (
                  <>
                    <LogOut className="w-4 h-4 mr-2" />
                    Leave Team
                  </>
                )}
              </Button>
            </div>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Teams;
