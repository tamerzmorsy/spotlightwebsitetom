import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "5 Feed Fails You'll Laugh At (And Fix)",
    excerpt:
      "Lighthearted list with visuals showing common algorithm mistakes and how Spotlight solves them.",
    readTime: "3 min read",
    date: "Jan 15, 2025",
    category: "Student Tips",
  };

  const blogPosts = [
    {
      id: 1,
      title: "How Publishers Reach New Readers",
      excerpt:
        "Practical tips with a playful tone on building audience and revenue through our platform.",
      readTime: "5 min read",
      date: "Jan 12, 2025",
      category: "Publisher Guide",
    },
    {
      id: 2,
      title: "Campus Bulk Subscriptions: MSU's Success Story",
      excerpt:
        "Case study on integration, impact, and how Michigan State built their news program with 5,000+ students.",
      readTime: "7 min read",
      date: "Jan 10, 2025",
      category: "University Case Study",
    },
    {
      id: 3,
      title: "Why 300+ Pubs Trust Spotlight",
      excerpt:
        "Insights on library offering and benefits that make publishers choose our platform over competitors.",
      readTime: "4 min read",
      date: "Jan 8, 2025",
      category: "Platform Insights",
    },
    {
      id: 4,
      title: "The Future of Algorithm-Free News",
      excerpt:
        "How giving readers control over their feeds is reshaping the media landscape.",
      readTime: "6 min read",
      date: "Jan 5, 2025",
      category: "Industry Insights",
    },
    {
      id: 5,
      title: "Building Better Reading Habits with MyStats",
      excerpt:
        "Learn how tracking your news consumption can lead to more informed and focused reading.",
      readTime: "4 min read",
      date: "Jan 3, 2025",
      category: "Student Tips",
    },
  ];

  return (
    <div className="min-h-screen bg-midnight-black text-soft-gray">
      <Navigation />

      {/* Hero Section - Apple News style */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Product Badge */}
          <div className="mb-8">
            <span className="inline-block text-electric-blue text-lg font-medium tracking-wide">
              Spotlight Blog
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-8 leading-[0.85] tracking-tight">
            News about <span className="text-electric-blue">news.</span><br />
            Insights that matter.
          </h1>

          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-soft-gray/80 mb-16 font-light leading-relaxed max-w-4xl mx-auto">
            Tips for students, guides for publishers,
            <br />
            and stories from the future of journalism.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-electric-blue text-sm font-medium uppercase tracking-wide">
              Featured Article
            </span>
          </div>

          <article className="bg-gray-800/30 rounded-3xl p-12 mb-16">
            <div className="flex items-center text-sm text-soft-gray/60 mb-6">
              <span className="bg-electric-blue/20 text-electric-blue px-3 py-1 rounded-full text-xs font-medium mr-4">
                {featuredPost.category}
              </span>
              <Calendar className="w-4 h-4 mr-2" />
              <span className="mr-4">{featuredPost.date}</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>{featuredPost.readTime}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-6 leading-tight">
              {featuredPost.title}
            </h2>

            <p className="text-xl text-soft-gray/70 mb-8 leading-relaxed">
              {featuredPost.excerpt}
            </p>

            <Link
              to="#"
              className="inline-flex items-center text-electric-blue hover:text-cyan-400 font-medium transition-colors"
            >
              Read article
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </article>
        </div>
      </section>

      {/* Article List */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-soft-gray mb-2">
              Latest articles
            </h2>
            <p className="text-soft-gray/60">
              Stay updated with insights from the Spotlight team.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="border-b border-soft-gray/10 pb-8 last:border-b-0"
              >
                <div className="flex items-center text-sm text-soft-gray/60 mb-4">
                  <span className="bg-gray-800/50 text-soft-gray/70 px-3 py-1 rounded-full text-xs font-medium mr-4">
                    {post.category}
                  </span>
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-soft-gray mb-4 leading-tight">
                  {post.title}
                </h3>

                <p className="text-lg text-soft-gray/70 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <Link
                  to="#"
                  className="inline-flex items-center text-electric-blue hover:text-cyan-400 font-medium transition-colors"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-soft-gray mb-12 text-center">
            Explore by <span className="text-electric-blue">category</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <Link to="#" className="group">
              <div className="bg-gray-800/30 rounded-2xl p-8 hover:bg-gray-800/50 transition-colors">
                <h3 className="text-xl font-display font-semibold text-electric-blue mb-3 group-hover:text-cyan-400 transition-colors">
                  Student Tips
                </h3>
                <p className="text-soft-gray/70 mb-4">
                  Guides for building better news habits and making the most of
                  your feed.
                </p>
                <div className="flex items-center text-sm text-soft-gray/60">
                  <span>8 articles</span>
                  <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="#" className="group">
              <div className="bg-gray-800/30 rounded-2xl p-8 hover:bg-gray-800/50 transition-colors">
                <h3 className="text-xl font-display font-semibold text-neon-green mb-3 group-hover:text-lime-400 transition-colors">
                  Publisher Guides
                </h3>
                <p className="text-soft-gray/70 mb-4">
                  Practical advice for building audience and revenue on our
                  platform.
                </p>
                <div className="flex items-center text-sm text-soft-gray/60">
                  <span>12 articles</span>
                  <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="#" className="group">
              <div className="bg-gray-800/30 rounded-2xl p-8 hover:bg-gray-800/50 transition-colors">
                <h3 className="text-xl font-display font-semibold text-vibrant-pink mb-3 group-hover:text-pink-400 transition-colors">
                  University Case Studies
                </h3>
                <p className="text-soft-gray/70 mb-4">
                  Success stories from campus partnerships and implementations.
                </p>
                <div className="flex items-center text-sm text-soft-gray/60">
                  <span>5 articles</span>
                  <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="#" className="group">
              <div className="bg-gray-800/30 rounded-2xl p-8 hover:bg-gray-800/50 transition-colors">
                <h3 className="text-xl font-display font-semibold text-electric-blue mb-3 group-hover:text-cyan-400 transition-colors">
                  Platform Updates
                </h3>
                <p className="text-soft-gray/70 mb-4">
                  Latest features, improvements, and behind-the-scenes insights.
                </p>
                <div className="flex items-center text-sm text-soft-gray/60">
                  <span>15 articles</span>
                  <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-soft-gray mb-8">
            Stay in the <span className="text-electric-blue">loop</span>
          </h2>
          <p className="text-xl text-soft-gray/70 mb-12">
            Get the latest insights delivered to your inbox. No spam, just
            quality content.
          </p>

          <div className="bg-gray-800/30 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-900/50 border border-soft-gray/20 rounded-lg px-4 py-3 text-soft-gray placeholder-soft-gray/50 focus:outline-none focus:border-electric-blue transition-colors"
              />
              <button className="bg-electric-blue text-midnight-black hover:bg-cyan-400 font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-soft-gray/50 mt-4">
              Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
