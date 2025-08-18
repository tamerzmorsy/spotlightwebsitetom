import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  Shield,
  Eye,
  Lock,
  Users,
  Database,
  Mail,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-vibrant-pink/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-soft-gray hover:text-electric-blue transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="inline-flex items-center bg-midnight-black/80 border border-electric-blue/30 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 text-electric-blue mr-2" />
              <span className="text-electric-blue font-medium">
                Your Privacy Matters
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-electric-blue text-glow-blue">
                Privacy Policy
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-soft-gray/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="text-neon-green font-semibold">
                Transparency is our core value.
              </span>{" "}
              Here's exactly how we handle your data.
            </p>

            <p className="text-sm text-soft-gray/70 mb-12">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto">
              Simple, clear commitments about your data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-electric-blue/20 p-8 text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-display font-semibold text-electric-blue mb-4">
                Complete Transparency
              </h3>
              <p className="text-soft-gray/80">
                We tell you exactly what data we collect, why we collect it, 
                and how we use it. No hidden tracking or surprise data use.
              </p>
            </Card>

            <Card className="bg-gray-800/50 border-neon-green/20 p-8 text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-display font-semibold text-neon-green mb-4">
                Data Minimization
              </h3>
              <p className="text-soft-gray/80">
                We only collect data that's essential for providing our service. 
                If we don't need it, we don't collect it.
              </p>
            </Card>

            <Card className="bg-gray-800/50 border-vibrant-pink/20 p-8 text-center">
              <div className="w-16 h-16 bg-vibrant-pink/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-vibrant-pink" />
              </div>
              <h3 className="text-xl font-display font-semibold text-vibrant-pink mb-4">
                Your Control
              </h3>
              <p className="text-soft-gray/80">
                You own your data. You can access, modify, export, 
                or delete your information at any time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Collect */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-8">
              What Information We Collect
            </h2>

            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-electric-blue/30 p-8">
                <h3 className="text-2xl font-display font-bold text-electric-blue mb-4 flex items-center">
                  <Database className="w-6 h-6 mr-3" />
                  Account Information
                </h3>
                <p className="text-soft-gray/90 mb-4">
                  When you create an account, we collect:
                </p>
                <ul className="space-y-2 text-soft-gray/80">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 mt-1 flex-shrink-0" />
                    Email address (for login and important updates)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 mt-1 flex-shrink-0" />
                    Name and university affiliation (for personalization)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 mt-1 flex-shrink-0" />
                    Reading preferences and topic selections
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 mt-1 flex-shrink-0" />
                    Optional: Student ID for campus verification
                  </li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-neon-green/30 p-8">
                <h3 className="text-2xl font-display font-bold text-neon-green mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3" />
                  Usage Data
                </h3>
                <p className="text-soft-gray/90 mb-4">
                  To improve your experience and provide MyStats, we track:
                </p>
                <ul className="space-y-2 text-soft-gray/80">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 mt-1 flex-shrink-0" />
                    Articles read and time spent reading
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 mt-1 flex-shrink-0" />
                    App usage patterns and feature interactions
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 mt-1 flex-shrink-0" />
                    Challenge participation and achievements
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-neon-green mr-2 mt-1 flex-shrink-0" />
                    General location (city/state) for local news (if enabled)
                  </li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-vibrant-pink/30 p-8">
                <h3 className="text-2xl font-display font-bold text-vibrant-pink mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  What We DON'T Collect
                </h3>
                <p className="text-soft-gray/90 mb-4">
                  We're committed to data minimization:
                </p>
                <ul className="space-y-2 text-soft-gray/80">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-vibrant-pink mr-2 mt-1 flex-shrink-0" />
                    We don't track your browsing outside Spotlight
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-vibrant-pink mr-2 mt-1 flex-shrink-0" />
                    No social media account linking required
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-vibrant-pink mr-2 mt-1 flex-shrink-0" />
                    No sensitive personal information beyond basics
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-vibrant-pink mr-2 mt-1 flex-shrink-0" />
                    No selling of data to third parties, ever
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-midnight-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-8">
              How We Use Your Information
            </h2>

            <div className="space-y-6">
              <Card className="bg-gray-800/50 border-electric-blue/30 p-6">
                <h3 className="text-xl font-semibold text-electric-blue mb-3">
                  Personalized News Experience
                </h3>
                <p className="text-soft-gray/80">
                  We use your topic preferences and reading history to curate relevant articles 
                  and improve your feed quality over time.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-neon-green/30 p-6">
                <h3 className="text-xl font-semibold text-neon-green mb-3">
                  MyStats & Progress Tracking
                </h3>
                <p className="text-soft-gray/80">
                  Your reading data helps us provide insights about your news consumption 
                  habits and progress toward reading goals.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-vibrant-pink/30 p-6">
                <h3 className="text-xl font-semibold text-vibrant-pink mb-3">
                  Challenge Participation
                </h3>
                <p className="text-soft-gray/80">
                  We track your reading for challenges and leaderboards, always 
                  with your explicit participation and consent.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-electric-blue/30 p-6">
                <h3 className="text-xl font-semibold text-electric-blue mb-3">
                  Service Communications
                </h3>
                <p className="text-soft-gray/80">
                  We use your email for essential service updates, security notifications, 
                  and optional news alerts (you control frequency).
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-midnight-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-8">
              Your Privacy Rights
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-neon-green/30 p-6">
                <h3 className="text-xl font-semibold text-neon-green mb-4">
                  Access & Export
                </h3>
                <p className="text-soft-gray/80 mb-4">
                  Request a complete copy of all data we have about you, 
                  including reading history and preferences.
                </p>
                <Button
                  variant="outline"
                  className="border-neon-green text-neon-green hover:bg-neon-green/10"
                >
                  Request Data Export
                </Button>
              </Card>

              <Card className="bg-gray-800/50 border-vibrant-pink/30 p-6">
                <h3 className="text-xl font-semibold text-vibrant-pink mb-4">
                  Modify & Update
                </h3>
                <p className="text-soft-gray/80 mb-4">
                  Change your preferences, update your information, 
                  or correct any inaccuracies in your account.
                </p>
                <Link to="/login">
                  <Button
                    variant="outline"
                    className="border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink/10"
                  >
                    Update Preferences
                  </Button>
                </Link>
              </Card>

              <Card className="bg-gray-800/50 border-electric-blue/30 p-6">
                <h3 className="text-xl font-semibold text-electric-blue mb-4">
                  Delete Account
                </h3>
                <p className="text-soft-gray/80 mb-4">
                  Permanently delete your account and all associated data. 
                  This action cannot be undone.
                </p>
                <Button
                  variant="outline"
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue/10"
                >
                  Delete Account
                </Button>
              </Card>

              <Card className="bg-gray-800/50 border-yellow-500/30 p-6">
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  Data Portability
                </h3>
                <p className="text-soft-gray/80 mb-4">
                  Export your data in standard formats that can be 
                  imported into other services.
                </p>
                <Button
                  variant="outline"
                  className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/10"
                >
                  Export Data
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-6">
            Questions About Privacy?
          </h2>
          <p className="text-xl text-soft-gray/90 mb-8">
            We're here to help. Contact our privacy team with any questions or concerns.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gray-800/50 border-electric-blue/30 p-6">
              <Mail className="w-8 h-8 text-electric-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-electric-blue mb-2">
                Privacy Team
              </h3>
              <p className="text-soft-gray/80 text-sm">
                privacy@spotlightnews.com
              </p>
            </Card>

            <Card className="bg-gray-800/50 border-neon-green/30 p-6">
              <Shield className="w-8 h-8 text-neon-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neon-green mb-2">
                Data Protection Officer
              </h3>
              <p className="text-soft-gray/80 text-sm">
                dpo@spotlightnews.com
              </p>
            </Card>
          </div>

          <Link to="/contact">
            <Button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-semibold text-lg px-8 py-4">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link
              to="/"
              className="text-2xl font-display font-bold text-electric-blue text-glow-blue mb-4 block"
            >
              Spotlight News
            </Link>
            <p className="text-soft-gray/80">
              Delivering news, cutting chaos. The anti-algo rebels making news
              engaging and discourse meaningful.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
