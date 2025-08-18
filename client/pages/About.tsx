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
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
            Algorithm-free feeds. Quality journalism.
            <br />A sustainable future for news.
          </p>

          {/* App Store Badges */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/us/app/spotlight-news/id1291820344"
              className="transition-transform hover:scale-105 active:scale-95"
              aria-label="Download on the App Store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-14 w-auto"
              />
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=net.spotlightlabs.spotlight"
              className="transition-transform hover:scale-105 active:scale-95"
              aria-label="Get it on Google Play"
              target="_blank"
              rel="noopener noreferrer"
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
              <Link to="/get-app">
                <Button
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight-black font-medium px-8 py-4 rounded-full"
                >
                  Join our mission
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/20 to-vibrant-pink/20 rounded-3xl p-16 h-96 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                <Target className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Mission & Vision</p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-gradient-to-br from-neon-green/20 to-electric-blue/20 rounded-3xl p-16 h-96 flex items-center justify-center order-2 md:order-1">
              <div className="text-center text-soft-gray/60">
                <Heart className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Core Values</p>
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

          {/* Our Impact */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Making an <span className="text-electric-blue">impact.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                From Michigan State University's 5,000+ engaged students to
                hundreds of partner publications, we're building a sustainable
                future for quality journalism.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-electric-blue mb-1">
                    250K+
                  </div>
                  <div className="text-soft-gray/60 text-sm">
                    Active readers
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric-blue mb-1">
                    300+
                  </div>
                  <div className="text-soft-gray/60 text-sm">
                    Publisher partners
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric-blue mb-1">
                    500+
                  </div>
                  <div className="text-soft-gray/60 text-sm">
                    University partners
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-electric-blue mb-1">
                    70%
                  </div>
                  <div className="text-soft-gray/60 text-sm">
                    Revenue to publishers
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-midnight-black font-medium px-8 py-4 rounded-full"
                >
                  Partner with us
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-vibrant-pink/20 to-neon-green/20 rounded-3xl p-16 h-96 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                <Users className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Our Community</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-8">
            Meet the <span className="text-electric-blue">team.</span>
          </h2>
          <p className="text-xl text-soft-gray/70 mb-16 max-w-2xl mx-auto">
            We're a passionate group of journalists, developers, and advocates
            working to reshape how news reaches readers.
          </p>

          <div className="bg-gray-800/30 rounded-2xl p-12">
            <div className="flex items-center justify-center mb-6">
              <Lightbulb className="w-12 h-12 text-electric-blue" />
            </div>
            <h3 className="text-2xl font-display font-bold text-soft-gray mb-4">
              Founded on Innovation
            </h3>
            <p className="text-soft-gray/70 mb-8 max-w-2xl mx-auto">
              Starting as a solution to algorithm fatigue and paywall barriers,
              Spotlight News has evolved into a comprehensive platform that
              serves students, publishers, and universities equally.
            </p>
            <Link to="/contact">
              <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-medium px-8 py-4 rounded-full">
                Join our team
              </Button>
            </Link>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-app">
              <Button
                size="lg"
                className="bg-white text-[#008888] hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-full border-2 border-white"
              >
                Download the app
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#008888] font-semibold text-lg px-10 py-5 rounded-full"
              >
                Get in touch
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
