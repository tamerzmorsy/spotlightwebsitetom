import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Bell,
  MapPin,
  Target,
  Newspaper,
  Users,
  Trophy,
  Globe,
  Heart,
  Briefcase,
  Car,
  Gamepad2,
  Zap,
  Camera,
  Music,
  Palette,
  Book,
  GraduationCap,
} from "lucide-react";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const topicCategories = [
    {
      name: "Local News",
      icon: MapPin,
      color: "electric-blue",
      description: "Campus and community updates",
    },
    {
      name: "Politics",
      icon: Globe,
      color: "vibrant-pink",
      description: "Government and policy news",
    },
    {
      name: "Sports",
      icon: Trophy,
      color: "neon-green",
      description: "Athletic events and scores",
    },
    {
      name: "Technology",
      icon: Zap,
      color: "electric-blue",
      description: "Tech trends and innovations",
    },
    {
      name: "Business",
      icon: Briefcase,
      color: "vibrant-pink",
      description: "Markets and economic news",
    },
    {
      name: "Entertainment",
      icon: Camera,
      color: "neon-green",
      description: "Movies, TV, and celebrities",
    },
    {
      name: "Health",
      icon: Heart,
      color: "electric-blue",
      description: "Wellness and medical news",
    },
    {
      name: "Science",
      icon: Target,
      color: "vibrant-pink",
      description: "Research and discoveries",
    },
    {
      name: "Arts & Culture",
      icon: Palette,
      color: "neon-green",
      description: "Museums, galleries, and events",
    },
    {
      name: "Education",
      icon: GraduationCap,
      color: "electric-blue",
      description: "Academic news and research",
    },
    {
      name: "Music",
      icon: Music,
      color: "vibrant-pink",
      description: "Artists, albums, and concerts",
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      color: "neon-green",
      description: "Video games and esports",
    },
  ];

  const handleTopicToggle = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const handleNotificationRequest = async () => {
    try {
      if ("Notification" in window) {
        const permission = await Notification.requestPermission();
        setNotificationsEnabled(permission === "granted");
      }
    } catch (error) {
      console.error("Notification permission error:", error);
    }
  };

  const handleLocationRequest = async () => {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocationEnabled(true);
            console.log(
              "Location:",
              position.coords.latitude,
              position.coords.longitude,
            );
          },
          (error) => {
            console.error("Location error:", error);
            setLocationEnabled(false);
          },
        );
      }
    } catch (error) {
      console.error("Geolocation error:", error);
    }
  };

  const handleFinishOnboarding = async () => {
    setIsSubmitting(true);

    // Simulate API call to save preferences
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Save user preferences
      const preferences = {
        topics: selectedTopics,
        notifications: notificationsEnabled,
        location: locationEnabled,
        onboardingCompleted: true,
      };

      localStorage.setItem("userPreferences", JSON.stringify(preferences));

      // Redirect to personalized dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Onboarding save error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "electric-blue":
        return {
          bg: "bg-electric-blue/20",
          text: "text-electric-blue",
          border: "border-electric-blue/30",
          hover: "hover:border-electric-blue/50",
        };
      case "neon-green":
        return {
          bg: "bg-neon-green/20",
          text: "text-neon-green",
          border: "border-neon-green/30",
          hover: "hover:border-neon-green/50",
        };
      case "vibrant-pink":
        return {
          bg: "bg-vibrant-pink/20",
          text: "text-vibrant-pink",
          border: "border-vibrant-pink/30",
          hover: "hover:border-vibrant-pink/50",
        };
      default:
        return {
          bg: "bg-gray-800/50",
          text: "text-soft-gray",
          border: "border-gray-700",
          hover: "hover:border-gray-600",
        };
    }
  };

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      {/* Header */}
      <div className="border-b border-gray-800 bg-midnight-black/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-display font-bold text-electric-blue text-glow-blue">
                Spotlight News
              </div>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-soft-gray/70">
                Step {currentStep} of 4
              </span>
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      step <= currentStep ? "bg-electric-blue" : "bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Welcome */}
        {currentStep === 1 && (
          <div className="text-center">
            <div className="inline-flex items-center bg-midnight-black/80 border border-electric-blue/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-electric-blue mr-2" />
              <span className="text-electric-blue font-medium">
                Welcome to the Revolution
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="text-electric-blue text-glow-blue">
                Let's Personalize
              </span>
              <br />
              <span className="text-soft-gray">Your News Experience</span>
              <span className="text-vibrant-pink ml-2">🚀</span>
            </h1>

            <p className="text-xl text-soft-gray/90 mb-12 max-w-2xl mx-auto">
              We'll help you set up your feed with topics you care about, enable
              notifications, and customize your location for relevant local
              news.
            </p>

            <Card className="bg-gray-800/50 border-electric-blue/30 p-8 mb-8 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-electric-blue" />
                  </div>
                  <h3 className="font-semibold text-electric-blue mb-2">
                    Choose Topics
                  </h3>
                  <p className="text-sm text-soft-gray/80">
                    Pick interests that matter to you
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Bell className="w-6 h-6 text-neon-green" />
                  </div>
                  <h3 className="font-semibold text-neon-green mb-2">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-soft-gray/80">
                    Get notified about breaking news
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-vibrant-pink/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-vibrant-pink" />
                  </div>
                  <h3 className="font-semibold text-vibrant-pink mb-2">
                    Local Content
                  </h3>
                  <p className="text-sm text-soft-gray/80">
                    See news relevant to your area
                  </p>
                </div>
              </div>
            </Card>

            <Button
              onClick={nextStep}
              className="bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-semibold text-lg px-8 py-4"
            >
              Let's Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 2: Topic Selection */}
        {currentStep === 2 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-electric-blue text-glow-blue mb-4">
                What Topics Interest You?
              </h2>
              <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto">
                Select at least 3 topics to customize your news feed. You can
                always change these later.
              </p>
              <div className="mt-4">
                <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue/30">
                  {selectedTopics.length} selected
                </Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {topicCategories.map((topic) => {
                const colorClasses = getColorClasses(topic.color);
                const isSelected = selectedTopics.includes(topic.name);
                const Icon = topic.icon;

                return (
                  <Card
                    key={topic.name}
                    className={`p-6 cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? `${colorClasses.border} ${colorClasses.bg} border-2`
                        : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                    }`}
                    onClick={() => handleTopicToggle(topic.name)}
                  >
                    <div className="text-center">
                      <div
                        className={`w-12 h-12 ${isSelected ? colorClasses.bg : "bg-gray-700/50"} rounded-lg flex items-center justify-center mx-auto mb-3`}
                      >
                        <Icon
                          className={`w-6 h-6 ${isSelected ? colorClasses.text : "text-soft-gray/70"}`}
                        />
                      </div>
                      <h3
                        className={`font-semibold mb-2 ${isSelected ? colorClasses.text : "text-soft-gray"}`}
                      >
                        {topic.name}
                      </h3>
                      <p className="text-xs text-soft-gray/60">
                        {topic.description}
                      </p>
                      {isSelected && (
                        <div className="mt-3">
                          <CheckCircle
                            className={`w-5 h-5 mx-auto ${colorClasses.text}`}
                          />
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="border-gray-700 text-soft-gray hover:bg-gray-800/50"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <Button
                onClick={nextStep}
                disabled={selectedTopics.length < 3}
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue (
                {selectedTopics.length >= 3
                  ? "Ready"
                  : `Need ${3 - selectedTopics.length} more`}
                )
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Notifications */}
        {currentStep === 3 && (
          <div className="text-center">
            <div className="mb-12">
              <div className="w-24 h-24 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Bell className="w-12 h-12 text-neon-green" />
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-neon-green mb-4">
                Stay in the Loop
              </h2>
              <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto mb-8">
                Get notified about breaking news and updates from your selected
                topics. We promise not to spam you—only the important stuff.
              </p>
            </div>

            <Card className="bg-gray-800/50 border-neon-green/30 p-8 mb-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5 text-neon-green" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-neon-green mb-2">
                      Breaking News
                    </h3>
                    <p className="text-sm text-soft-gray/80">
                      Get instant alerts for major news events
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-electric-blue mb-2">
                      Personalized Updates
                    </h3>
                    <p className="text-sm text-soft-gray/80">
                      News from your selected topics and interests
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-vibrant-pink/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-vibrant-pink" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-vibrant-pink mb-2">
                      Local News
                    </h3>
                    <p className="text-sm text-soft-gray/80">
                      Important updates from your campus and community
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-6 mb-12">
              <Button
                onClick={handleNotificationRequest}
                className={`${
                  notificationsEnabled
                    ? "bg-neon-green text-midnight-black"
                    : "bg-neon-green text-midnight-black hover:bg-lime-400"
                } neon-glow-green font-semibold text-lg px-8 py-4`}
                disabled={notificationsEnabled}
              >
                {notificationsEnabled ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Notifications Enabled
                  </>
                ) : (
                  <>
                    <Bell className="w-5 h-5 mr-2" />
                    Enable Notifications
                  </>
                )}
              </Button>

              {notificationsEnabled && (
                <div className="bg-neon-green/10 border border-neon-green/30 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-neon-green font-medium text-sm">
                    ✓ Great! You'll receive notifications for breaking news and
                    updates.
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="border-gray-700 text-soft-gray hover:bg-gray-800/50"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <Button
                onClick={nextStep}
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-semibold"
              >
                {notificationsEnabled ? "Continue" : "Skip for Now"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Location */}
        {currentStep === 4 && (
          <div className="text-center">
            <div className="mb-12">
              <div className="w-24 h-24 bg-vibrant-pink/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <MapPin className="w-12 h-12 text-vibrant-pink" />
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-vibrant-pink mb-4">
                Local News That Matters
              </h2>
              <p className="text-xl text-soft-gray/80 max-w-2xl mx-auto mb-8">
                Share your location to get campus news, local events, and
                community updates that are relevant to where you are.
              </p>
            </div>

            <Card className="bg-gray-800/50 border-vibrant-pink/30 p-8 mb-8 max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-vibrant-pink/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <GraduationCap className="w-5 h-5 text-vibrant-pink" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-vibrant-pink mb-2">
                      Campus Updates
                    </h3>
                    <p className="text-sm text-soft-gray/80">
                      News from your university and surrounding area
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-electric-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-electric-blue" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-electric-blue mb-2">
                      Community Events
                    </h3>
                    <p className="text-sm text-soft-gray/80">
                      Local activities, festivals, and gatherings
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5 text-neon-green" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-neon-green mb-2">
                      Regional News
                    </h3>
                    <p className="text-sm text-soft-gray/80">
                      Stories that impact your city and state
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="space-y-6 mb-12">
              <Button
                onClick={handleLocationRequest}
                className={`${
                  locationEnabled
                    ? "bg-vibrant-pink text-midnight-black"
                    : "bg-vibrant-pink text-midnight-black hover:bg-pink-400"
                } neon-glow-pink font-semibold text-lg px-8 py-4`}
                disabled={locationEnabled}
              >
                {locationEnabled ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Location Enabled
                  </>
                ) : (
                  <>
                    <MapPin className="w-5 h-5 mr-2" />
                    Share Location
                  </>
                )}
              </Button>

              {locationEnabled && (
                <div className="bg-vibrant-pink/10 border border-vibrant-pink/30 rounded-lg p-4 max-w-md mx-auto">
                  <p className="text-vibrant-pink font-medium text-sm">
                    ✓ Perfect! You'll see local news and campus updates in your
                    feed.
                  </p>
                </div>
              )}

              <p className="text-xs text-soft-gray/60 max-w-md mx-auto">
                Your location is only used to show relevant local content. We
                don't store or share your exact location.
              </p>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={prevStep}
                variant="outline"
                className="border-gray-700 text-soft-gray hover:bg-gray-800/50"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleFinishOnboarding}
                disabled={isSubmitting}
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-semibold text-lg px-8 py-4"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="w-5 h-5 border-2 border-midnight-black/30 border-t-midnight-black rounded-full animate-spin mr-2"></div>
                    Setting Up Your Feed...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Start Reading News
                    <Sparkles className="w-5 h-5 ml-2" />
                  </div>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;
