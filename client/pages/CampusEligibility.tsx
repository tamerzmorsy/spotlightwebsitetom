import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import {
  GraduationCap,
  Search,
  CheckCircle,
  X,
  MapPin,
  Users,
  Star,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";

const CampusEligibility = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  // Mock data for universities with Spotlight access
  const eligibleSchools = [
    {
      name: "Michigan State University",
      location: "East Lansing, MI",
      students: "5,000+",
      tier: "Full Access",
      status: "active",
      features: [
        "Premium Publications",
        "Campus Papers",
        "Alumni Access",
        "Challenges & Rewards",
      ],
    },
    {
      name: "Johns Hopkins University",
      location: "Baltimore, MD",
      students: "2,000+",
      tier: "Full Access",
      status: "active",
      features: [
        "Premium Publications",
        "Campus Papers",
        "Research Focus",
        "Alumni Access",
      ],
    },
    {
      name: "University of Illinois",
      location: "Urbana-Champaign, IL",
      students: "Pending",
      tier: "Coming Soon",
      status: "pending",
      features: [
        "Big Ten Partnership",
        "Premium Publications",
        "Campus Papers",
      ],
    },
    {
      name: "Indiana University",
      location: "Bloomington, IN",
      students: "Pending",
      tier: "Coming Soon",
      status: "pending",
      features: [
        "Big Ten Partnership",
        "Premium Publications",
        "Campus Papers",
      ],
    },
  ];

  const filteredSchools = eligibleSchools.filter(
    (school) =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-vibrant-pink/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Link
              to="/students"
              className="inline-flex items-center text-soft-gray hover:text-electric-blue transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Students
            </Link>

            <div className="inline-flex items-center bg-midnight-black/80 border border-electric-blue/30 rounded-full px-6 py-3 mb-8">
              <GraduationCap className="w-5 h-5 text-electric-blue mr-2" />
              <span className="text-electric-blue font-medium">
                Campus Access
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-electric-blue text-glow-blue">
                Check Your Campus
              </span>
              <br />
              <span className="text-soft-gray">Eligibility</span>
              <span className="text-vibrant-pink ml-2">🎓</span>
            </h1>

            <p className="text-xl md:text-2xl text-soft-gray/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              See if your university has Spotlight access.{" "}
              <span className="text-neon-green font-semibold">
                If not, help us bring it to your campus!
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-b from-midnight-black to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-800/50 border-electric-blue/30 p-8 backdrop-blur-sm">
            <div className="flex items-center space-x-4 mb-6">
              <Search className="w-6 h-6 text-electric-blue" />
              <input
                type="text"
                placeholder="Search your university or college..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none focus:border-electric-blue/50 transition-colors"
              />
            </div>

            <div className="text-sm text-soft-gray/70 mb-6">
              Search from our growing network of {eligibleSchools.length}{" "}
              partner universities
            </div>

            {searchTerm && (
              <div className="space-y-4">
                {filteredSchools.length > 0 ? (
                  filteredSchools.map((school, index) => (
                    <Card
                      key={index}
                      className={`bg-gray-900/50 border p-6 cursor-pointer transition-all duration-300 ${
                        school.status === "active"
                          ? "border-neon-green/30 hover:border-neon-green/50"
                          : "border-yellow-500/30 hover:border-yellow-500/50"
                      }`}
                      onClick={() => setSelectedSchool(school.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-display font-semibold text-soft-gray">
                              {school.name}
                            </h3>
                            <Badge
                              className={`${
                                school.status === "active"
                                  ? "bg-neon-green/20 text-neon-green border-neon-green/30"
                                  : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                              }`}
                            >
                              {school.tier}
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-soft-gray/70">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {school.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {school.students} Students
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {school.status === "active" ? (
                            <CheckCircle className="w-6 h-6 text-neon-green" />
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2 border-yellow-500/50" />
                          )}
                        </div>
                      </div>

                      {selectedSchool === school.name && (
                        <div className="mt-6 pt-6 border-t border-gray-700">
                          <h4 className="font-semibold text-soft-gray mb-3">
                            Available Features:
                          </h4>
                          <div className="grid grid-cols-2 gap-2 mb-6">
                            {school.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center text-sm text-soft-gray/80"
                              >
                                <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>

                          {school.status === "active" ? (
                            <div className="flex space-x-4">
                              <Button
                                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-semibold"
                                onClick={() =>
                                  (window.location.href = "/login")
                                }
                              >
                                Access Your Account
                              </Button>
                              <Button
                                variant="outline"
                                className="border-neon-green text-neon-green hover:bg-neon-green/10"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Campus Portal
                              </Button>
                            </div>
                          ) : (
                            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                              <p className="text-yellow-400 font-medium mb-2">
                                Coming Soon!
                              </p>
                              <p className="text-sm text-soft-gray/80 mb-4">
                                We're working with {school.name} to bring
                                Spotlight access to their students. Want to help
                                make it happen?
                              </p>
                              <Button
                                variant="outline"
                                className="border-vibrant-pink text-vibrant-pink hover:bg-vibrant-pink/10"
                                onClick={() =>
                                  (window.location.href = "/contact")
                                }
                              >
                                Help Bring Spotlight to Campus
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </Card>
                  ))
                ) : (
                  <Card className="bg-gray-900/50 border-gray-700 p-8 text-center">
                    <X className="w-8 h-8 text-soft-gray/50 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-soft-gray mb-2">
                      School Not Found
                    </h3>
                    <p className="text-soft-gray/80 mb-6">
                      Don't see your university? We're constantly expanding our
                      network.
                    </p>
                    <Button
                      className="bg-vibrant-pink text-midnight-black hover:bg-pink-400 neon-glow-pink font-semibold"
                      onClick={() => (window.location.href = "/contact")}
                    >
                      Request Campus Access
                    </Button>
                  </Card>
                )}
              </div>
            )}
          </Card>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-4">
              Partner Universities
            </h2>
            <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto">
              Join the growing network of campuses with Spotlight access
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {eligibleSchools
              .filter((school) => school.status === "active")
              .map((school, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-neon-green/20 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-neon-green mb-2">
                        {school.name}
                      </h3>
                      <div className="flex items-center text-sm text-soft-gray/70 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {school.location}
                      </div>
                      <div className="flex items-center text-sm text-electric-blue font-medium">
                        <Users className="w-4 h-4 mr-1" />
                        {school.students} Active Students
                      </div>
                    </div>
                    <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
                      {school.tier}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {school.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-soft-gray/80"
                      >
                        <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-soft-gray/80 mb-6">
              Don't see your school? We're expanding to new campuses every
              month.
            </p>
            <Button
              className="bg-vibrant-pink text-midnight-black hover:bg-pink-400 neon-glow-pink font-semibold text-lg px-8 py-4"
              onClick={() => (window.location.href = "/universities")}
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Bring Spotlight to Your Campus
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <Link
                to="/"
                className="text-2xl font-display font-bold text-electric-blue text-glow-blue mb-4 block"
              >
                Spotlight News
              </Link>
              <p className="text-soft-gray/80 max-w-md">
                Delivering news, cutting chaos. The anti-algo rebels making news
                engaging and discourse meaningful.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-soft-gray mb-4">
                For Everyone
              </h4>
              <div className="space-y-2">
                <Link
                  to="/students"
                  className="block text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  For Students
                </Link>
                <Link
                  to="/publishers"
                  className="block text-soft-gray/70 hover:text-neon-green transition-colors"
                >
                  For Publishers
                </Link>
                <Link
                  to="/universities"
                  className="block text-soft-gray/70 hover:text-vibrant-pink transition-colors"
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
                  className="block text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="block text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="block text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-soft-gray/70 text-sm">
              © 2025 Spotlight Media Labs. Delivering news, cutting chaos.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-soft-gray/70 hover:text-electric-blue text-sm transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-soft-gray/70 hover:text-electric-blue text-sm transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CampusEligibility;
