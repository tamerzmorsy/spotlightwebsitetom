import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Trophy,
  Target,
  Clock,
  Users,
  Star,
  Gift,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

const Challenge = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-vibrant-pink/10 via-transparent to-electric-blue/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-midnight-black/80 border border-vibrant-pink/30 rounded-full px-6 py-3 mb-8">
              <Trophy className="w-5 h-5 text-vibrant-pink mr-2" />
              <span className="text-vibrant-pink font-medium">
                Feed Challenge
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-vibrant-pink text-glow-pink">
                Join the Feed Challenge
              </span>
              <br />
              <span className="text-soft-gray">Win AirPods Now!</span>
              <span className="text-electric-blue ml-2">🎧</span>
            </h1>

            <p className="text-xl md:text-2xl text-soft-gray/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ditch the doom-scrolling. Read quality news, track your progress,
              and{" "}
              <span className="text-neon-green font-semibold">
                win real prizes!
              </span>
            </p>

            <p className="text-lg text-soft-gray/80 mb-12 max-w-3xl mx-auto">
              Challenge yourself to read meaningful news instead of endless
              social media. Track your reading with MyStats, compete with
              friends, and earn rewards for staying informed. This week's prize:
              AirPods Pro for the top reader!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/login">
                <Button
                  size="lg"
                  className="bg-vibrant-pink text-midnight-black hover:bg-pink-400 neon-glow-pink font-semibold text-lg px-8 py-6 rounded-xl"
                >
                  <Trophy className="w-5 h-5 mr-2" />
                  Join Challenge
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 font-semibold text-lg px-8 py-6 rounded-xl"
                >
                  Sign In to Participate
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-4">
              How the Challenge Works
            </h2>
            <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto">
              Simple steps to better news habits and awesome prizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-electric-blue/20 p-8 text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-display font-semibold text-electric-blue mb-4">
                Set Your Goal
              </h3>
              <p className="text-soft-gray/80">
                Choose how many articles you want to read this week. Start with
                5-10 articles for beginners, or go for 20+ if you're ambitious!
              </p>
            </Card>

            <Card className="bg-gray-800/50 border-neon-green/20 p-8 text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-display font-semibold text-neon-green mb-4">
                Read & Track
              </h3>
              <p className="text-soft-gray/80">
                Read articles from quality sources. MyStats automatically tracks
                your progress, reading time, and engagement levels.
              </p>
            </Card>

            <Card className="bg-gray-800/50 border-vibrant-pink/20 p-8 text-center">
              <div className="w-16 h-16 bg-vibrant-pink/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-vibrant-pink" />
              </div>
              <h3 className="text-xl font-display font-semibold text-vibrant-pink mb-4">
                Win Prizes
              </h3>
              <p className="text-soft-gray/80">
                Top readers win real prizes! This week: AirPods Pro. Monthly
                prizes include iPads, gift cards, and exclusive Spotlight merch.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Challenge */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-vibrant-pink text-glow-pink mb-4">
              This Week's Challenge
            </h2>
            <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto">
              December 9-15, 2024
            </p>
          </div>

          <Card className="bg-gray-800/50 border-vibrant-pink/30 p-8 md:p-12 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-vibrant-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-12 h-12 text-vibrant-pink" />
              </div>

              <h3 className="text-3xl font-display font-bold text-vibrant-pink mb-4">
                "Beat the Algorithm" Week
              </h3>
              <p className="text-xl text-soft-gray/90 mb-6">
                Read 15+ quality articles instead of doom-scrolling social media
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-center mb-8">
                <div>
                  <div className="text-3xl font-bold text-electric-blue mb-2">
                    🎧
                  </div>
                  <div className="text-lg font-semibold text-electric-blue">
                    1st Place
                  </div>
                  <div className="text-sm text-soft-gray/70">AirPods Pro</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-neon-green mb-2">
                    🎁
                  </div>
                  <div className="text-lg font-semibold text-neon-green">
                    2nd Place
                  </div>
                  <div className="text-sm text-soft-gray/70">
                    $100 Gift Card
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-vibrant-pink mb-2">
                    👕
                  </div>
                  <div className="text-lg font-semibold text-vibrant-pink">
                    3rd Place
                  </div>
                  <div className="text-sm text-soft-gray/70">
                    Spotlight Merch
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-electric-blue mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Challenge Rules
                </h4>
                <ul className="space-y-2 text-soft-gray/80 text-sm">
                  <li>• Read at least 15 articles from quality sources</li>
                  <li>• Articles must be 500+ words (tracked automatically)</li>
                  <li>• Must read from at least 3 different publications</li>
                  <li>• Challenge runs Monday to Sunday</li>
                  <li>• Must have verified student account</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-neon-green mb-4 flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Bonus Points
                </h4>
                <ul className="space-y-2 text-soft-gray/80 text-sm">
                  <li>• +5 points for sharing articles with friends</li>
                  <li>• +10 points for reading local/campus news</li>
                  <li>• +15 points for completing daily streaks</li>
                  <li>• +20 points for reading diverse topics</li>
                  <li>• +25 points for writing article summaries</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8 pt-8 border-t border-gray-700">
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-4 text-sm text-soft-gray/70">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />4 days left
                  </span>
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    247 participants
                  </span>
                </div>
              </div>

              <Link to="/login">
                <Button className="bg-vibrant-pink text-midnight-black hover:bg-pink-400 neon-glow-pink font-semibold text-lg px-8 py-4">
                  <Trophy className="w-5 h-5 mr-2" />
                  Join This Week's Challenge
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-midnight-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-4">
              Current Leaderboard
            </h2>
            <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto">
              See how you stack up against other readers
            </p>
          </div>

          <Card className="bg-gray-800/50 border-electric-blue/30 p-8 max-w-2xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  rank: 1,
                  name: "Sarah M.",
                  school: "MSU",
                  articles: 23,
                  icon: "🥇",
                },
                {
                  rank: 2,
                  name: "Alex K.",
                  school: "JHU",
                  articles: 19,
                  icon: "🥈",
                },
                {
                  rank: 3,
                  name: "Jordan L.",
                  school: "MSU",
                  articles: 17,
                  icon: "🥉",
                },
                {
                  rank: 4,
                  name: "Casey R.",
                  school: "JHU",
                  articles: 15,
                  icon: "4️⃣",
                },
                {
                  rank: 5,
                  name: "Taylor B.",
                  school: "MSU",
                  articles: 14,
                  icon: "5️⃣",
                },
              ].map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{user.icon}</span>
                    <div>
                      <div className="font-semibold text-soft-gray">
                        {user.name}
                      </div>
                      <div className="text-sm text-soft-gray/60">
                        {user.school}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-electric-blue">
                      {user.articles}
                    </div>
                    <div className="text-xs text-soft-gray/60">articles</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6 pt-6 border-t border-gray-700">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="border-neon-green text-neon-green hover:bg-neon-green/10"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Join to See Full Rankings
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-6">
            Ready to Beat the Algorithm?
          </h2>
          <p className="text-xl text-soft-gray/90 mb-8">
            Join hundreds of students who've ditched doom-scrolling for quality
            news and real rewards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button
                size="lg"
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-semibold text-lg px-8 py-4"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Sign Up & Join Challenge
              </Button>
            </Link>
            <Link to="/students">
              <Button
                size="lg"
                variant="outline"
                className="border-neon-green text-neon-green hover:bg-neon-green/10 font-semibold text-lg px-8 py-4"
              >
                Learn More About Spotlight
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
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

export default Challenge;
