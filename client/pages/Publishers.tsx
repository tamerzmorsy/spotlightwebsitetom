import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  TrendingUp,
  DollarSign,
  Users,
  CheckCircle,
  BarChart3,
  Star,
  Handshake,
} from "lucide-react";

const Publishers = () => {
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
            src="https://www.dropbox.com/scl/fi/v5di0kdav8nm27qjh0g9y/8567120-sd_960_506_25fps.mp4?rlkey=uiw9d65wibw4bg5plyn8iee21&dl=1"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Tint */}
        <div className="absolute inset-0 bg-midnight-black/60 z-10"></div>

        <div className="relative z-20 text-center max-w-8xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8">
            <span className="inline-block text-neon-green text-lg font-medium tracking-wide">
              For Publishers
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            Aging Readership? Shedding Subscribers? <span className="text-neon-green">Spotlight brings the win.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-12 font-light leading-relaxed max-w-8xl mx-auto">
            70% revenue share, no tech lift—connect with a fresh audience.
          </p>

          {/* Primary CTA */}
          <div className="mb-8">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-neon-green text-midnight-black hover:bg-lime-400 font-semibold text-xl px-12 py-6 rounded-full"
              >
                Become a partner
              </Button>
            </Link>
          </div>

          {/* Feature highlight */}
          <p className="text-base text-soft-gray/60 mb-16">
            Standard terms. No hidden fees. Equal visibility for all partners.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefit 1: Revenue Share */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Fresh Audience.
                <br />
                <span className="text-neon-green">Incremental Readership.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                70% revenue share from subscriptions and advertising. No complex
                terms, no hidden fees. Just fair compensation for quality
                journalism.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">70% revenue share</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">Monthly payments</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Transparent reporting
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-midnight-black font-medium px-8 py-4 rounded-full"
              >
                View revenue model
              </Button>
            </div>
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-8 h-96 relative overflow-hidden">
              {/* Digital Wallet Interface */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Wallet Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-electric-blue" />
                    </div>
                    <span className="text-sm font-medium text-soft-gray">Revenue Wallet</span>
                  </div>
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                </div>

                {/* Main Balance Display */}
                <div className="text-center mb-8">
                  <p className="text-sm text-soft-gray/60 mb-1">Monthly Revenue</p>
                  <p className="text-4xl font-display font-bold text-neon-green mb-2">$24,750</p>
                  <p className="text-xs text-soft-gray/70">↗️ +18.5% from last month</p>
                </div>

                {/* Stacked Bills Animation */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Stack of bills */}
                    <div className="absolute w-16 h-10 bg-neon-green/30 rounded border border-neon-green/50 transform -rotate-3 animate-float" style={{animationDelay: '0s'}}></div>
                    <div className="absolute w-16 h-10 bg-electric-blue/30 rounded border border-electric-blue/50 transform rotate-2 animate-float" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-16 h-10 bg-vibrant-pink/30 rounded border border-vibrant-pink/50 transform rotate-1 animate-float" style={{animationDelay: '1s'}}></div>

                    {/* Floating coins */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-neon-green/40 rounded-full border-2 border-neon-green/60 flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
                      <span className="text-xs text-neon-green font-bold">$</span>
                    </div>
                    <div className="absolute -bottom-1 -left-2 w-4 h-4 bg-electric-blue/40 rounded-full border border-electric-blue/60 animate-bounce" style={{animationDelay: '0.8s'}}></div>
                  </div>
                </div>

                {/* Revenue Breakdown */}
                <div className="space-y-3 mt-auto">
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span className="text-sm text-soft-gray/80">Your Share (70%)</span>
                    <span className="text-sm font-semibold text-neon-green">$17,325</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                    <span className="text-sm text-soft-gray/80">Platform Fee</span>
                    <span className="text-sm font-semibold text-soft-gray/60">$7,425</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit 2: Fresh Audience */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-gradient-to-br from-electric-blue/20 to-vibrant-pink/20 rounded-3xl p-4 h-96 relative overflow-hidden order-2 md:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff9a2587e1b874b6e9d34bfb6b703b455%2F620ea2b624da4a828965a2ba6f059789?format=webp&width=800"
                alt="Students engaged with news on mobile devices"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Overlay with analytics info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight-black/90 via-midnight-black/60 to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm font-medium mb-1">Active Readers</p>
                    <p className="text-2xl font-bold text-neon-green">250K+</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium mb-1">Engagement Rate</p>
                    <p className="text-2xl font-bold text-electric-blue">87%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Reach readers who
                <br />
                <span className="text-neon-green">actually care.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Connect with engaged students and alumni who value quality
                journalism. University partnerships drive bulk subscriptions and
                steady revenue streams.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">250K+ active users</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    500+ university partnerships
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    High engagement rates
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-midnight-black font-medium px-8 py-4 rounded-full"
              >
                See audience data
              </Button>
            </div>
          </div>

          {/* Benefit 3: No Tech Hassle */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Maximum reach.
                <br />
                <span className="text-neon-green">Only Upside.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                We handle RSS feeds, app integration, and branding. You focus on
                creating great content while we ensure equal visibility
                alongside major publications.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Simple RSS integration
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Equal platform visibility
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    24/7 technical support
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-neon-green text-neon-green hover:bg-neon-green hover:text-midnight-black font-medium px-8 py-4 rounded-full"
              >
                Technical details
              </Button>
            </div>
            <div className="bg-gradient-to-br from-vibrant-pink/20 to-neon-green/20 rounded-3xl p-16 h-96 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Integration Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-16">
            Success <span className="text-neon-green">stories.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-neon-green text-neon-green"
                  />
                ))}
              </div>
              <p className="text-soft-gray/90 mb-4 text-lg">
                "70% revenue share and thousands of new readers? Spotlight
                delivered exactly what they promised."
              </p>
              <div className="text-sm text-neon-green font-medium">
                Campus Daily Editor
              </div>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-neon-green text-neon-green"
                  />
                ))}
              </div>
              <p className="text-soft-gray/90 mb-4 text-lg">
                "Integration was seamless. Our RSS feed was live within hours,
                and engagement tripled."
              </p>
              <div className="text-sm text-neon-green font-medium">
                Tech Publication Director
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-6">
              Join <span className="text-neon-green">300+ publishers</span>
              <br />
              already winning.
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-green mb-2">
                300+
              </div>
              <div className="text-soft-gray/60">Partner publications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-green mb-2">70%</div>
              <div className="text-soft-gray/60">Revenue share</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-green mb-2">
                500+
              </div>
              <div className="text-soft-gray/60">University partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24" style={{ backgroundColor: '#1B9900' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-8">
            Hundreds of publishers already signed. <br />
            <span style={{ color: '#39FF14' }}>Don't get left behind.</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join the platform that's helping publishers thrive in the digital
            age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#1B9900] hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-full border-2 border-white"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Become a partner
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1B9900] font-semibold text-lg px-10 py-5 rounded-full"
            >
              Download media kit
            </Button>
          </div>
          <p className="text-sm text-soft-gray/50 mt-8">
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publishers;
