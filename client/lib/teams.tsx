import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Team {
  id: string;
  name: string;
  slug: string;
  path: string;
  isPrimary?: boolean;
  coverImage: string;
  description: string;
  memberCount: number;
  maxMembers: number;
  joinType: 'open' | 'restricted';
  totalArticlesRead: number;
  totalPoints: number;
  rank: number;
  category: 'campus' | 'tech' | 'sports' | 'general';
  createdAt: string;
  owner: string;
}

interface TeamsContextType {
  joinedTeams: Team[];
  addTeam: (team: Team) => void;
  removeTeam: (teamId: string) => void;
  updateTeam: (teamId: string, updates: Partial<Team>) => void;
  getTeamBySlug: (slug: string) => Team | undefined;
}

const TeamsContext = createContext<TeamsContextType | undefined>(undefined);

// Initial joined teams for the user
const initialJoinedTeams: Team[] = [
  {
    id: "team-1",
    name: "Campus News Crusaders",
    slug: "campus-news-crusaders",
    path: "/teams",
    isPrimary: true,
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Staying informed about campus events and breaking news that matters to our university community",
    memberCount: 24,
    maxMembers: 30,
    joinType: "restricted",
    totalArticlesRead: 1247,
    totalPoints: 8420,
    rank: 3,
    category: "campus",
    createdAt: "2024-01-15",
    owner: "currentUser"
  },
  {
    id: "team-4",
    name: "Tech Enthusiasts",
    slug: "tech-enthusiasts",
    path: "/teams/tech-enthusiasts",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Passionate about technology trends, gadgets, and the latest in software development",
    memberCount: 20,
    maxMembers: 25,
    joinType: "open",
    totalArticlesRead: 1750,
    totalPoints: 7750,
    rank: 4,
    category: "tech",
    createdAt: "2024-01-10",
    owner: "techLeader"
  },
  {
    id: "team-7",
    name: "Study Squad",
    slug: "study-squad", 
    path: "/teams/study-squad",
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    description: "Students helping students stay informed about academic news and campus life",
    memberCount: 16,
    maxMembers: 20,
    joinType: "open",
    totalArticlesRead: 1224,
    totalPoints: 6120,
    rank: 7,
    category: "campus",
    createdAt: "2024-01-20",
    owner: "studyLeader"
  }
];

export const TeamsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [joinedTeams, setJoinedTeams] = useState<Team[]>(initialJoinedTeams);

  const addTeam = (team: Team) => {
    setJoinedTeams(prev => {
      // Check if team already exists
      if (prev.find(t => t.id === team.id)) {
        return prev;
      }
      return [...prev, team];
    });
  };

  const removeTeam = (teamId: string) => {
    setJoinedTeams(prev => prev.filter(team => team.id !== teamId));
  };

  const updateTeam = (teamId: string, updates: Partial<Team>) => {
    setJoinedTeams(prev => 
      prev.map(team => 
        team.id === teamId 
          ? { ...team, ...updates }
          : team
      )
    );
  };

  const getTeamBySlug = (slug: string) => {
    return joinedTeams.find(team => team.slug === slug);
  };

  return (
    <TeamsContext.Provider value={{
      joinedTeams,
      addTeam,
      removeTeam,
      updateTeam,
      getTeamBySlug
    }}>
      {children}
    </TeamsContext.Provider>
  );
};

export const useTeams = () => {
  const context = useContext(TeamsContext);
  if (context === undefined) {
    throw new Error('useTeams must be used within a TeamsProvider');
  }
  return context;
};
