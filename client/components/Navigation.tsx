import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, LogOut, Settings, BarChart3 } from "lucide-react";
import { useAuth } from "@/lib/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavigationProps {
  currentPage?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

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

  // Navigation links for non-authenticated users (marketing pages)
  const publicNavigationLinks = [
    { path: "/students", label: "Students" },
    { path: "/publishers", label: "Publishers" },
    { path: "/universities", label: "Colleges/Universities" },
    { path: "/pricing", label: "Pricing" },
    { path: "/about", label: "About" },
  ];

  // Navigation links for authenticated users (app pages)
  const authenticatedNavigationLinks = [
    { path: "/my-news", label: "My News" },
    { path: "/explore", label: "Explore" },
    { path: "/my-library", label: "My Library" },
    { path: "/my-stats", label: "My Stats" },
  ];

  // Choose which navigation links to show
  const navigationLinks = isAuthenticated ? authenticatedNavigationLinks : publicNavigationLinks;

  return (
    <nav className="bg-midnight-black/95 backdrop-blur-sm sticky top-0 z-50 border-b border-soft-gray/10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50" onClick={closeMenu}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F57f3921c477141799725b87f2761d2c2%2F33482e5d334548d19dc3d9d06ed75615?format=webp&width=800"
              alt="SpotlightNews"
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
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 text-soft-gray hover:text-electric-blue">
                    <User className="w-4 h-4" />
                    <span className="text-sm font-medium">{user?.firstName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-gray-800 border-gray-700 text-soft-gray">
                  <DropdownMenuItem asChild>
                    <Link to="/my-stats" className="flex items-center cursor-pointer">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      My Stats
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center cursor-pointer">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem
                    onClick={logout}
                    className="flex items-center cursor-pointer text-red-400 hover:text-red-300"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-soft-gray hover:text-electric-blue hover:bg-transparent font-medium text-sm"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    size="sm"
                    className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold text-sm px-6 py-2 rounded-full"
                  >
                    Create Free Account
                  </Button>
                </Link>
              </>
            )}
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
                  {isAuthenticated ? (
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-soft-gray font-medium mb-2">
                          Welcome, {user?.firstName}!
                        </p>
                      </div>
                      <Link to="/my-stats" onClick={closeMenu} className="block">
                        <Button className="w-full bg-electric-blue text-midnight-black hover:bg-cyan-400 font-medium text-lg py-4 rounded-full">
                          My Stats
                        </Button>
                      </Link>
                      <Button
                        onClick={() => { logout(); closeMenu(); }}
                        variant="outline"
                        className="w-full border-red-500/50 text-red-400 hover:bg-red-500/10 font-medium text-lg py-4 rounded-full"
                      >
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Link to="/login" onClick={closeMenu} className="block">
                        <Button variant="outline" className="w-full border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10 font-medium text-lg py-4 rounded-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/get-app" onClick={closeMenu} className="block">
                        <Button className="w-full bg-electric-blue text-midnight-black hover:bg-cyan-400 font-medium text-lg py-4 rounded-full">
                          Try it free
                        </Button>
                      </Link>
                    </div>
                  )}
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
