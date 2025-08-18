import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing data
  const pricing = {
    basic: { monthly: 0, yearly: 0 },
    premium: { monthly: 9.99, yearly: 99 }, // ~$8.25/month when billed yearly
    premiumPlus: { monthly: 13.99, yearly: 139 }, // ~$11.58/month when billed yearly
  };

  const formatPrice = (price: number) => {
    if (price === 0) return "$0";
    if (price >= 100) return `$${Math.floor(price)}`;
    return `$${price.toFixed(2)}`;
  };

  const getPeriodText = () => isYearly ? "/year" : "/month";
  const getYearlySavings = () => {
    const monthlyAnnual = pricing.premium.monthly * 12;
    const yearlyPrice = pricing.premium.yearly;
    const savings = Math.round(((monthlyAnnual - yearlyPrice) / monthlyAnnual) * 100);
    return savings;
  };

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
            src="https://www.dropbox.com/scl/fi/7h7khkwriqiozm2aau4tv/8199333-sd_960_540_25fps.mp4?rlkey=eelbnbtyquskiii8vfb1rqg88&dl=1"
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
          {/* Pricing Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-gray-800/50 rounded-full p-2 flex items-center space-x-4">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  !isYearly
                    ? "bg-electric-blue text-midnight-black"
                    : "text-soft-gray hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                  isYearly
                    ? "bg-electric-blue text-midnight-black"
                    : "text-soft-gray hover:text-white"
                }`}
              >
                <span>Yearly</span>
                {isYearly && (
                  <span className="bg-neon-green text-midnight-black px-2 py-1 rounded-full text-xs font-bold">
                    Save {getYearlySavings()}%
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-gray-800/30 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-display font-bold text-soft-gray mb-4">
                Basic
              </h3>
              <div className="text-4xl font-display font-bold text-soft-gray mb-6">
                {formatPrice(pricing.basic.monthly)}
                <span className="text-lg font-normal text-soft-gray/60">
                  {getPeriodText()}
                </span>
              </div>
              <div className="text-sm text-soft-gray/60 mb-6">
                with e-mail registration
              </div>

              <div className="space-y-3 mb-8 text-left text-sm">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                  <span className="text-soft-gray/80">
                    Total control of news feed
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                  <span className="text-soft-gray/80">
                    Limited access to 50+ paywalled publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                  <span className="text-soft-gray/80">
                    Unlimited access to 250+ other publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                  <span className="text-soft-gray/80">Play Sports Challenges</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                  <span className="text-soft-gray/80">Qualify for Promotions</span>
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
            <div className="bg-electric-blue/10 border border-electric-blue/30 rounded-3xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-electric-blue text-midnight-black px-4 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-soft-gray mb-4">
                Premium
              </h3>
              <div className="text-4xl font-display font-bold text-soft-gray mb-2">
                {formatPrice(isYearly ? pricing.premium.yearly : pricing.premium.monthly)}
                <span className="text-lg font-normal text-soft-gray/60">
                  {getPeriodText()}
                </span>
              </div>
              <div className="text-sm text-soft-gray/60 mb-2">OR</div>
              <div className="text-3xl font-display font-bold text-soft-gray mb-6">
                {formatPrice(isYearly ? pricing.premium.monthly * 12 : pricing.premium.yearly)}
                <span className="text-sm text-soft-gray/60">
                  {isYearly ? "/year" : "/year"}
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
            Need something <span className="text-electric-blue">bigger</span>?
          </h2>
          <p className="text-xl text-soft-gray/70 mb-12 max-w-2xl mx-auto">
            Custom solutions for universities and enterprise organizations.
          </p>

          <div className="bg-gray-800/30 rounded-2xl p-12 mb-12">
            <h3 className="text-2xl font-display font-bold text-electric-blue mb-6">
              University & Enterprise
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">
                    Bulk student subscriptions
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">Custom branding</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">Dedicated support</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">Analytics dashboard</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">
                    Alumni extension options
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-electric-blue mr-3" />
                  <span className="text-soft-gray/80">
                    Implementation support
                  </span>
                </div>
              </div>
            </div>
            <Link to="/contact">
              <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold px-8 py-4 rounded-full">
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
      <section className="py-24" style={{ backgroundColor: '#008888' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-8">
            Ready to break through <br />
            <span className="text-electric-blue">the paywalls</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Start your free trial today. No credit card required.
          </p>
          <Link to="/get-app">
            <Button
              size="lg"
              className="bg-white text-[#008888] hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-full border-2 border-white"
            >
              Try Premium free
            </Button>
          </Link>
          <p className="text-sm text-white/70 mt-8">
            * 30-day free trial. Cancel anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
