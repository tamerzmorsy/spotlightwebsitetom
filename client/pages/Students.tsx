import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Download,
  Target,
  BarChart3,
  Award,
  CheckCircle,
  Star,
} from "lucide-react";

const Students = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section - Apple News style */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          controls={false}
          preload="auto"
          webkit-playsinline="true"
          data-object-fit="cover"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source
            src="https://www.dropbox.com/scl/fi/g0ha4ve4ehurqghuik0gr/5544177-sd_960_540_30fps.mp4?rlkey=5chqndjef7f7f20sx3cf7725o&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Tint */}
        <div className="absolute inset-0 bg-midnight-black/60 z-10"></div>

        <div className="relative z-20 text-center max-w-8xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8">
            <span className="inline-block text-electric-blue text-lg font-medium tracking-wide">
              For You
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            Done with feed chaos?
            <br />
            <span className="text-electric-blue">Build a better scroll.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-12 font-light leading-relaxed max-w-8xl mx-auto">
            Curate news that hits right—choose your sources, topics, writers.
            <br />
            No paywalls, no distractions.
          </p>

          {/* Primary CTA */}
          <div className="mb-8">
            <Link to="/get-app">
              <Button
                size="lg"
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold text-xl px-12 py-6 rounded-full"
              >
                Get the app
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Feature 1: Custom Feeds */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Your feed,
                <br />
                your <span className="text-electric-blue">choice.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Why let algorithms decide what you see? Choose your sources,
                topics, and writers. Create a feed like it's your favorite
                playlist.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">
                    Hundreds of trusted publications
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">
                    Campus to global coverage
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">
                    No algorithm surprises
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/20 to-neon-green/20 rounded-3xl p-6 h-96 flex items-center justify-center overflow-hidden">
              {/* Mobile Feed Interface - New Design */}
              <div className="w-full max-w-xs bg-midnight-black rounded-3xl border border-electric-blue/30 backdrop-blur-sm relative overflow-hidden">
                {/* Mobile Header with Icons */}
                <div className="flex justify-between items-center px-4 py-3 border-b border-electric-blue/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-electric-blue rounded-md flex items-center justify-center">
                      <span className="text-midnight-black text-xs">📰</span>
                    </div>
                    <span className="text-electric-blue font-bold text-lg">MyNews</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-neon-green/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">🔔</span>
                    </div>
                    <div className="w-6 h-6 bg-electric-blue/20 rounded-full flex items-center justify-center">
                      <span className="text-xs">🏆</span>
                    </div>
                  </div>
                </div>

                {/* Featured Article */}
                <div className="p-4">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden mb-4">
                    <div className="h-32 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center relative">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                        <span className="text-gray-800 text-lg font-bold">🍎</span>
                      </div>
                      {/* Action buttons */}
                      <div className="absolute top-3 right-3 flex space-x-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-xs">📤</span>
                        </div>
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-xs">🔖</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-electric-blue text-sm font-medium mb-2">Reuters</div>
                      <div className="text-white text-sm font-semibold leading-tight mb-2">
                        Apple to bring blood oxygen feature to some US watch...
                      </div>
                      <div className="text-gray-400 text-xs mb-3">By Stephen Nellis</div>
                      <div className="text-gray-300 text-xs leading-relaxed mb-3">
                        SAN FRANCISCO (Reuters) - Apple will bring a blood oxygen measurement feature to some of its watch mo...
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-gray-400 text-xs">Today at 9:57 AM • 1 min read</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: MyStats */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-6 h-96 flex flex-col justify-center order-2 md:order-1 overflow-hidden">
              {/* MyStats Dashboard */}
              <div className="bg-white/95 rounded-2xl p-6 shadow-xl">
                {/* Tab Navigation */}
                <div className="flex space-x-4 mb-6 bg-gray-100 rounded-lg p-1">
                  <div className="flex-1 text-center py-2 bg-blue-500 text-white rounded-md text-sm font-medium">📊 Stats</div>
                  <div className="flex-1 text-center py-2 text-gray-500 text-sm">🏆 Leaderboards</div>
                  <div className="flex-1 text-center py-2 text-gray-500 text-sm">🎯 Custom</div>
                  <div className="flex-1 text-center py-2 text-gray-500 text-sm">🎖️ Badges</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <div className="text-xs text-gray-500 mb-1">📰 Daily Articles</div>
                    <div className="text-xl font-bold text-gray-800">2 / 3</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '66%'}}></div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-3">
                    <div className="text-xs text-gray-500 mb-1">🕐 Daily Reading</div>
                    <div className="text-xl font-bold text-gray-800">15 / 30min</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '50%'}}></div>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-3">
                    <div className="text-xs text-gray-500 mb-1">📈 Monthly Articles</div>
                    <div className="text-xl font-bold text-gray-800">45 / 80</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-orange-500 h-2 rounded-full" style={{width: '56%'}}></div>
                    </div>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-3">
                    <div className="text-xs text-gray-500 mb-1">⏱️ Monthly Time</div>
                    <div className="text-xl font-bold text-gray-800">320 / 500min</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{width: '64%'}}></div>
                    </div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 mb-1">Current Streak</div>
                    <div className="text-lg font-bold text-gray-800">14 days</div>
                    <div className="text-xs text-gray-400">25 days last month</div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 mb-1">Max Streak</div>
                    <div className="text-lg font-bold text-gray-800">28 days</div>
                    <div className="text-xs text-gray-400">Personal best</div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-500 mb-1">Articles Shared</div>
                    <div className="text-lg font-bold text-gray-800">45</div>
                    <div className="text-xs text-gray-400">12 last month</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Track your reading.
                <br />
                <span className="text-electric-blue">Stay sharp.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                MyStats helps you set goals, track progress, and outsmart
                endless scrolling. Be the boss of your news consumption.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">
                    Reading time tracking
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">
                    Goal setting & progress
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">Focus insights</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Challenges & Rewards */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Read articles.
                <br />
                <span className="text-electric-blue">Win prizes.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Join reading challenges and win real rewards. AirPods, iPads,
                and more. News that's actually worth your time.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">Monthly challenges</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">
                    Real prizes: AirPods, iPads
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">Achievement badges</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-8 h-96 flex flex-col justify-center">
              {/* Sports Challenges Header */}
              <div className="text-center mb-6">
                <h3 className="text-white text-xl font-semibold mb-2">Sports Challenges</h3>
                <p className="text-soft-gray/70 text-sm">Participate in our sports challenges and win prizes!</p>
              </div>

              {/* Challenge Card */}
              <div className="bg-midnight-black/60 rounded-2xl p-6 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🏈</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">NFL Weekly Predictions</h4>
                      <p className="text-electric-blue text-sm">Coming Soon</p>
                    </div>
                  </div>
                  <button className="bg-neon-green text-midnight-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-neon-green/90 transition-colors">
                    View
                  </button>
                </div>
                <p className="text-soft-gray/70 text-sm leading-relaxed">
                  12 questions. Big plays. Bigger bragging rights. Take on the NFL Challenge and show who really runs Sundays.
                </p>
              </div>

              {/* Additional upcoming challenges placeholder */}
              <div className="mt-4 text-center">
                <p className="text-soft-gray/50 text-xs">More challenges coming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-24" style={{ backgroundColor: '#008888' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-8">
            Ready to take control of <br />
            <span className="text-electric-blue">your feed</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of students who've ditched the algorithm and built
            better news habits.
          </p>
          <div className="flex justify-center">
            <Link to="/get-app">
              <Button
                size="lg"
                className="bg-white text-[#008888] hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-full border-2 border-white"
              >
                Download the app
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Students;
