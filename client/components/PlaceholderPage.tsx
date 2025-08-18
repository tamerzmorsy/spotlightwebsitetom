import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
  accentColor: "electric-blue" | "neon-green" | "vibrant-pink";
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  description,
  accentColor,
}) => {
  const colorClasses = {
    "electric-blue": {
      text: "text-electric-blue",
      glow: "text-glow-blue",
      bg: "bg-electric-blue",
      border: "border-electric-blue/30",
      hover: "hover:border-electric-blue/50",
    },
    "neon-green": {
      text: "text-neon-green",
      glow: "text-glow-green",
      bg: "bg-neon-green",
      border: "border-neon-green/30",
      hover: "hover:border-neon-green/50",
    },
    "vibrant-pink": {
      text: "text-vibrant-pink",
      glow: "text-glow-pink",
      bg: "bg-vibrant-pink",
      border: "border-vibrant-pink/30",
      hover: "hover:border-vibrant-pink/50",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-midnight-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-display font-bold text-electric-blue text-glow-blue">
                Spotlight News
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/students"
                className="text-soft-gray hover:text-electric-blue transition-colors"
              >
                For Students
              </Link>
              <Link
                to="/publishers"
                className="text-soft-gray hover:text-neon-green transition-colors"
              >
                For Publishers
              </Link>
              <Link
                to="/universities"
                className="text-soft-gray hover:text-vibrant-pink transition-colors"
              >
                For Universities
              </Link>
              <Button className="bg-electric-blue text-midnight-black hover:bg-electric-blue/90 neon-glow-blue font-medium">
                Download App
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <Link
            to="/"
            className={`inline-flex items-center ${colors.text} hover:${colors.text}/80 transition-colors mb-8`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card
          className={`bg-gray-900/50 ${colors.border} ${colors.hover} p-12 backdrop-blur-sm transition-all duration-300`}
        >
          <div className="text-center">
            <div
              className={`w-20 h-20 ${colors.bg}/20 rounded-full flex items-center justify-center mx-auto mb-8`}
            >
              <Construction className={`w-10 h-10 ${colors.text}`} />
            </div>

            <h1
              className={`text-4xl md:text-5xl font-display font-bold ${colors.text} ${colors.glow} mb-6`}
            >
              {title}
            </h1>

            <p className="text-xl text-soft-gray/90 mb-8 max-w-2xl mx-auto">
              {description}
            </p>

            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
              <p className="text-soft-gray/80 mb-4">
                🚧 This page is currently under construction. Want us to
                prioritize building it out?
              </p>
              <p className="text-sm text-soft-gray/70">
                Continue prompting to let us know what content you'd like to see
                here, and we'll build it next!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className={`${colors.bg} text-midnight-black hover:${colors.bg}/90 font-semibold`}
                asChild
              >
                <Link to="/">Return to Homepage</Link>
              </Button>
              <Button
                variant="outline"
                className={`${colors.border} ${colors.text} hover:${colors.bg}/10`}
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlaceholderPage;
