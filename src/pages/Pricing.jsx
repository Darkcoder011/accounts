import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const plans = [
    {
      name: 'Basic',
      price: isAnnual ? 29 : 39,
      features: [
        { name: 'Up to 5 team members', description: 'Perfect for small teams and startups' },
        { name: 'Basic accounting features', description: 'Essential tools for basic accounting needs' },
        { name: 'Monthly reports', description: 'Get insights into your monthly performance' },
        { name: 'Email support', description: '24/7 email support for your queries' },
        { name: '5GB storage', description: 'Secure cloud storage for your documents' },
        { name: 'Basic integrations', description: 'Connect with essential business tools' }
      ],
      gradient: 'from-blue-400 to-cyan-400',
      shadowColor: 'blue',
      popular: false
    },
    {
      name: 'Professional',
      price: isAnnual ? 49 : 59,
      features: [
        { name: 'Up to 15 team members', description: 'Ideal for growing businesses' },
        { name: 'Advanced accounting features', description: 'Comprehensive accounting toolkit' },
        { name: 'Real-time reports', description: 'Live insights and analytics' },
        { name: 'Priority support', description: 'Fast response times and dedicated support' },
        { name: '15GB storage', description: 'Expanded storage for all your needs' },
        { name: 'Advanced integrations', description: 'Connect with premium business tools' },
        { name: 'Custom branding', description: 'Add your brand identity' },
        { name: 'API access', description: 'Build custom integrations' }
      ],
      gradient: 'from-indigo-400 to-blue-500',
      shadowColor: 'indigo',
      popular: true
    },
    {
      name: 'Enterprise',
      price: isAnnual ? 99 : 119,
      features: [
        { name: 'Unlimited team members', description: 'No limits on team size' },
        { name: 'Enterprise features', description: 'Full suite of enterprise tools' },
        { name: 'Custom reports', description: 'Tailored reporting solutions' },
        { name: '24/7 dedicated support', description: 'Round-the-clock premium support' },
        { name: 'Unlimited storage', description: 'Store all your data without limits' },
        { name: 'Premium integrations', description: 'Access to exclusive integrations' },
        { name: 'White labeling', description: 'Complete brand customization' },
        { name: 'Custom development', description: 'Dedicated development resources' },
        { name: 'SLA guarantee', description: 'Guaranteed uptime and performance' }
      ],
      gradient: 'from-purple-400 to-indigo-500',
      shadowColor: 'purple',
      popular: false
    }
  ];

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan);
    setTimeout(() => {
      navigate('/signup', { state: { selectedPlan: plan } });
    }, 500);
  };

  const FeatureTooltip = ({ name, description }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute z-10 px-4 py-2 text-sm bg-white text-gray-800 rounded-lg shadow-xl -top-12 left-1/2 transform -translate-x-1/2 w-48 border border-gray-100"
    >
      <div className="relative">
        <div className="font-medium">{name}</div>
        <div className="text-gray-600 text-xs mt-1">{description}</div>
        <div className="absolute w-3 h-3 bg-white transform rotate-45 left-1/2 -bottom-1.5 -translate-x-1/2 border-b border-r border-gray-100"></div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full text-white text-sm mb-8"
          >
            Save up to 25% with annual billing
          </motion.div>
          
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose your perfect plan
          </h1>
          <p className="mt-5 text-xl text-gray-600">
            Start free, upgrade when you're ready
          </p>

          {/* Billing Toggle */}
          <div className="mt-12 flex justify-center items-center space-x-4">
            <span className={`text-lg ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300 focus:outline-none"
            >
              <motion.span
                layout
                className="inline-block h-6 w-6 transform rounded-full bg-white shadow-lg"
                animate={{ x: isAnnual ? 4 : 36 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
            <span className={`text-lg ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={`relative rounded-2xl bg-white p-8 ${
                plan.popular ? 'ring-2 ring-indigo-500' : ''
              }`}
              style={{
                boxShadow: `0 0 60px -15px rgba(${
                  plan.shadowColor === 'blue' ? '37, 99, 235' :
                  plan.shadowColor === 'indigo' ? '79, 70, 229' :
                  '126, 34, 206'
                }, 0.3)`
              }}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-5 right-5 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium"
                >
                  Most Popular
                </motion.div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 flex items-baseline"
                >
                  <span className="text-5xl font-extrabold text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="ml-2 text-gray-500">/month</span>
                </motion.div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * featureIndex }}
                    className="flex items-center relative"
                    onMouseEnter={() => setHoveredFeature(`${plan.name}-${featureIndex}`)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      className={`h-5 w-5 bg-gradient-to-r ${plan.gradient} rounded-full mr-3 flex items-center justify-center`}
                    >
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-gray-600">{feature.name}</span>
                    
                    <AnimatePresence>
                      {hoveredFeature === `${plan.name}-${featureIndex}` && (
                        <FeatureTooltip name={feature.name} description={feature.description} />
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleGetStarted(plan)}
                className={`w-full rounded-lg bg-gradient-to-r ${plan.gradient} px-6 py-3 text-center text-base font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${plan.shadowColor}-500`}
              >
                Get started with {plan.name}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <motion.div
          variants={itemVariants}
          className="mt-24 bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Compare Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-gray-500">Features</div>
            {plans.map(plan => (
              <div key={plan.name} className="text-gray-900 font-medium">
                {plan.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-500 font-medium inline-flex items-center"
            >
              View all FAQs
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 text-center bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-12"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block bg-white/10 backdrop-blur-lg rounded-full px-6 py-2 text-white mb-8"
          >
            Limited Time Offer
          </motion.div>
          
          <h2 className="text-3xl font-extrabold text-white">
            Start your journey today
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Join thousands of satisfied customers using our platform
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleGetStarted(plans[1])}
            className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start your free trial
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {['Secure Payments', '24/7 Support', 'Money Back Guarantee', 'Free Updates'].map((badge, index) => (
            <motion.div
              key={badge}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-gray-600"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Pricing;
