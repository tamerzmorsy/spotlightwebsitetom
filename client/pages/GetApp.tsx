import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Download,
  Star,
  CheckCircle,
  Smartphone,
} from "lucide-react";

const GetApp = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section - Apple style product showcase */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8">
            <span className="inline-block text-electric-blue text-lg font-medium tracking-wide">
              Spotlight News
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            Your feed, your rules.
            <br />
            <span className="text-electric-blue">Everywhere you go.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
            Available on iOS and Android.
            <br />
            Build clean feeds, win prizes, stay sharp.
          </p>

          {/* App Store Buttons */}
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

          {/* Phone Mockup */}
          <div className="relative mx-auto max-w-sm">
            <div className="bg-gradient-to-br from-electric-blue/20 to-vibrant-pink/20 rounded-[3rem] p-2 mx-auto">
              <div className="bg-midnight-black rounded-[2.5rem] p-4 h-[640px] w-[300px] flex items-center justify-center">
                <div className="text-center text-soft-gray/60">
                  <Smartphone className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-lg">Spotlight News App</p>
                  <p className="text-sm text-soft-gray/40">Mobile Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-6">
              Everything you love about news.
              <br />
              <span className="text-electric-blue">In your pocket.</span>
            </h2>
            <p className="text-xl text-soft-gray/70 max-w-2xl mx-auto">
              The full Spotlight experience, optimized for mobile. Clean feeds,
              smart tracking, real rewards.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-800/30 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="text-xl font-display font-semibold text-soft-gray mb-3">
                Custom Feeds
              </h3>
              <p className="text-soft-gray/70">
                Choose your sources, topics, and writers. Your feed, your way.
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="text-xl font-display font-semibold text-soft-gray mb-3">
                MyStats Tracking
              </h3>
              <p className="text-soft-gray/70">
                Track reading time, set goals, and build better news habits.
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 bg-vibrant-pink/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-vibrant-pink" />
              </div>
              <h3 className="text-xl font-display font-semibold text-soft-gray mb-3">
                Real Rewards
              </h3>
              <p className="text-soft-gray/70">
                Win AirPods, iPads, and more through reading challenges.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-soft-gray/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-gray mb-1">4.8★</div>
              <div className="text-soft-gray/50 text-sm">App Store rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-gray mb-1">
                250K+
              </div>
              <div className="text-soft-gray/50 text-sm">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-gray mb-1">500+</div>
              <div className="text-soft-gray/50 text-sm">Universities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-16">
            What students are <span className="text-electric-blue">saying</span>
            .
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-electric-blue text-electric-blue"
                  />
                ))}
              </div>
              <p className="text-soft-gray/90 mb-4 text-lg">
                "Finally, an app that doesn't waste my time. Clean design, real
                news, actual rewards."
              </p>
              <div className="text-sm text-electric-blue font-medium">
                Alex M. — MSU Student
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
              <p className="text-soft-gray/90 mb-4 text-lg">
                "Won AirPods just by reading articles I actually wanted to read.
                This app gets it."
              </p>
              <div className="text-sm text-electric-blue font-medium">
                Sarah L. — UCLA Student
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8">
            Ready to upgrade <br />
            <span className="text-electric-blue">your feed</span>?
          </h2>
          <p className="text-xl text-soft-gray/70 mb-12 max-w-2xl mx-auto">
            Join hundreds of thousands of users who've taken control of their
            news experience.
          </p>

          {/* App Store Buttons - Repeated for conversion */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

          <p className="text-sm text-soft-gray/50">
            Free download. No credit card required.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetApp;
