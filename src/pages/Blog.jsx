import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest accounting trends and tips
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="accounting">Accounting</option>
                <option value="tax">Tax</option>
                <option value="business">Business</option>
                <option value="technology">Technology</option>
              </select>
            </motion.div>
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === 'all' && searchTerm === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <div className="text-blue-600 text-sm font-semibold mb-2">
                  {featuredPost.category}
                </div>
                <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                <div className="flex items-center">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{featuredPost.author.name}</div>
                    <div className="text-gray-500 text-sm">{featuredPost.date}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="text-blue-600 text-sm font-semibold mb-2">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                    <div className="text-sm">
                      <div className="font-semibold">{post.author.name}</div>
                      <div className="text-gray-500">{post.date}</div>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 bg-blue-600 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-6">Get the latest accounting tips and updates delivered to your inbox</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const featuredPost = {
  title: "The Future of AI in Accounting: 2024 Trends",
  excerpt: "Discover how artificial intelligence is revolutionizing the accounting industry and what it means for your business.",
  image: "https://via.placeholder.com/800x400",
  category: "Technology",
  author: {
    name: "Dr. Sarah Chen",
    avatar: "https://via.placeholder.com/100x100"
  },
  date: "December 20, 2023"
};

const blogPosts = [
  {
    title: "Essential Tax Planning Strategies for Small Businesses",
    excerpt: "Learn the key tax planning strategies that can help your small business save money.",
    image: "https://via.placeholder.com/400x300",
    category: "tax",
    author: {
      name: "John Smith",
      avatar: "https://via.placeholder.com/100x100"
    },
    date: "December 15, 2023"
  },
  {
    title: "Understanding Cloud Accounting Software",
    excerpt: "A comprehensive guide to choosing and implementing cloud accounting solutions.",
    image: "https://via.placeholder.com/400x300",
    category: "technology",
    author: {
      name: "Emily Brown",
      avatar: "https://via.placeholder.com/100x100"
    },
    date: "December 10, 2023"
  },
  {
    title: "Financial Reporting Best Practices",
    excerpt: "Master the art of creating clear and effective financial reports for your stakeholders.",
    image: "https://via.placeholder.com/400x300",
    category: "accounting",
    author: {
      name: "Michael Wong",
      avatar: "https://via.placeholder.com/100x100"
    },
    date: "December 5, 2023"
  },
  // Add more blog posts as needed
];

export default Blog;
