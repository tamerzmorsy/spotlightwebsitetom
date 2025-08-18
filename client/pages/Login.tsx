import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/lib/auth";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  GraduationCap,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    university: "",
    studentId: "",
    agreedToTerms: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const universities = [
    "Michigan State University",
    "Johns Hopkins University",
    "University of Illinois",
    "Indiana University",
    "Other (Not Listed)",
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (isSignUp) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.university)
        newErrors.university = "Please select your university";
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
      if (!formData.agreedToTerms) {
        newErrors.agreedToTerms = "You must agree to the terms and conditions";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (isSignUp) {
        await signup({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          university: formData.university,
          studentId: formData.studentId,
        });
        navigate("/onboarding");
      } else {
        await login(formData.email, formData.password);
        navigate("/my-stats");
      }
    } catch (error) {
      setErrors({ submit: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Branding */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center bg-midnight-black/80 border border-electric-blue/30 rounded-full px-6 py-3 mb-8">
                <Sparkles className="w-5 h-5 text-electric-blue mr-2" />
                <span className="text-electric-blue font-medium">
                  Join the News Revolution
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                <span className="text-electric-blue text-glow-blue">
                  Welcome to
                </span>
                <br />
                <span className="text-soft-gray">Spotlight News</span>
                <span className="text-vibrant-pink ml-2">✨</span>
              </h1>

              <p className="text-xl text-soft-gray/90 mb-8 max-w-lg">
                Access{" "}
                <span className="text-neon-green font-semibold">
                  300+ publications
                </span>{" "}
                with no algorithms, no paywalls, just clean reads that matter.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-electric-blue mb-1">
                    5,000+
                  </div>
                  <div className="text-sm text-soft-gray/70">
                    Active Students
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-green mb-1">
                    300+
                  </div>
                  <div className="text-sm text-soft-gray/70">Publications</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-soft-gray/80">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                  Algorithm-free news feeds
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                  Campus papers + premium publications
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                  Reading challenges with real rewards
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-neon-green mr-2" />
                  MyStats to track your news consumption
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="max-w-md mx-auto w-full">
              <Card className="bg-gray-800/50 border-electric-blue/30 p-8 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-display font-bold text-electric-blue mb-2">
                    {isSignUp ? "Create Account" : "Welcome Back"}
                  </h2>
                  <p className="text-soft-gray/80">
                    {isSignUp
                      ? "Join thousands of students getting better news"
                      : "Sign in to your Spotlight account"}
                  </p>
                </div>

                {errors.submit && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6 flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
                    <span className="text-red-400 text-sm">
                      {errors.submit}
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {isSignUp && (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-soft-gray mb-2">
                            First Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-gray/50" />
                            <input
                              type="text"
                              value={formData.firstName}
                              onChange={(e) =>
                                handleChange("firstName", e.target.value)
                              }
                              className={`w-full bg-gray-900/50 border rounded-lg pl-10 pr-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none transition-colors ${
                                errors.firstName
                                  ? "border-red-500/50 focus:border-red-500"
                                  : "border-gray-700 focus:border-electric-blue/50"
                              }`}
                              placeholder="First name"
                            />
                          </div>
                          {errors.firstName && (
                            <p className="text-red-400 text-sm mt-1">
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-soft-gray mb-2">
                            Last Name
                          </label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-gray/50" />
                            <input
                              type="text"
                              value={formData.lastName}
                              onChange={(e) =>
                                handleChange("lastName", e.target.value)
                              }
                              className={`w-full bg-gray-900/50 border rounded-lg pl-10 pr-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none transition-colors ${
                                errors.lastName
                                  ? "border-red-500/50 focus:border-red-500"
                                  : "border-gray-700 focus:border-electric-blue/50"
                              }`}
                              placeholder="Last name"
                            />
                          </div>
                          {errors.lastName && (
                            <p className="text-red-400 text-sm mt-1">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-soft-gray mb-2">
                          University
                        </label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-gray/50" />
                          <select
                            value={formData.university}
                            onChange={(e) =>
                              handleChange("university", e.target.value)
                            }
                            className={`w-full bg-gray-900/50 border rounded-lg pl-10 pr-4 py-3 text-soft-gray focus:outline-none transition-colors ${
                              errors.university
                                ? "border-red-500/50 focus:border-red-500"
                                : "border-gray-700 focus:border-electric-blue/50"
                            }`}
                          >
                            <option value="">Select your university</option>
                            {universities.map((uni, index) => (
                              <option key={index} value={uni}>
                                {uni}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors.university && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.university}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-soft-gray mb-2">
                          Student ID (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.studentId}
                          onChange={(e) =>
                            handleChange("studentId", e.target.value)
                          }
                          className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none focus:border-electric-blue/50 transition-colors"
                          placeholder="Your student ID"
                        />
                        <p className="text-xs text-soft-gray/60 mt-1">
                          Helps verify your campus eligibility
                        </p>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-soft-gray mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-gray/50" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={`w-full bg-gray-900/50 border rounded-lg pl-10 pr-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-gray-700 focus:border-electric-blue/50"
                        }`}
                        placeholder="your.email@university.edu"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-soft-gray mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-gray/50" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          handleChange("password", e.target.value)
                        }
                        className={`w-full bg-gray-900/50 border rounded-lg pl-10 pr-12 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none transition-colors ${
                          errors.password
                            ? "border-red-500/50 focus:border-red-500"
                            : "border-gray-700 focus:border-electric-blue/50"
                        }`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-soft-gray/50 hover:text-soft-gray transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-red-400 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {isSignUp && (
                    <div>
                      <label className="block text-sm font-medium text-soft-gray mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-soft-gray/50" />
                        <input
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            handleChange("confirmPassword", e.target.value)
                          }
                          className={`w-full bg-gray-900/50 border rounded-lg pl-10 pr-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none transition-colors ${
                            errors.confirmPassword
                              ? "border-red-500/50 focus:border-red-500"
                              : "border-gray-700 focus:border-electric-blue/50"
                          }`}
                          placeholder="Confirm your password"
                        />
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-red-400 text-sm mt-1">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                  )}

                  {isSignUp && (
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={formData.agreedToTerms}
                        onChange={(e) =>
                          handleChange("agreedToTerms", e.target.checked)
                        }
                        className="mt-1 w-4 h-4 text-electric-blue bg-gray-900 border-gray-600 rounded focus:ring-electric-blue focus:ring-2"
                      />
                      <div>
                        <label
                          htmlFor="terms"
                          className="text-sm text-soft-gray/80"
                        >
                          I agree to the{" "}
                          <Link
                            to="/terms"
                            className="text-electric-blue hover:underline"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/privacy"
                            className="text-electric-blue hover:underline"
                          >
                            Privacy Policy
                          </Link>
                        </label>
                        {errors.agreedToTerms && (
                          <p className="text-red-400 text-sm mt-1">
                            {errors.agreedToTerms}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-electric-blue text-midnight-black hover:bg-cyan-400 neon-glow-blue font-semibold text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-2 border-midnight-black/30 border-t-midnight-black rounded-full animate-spin mr-2"></div>
                        {isSignUp ? "Creating Account..." : "Signing In..."}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        {isSignUp ? "Create Account" : "Sign In"}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-soft-gray/80">
                    {isSignUp
                      ? "Already have an account?"
                      : "Don't have an account?"}{" "}
                    <button
                      onClick={() => {
                        setIsSignUp(!isSignUp);
                        setErrors({});
                        setFormData({
                          email: "",
                          password: "",
                          confirmPassword: "",
                          firstName: "",
                          lastName: "",
                          university: "",
                          studentId: "",
                          agreedToTerms: false,
                        });
                      }}
                      className="text-electric-blue hover:underline font-medium"
                    >
                      {isSignUp ? "Sign in here" : "Create account"}
                    </button>
                  </p>
                </div>

                {!isSignUp && (
                  <div className="mt-4 text-center">
                    <Link
                      to="/forgot-password"
                      className="text-sm text-soft-gray/70 hover:text-electric-blue transition-colors"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                )}
              </Card>

              <div className="mt-8 text-center">
                <p className="text-sm text-soft-gray/70">
                  Need help?{" "}
                  <Link
                    to="/contact"
                    className="text-electric-blue hover:underline"
                  >
                    Contact Support
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;
