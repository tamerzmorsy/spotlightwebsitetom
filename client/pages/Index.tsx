import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  BookOpen,
  Smartphone,
  Zap,
  TrendingUp,
  DollarSign,
  PieChart,
  Users,
  BarChart3,
  GraduationCap,
  Building2,
  Globe,
  Shield
} from "lucide-react";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedData = () => {
        setTimeout(() => {
          video.pause();
        }, 5000); // Pause after 5 seconds
      };

      video.addEventListener('loadeddata', handleLoadedData);

      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section - Apple News inspired clean layout */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay={true}
          muted={true}
          loop={false}
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
            src="https://www.dropbox.com/scl/fi/fdo3go2qmcebnmbxa0rrk/4990232-hd_1920_1080_30fps.mp4?rlkey=vwy1wyw8sibos4mu3lj4tice0&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Tint */}
        <div className="absolute inset-0 bg-midnight-black/60 z-10"></div>

        <div className="relative z-20 text-center max-w-8xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F0b0a31ccf47e48388d0e7b1d2cc829fd?format=webp&width=800"
              alt="SpotlightNews"
              className="h-12 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(154deg) brightness(119%) contrast(119%)' }}
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            A world of news.
            <br />
            <span className="text-electric-blue">One trusted feed.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
            Break free from algorithmic echo chambers.
            <br />
            Your feed, your rules.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#"
              className="transition-transform hover:scale-105 active:scale-95"
              aria-label="Download on the App Store"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-14 w-auto"
              />
            </a>
            <a
              href="#"
              className="transition-transform hover:scale-105 active:scale-95"
              aria-label="Get it on Google Play"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </a>
          </div>


        </div>
      </section>

      {/* Features Section - Clean Apple style */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-6">
              News that <span className="text-electric-blue">matters.</span>
            </h2>
            <p className="text-3xl text-soft-gray/70 max-w-2xl mx-auto font-light leading-relaxed">
              Curate your perfect feed from hundreds of trusted sources. No algorithms.
              No noise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Your feed, <br />
                your <span className="text-electric-blue">choice.</span>
              </h3>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Choose your sources, topics, and writers. Create a news
                experience that's uniquely yours. No algorithmic surprises.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F61dcb29404b54e3294abf0a058330ed3?format=webp&width=540&height=320"
                alt="SpotlightNews Feed Preview"
                className="w-full h-auto"
                width={540}
                height={320}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-6 h-80 flex items-center justify-center order-2 md:order-1 overflow-hidden">
              {/* MyStats Mobile Interface Mockup */}
              <div className="w-full max-w-xs bg-midnight-black/90 rounded-3xl border border-neon-green/30 backdrop-blur-sm relative">
                {/* Mobile Status Bar */}
                <div className="flex justify-between items-center px-4 py-2 text-xs text-soft-gray/70">
                  <span>3:27</span>
                  <span>MyStats</span>
                  <span>🔋 27</span>
                </div>

                {/* Stats Grid */}
                <div className="px-4 pb-4 space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-neon-green/10 rounded-lg p-2 border border-neon-green/20">
                      <div className="text-neon-green text-xl font-bold">7</div>
                      <div className="text-xs text-soft-gray/60">Streak</div>
                    </div>
                    <div className="bg-electric-blue/10 rounded-lg p-2 border border-electric-blue/20">
                      <div className="text-electric-blue text-xl font-bold">12</div>
                      <div className="text-xs text-soft-gray/60">Max</div>
                    </div>
                    <div className="bg-electric-blue/10 rounded-lg p-2 border border-electric-blue/20">
                      <div className="text-electric-blue text-xl font-bold">89%</div>
                      <div className="text-xs text-soft-gray/60">Read</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-electric-blue/10 rounded-lg p-2 border border-electric-blue/20">
                      <div className="text-electric-blue text-lg font-bold">4</div>
                      <div className="text-xs text-soft-gray/60">Today</div>
                    </div>
                    <div className="bg-neon-green/10 rounded-lg p-2 border border-neon-green/20">
                      <div className="text-neon-green text-lg font-bold">28m</div>
                      <div className="text-xs text-soft-gray/60">Time</div>
                    </div>
                  </div>

                  {/* Goal Progress */}
                  <div className="bg-electric-blue/10 rounded-lg p-2 border border-electric-blue/20">
                    <div className="text-xs text-electric-blue font-medium mb-1">Weekly Goal</div>
                    <div className="w-full bg-midnight-black/50 rounded-full h-2">
                      <div className="bg-electric-blue h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                    <div className="text-xs text-soft-gray/60 mt-1">78% complete</div>
                  </div>
                </div>

                {/* Floating rewards indicator */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-electric-blue rounded-full flex items-center justify-center text-xs font-bold text-midnight-black">
                  🏆
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Read smart. <br />
                Get <span className="text-neon-green">rewarded.</span>
              </h3>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Track your reading with MyStats. Join challenges. Win real
                prizes like AirPods and iPads while staying informed.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                One subscription. <br />
                <span className="text-electric-blue">All access.</span>
              </h3>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Break through paywalls with a single subscription. Access
                premium content from hundreds of publications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/20 to-neon-green/20 rounded-3xl p-8 h-80 flex items-center justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-lg">
                {/* Forbes */}
                <div className="bg-midnight-black/50 rounded-xl p-4 flex items-center justify-center border border-electric-blue/20 hover:border-electric-blue/40 transition-colors">
                  <span className="text-electric-blue font-bold text-lg">Forbes</span>
                </div>

                {/* TIME */}
                <div className="bg-midnight-black/50 rounded-xl p-4 flex items-center justify-center border border-electric-blue/20 hover:border-electric-blue/40 transition-colors">
                  <span className="text-electric-blue font-bold text-lg">TIME</span>
                </div>

                {/* Bloomberg */}
                <div className="bg-midnight-black/50 rounded-xl p-4 flex items-center justify-center border border-neon-green/20 hover:border-neon-green/40 transition-colors">
                  <span className="text-neon-green font-bold text-lg">Bloomberg</span>
                </div>

                {/* Miami Herald */}
                <div className="bg-midnight-black/50 rounded-xl p-4 flex items-center justify-center border border-electric-blue/20 hover:border-electric-blue/40 transition-colors">
                  <span className="text-electric-blue font-semibold text-sm">Miami Herald</span>
                </div>

                {/* Semafor */}
                <div className="bg-midnight-black/50 rounded-xl p-4 flex items-center justify-center border border-electric-blue/20 hover:border-electric-blue/40 transition-colors">
                  <span className="text-electric-blue font-bold text-lg">Semafor</span>
                </div>

                {/* Salt Lake Tribune */}
                <div className="bg-midnight-black/50 rounded-xl p-4 flex items-center justify-center border border-neon-green/20 hover:border-neon-green/40 transition-colors">
                  <span className="text-neon-green font-semibold text-sm text-center">Salt Lake Tribune</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Sections - Clean Apple style */}
      <section className="py-24 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-midnight-black"></div>
        <div className="absolute top-32 left-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-electric-blue/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-4">
              Built for <span className="text-electric-blue">everyone.</span>
            </h2>
            <p className="text-xl text-soft-gray/70 max-w-2xl mx-auto">
              Three distinct experiences, one powerful platform
            </p>
          </div>

          {/* Clean Card Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Students Card */}
            <div className="group relative">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-80 flex flex-col hover:border-electric-blue/30 hover:bg-gray-800/40 transition-all duration-300">
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center mr-4">
                      <BookOpen className="w-6 h-6 text-electric-blue" />
                    </div>
                    <span className="text-electric-blue text-sm font-medium">For You</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Custom News Feed
                  </h3>

                  <p className="text-soft-gray/70 mb-8 leading-relaxed">
                    Build your perfect scroll. Choose sources, topics, and writers.
                    No algorithms, no distractions, just the news you want.
                  </p>
                </div>

                <Link to="/students" className="w-full">
                  <Button className="w-full bg-electric-blue text-black hover:bg-electric-blue/90 font-medium py-3 rounded-xl transition-colors">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Publishers Card */}
            <div className="group relative">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-80 flex flex-col hover:border-neon-green/30 hover:bg-gray-800/40 transition-all duration-300">
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mr-4">
                      <DollarSign className="w-6 h-6 text-neon-green" />
                    </div>
                    <span className="text-neon-green text-sm font-medium">For Publishers</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Revenue Growth
                  </h3>

                  <p className="text-soft-gray/70 mb-8 leading-relaxed">
                    70% revenue share with zero tech lift. Connect with engaged
                    readers and build sustainable income streams.
                  </p>
                </div>

                <Link to="/publishers" className="w-full">
                  <Button className="w-full bg-neon-green text-black hover:bg-neon-green/90 font-medium py-3 rounded-xl transition-colors">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Universities Card */}
            <div className="group relative">
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-80 flex flex-col hover:border-electric-blue/30 hover:bg-gray-800/40 transition-all duration-300">
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-electric-blue" />
                    </div>
                    <span className="text-electric-blue text-sm font-medium">For Colleges/Universities</span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4">
                    Campus Integration
                  </h3>

                  <p className="text-soft-gray/70 mb-8 leading-relaxed">
                    Bulk subscriptions for thousands of students. Boost access,
                    engagement, and news literacy across your campus.
                  </p>
                </div>

                <Link to="/universities" className="w-full">
                  <Button className="w-full bg-electric-blue text-black hover:bg-electric-blue/90 font-medium py-3 rounded-xl transition-colors">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#008888' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-8">
            Ditch toxic feeds? <br />
            <span className="text-electric-blue">Get the news your way.</span>
          </h2>
          <div className="flex justify-center">
            <Link to="/get-app">
              <Button
                size="lg"
                className="bg-white text-[#008888] hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-full border-2 border-white"
              >
                Sign up free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
