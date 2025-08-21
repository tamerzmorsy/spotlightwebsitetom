import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
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
            src="https://www.dropbox.com/scl/fi/dbsc08cdmgatwihebfzzi/9783690-sd_960_506_25fps.mp4?rlkey=gqs9bk0tmd5kcjot1zeoxplaf&dl=1"
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
              About Spotlight News
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            Reinventing news
            <br />
            for a <span className="text-electric-blue">new generation.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
            Algorithm-free feeds. Quality journalism.
            <br />A sustainable future for news.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Mission */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Our <span className="text-electric-blue">mission.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                To reinvigorate the newspaper industry by building a new
                generation of readers who stay sharp, connected, and
                inspired—throughout college and beyond.
              </p>
              <p className="text-lg text-soft-gray/60 mb-8">
                We empower students, publishers, and universities to redefine
                news in the digital age through algorithm-free, customizable
                access to trusted sources.
              </p>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/20 to-vibrant-pink/20 rounded-3xl p-12 h-96 relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-4 left-4 w-3 h-3 bg-electric-blue rounded-full animate-pulse"></div>
                <div className="absolute top-12 right-8 w-2 h-2 bg-neon-green rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-8 left-12 w-4 h-4 bg-vibrant-pink rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-electric-blue rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>

              {/* Main content */}
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                  <Target className="w-12 h-12 mx-auto mb-4 text-electric-blue" />
                  <h3 className="text-2xl font-display font-bold text-soft-gray mb-2">
                    Our Vision
                  </h3>
                </div>

                {/* Mission pillars */}
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="group">
                    <div className="w-12 h-12 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-electric-blue/30 transition-colors">
                      <Users className="w-6 h-6 text-electric-blue" />
                    </div>
                    <p className="text-sm font-medium text-soft-gray">Student-First</p>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-neon-green/30 transition-colors">
                      <Lightbulb className="w-6 h-6 text-neon-green" />
                    </div>
                    <p className="text-sm font-medium text-soft-gray">Algorithm-Free</p>
                  </div>
                  <div className="group">
                    <div className="w-12 h-12 bg-vibrant-pink/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-vibrant-pink/30 transition-colors">
                      <Heart className="w-6 h-6 text-vibrant-pink" />
                    </div>
                    <p className="text-sm font-medium text-soft-gray">Quality First</p>
                  </div>
                </div>

                {/* Vision statement */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-soft-gray/80 leading-relaxed">
                    Building a new generation of readers and sustainable revenue streams for publishers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-8 h-96 relative overflow-hidden order-2 md:order-1">
              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 20% 20%, rgba(57, 255, 20, 0.3) 2px, transparent 2px),
                                   radial-gradient(circle at 80% 40%, rgba(0, 255, 255, 0.3) 2px, transparent 2px),
                                   radial-gradient(circle at 40% 80%, rgba(255, 105, 180, 0.3) 2px, transparent 2px)`,
                  backgroundSize: '40px 40px, 60px 60px, 50px 50px',
                  animation: 'float 6s ease-in-out infinite'
                }}></div>
              </div>

              {/* Core Values Content */}
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="text-center mb-6">
                  <Heart className="w-10 h-10 mx-auto mb-3 text-neon-green" />
                  <h3 className="text-xl font-display font-bold text-soft-gray mb-4">
                    Our Core Values
                  </h3>
                </div>

                {/* Value Cards */}
                <div className="space-y-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 group">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-electric-blue/20 rounded-full flex items-center justify-center group-hover:bg-electric-blue/30 transition-colors">
                        <span className="text-xs font-bold text-electric-blue">T</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-electric-blue">Truth & Transparency</h4>
                        <p className="text-xs text-soft-gray/70">Authentic stories that matter</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-neon-green/20 hover:border-neon-green/40 transition-all duration-300 group">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-neon-green/20 rounded-full flex items-center justify-center group-hover:bg-neon-green/30 transition-colors">
                        <span className="text-xs font-bold text-neon-green">E</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-neon-green">Empowerment</h4>
                        <p className="text-xs text-soft-gray/70">Knowledge that inspires action</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 group">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-electric-blue/20 rounded-full flex items-center justify-center group-hover:bg-electric-blue/30 transition-colors">
                        <span className="text-xs font-bold text-electric-blue">I</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-electric-blue">Innovation</h4>
                        <p className="text-xs text-soft-gray/70">Reimagining what's possible</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                What drives <span className="text-electric-blue">us.</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-electric-blue mb-2">
                    Quality First
                  </h3>
                  <p className="text-soft-gray/70">
                    We partner with trusted publications and prioritize
                    editorial integrity over engagement algorithms.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-electric-blue mb-2">
                    User Control
                  </h3>
                  <p className="text-soft-gray/70">
                    Readers choose their sources, topics, and reading
                    experience. No algorithmic manipulation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-electric-blue mb-2">
                    Fair Revenue
                  </h3>
                  <p className="text-soft-gray/70">
                    Publishers receive 70% of subscription revenue, creating
                    sustainable economics for journalism.
                  </p>
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
            Ready to be part of <br />
            <span className="text-electric-blue">the movement</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Whether you're a student, publisher, or university, there's a place
            for you in our mission.
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

export default About;
