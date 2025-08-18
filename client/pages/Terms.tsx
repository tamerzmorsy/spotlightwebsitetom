import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  FileText,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  Scale,
} from "lucide-react";

const Terms = () => {
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
              <FileText className="w-5 h-5 text-electric-blue mr-2" />
              <span className="text-electric-blue font-medium">
                Terms of Service
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-electric-blue text-glow-blue">
                Terms of Service
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-soft-gray/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              <span className="text-neon-green font-semibold">
                Clear, fair terms
              </span>{" "}
              for using Spotlight News.
            </p>

            <p className="text-sm text-soft-gray/70 mb-12">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Key Terms */}
      <section className="py-20 bg-gradient-to-b from-midnight-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-4">
              Key Terms Summary
            </h2>
            <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto">
              The important stuff, explained simply
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-electric-blue/20 p-8 text-center">
              <div className="w-16 h-16 bg-electric-blue/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-electric-blue" />
              </div>
              <h3 className="text-xl font-display font-semibold text-electric-blue mb-4">
                Your Account
              </h3>
              <p className="text-soft-gray/80">
                You're responsible for your account security and activity. 
                Must be 13+ to use Spotlight.
              </p>
            </Card>

            <Card className="bg-gray-800/50 border-neon-green/20 p-8 text-center">
              <div className="w-16 h-16 bg-neon-green/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-neon-green" />
              </div>
              <h3 className="text-xl font-display font-semibold text-neon-green mb-4">
                Acceptable Use
              </h3>
              <p className="text-soft-gray/80">
                Use Spotlight for legitimate news consumption. 
                No spam, harassment, or illegal activities.
              </p>
            </Card>

            <Card className="bg-gray-800/50 border-vibrant-pink/20 p-8 text-center">
              <div className="w-16 h-16 bg-vibrant-pink/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-vibrant-pink" />
              </div>
              <h3 className="text-xl font-display font-semibold text-vibrant-pink mb-4">
                Fair & Transparent
              </h3>
              <p className="text-soft-gray/80">
                We provide service fairly to all users. 
                Clear pricing, no hidden fees.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-8">
              Detailed Terms
            </h2>

            <div className="space-y-8">
              <Card className="bg-gray-800/50 border-electric-blue/30 p-8">
                <h3 className="text-2xl font-display font-bold text-electric-blue mb-4">
                  1. Acceptance of Terms
                </h3>
                <p className="text-soft-gray/90 mb-4">
                  By accessing or using Spotlight News, you agree to be bound by these Terms of Service 
                  and our Privacy Policy. If you don't agree, please don't use our service.
                </p>
                <p className="text-soft-gray/80">
                  These terms apply to all users, including students, publishers, universities, 
                  and anyone accessing our website or mobile applications.
                </p>
              </Card>

              <Card className="bg-gray-800/50 border-neon-green/30 p-8">
                <h3 className="text-2xl font-display font-bold text-neon-green mb-4">
                  2. Account Registration & Security
                </h3>
                <div className="space-y-4 text-soft-gray/90">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Age Requirement:</strong> You must be at least 13 years old to create an account.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Accurate Information:</strong> Provide truthful information during registration.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Account Security:</strong> You're responsible for maintaining password security.
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Account Activity:</strong> You're responsible for all activity under your account.
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-vibrant-pink/30 p-8">
                <h3 className="text-2xl font-display font-bold text-vibrant-pink mb-4">
                  3. Acceptable Use Policy
                </h3>
                <p className="text-soft-gray/90 mb-4">
                  Spotlight is designed for legitimate news consumption and engagement. You agree not to:
                </p>
                <div className="space-y-3 text-soft-gray/80">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-vibrant-pink mr-3 mt-0.5 flex-shrink-0" />
                    <div>Use the service for any illegal activities or harassment</div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-vibrant-pink mr-3 mt-0.5 flex-shrink-0" />
                    <div>Attempt to hack, disrupt, or gain unauthorized access</div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-vibrant-pink mr-3 mt-0.5 flex-shrink-0" />
                    <div>Share accounts or violate other users' privacy</div>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-vibrant-pink mr-3 mt-0.5 flex-shrink-0" />
                    <div>Spam, abuse challenge systems, or manipulate statistics</div>
                  </div>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-electric-blue/30 p-8">
                <h3 className="text-2xl font-display font-bold text-electric-blue mb-4">
                  4. Subscription & Payment Terms
                </h3>
                <div className="space-y-4 text-soft-gray/90">
                  <p>
                    <strong>Free Trial:</strong> New users receive a free trial period as specified during signup.
                  </p>
                  <p>
                    <strong>Subscription Billing:</strong> Paid subscriptions are billed monthly or annually 
                    as selected. Billing occurs on your signup anniversary.
                  </p>
                  <p>
                    <strong>Cancellation:</strong> You can cancel anytime. Access continues until 
                    the end of your current billing period.
                  </p>
                  <p>
                    <strong>Campus Subscriptions:</strong> University bulk subscriptions may have 
                    different terms as agreed between Spotlight and the institution.
                  </p>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-neon-green/30 p-8">
                <h3 className="text-2xl font-display font-bold text-neon-green mb-4">
                  5. Content & Intellectual Property
                </h3>
                <div className="space-y-4 text-soft-gray/90">
                  <p>
                    <strong>News Content:</strong> We aggregate news from partner publications. 
                    Original content rights belong to respective publishers.
                  </p>
                  <p>
                    <strong>Spotlight Platform:</strong> Our app, website, algorithms, and features 
                    are proprietary to Spotlight Media Labs.
                  </p>
                  <p>
                    <strong>User Data:</strong> You retain rights to your personal information, 
                    governed by our Privacy Policy.
                  </p>
                  <p>
                    <strong>Fair Use:</strong> Content is provided for personal, non-commercial use. 
                    Respect publisher copyrights and terms.
                  </p>
                </div>
              </Card>

              <Card className="bg-gray-800/50 border-yellow-500/30 p-8">
                <h3 className="text-2xl font-display font-bold text-yellow-400 mb-4">
                  6. Disclaimers & Limitations
                </h3>
                <div className="space-y-4 text-soft-gray/90">
                  <p>
                    <strong>Service Availability:</strong> We strive for 99.9% uptime but cannot 
                    guarantee uninterrupted service.
                  </p>
                  <p>
                    <strong>Content Accuracy:</strong> We curate quality sources but are not 
                    responsible for the accuracy of third-party content.
                  </p>
                  <p>
                    <strong>Prize Fulfillment:</strong> Challenge prizes are awarded as described. 
                    Prize availability may be limited by location.
                  </p>
                  <p>
                    <strong>Account Termination:</strong> We reserve the right to suspend accounts 
                    that violate these terms.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Changes & Contact */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-midnight-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-800/50 border-electric-blue/30 p-8">
                <h3 className="text-2xl font-display font-bold text-electric-blue mb-4">
                  Changes to Terms
                </h3>
                <p className="text-soft-gray/90 mb-4">
                  We may update these terms occasionally. When we do:
                </p>
                <ul className="space-y-2 text-soft-gray/80">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-electric-blue mr-2 mt-1 flex-shrink-0" />
                    We'll notify you via email and in-app
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-electric-blue mr-2 mt-1 flex-shrink-0" />
                    Changes take effect 30 days after notice
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-electric-blue mr-2 mt-1 flex-shrink-0" />
                    Continued use means acceptance
                  </li>
                </ul>
              </Card>

              <Card className="bg-gray-800/50 border-neon-green/30 p-8">
                <h3 className="text-2xl font-display font-bold text-neon-green mb-4">
                  Questions?
                </h3>
                <p className="text-soft-gray/90 mb-6">
                  Need clarification on any terms? Our legal team is here to help.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-neon-green">Legal Team</div>
                    <div className="text-sm text-soft-gray/80">legal@spotlightnews.com</div>
                  </div>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      className="border-neon-green text-neon-green hover:bg-neon-green/10"
                    >
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
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

export default Terms;
