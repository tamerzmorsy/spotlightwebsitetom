import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { Mail, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    messageType: "general",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section - Apple News style */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8">
            <span className="inline-block text-electric-blue text-lg font-medium tracking-wide">
              Contact Us
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            Let's build the future
            <br />
            of <span className="text-electric-blue">news together.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
            Questions, partnerships, or just want to say hello?
            <br />
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-12 h-12 bg-electric-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="text-lg font-semibold text-soft-gray mb-2">
                Students
              </h3>
              <p className="text-soft-gray/60 text-sm">
                App questions and support
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="text-lg font-semibold text-soft-gray mb-2">
                Publishers
              </h3>
              <p className="text-soft-gray/60 text-sm">
                Partnership opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-vibrant-pink/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Send className="w-6 h-6 text-vibrant-pink" />
              </div>
              <h3 className="text-lg font-semibold text-soft-gray mb-2">
                Universities
              </h3>
              <p className="text-soft-gray/60 text-sm">
                Bulk subscription plans
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/30 rounded-3xl p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-soft-gray mb-3"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-soft-gray/20 rounded-lg px-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-soft-gray mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900/50 border border-soft-gray/20 rounded-lg px-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none focus:border-electric-blue transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="messageType"
                  className="block text-sm font-medium text-soft-gray mb-3"
                >
                  I'm interested in
                </label>
                <select
                  id="messageType"
                  name="messageType"
                  value={formData.messageType}
                  onChange={handleInputChange}
                  className="w-full bg-gray-900/50 border border-soft-gray/20 rounded-lg px-4 py-3 text-soft-gray focus:outline-none focus:border-electric-blue transition-colors"
                >
                  <option value="general">General inquiry</option>
                  <option value="student">Student support</option>
                  <option value="publisher">Publisher partnership</option>
                  <option value="university">University partnership</option>
                  <option value="press">Press inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-soft-gray mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-gray-900/50 border border-soft-gray/20 rounded-lg px-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none focus:border-electric-blue transition-colors resize-none"
                  placeholder="Tell us about your project or question..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-electric-blue text-midnight-black hover:bg-cyan-400 font-semibold text-lg py-4 rounded-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-12">
            Other ways to <span className="text-electric-blue">connect</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 rounded-2xl p-8">
              <Mail className="w-8 h-8 text-electric-blue mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-soft-gray mb-2">
                Email us directly
              </h3>
              <p className="text-soft-gray/70 mb-4">
                For immediate support or questions
              </p>
              <a
                href="mailto:hello@spotlightnews.us"
                className="text-electric-blue hover:text-cyan-400 font-medium transition-colors"
              >
                hello@spotlightnews.us
              </a>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-8">
              <MessageCircle className="w-8 h-8 text-neon-green mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-soft-gray mb-2">
                Join our community
              </h3>
              <p className="text-soft-gray/70 mb-4">
                Connect with other users and stay updated
              </p>
              <a
                href="#"
                className="text-neon-green hover:text-lime-400 font-medium transition-colors"
              >
                Discord Community
              </a>
            </div>

            <div className="bg-gray-800/30 rounded-2xl p-8">
              <Send className="w-8 h-8 text-vibrant-pink mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-soft-gray mb-2">
                Follow us
              </h3>
              <p className="text-soft-gray/70 mb-4">
                Stay updated with our latest news
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-vibrant-pink hover:text-pink-400 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-vibrant-pink hover:text-pink-400 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-soft-gray/70">
            We typically respond within{" "}
            <span className="text-electric-blue font-medium">24 hours</span>{" "}
            during business days. For urgent matters, please email us directly.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
