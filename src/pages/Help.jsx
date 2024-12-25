import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
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
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">
            Find answers to your questions and learn how to use Groww Book
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <svg
              className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {quickLinks.map((link, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">{link.icon}</div>
              <h3 className="text-xl font-bold mb-2">{link.title}</h3>
              <p className="text-gray-600 mb-4">{link.description}</p>
              <button className="text-blue-600 hover:text-blue-700">
                Learn More →
              </button>
            </div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          
          {/* Category Filter */}
          <div className="mb-6">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="general">General</option>
              <option value="billing">Billing</option>
              <option value="technical">Technical</option>
              <option value="security">Security</option>
            </select>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow"
              >
                <button
                  className="w-full px-6 py-4 text-left focus:outline-none"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to assist you with any questions
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const quickLinks = [
  {
    icon: '📚',
    title: 'Getting Started',
    description: 'Learn the basics of using Groww Book and set up your account'
  },
  {
    icon: '🎥',
    title: 'Video Tutorials',
    description: 'Watch step-by-step guides on using our features'
  },
  {
    icon: '📝',
    title: 'Documentation',
    description: 'Detailed documentation on all features and integrations'
  }
];

const faqs = [
  {
    question: 'How do I get started with Groww Book?',
    answer: 'Getting started is easy! Simply sign up for an account, complete your business profile, and follow our setup wizard to configure your accounting preferences.',
    category: 'general'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions. All payments are processed securely through our payment partners.',
    category: 'billing'
  },
  {
    question: 'How secure is my financial data?',
    answer: 'We use bank-level encryption and security measures to protect your data. All information is stored in secure servers with regular backups.',
    category: 'security'
  },
  {
    question: 'Can I import data from other accounting software?',
    answer: 'Yes, Groww Book supports importing data from most major accounting software including QuickBooks, Xero, and Excel spreadsheets.',
    category: 'technical'
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription at any time from your account settings. If you cancel, you\'ll continue to have access until the end of your billing period.',
    category: 'billing'
  },
  {
    question: 'Do you offer mobile apps?',
    answer: 'Yes, we have mobile apps available for both iOS and Android devices. You can download them from the respective app stores.',
    category: 'technical'
  }
];

export default Help;
