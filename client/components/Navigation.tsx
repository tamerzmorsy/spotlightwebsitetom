import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isCurrentPage = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors font-medium text-sm";
    if (isCurrentPage(path)) {
      return `${baseClasses} text-electric-blue`;
    }
    return `${baseClasses} text-soft-gray/70 hover:text-soft-gray`;
  };

  // Simplified navigation - Apple style
  const navigationLinks = [
    { path: "/students", label: "Students" },
    { path: "/publishers", label: "Publishers" },
    { path: "/universities", label: "Universities" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About" },
  ];

  return (
    <nav className="bg-midnight-black/95 backdrop-blur-sm sticky top-0 z-50 border-b border-soft-gray/10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50" onClick={closeMenu}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F33482e5d334548d19dc3d9d06ed75615?format=webp&width=800"
              alt="Spotlight News"
              className="h-8 w-auto"
              style={{ filter: 'brightness(0) saturate(100%) invert(50%) sepia(100%) saturate(2000%) hue-rotate(154deg) brightness(119%) contrast(119%)' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={getLinkClasses(link.path)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/get-app">
              <Button
                size="sm"
                className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-medium text-sm px-4 py-2 rounded-full"
              >
                Try it free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-soft-gray/70 hover:text-soft-gray transition-colors p-2"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-midnight-black/90 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />

          {/* Mobile Menu */}
          <div className="fixed top-14 left-0 right-0 bg-midnight-black/95 backdrop-blur-md z-40 md:hidden">
            <div className="max-w-8xl mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-soft-gray/80 hover:text-soft-gray transition-colors text-lg font-medium py-2"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-soft-gray/10">
                  <Link to="/get-app" onClick={closeMenu} className="block">
                    <Button className="w-full bg-electric-blue text-midnight-black hover:bg-cyan-400 font-medium text-lg py-4 rounded-full">
                      Try it free
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navigation;
