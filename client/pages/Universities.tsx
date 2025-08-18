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
              For Universities
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            Campus news struggling?
            <br />
            <span className="text-vibrant-pink">Spotlight's your fix.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-12 font-light leading-relaxed max-w-8xl mx-auto">
            Bulk subscriptions for thousands of students—boost access,
            engagement, no stress.
          </p>

          {/* Primary CTA */}
          <div className="mb-8">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-vibrant-pink text-midnight-black hover:bg-pink-400 font-semibold text-xl px-12 py-6 rounded-full"
              >
                Get custom pricing*
              </Button>
            </Link>
          </div>

          {/* Feature highlight */}
          <p className="text-base text-soft-gray/60 mb-16">
            MSU model: 5,000+ students engaged since 2022. Big Ten expansion
            ready.
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
                One platform.
                <br />
                <span className="text-vibrant-pink">Thousands of students.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Centralize 300+ publications in one app. From campus papers to
                premium outlets, no algorithms or paywalls blocking access to
                quality journalism.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    300+ trusted publications
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    No algorithm interference
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-vibrant-pink mr-3" />
                  <span className="text-soft-gray/80">
                    Campus to global coverage
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink hover:text-midnight-black font-medium px-8 py-4 rounded-full"
              >
                View demo
              </Button>
            </div>
            <div className="bg-gradient-to-br from-vibrant-pink/20 to-electric-blue/20 rounded-3xl p-16 h-96 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                <Users className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Campus Integration</p>
              </div>
            </div>
          </div>

          {/* Benefit 2: Custom Implementation */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div className="bg-gradient-to-br from-neon-green/20 to-vibrant-pink/20 rounded-3xl p-16 h-96 flex items-center justify-center order-2 md:order-1">
              <div className="text-center text-soft-gray/60">
                <GraduationCap className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Custom Landing Pages</p>
              </div>
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
              <Button
                variant="outline"
                className="border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink hover:text-midnight-black font-medium px-8 py-4 rounded-full"
              >
                MSU case study
              </Button>
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
              <Button
                variant="outline"
                className="border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink hover:text-midnight-black font-medium px-8 py-4 rounded-full"
              >
                Alumni programs
              </Button>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/20 to-neon-green/20 rounded-3xl p-16 h-96 flex items-center justify-center">
              <div className="text-center text-soft-gray/60">
                <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg">Engagement Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story - MSU */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-8">
            MSU's <span className="text-vibrant-pink">success story.</span>
          </h2>
          <p className="text-xl text-soft-gray/70 mb-12">
            See how Michigan State University transformed campus news
            engagement.
          </p>

          <div className="bg-gray-800/30 rounded-2xl p-12 mb-16">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-vibrant-pink text-vibrant-pink"
                />
              ))}
            </div>
            <p className="text-soft-gray/90 mb-6 text-xl leading-relaxed">
              "MSU's blueprint: Over 5,000 students hooked since '22, feedback
              stellar. Big Ten's next."
            </p>
            <div className="text-vibrant-pink font-medium">
              Jack Harrison, ASMSU Chief of Staff
            </div>
          </div>

          {/* MSU Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-vibrant-pink mb-2">
                5,000+
              </div>
              <div className="text-soft-gray/60">Students engaged</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vibrant-pink mb-2">
                2022
              </div>
              <div className="text-soft-gray/60">Partnership started</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vibrant-pink mb-2">
                Big Ten
              </div>
              <div className="text-soft-gray/60">Expansion ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-24">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-6">
              Join <span className="text-vibrant-pink">500+ universities</span>
              <br />
              already transforming campus news.
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-vibrant-pink mb-2">
                500+
              </div>
              <div className="text-soft-gray/60">University partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vibrant-pink mb-2">
                250K+
              </div>
              <div className="text-soft-gray/60">Student users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vibrant-pink mb-2">
                300+
              </div>
              <div className="text-soft-gray/60">Publication partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vibrant-pink mb-2">
                95%
              </div>
              <div className="text-soft-gray/60">Satisfaction rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24" style={{ backgroundColor: '#7b004c' }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-display font-bold text-white mb-8">
            Ready to transform <br />
            <span className="text-vibrant-pink">campus news</span>?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Let's discuss custom pricing and implementation for your university.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-[#7b004c] hover:bg-gray-100 font-semibold text-lg px-10 py-5 rounded-full border-2 border-white"
              >
                <Handshake className="w-5 h-5 mr-2" />
                Schedule consultation
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#7b004c] font-semibold text-lg px-10 py-5 rounded-full"
            >
              Download case study
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-8">
            * Custom pricing based on student population and requirements.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Universities;
