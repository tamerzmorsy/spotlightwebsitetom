import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-soft-gray/10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-electric-blue mb-4">
              SpotlightNews
            </h3>
            <p className="text-soft-gray/70 mb-6 max-w-md">
              Reinventing news for a new generation. Algorithm-free feeds, quality 
              journalism, and a sustainable future for the industry.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-soft-gray/60 hover:text-electric-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-soft-gray/60 hover:text-electric-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-soft-gray/60 hover:text-electric-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-soft-gray/60 hover:text-electric-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold text-soft-gray mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/students" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  For Students
                </Link>
              </li>
              <li>
                <Link 
                  to="/publishers" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  For Publishers
                </Link>
              </li>
              <li>
                <Link 
                  to="/universities" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  For Universities
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/get-app" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  Download App
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-soft-gray mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/about" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/campus-eligibility" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors"
                >
                  Campus Access
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@spotlightnews.com" 
                  className="text-soft-gray/70 hover:text-electric-blue transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-soft-gray/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-soft-gray/60 text-sm mb-4 md:mb-0">
              © 2025 Spotlight News. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-soft-gray/60 hover:text-electric-blue transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-soft-gray/60 hover:text-electric-blue transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
