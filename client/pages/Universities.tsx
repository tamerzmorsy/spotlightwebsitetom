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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
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
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Access to hundreds of trusted publications in one place
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Strengthens news literacy and critical thinking
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Supports education in and out of the classroom
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Fosters civic engagement and informed citizenship
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Affordable, campus-wide access for every student
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
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-soft-gray mb-8 leading-tight">
                Custom landing pages.
                <br />
                <span className="text-neon-green">Full support.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                Following Lehigh's successful blueprint, we create branded landing
                pages, promote at campus events, and deliver engaged students.
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
                Save Local News.
                <br />
                <span className="text-neon-green">Strengthen Communities.</span>
              </h2>
              <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
                SpotlightNews shares revenue directly with local and college publishers, ensuring their survival while building the next generation of readers. Partnering with us means your institution supports real journalism, news literacy, and civic engagement at every level.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Direct revenue sharing with local and college outlets
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Sustainable support for struggling publications
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-neon-green mr-3" />
                  <span className="text-soft-gray/80">
                    Mission alignment: strengthen journalism and civic life
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-electric-blue/20 to-neon-green/20 rounded-3xl overflow-hidden h-96 relative">
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Local newspaper and community journalism"
                className="w-full h-full object-cover"
              />
              {/* Overlay with local news impact metrics */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight-black/90 via-midnight-black/60 to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm font-medium mb-1">Local Publishers Supported</p>
                    <p className="text-2xl font-bold text-neon-green">150+</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium mb-1">Revenue Shared</p>
                    <p className="text-2xl font-bold text-electric-blue">70%</p>
                  </div>
                </div>
              </div>
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
