import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            <source src="/src/pages/fc.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl font-bold mb-6">
              Simplify Your Accounting Journey
            </h1>
            <p className="text-2xl mb-8">
              Powerful AI-driven accounting software for modern businesses
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/download"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                Get Started Free
              </Link>
              <Link
                to="/features"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                See Features
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Features Section with Animations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Groww Book?</h2>
            <p className="text-xl text-gray-600">
              Experience the future of accounting with our innovative features
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">See It In Action</h2>
              <p className="text-xl text-gray-600 mb-8">
                Watch how Groww Book transforms your accounting workflow with powerful features and intuitive design.
              </p>
              <div className="space-y-4">
                {demoFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-3"
                  >
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Product Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials with Image Carousel */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Trusted by Businesses</h2>
            <p className="text-xl text-gray-600">
              See what our customers have to say about Groww Book
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Animated Background */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        ></motion.div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8"
            >
              Join thousands of businesses that trust Groww Book for their accounting needs
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/download"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                Start Free Trial
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Insights',
    description: 'Get intelligent insights and predictions for better decision-making'
  },
  {
    icon: '📊',
    title: 'Real-time Analytics',
    description: 'Monitor your business performance with live dashboards and reports'
  },
  {
    icon: '🔄',
    title: 'Automated Workflows',
    description: 'Save time with smart automation and seamless integrations'
  }
];

const demoFeatures = [
  'Automated bank reconciliation',
  'Smart expense categorization',
  'Real-time financial reporting',
  'Multi-currency support',
  'Tax compliance automation'
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    quote: 'Groww Book has completely transformed how we handle our accounting. The AI features are game-changing!',
    avatar: 'https://via.placeholder.com/100x100'
  },
  {
    name: 'Michael Chen',
    role: 'CFO, Global Solutions',
    quote: 'The automation features have saved us countless hours. Our team can now focus on strategic decisions.',
    avatar: 'https://via.placeholder.com/100x100'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Owner, Creative Studios',
    quote: 'As a small business owner, Groww Book gives me the insights I need to make informed decisions.',
    avatar: 'https://via.placeholder.com/100x100'
  }
];

export default Home;
