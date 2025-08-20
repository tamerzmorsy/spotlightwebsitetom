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
              For Students
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
                Get the app*
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
                    300+ trusted publications
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
              <Link to="/campus-eligibility">
                <Button
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight-black font-medium px-8 py-4 rounded-full"
                >
                  Check campus eligibility
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/20 to-vibrant-pink/20 rounded-3xl p-16 h-96 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                <Target className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Custom Feed Interface</p>
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
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight-black font-medium px-8 py-4 rounded-full"
                >
                  View demo
                </Button>
              </Link>
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
              <Link to="/challenge">
                <Button
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight-black font-medium px-8 py-4 rounded-full"
                >
                  Join challenge
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-vibrant-pink/20 to-neon-green/20 rounded-3xl p-16 h-96 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Challenges & Rewards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Simplified */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-16">
            Loved by students{" "}
            <span className="text-electric-blue">everywhere.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-electric-blue text-electric-blue"
                  />
                ))}
              </div>
              <p className="text-soft-gray/90 mb-4">
                "Spotlight cleared my feeds mess—now it's all clean reads! Won
                AirPods too. 🔥"
              </p>
              <div className="text-sm text-electric-blue font-medium">
                Alex, MSU Student
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-electric-blue text-electric-blue"
                  />
                ))}
              </div>
              <p className="text-soft-gray/90 mb-4">
                "Finally, news that doesn't waste my time. The challenges
                actually make reading fun."
              </p>
              <div className="text-sm text-electric-blue font-medium">
                Sarah, UCLA Student
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-electric-blue text-electric-blue"
                  />
                ))}
              </div>
              <p className="text-soft-gray/90 mb-4">
                "MyStats helped me actually stick to reading news. Game changer
                for staying informed."
              </p>
              <div className="text-sm text-electric-blue font-medium">
                Marcus, Stanford Student
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
