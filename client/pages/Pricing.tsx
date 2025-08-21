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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Guest Plan */}
            <div className="bg-gray-800/30 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-display font-bold text-soft-gray mb-2">
                Guest
              </h3>
              <p className="text-sm text-soft-gray/60 mb-6">Free</p>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">
                    Total control of news feed
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">
                    Limited access to 50+ paywalled publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">
                    Unlimited access to 250+ other publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">Play Sports Challenges</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">Qualify for Promotions</span>
                </div>
              </div>

              <Link to="/get-app">
                <Button
                  variant="outline"
                  className="w-full border-soft-gray/30 text-soft-gray hover:bg-soft-gray hover:text-midnight-black font-medium py-3 rounded-full text-sm"
                >
                  Get started
                </Button>
              </Link>
            </div>

            {/* Basic Plan */}
            <div className="bg-gray-800/30 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-display font-bold text-soft-gray mb-2">
                Basic
              </h3>
              <p className="text-sm text-soft-gray/60 mb-6">Free with email registration</p>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">
                    Total control of news feed
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">
                    Limited access to 50+ paywalled publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">
                    Unlimited access to 250+ other publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">Play Sports Challenges</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">Qualify for Promotions</span>
                </div>
              </div>

              <Link to="/get-app">
                <Button
                  variant="outline"
                  className="w-full border-soft-gray/30 text-soft-gray hover:bg-soft-gray hover:text-midnight-black font-medium py-3 rounded-full text-sm"
                >
                  Get started
                </Button>
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="bg-electric-blue/10 border border-electric-blue/30 rounded-3xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-electric-blue text-midnight-black px-4 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-soft-gray mb-2">
                Premium
              </h3>
              <p className="text-sm text-soft-gray/60 mb-6">$9.99/month or $99/year</p>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">
                    Total control of news feed
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-electric-blue">
                    Unlimited access to 50+ paywalled publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-electric-blue">
                    Unlimited access to 250+ other publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">Play Sports Challenges</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">Qualify for Promotions</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-3 flex-shrink-0" />
                  <span className="text-sm text-electric-blue">No ads</span>
                </div>
              </div>

              <Link to="/get-app">
                <Button className="w-full bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold py-3 rounded-full text-sm">
                  Start free trial
                </Button>
              </Link>
            </div>

            {/* Premium+ Plan */}
            <div className="bg-neon-green/10 border border-neon-green/30 rounded-3xl p-8 text-center">
              <h3 className="text-xl font-display font-bold text-soft-gray mb-2">
                Premium+
              </h3>
              <p className="text-sm text-soft-gray/60 mb-6">$13.99/month or $139.99/year</p>

              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-neon-green mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">
                    Total control of news feed
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-neon-green mr-3 flex-shrink-0" />
                  <span className="text-sm text-neon-green">
                    Unlimited access to 50+ paywalled publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-neon-green mr-3 flex-shrink-0" />
                  <span className="text-sm text-neon-green">
                    Unlimited access to 250+ other publications
                  </span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-neon-green mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">Play Sports Challenges</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-neon-green mr-3 flex-shrink-0" />
                  <span className="text-sm text-soft-gray/80">Qualify for Promotions</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-neon-green mr-3 flex-shrink-0" />
                  <span className="text-sm text-neon-green">No ads</span>
                </div>
              </div>

              <Link to="/get-app">
                <Button
                  variant="outline"
                  className="w-full border-neon-green text-neon-green hover:bg-neon-green hover:text-midnight-black font-semibold py-3 rounded-full text-sm"
                >
                  Get started
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


      {/* Final CTA */}
      <section className="py-24" style={{ backgroundColor: '#008888' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-8">
            Ready to break through <br />
            <span className="text-electric-blue">the paywalls</span>?
          </h2>
          <Link to="/get-app">
            <Button
              size="lg"
              className="bg-white text-[#008888] hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-full border-2 border-white"
            >
              Try Premium free
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
