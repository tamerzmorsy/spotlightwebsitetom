import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Users,
  GraduationCap,
  CheckCircle,
  Star,
  BarChart3,
  Handshake,
} from "lucide-react";

const Universities = () => {
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
            src="https://www.dropbox.com/scl/fi/rkbftd29i2j56x0euim7a/7683342-sd_960_540_30fps-1.mp4?rlkey=99jzrnoao70n7t3yvg9qyfl79&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Tint */}
        <div className="absolute inset-0 bg-midnight-black/60 z-10"></div>

        <div className="relative z-20 text-center max-w-8xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8">
            <span className="inline-block text-vibrant-pink text-lg font-medium tracking-wide">
              For Colleges/Universities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            Hundreds of Publications in One App.
            <br />
            <span className="text-vibrant-pink">All students, one affordable subscription.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-12 font-light leading-relaxed max-w-8xl mx-auto">
            Affordable bulk subscriptions cover the whole school
          </p>


        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefit 1: Campus Access */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Build smarter students <span className="text-neon-green">with better news.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Build smarter students with better news.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Track Usage & Student Growth
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    University branding customization
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Zero ongoing maintenance required
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl overflow-hidden h-96 relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Diverse group of college students collaborating and studying together"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Benefit 2: Custom Implementation */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-gradient-to-br from-neon-green/20 to-vibrant-pink/20 rounded-3xl overflow-hidden h-96 flex items-center justify-center order-2 md:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff9a2587e1b874b6e9d34bfb6b703b455%2F0ade9e40550b449382b641e41d0ff1e4?format=webp&width=800"
                alt="Custom Landing Pages"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Custom landing pages.
                <br />
                <span className="text-vibrant-pink">Full support.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Following MSU's successful blueprint, we create branded landing
                pages, promote at campus events, and deliver thousands of
                engaged users.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Branded campus pages
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Event promotion support
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Implementation guidance
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 3: Alumni Extension */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Extend to alumni.
                <br />
                <span className="text-vibrant-pink">Lifelong impact.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Keep graduates connected with quality journalism. Alumni access
                extends your institutional impact while supporting news literacy
                and civic engagement.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Alumni subscription options
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Institutional mission alignment
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Ongoing engagement metrics
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/20 to-neon-green/20 rounded-3xl p-8 h-96 flex items-center justify-center overflow-hidden relative">
              {/* Alumni Analytics Dashboard */}
              <div className="w-full max-w-sm bg-midnight-black/80 rounded-2xl border border-neon-green/30 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-neon-green/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-neon-green rounded-full"></div>
                    <span className="text-neon-green font-semibold text-sm">Alumni Network</span>
                  </div>
                  <div className="text-electric-blue text-xs">●  ACTIVE</div>
                </div>

                {/* Alumni Stats Cards */}
                <div className="p-4 space-y-3">
                  <div className="bg-neon-green/10 rounded-lg p-3 border border-neon-green/20">
                    <div className="text-neon-green text-xs font-medium">Active Alumni</div>
                    <div className="text-white text-lg font-bold">12,847</div>
                    <div className="text-electric-blue text-xs">78% retention rate</div>
                  </div>

                  <div className="bg-electric-blue/10 rounded-lg p-3 border border-electric-blue/20">
                    <div className="text-electric-blue text-xs font-medium">Global Reach</div>
                    <div className="text-white text-lg font-bold">45 Countries</div>
                    <div className="text-neon-green text-xs">6 continents</div>
                  </div>

                  <div className="bg-vibrant-pink/10 rounded-lg p-3 border border-vibrant-pink/20">
                    <div className="text-vibrant-pink text-xs font-medium">Avg. Reading Time</div>
                    <div className="text-white text-lg font-bold">18 min</div>
                    <div className="text-soft-gray/60 text-xs">Daily engagement</div>
                  </div>
                </div>
              </div>

              {/* Floating Analytics Elements */}
              <div className="absolute top-6 right-6 w-2 h-2 bg-electric-blue rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-vibrant-pink rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/3 right-4 w-1 h-1 bg-neon-green rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-24" style={{ backgroundColor: '#1B9900' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-8">
            Transform how students access news— <br />
            <span className="text-vibrant-pink">Spotlight is the resource they'll use most.</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss custom pricing and implementation for your university.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#1B9900] hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-full border-2 border-white"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Schedule consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
