import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section - Apple News inspired clean layout */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-8xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F0b0a31ccf47e48388d0e7b1d2cc829fd?format=webp&width=800"
              alt="Spotlight News"
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
          <div className="mb-16">
            <Link to="/get-app">
              <Button
                size="lg"
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold text-xl px-12 py-6 rounded-full"
              >
                Try it free*
              </Button>
            </Link>
          </div>

          {/* Promotional Text */}
          <p className="text-base text-soft-gray/60 mb-8">
            Get 3 months of Spotlight News+ free with a new iPhone, iPad, or
            Mac.¹
            <Link
              to="/get-app"
              className="text-electric-blue hover:underline ml-1"
            >
              Learn more
            </Link>
          </p>

          {/* Stats - Simplified */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-soft-gray/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-gray mb-1">
                250K+
              </div>
              <div className="text-soft-gray/50 text-sm">Active users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-gray mb-1">1M+</div>
              <div className="text-soft-gray/50 text-sm">Stories curated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-gray mb-1">500+</div>
              <div className="text-soft-gray/50 text-sm">Campus partners</div>
            </div>
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
            <p className="text-xl text-soft-gray/70 max-w-2xl mx-auto">
              Curate your perfect feed from 300+ trusted sources. No algorithms.
              No noise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-4xl font-display font-bold text-soft-gray mb-6">
                Your feed, <br />
                your <span className="text-electric-blue">choice.</span>
              </h3>
              <p className="text-lg text-soft-gray/70 mb-8">
                Choose your sources, topics, and writers. Create a news
                experience that's uniquely yours. No algorithmic surprises.
              </p>
              <Link to="/students">
                <Button
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight-black font-medium px-8 py-3 rounded-full"
                >
                  Learn more
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/20 to-vibrant-pink/20 rounded-3xl p-12 h-80 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                [Feed Preview Mockup]
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-12 h-80 flex items-center justify-center order-2 md:order-1">
              <div className="text-center text-soft-gray/60">
                [Stats & Rewards Mockup]
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-4xl font-display font-bold text-soft-gray mb-6">
                Read smart. <br />
                Get <span className="text-neon-green">rewarded.</span>
              </h3>
              <p className="text-lg text-soft-gray/70 mb-8">
                Track your reading with MyStats. Join challenges. Win real
                prizes like AirPods and iPads while staying informed.
              </p>
              <Link to="/challenge">
                <Button
                  variant="outline"
                  className="border-neon-green text-neon-green hover:bg-neon-green hover:text-midnight-black font-medium px-8 py-3 rounded-full"
                >
                  Join challenge
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-display font-bold text-soft-gray mb-6">
                One subscription. <br />
                <span className="text-vibrant-pink">All access.</span>
              </h3>
              <p className="text-lg text-soft-gray/70 mb-8">
                Break through paywalls with a single subscription. Access
                premium content from hundreds of publications.
              </p>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink hover:text-midnight-black font-medium px-8 py-3 rounded-full"
                >
                  View pricing
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-vibrant-pink/20 to-neon-green/20 rounded-3xl p-12 h-80 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                [Publication Logos Grid]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Sections - Clean Apple style */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-6">
              Built for <span className="text-electric-blue">everyone.</span>
            </h2>
          </div>

          <div className="space-y-20">
            {/* Students */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-display font-bold text-electric-blue mb-6">
                  For Students
                </h3>
                <p className="text-lg text-soft-gray/80 mb-8">
                  Done with feed chaos? Build a better scroll. Curate news that
                  hits right— choose your sources, topics, writers. No paywalls,
                  no distractions.
                </p>
                <Link to="/students">
                  <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold px-8 py-4 rounded-full">
                    Get started
                  </Button>
                </Link>
              </div>
              <div className="bg-electric-blue/10 rounded-3xl p-12 h-64 flex items-center justify-center">
                <div className="text-center text-electric-blue/60">
                  [Student App Mockup]
                </div>
              </div>
            </div>

            {/* Publishers */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-neon-green/10 rounded-3xl p-12 h-64 flex items-center justify-center order-2 md:order-1">
                <div className="text-center text-neon-green/60">
                  [Publisher Dashboard]
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-4xl font-display font-bold text-neon-green mb-6">
                  For Publishers
                </h3>
                <p className="text-lg text-soft-gray/80 mb-8">
                  Revenue fading? Spotlight brings the win. 70% revenue share,
                  no tech lift—connect with a fresh audience.
                </p>
                <Link to="/publishers">
                  <Button className="bg-neon-green text-midnight-black hover:bg-lime-400 font-semibold px-8 py-4 rounded-full">
                    Partner with us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Universities */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-display font-bold text-vibrant-pink mb-6">
                  For Universities
                </h3>
                <p className="text-lg text-soft-gray/80 mb-8">
                  Campus news struggling? Spotlight's your fix. Bulk
                  subscriptions for thousands of students—boost access,
                  engagement, no stress.
                </p>
                <Link to="/universities">
                  <Button className="bg-vibrant-pink text-midnight-black hover:bg-pink-400 font-semibold px-8 py-4 rounded-full">
                    Contact us
                  </Button>
                </Link>
              </div>
              <div className="bg-vibrant-pink/10 rounded-3xl p-12 h-64 flex items-center justify-center">
                <div className="text-center text-vibrant-pink/60">
                  [Campus Integration]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8">
            Ready to rebel against <br />
            <span className="text-electric-blue">bad feeds?</span>
          </h2>
          <p className="text-xl text-soft-gray/70 mb-12 max-w-2xl mx-auto">
            Join 250,000+ users who've taken control of their news experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-app">
              <Button
                size="lg"
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold text-lg px-10 py-5 rounded-full"
              >
                Download the app
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button
                size="lg"
                variant="outline"
                className="border-soft-gray text-soft-gray hover:bg-soft-gray hover:text-midnight-black font-semibold text-lg px-10 py-5 rounded-full"
              >
                Try online
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight-black border-t border-gray-800/50 py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F33482e5d334548d19dc3d9d06ed75615?format=webp&width=800"
                alt="Spotlight News"
                className="h-8 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(154deg) brightness(119%) contrast(119%)' }}
              />
            </div>
            <p className="text-soft-gray/60 max-w-md mx-auto">
              Delivering news, cutting chaos. The anti-algo rebels making news
              engaging and discourse meaningful.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-soft-gray mb-4">Audiences</h4>
              <div className="space-y-2">
                <Link
                  to="/students"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  For Students
                </Link>
                <Link
                  to="/publishers"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  For Publishers
                </Link>
                <Link
                  to="/universities"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  For Universities
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-soft-gray mb-4">Company</h4>
              <div className="space-y-2">
                <Link
                  to="/about"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-soft-gray mb-4">Support</h4>
              <div className="space-y-2">
                <Link
                  to="/privacy"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  Terms
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-soft-gray mb-4">Get the App</h4>
              <div className="space-y-2">
                <Link
                  to="/get-app"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  Download
                </Link>
                <Link
                  to="/onboarding"
                  className="block text-soft-gray/60 hover:text-electric-blue text-sm transition-colors"
                >
                  Try Online
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/50 pt-8 text-center">
            <p className="text-soft-gray/50 text-sm">
              © 2025 Spotlight Media Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
