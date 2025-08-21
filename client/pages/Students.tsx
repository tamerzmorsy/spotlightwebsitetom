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
              {/* Mobile Feed Interface Mockup */}
              <div className="w-full max-w-xs bg-midnight-black/90 rounded-3xl border border-electric-blue/30 backdrop-blur-sm relative">
                {/* Mobile Header */}
                <div className="flex justify-between items-center px-4 py-3 border-b border-electric-blue/20">
                  <span className="text-electric-blue font-bold text-lg">MyNews</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-vibrant-pink rounded-full"></div>
                    <span className="text-xs text-soft-gray/70">🏆</span>
                  </div>
                </div>

                {/* News Feed */}
                <div className="p-3 space-y-3 max-h-80 overflow-hidden">
                  {/* Article 1 */}
                  <div className="bg-electric-blue/10 rounded-lg border border-electric-blue/20 overflow-hidden">
                    <div className="h-16 bg-gradient-to-r from-electric-blue/30 to-vibrant-pink/20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                        <span className="text-midnight-black text-xs font-bold">📱</span>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="text-electric-blue text-xs font-medium">Bloomberg</div>
                      <div className="text-white text-xs font-semibold leading-tight mb-1">Apple to bring blood oxygen feature to some US watch...</div>
                      <div className="text-soft-gray/60 text-xs">Today • 2 min read</div>
                    </div>
                  </div>

                  {/* Article 2 */}
                  <div className="bg-vibrant-pink/10 rounded-lg border border-vibrant-pink/20 overflow-hidden">
                    <div className="h-16 bg-gradient-to-r from-vibrant-pink/30 to-neon-green/20 flex items-center justify-center">
                      <div className="w-8 h-8 bg-red-600 rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-bold">🇺🇸</span>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="text-vibrant-pink text-xs font-medium">Miami Herald</div>
                      <div className="text-white text-xs font-semibold leading-tight mb-1">Trump hoping to achieve halt to Ukraine fighting...</div>
                      <div className="text-soft-gray/60 text-xs">3h ago • 4 min read</div>
                    </div>
                  </div>

                  {/* Article 3 (partial) */}
                  <div className="bg-neon-green/10 rounded-lg border border-neon-green/20 overflow-hidden opacity-50">
                    <div className="h-12 bg-gradient-to-r from-neon-green/30 to-electric-blue/20 flex items-center justify-center">
                      <div className="w-6 h-6 bg-neon-green rounded-md flex items-center justify-center">
                        <span className="text-midnight-black text-xs font-bold">💼</span>
                      </div>
                    </div>
                    <div className="p-2">
                      <div className="text-neon-green text-xs font-medium">Forbes</div>
                      <div className="text-white text-xs font-semibold leading-tight">Tech startup raises $50M...</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                  <div className="w-1 h-1 bg-electric-blue rounded-full"></div>
                  <div className="w-1 h-1 bg-soft-gray/30 rounded-full"></div>
                  <div className="w-1 h-1 bg-soft-gray/30 rounded-full"></div>
                  <div className="w-1 h-1 bg-soft-gray/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: MyStats */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-16 h-96 flex items-center justify-center order-2 md:order-1">
              <div className="text-center text-soft-gray/60">
                <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Reading Analytics</p>
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
