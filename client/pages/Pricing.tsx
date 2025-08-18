import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section - Apple News style */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8">
            <span className="inline-block text-electric-blue text-lg font-medium tracking-wide">
              Pricing
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            One subscription.
            <br />
            <span className="text-electric-blue">All access.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
            Break through paywalls. Support quality journalism.
            <br />
            Publishers get 70% of every subscription.
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
        </div>
      </section>

      {/* Pricing Cards - Clean Apple style */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-800/30 rounded-3xl p-12 text-center">
              <h3 className="text-2xl font-display font-bold text-soft-gray mb-4">
                Free
              </h3>
              <div className="text-5xl font-display font-bold text-soft-gray mb-8">
                $0
                <span className="text-lg font-normal text-soft-gray/60">
                  /month
                </span>
              </div>

              <div className="space-y-4 mb-12 text-left">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">
                    Access to 100+ publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">
                    Custom feed creation
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">
                    Basic reading challenges
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">MyStats tracking</span>
                </div>
              </div>

              <Link to="/get-app">
                <Button
                  variant="outline"
                  className="w-full border-soft-gray/30 text-soft-gray hover:bg-soft-gray hover:text-midnight-black font-medium py-4 rounded-full"
                >
                  Get started
                </Button>
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-electric-blue/10 border border-electric-blue/30 rounded-3xl p-12 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-electric-blue text-midnight-black px-6 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-soft-gray mb-4">
                Premium
              </h3>
              <div className="text-5xl font-display font-bold text-soft-gray mb-8">
                $8.99
                <span className="text-lg font-normal text-soft-gray/60">
                  /month
                </span>
              </div>

              <div className="space-y-4 mb-12 text-left">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">All free features</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">
                    Access to 300+ premium sources
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">
                    No paywall restrictions
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">
                    Premium challenges & rewards
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">Advanced analytics</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-soft-gray/80">Priority support</span>
                </div>
              </div>

              <Link to="/get-app">
                <Button className="w-full bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold py-4 rounded-full">
                  Start free trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-8">
            Need something <span className="text-vibrant-pink">bigger</span>?
          </h2>
          <p className="text-xl text-soft-gray/70 mb-12 max-w-2xl mx-auto">
            Custom solutions for universities and enterprise organizations.
          </p>

          <div className="bg-gray-800/30 rounded-2xl p-12 mb-12">
            <h3 className="text-2xl font-display font-bold text-vibrant-pink mb-6">
              University & Enterprise
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Bulk student subscriptions
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">Custom branding</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">Dedicated support</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">Analytics dashboard</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Alumni extension options
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Implementation support
                  </span>
                </div>
              </div>
            </div>
            <Link to="/contact">
              <Button className="bg-vibrant-pink text-midnight-black hover:bg-pink-400 font-semibold px-8 py-4 rounded-full">
                Contact sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-16 text-center">
            Frequently asked{" "}
            <span className="text-electric-blue">questions.</span>
          </h2>

          <div className="space-y-8">
            <div className="border-b border-soft-gray/10 pb-8">
              <h3 className="text-xl font-semibold text-soft-gray mb-4">
                How does the free trial work?
              </h3>
              <p className="text-soft-gray/70">
                Start with full Premium access for 30 days. No credit card
                required. After the trial, choose to continue with Premium or
                switch to the free plan.
              </p>
            </div>

            <div className="border-b border-soft-gray/10 pb-8">
              <h3 className="text-xl font-semibold text-soft-gray mb-4">
                How do publishers benefit?
              </h3>
              <p className="text-soft-gray/70">
                Publishers receive 70% of subscription revenue from their
                readers. This creates a sustainable model that rewards quality
                journalism.
              </p>
            </div>

            <div className="border-b border-soft-gray/10 pb-8">
              <h3 className="text-xl font-semibold text-soft-gray mb-4">
                Can I cancel anytime?
              </h3>
              <p className="text-soft-gray/70">
                Yes, you can cancel your subscription at any time. You'll retain
                access until the end of your billing period.
              </p>
            </div>

            <div className="border-b border-soft-gray/10 pb-8">
              <h3 className="text-xl font-semibold text-soft-gray mb-4">
                What about student discounts?
              </h3>
              <p className="text-soft-gray/70">
                Many universities offer bulk subscriptions for students. Check
                if your campus is a partner, or contact us to bring Spotlight to
                your university.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8">
            Ready to break through <br />
            <span className="text-electric-blue">the paywalls</span>?
          </h2>
          <p className="text-xl text-soft-gray/70 mb-12 max-w-2xl mx-auto">
            Start your free trial today. No credit card required.
          </p>
          <Link to="/get-app">
            <Button
              size="lg"
              className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold text-lg px-10 py-5 rounded-full"
            >
              Try Premium free
            </Button>
          </Link>
          <p className="text-sm text-soft-gray/50 mt-8">
            * 30-day free trial. Cancel anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
