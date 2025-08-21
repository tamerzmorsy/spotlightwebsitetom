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
            <div className="bg-gradient-to-br from-electric-blue/20 to-vibrant-pink/20 rounded-3xl p-6 h-96 flex items-center justify-center overflow-hidden">
              {/* Exact News Feed Image */}
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff9a2587e1b874b6e9d34bfb6b703b455%2F098c3e539ca94a069b628710f4e25a5f?format=webp&width=800"
                alt="News Feed Interface"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Feature 2: MyStats */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-8 h-96 flex items-center justify-center order-2 md:order-1">
              {/* Compact Stats Dashboard */}
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 w-full max-w-md shadow-lg">
                {/* Compact Tab Navigation */}
                <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                  <div className="flex-1 text-center py-1.5 px-2 bg-white rounded-md text-xs font-medium text-blue-600">📊 Stats</div>
                  <div className="flex-1 text-center py-1.5 px-2 text-xs text-gray-500">🏆 Boards</div>
                  <div className="flex-1 text-center py-1.5 px-2 text-xs text-gray-500">⚡ Custom</div>
                  <div className="flex-1 text-center py-1.5 px-2 text-xs text-gray-500">🏅 Badges</div>
                </div>

                {/* Compact Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Daily Articles */}
                  <div className="border-l-4 border-blue-500 bg-blue-50/50 p-3 rounded">
                    <div className="text-blue-600 text-xs mb-1">📰 Daily Articles</div>
                    <div className="text-xl font-bold text-gray-900 mb-2">2 / 3</div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-blue-500 h-1 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>

                  {/* Daily Reading */}
                  <div className="border-l-4 border-green-500 bg-green-50/50 p-3 rounded">
                    <div className="text-green-600 text-xs mb-1">⏱️ Daily Reading</div>
                    <div className="text-xl font-bold text-gray-900 mb-2">15 / 30min</div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-green-500 h-1 rounded-full" style={{width: '50%'}}></div>
                    </div>
                  </div>

                  {/* Monthly Articles */}
                  <div className="border-l-4 border-orange-500 bg-orange-50/50 p-3 rounded">
                    <div className="text-orange-600 text-xs mb-1">📊 Monthly Articles</div>
                    <div className="text-xl font-bold text-gray-900 mb-2">45 / 80</div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-orange-500 h-1 rounded-full" style={{width: '56%'}}></div>
                    </div>
                  </div>

                  {/* Monthly Time */}
                  <div className="border-l-4 border-teal-500 bg-teal-50/50 p-3 rounded">
                    <div className="text-teal-600 text-xs mb-1">⏰ Monthly Time</div>
                    <div className="text-xl font-bold text-gray-900 mb-2">320 / 500min</div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-teal-500 h-1 rounded-full" style={{width: '64%'}}></div>
                    </div>
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
              <div className="text-center mb-8">
                <h3 className="text-white text-xl font-semibold mb-2">Sports Challenges</h3>
                <p className="text-soft-gray/80 text-sm">Participate in our sports challenges and win prizes!</p>
              </div>

              {/* NFL Challenge Card */}
              <div className="bg-midnight-black/40 rounded-lg p-6 border border-electric-blue/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-lg">🏈</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">NFL Weekly Predictions -- Coming Soon</h4>
                      <p className="text-soft-gray/70 text-sm mt-1">
                        12 questions. Big plays. Bigger bragging rights. Take on the NFL Challenge and show who really runs Sundays.
                      </p>
                    </div>
                  </div>
                  <button className="bg-neon-green text-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-neon-green/80 transition-colors">
                    View
                  </button>
                </div>
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
