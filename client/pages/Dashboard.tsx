import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Sparkles,
  Bell,
  MapPin,
  Clock,
  TrendingUp,
  Star,
  ArrowRight,
  Target,
  Users,
  Heart,
} from "lucide-react";

const Dashboard = () => {
  const [userPreferences, setUserPreferences] = useState<any>(null);
  const [mockArticles, setMockArticles] = useState<any[]>([]);

  useEffect(() => {
    // Load user preferences from localStorage
    const prefs = localStorage.getItem("userPreferences");
    if (prefs) {
      const parsedPrefs = JSON.parse(prefs);
      setUserPreferences(parsedPrefs);

      // Generate mock articles based on user preferences
      generateMockArticles(parsedPrefs.topics || []);
    }
  }, []);

  const generateMockArticles = (topics: string[]) => {
    const sampleArticles = [
      {
        title: "Campus Dining Hall Introduces New Sustainable Menu",
        source: "Campus Daily",
        time: "2 hours ago",
        category: "Local News",
        readTime: "3 min read",
        featured: true,
      },
      {
        title: "Breaking: New Research Funding Approved for STEM Programs",
        source: "University News",
        time: "4 hours ago",
        category: "Education",
        readTime: "5 min read",
        featured: false,
      },
      {
        title: "Student Government Elections: Meet the Candidates",
        source: "Student Voice",
        time: "6 hours ago",
        category: "Politics",
        readTime: "7 min read",
        featured: false,
      },
      {
        title: "Championship Game This Weekend: Team Prepares for Finals",
        source: "Sports Tribune",
        time: "8 hours ago",
        category: "Sports",
        readTime: "4 min read",
        featured: false,
      },
      {
        title: "New AI Research Lab Opens on Campus",
        source: "Tech Today",
        time: "12 hours ago",
        category: "Technology",
        readTime: "6 min read",
        featured: false,
      },
    ];

    // Filter articles based on user topics
    const relevantArticles = sampleArticles.filter((article) =>
      topics.some(
        (topic) =>
          article.category.toLowerCase().includes(topic.toLowerCase()) ||
          topic.toLowerCase().includes(article.category.toLowerCase()),
      ),
    );

    setMockArticles(
      relevantArticles.length > 0
        ? relevantArticles
        : sampleArticles.slice(0, 3),
    );
  };

  if (!userPreferences) {
    return (
      <div className="min-h-screen bg-midnight-black text-soft-gray flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-electric-blue/30 border-t-electric-blue rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-soft-gray/70">
            Loading your personalized dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Welcome Hero */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-midnight-black/80 border border-electric-blue/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-electric-blue mr-2" />
              <span className="text-electric-blue font-medium">
                Welcome to Spotlight
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-electric-blue text-glow-blue">
                Your Feed is
              </span>
              <br />
              <span className="text-soft-gray">Ready to Roll</span>
              <span className="text-vibrant-pink ml-2">🎉</span>
            </h1>

            <p className="text-xl text-soft-gray/90 mb-8 max-w-2xl mx-auto">
              Based on your preferences, we've curated news from your favorite
              topics. Your personalized feed is now live!
            </p>

            {/* Preferences Summary */}
            <Card className="bg-gray-800/50 border-electric-blue/30 p-6 max-w-4xl mx-auto mb-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-electric-blue" />
                  </div>
                  <h3 className="font-semibold text-electric-blue mb-2">
                    {userPreferences.topics?.length || 0} Topics Selected
                  </h3>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {userPreferences.topics
                      ?.slice(0, 3)
                      .map((topic: string, index: number) => (
                        <Badge
                          key={index}
                          className="bg-electric-blue/20 text-electric-blue border-electric-blue/30 text-xs"
                        >
                          {topic}
                        </Badge>
                      ))}
                    {userPreferences.topics?.length > 3 && (
                      <Badge className="bg-gray-700/50 text-soft-gray/70 border-gray-600 text-xs">
                        +{userPreferences.topics.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Bell className="w-6 h-6 text-neon-green" />
                  </div>
                  <h3 className="font-semibold text-neon-green mb-2">
                    Notifications
                  </h3>
                  <p className="text-sm text-soft-gray/80">
                    {userPreferences.notifications ? "Enabled" : "Disabled"}
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-vibrant-pink/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-vibrant-pink" />
                  </div>
                  <h3 className="font-semibold text-vibrant-pink mb-2">
                    Location
                  </h3>
                  <p className="text-sm text-soft-gray/80">
                    {userPreferences.location
                      ? "Local news enabled"
                      : "Not enabled"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Preview Feed */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-4">
              Your Personalized Feed Preview
            </h2>
            <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto">
              Here's what your news feed looks like based on your selected
              interests
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              {mockArticles[0] && (
                <Card className="bg-gray-800/50 border-electric-blue/30 p-8 mb-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                      Featured
                    </Badge>
                    <Badge className="bg-gray-700/50 text-soft-gray/70 border-gray-600">
                      {mockArticles[0].category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-soft-gray mb-4">
                    {mockArticles[0].title}
                  </h3>

                  <div className="flex items-center space-x-4 text-sm text-soft-gray/70 mb-6">
                    <span>{mockArticles[0].source}</span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {mockArticles[0].time}
                    </span>
                    <span>{mockArticles[0].readTime}</span>
                  </div>

                  <p className="text-soft-gray/80 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris...
                  </p>

                  <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-medium">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              )}
            </div>

            {/* Sidebar Articles */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-soft-gray mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-neon-green mr-2" />
                  Trending in Your Topics
                </h3>

                <div className="space-y-4">
                  {mockArticles.slice(1, 4).map((article, index) => (
                    <Card
                      key={index}
                      className="bg-gray-800/50 border-gray-700 p-4 hover:border-gray-600 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start space-x-2 mb-2">
                        <Badge className="bg-gray-700/50 text-soft-gray/70 border-gray-600 text-xs">
                          {article.category}
                        </Badge>
                      </div>

                      <h4 className="font-semibold text-soft-gray mb-2 line-clamp-2">
                        {article.title}
                      </h4>

                      <div className="flex items-center justify-between text-xs text-soft-gray/60">
                        <span>{article.source}</span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.time}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="bg-gray-800/50 border-vibrant-pink/30 p-6">
                <h3 className="text-lg font-display font-bold text-vibrant-pink mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Quick Actions
                </h3>

                <div className="space-y-3">
                  <Link to="/onboarding">
                    <Button
                      variant="outline"
                      className="w-full border-electric-blue text-electric-blue hover:bg-electric-blue/10 text-sm"
                    >
                      <Target className="w-4 h-4 mr-2" />
                      Customize Topics
                    </Button>
                  </Link>

                  <Link to="/login">
                    <Button
                      variant="outline"
                      className="w-full border-neon-green text-neon-green hover:bg-neon-green/10 text-sm"
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      Notification Settings
                    </Button>
                  </Link>

                  <Link to="/challenge">
                    <Button
                      variant="outline"
                      className="w-full border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink/10 text-sm"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Join Challenges
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-display font-bold text-soft-gray mb-4">
              Ready to dive into your personalized news experience?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/students">
                <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-semibold text-lg px-8 py-4">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore Full Feed
                </Button>
              </Link>
              <Link to="/challenge">
                <Button
                  variant="outline"
                  className="border-neon-green text-neon-green hover:bg-neon-green/10 font-semibold text-lg px-8 py-4"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Join Feed Challenge
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              to="/"
              className="text-2xl font-display font-bold text-electric-blue text-glow-blue mb-4 block"
            >
              Spotlight News
            </Link>
            <p className="text-soft-gray/80">
              Delivering news, cutting chaos. The anti-algo rebels making news
              engaging and discourse meaningful.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
