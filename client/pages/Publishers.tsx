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
            Revenue fading?
            <br />
            <span className="text-neon-green">Spotlight brings the win.</span>
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
                Become a partner*
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
                Keep more of
                <br />
                what you <span className="text-neon-green">earn.</span>
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
            <div className="bg-[#121418] rounded-3xl overflow-hidden relative h-96">
              {/* Revenue Dashboard */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff9a2587e1b874b6e9d34bfb6b703b455%2F648ef9a420044c13b4fcc4f36cb3ad02?format=webp&width=800"
                  alt="Revenue Dashboard Analytics"
                  className="w-full h-full object-contain max-w-[540px] max-h-[320px] rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Benefit 2: Fresh Audience */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-[#121418] rounded-3xl overflow-hidden relative h-96 order-2 md:order-1">
              {/* Journalism Metrics Dashboard */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff9a2587e1b874b6e9d34bfb6b703b455%2F152acd9a385041b190085ea9152b057e?format=webp&width=800"
                  alt="Journalism Metrics - Q1 Creator Economy Performance"
                  className="w-full h-full object-contain max-w-[540px] max-h-[320px] rounded-lg"
                />
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
                  <span className="text-soft-gray/80">Growing engaged readership</span>
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
                Zero tech headaches.
                <br />
                <span className="text-neon-green">Maximum reach.</span>
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
            Ready to grow <br />
            <span style={{ color: '#39FF14' }}>your revenue</span>?
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
            * Standard partnership terms apply.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publishers;
