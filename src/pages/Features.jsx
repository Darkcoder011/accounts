import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChartLine, FaUsers, FaCloud, FaMobile, FaLock, FaRocket,
  FaBook, FaShoppingCart, FaFileInvoiceDollar, FaCreditCard,
  FaMoneyBillWave, FaJournalWhills, FaChartBar, FaWifi,
  FaChartPie, FaBookOpen, FaBalanceScale, FaFileAlt, FaUniversity, FaStore, FaCode
} from 'react-icons/fa';

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeSection, setActiveSection] = useState('general');

  // Animation variants
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const allFeatures = {
    general: [
      {
        id: 1,
        title: 'Real-time Analytics',
        icon: FaChartLine,
        gradient: 'from-blue-400 to-cyan-400',
        description: 'Track your business performance in real-time with advanced analytics and insights.',
        details: [
          'Interactive dashboards',
          'Custom report generation',
          'Trend analysis',
          'Predictive analytics',
          'Export capabilities'
        ],
        animation: {
          hover: { scale: 1.05, rotate: 5 },
          icon: { rotate: [0, 360], transition: { duration: 20, repeat: Infinity } }
        }
      },
      {
        id: 2,
        title: 'Multi-User Access',
        icon: FaUsers,
        gradient: 'from-purple-400 to-indigo-500',
        description: 'Secure multi-user access with role-based permissions and activity tracking.',
        details: [
          'Role-based access control',
          'User activity logs',
          'Team collaboration',
          'Custom permissions',
          'Session management'
        ],
        animation: {
          hover: { scale: 1.05 },
          icon: { x: [-3, 3], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }
        }
      },
      {
        id: 3,
        title: 'Cloud Backup',
        icon: FaCloud,
        gradient: 'from-teal-400 to-green-500',
        description: 'Automatic cloud backup with version control and data recovery options.',
        details: [
          'Automated backups',
          'Version history',
          'Data encryption',
          'Quick recovery',
          'Storage management'
        ],
        animation: {
          hover: { scale: 1.05, y: -5 },
          icon: { y: [-2, 2], transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } }
        }
      },
      {
        id: 4,
        title: 'Mobile Access',
        icon: FaMobile,
        gradient: 'from-pink-400 to-rose-500',
        description: 'Access your accounts on-the-go with our mobile-responsive interface.',
        details: [
          'Mobile optimization',
          'Touch-friendly interface',
          'Offline capabilities',
          'Push notifications',
          'Secure login'
        ],
        animation: {
          hover: { scale: 1.05, rotate: -5 },
          icon: { rotate: [-10, 10], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }
        }
      },
      {
        id: 5,
        title: 'Advanced Security',
        icon: FaLock,
        gradient: 'from-amber-400 to-orange-500',
        description: 'Enterprise-grade security with encryption and multi-factor authentication.',
        details: [
          'Two-factor authentication',
          'Data encryption',
          'IP whitelisting',
          'Security alerts',
          'Compliance tools'
        ],
        animation: {
          hover: { scale: 1.05 },
          icon: { scale: [1, 1.2, 1], transition: { duration: 1.5, repeat: Infinity } }
        }
      },
      {
        id: 6,
        title: 'Performance Optimization',
        icon: FaRocket,
        gradient: 'from-green-400 to-emerald-500',
        description: 'Lightning-fast performance with optimized data processing and caching.',
        details: [
          'Fast data processing',
          'Smart caching',
          'Load balancing',
          'Resource optimization',
          'Response time monitoring'
        ],
        animation: {
          hover: { scale: 1.05, y: -5 },
          icon: { y: [-5, 5], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }
        }
      }
    ],
    accounting: [
      {
        id: 7,
        title: 'Double-entry Accounting',
        icon: FaBook,
        gradient: 'from-emerald-400 to-teal-500',
        description: 'Professional double-entry bookkeeping system for accurate financial records.',
        details: [
          'Automated balancing',
          'Error detection',
          'Multi-currency support',
          'Audit trails',
          'Account reconciliation'
        ],
        animation: {
          hover: { scale: 1.05, y: -10 },
          icon: { rotateY: [0, 180, 360], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }
        }
      },
      {
        id: 8,
        title: 'Point of Sale',
        icon: FaShoppingCart,
        gradient: 'from-amber-400 to-orange-500',
        description: 'Integrated POS system for seamless retail operations.',
        details: [
          'Real-time inventory',
          'Multiple payment methods',
          'Receipt customization',
          'Staff management',
          'Sales analytics'
        ],
        animation: {
          hover: { scale: 1.05, x: [-5, 5, -5] },
          icon: { x: [-5, 5], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }
        }
      },
      {
        id: 9,
        title: 'Invoicing & Billing',
        icon: FaFileInvoiceDollar,
        gradient: 'from-purple-400 to-pink-500',
        description: 'Professional invoicing and billing system with customizable templates.',
        details: [
          'Custom invoice templates',
          'Recurring billing',
          'Payment tracking',
          'Tax calculations',
          'Multi-currency support'
        ],
        animation: {
          hover: { scale: 1.05, rotate: -5 },
          icon: { y: [-2, 2], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }
        }
      },
      {
        id: 10,
        title: 'Payment Processing',
        icon: FaCreditCard,
        gradient: 'from-blue-500 to-indigo-600',
        description: 'Secure payment processing with multiple gateway integrations.',
        details: [
          'Multiple payment gateways',
          'Secure transactions',
          'Payment scheduling',
          'Automated reconciliation',
          'Payment history'
        ],
        animation: {
          hover: { scale: 1.05, y: -5 },
          icon: { scale: [1, 1.2, 1], transition: { duration: 2, repeat: Infinity } }
        }
      },
      {
        id: 11,
        title: 'Journal Entries',
        icon: FaJournalWhills,
        gradient: 'from-green-400 to-emerald-500',
        description: 'Comprehensive journal entry system for detailed financial tracking.',
        details: [
          'Multiple journal types',
          'Automated entries',
          'Entry templates',
          'Bulk entry import',
          'Audit logging'
        ],
        animation: {
          hover: { scale: 1.05, rotate: 3 },
          icon: { rotate: [0, 10, 0], transition: { duration: 2, repeat: Infinity } }
        }
      },
      {
        id: 12,
        title: 'Financial Dashboard',
        icon: FaChartBar,
        gradient: 'from-red-400 to-rose-500',
        description: 'Real-time financial insights and performance metrics.',
        details: [
          'Key performance indicators',
          'Customizable widgets',
          'Real-time updates',
          'Data visualization',
          'Export capabilities'
        ],
        animation: {
          hover: { scale: 1.05 },
          icon: { y: [-3, 3], transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" } }
        }
      },
      {
        id: 13,
        title: 'Offline Functionality',
        icon: FaWifi,
        gradient: 'from-cyan-400 to-blue-500',
        description: 'Continue working seamlessly even without internet connection.',
        details: [
          'Offline data access',
          'Automatic syncing',
          'Data conflict resolution',
          'Background updates',
          'Local storage management'
        ],
        animation: {
          hover: { scale: 1.05 },
          icon: { opacity: [1, 0.5, 1], transition: { duration: 2, repeat: Infinity } }
        }
      },
      {
        id: 14,
        title: 'Financial Reports',
        icon: FaChartPie,
        gradient: 'from-yellow-400 to-orange-500',
        description: 'Comprehensive financial reporting suite with customizable templates.',
        details: [
          'Custom report builder',
          'Scheduled reports',
          'Multiple formats',
          'Comparative analysis',
          'Drill-down capabilities'
        ],
        animation: {
          hover: { scale: 1.05, rotate: -3 },
          icon: { rotate: [0, 360], transition: { duration: 20, repeat: Infinity } }
        }
      },
      {
        id: 15,
        title: 'General Ledger',
        icon: FaBookOpen,
        gradient: 'from-indigo-400 to-purple-500',
        description: 'Complete general ledger system with advanced tracking and reporting.',
        details: [
          'Account hierarchies',
          'Transaction tracking',
          'Account reconciliation',
          'Multi-period posting',
          'Closing periods'
        ],
        animation: {
          hover: { scale: 1.05 },
          icon: { rotateY: [0, 180], transition: { duration: 2, repeat: Infinity } }
        }
      },
      {
        id: 16,
        title: 'Financial Statements',
        icon: FaBalanceScale,
        gradient: 'from-pink-400 to-rose-500',
        description: 'Generate accurate P&L, Balance Sheet, and Trial Balance statements.',
        details: [
          'Profit & Loss Statement',
          'Balance Sheet',
          'Trial Balance',
          'Cash Flow Statement',
          'Comparative Statements'
        ],
        animation: {
          hover: { scale: 1.05, y: -5 },
          icon: { rotate: [-10, 10], transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } }
        }
      },
      {
        id: 17,
        title: 'Bank Integration',
        icon: FaUniversity,
        gradient: 'from-sky-400 to-blue-500',
        description: 'Seamless integration with major banks for automatic transaction syncing.',
        details: [
          'Auto bank feeds',
          'Transaction matching',
          'Bank reconciliation',
          'Multi-bank support',
          'Secure connection'
        ],
        animation: {
          hover: { scale: 1.05 },
          icon: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity } }
        }
      },
      {
        id: 18,
        title: 'E-commerce Integration',
        icon: FaStore,
        gradient: 'from-violet-400 to-purple-500',
        description: 'Connect with popular e-commerce platforms for seamless sales tracking.',
        details: [
          'Shopify integration',
          'WooCommerce sync',
          'Amazon connection',
          'Inventory sync',
          'Order management'
        ],
        animation: {
          hover: { scale: 1.05, rotate: 3 },
          icon: { rotate: [0, 360], transition: { duration: 15, repeat: Infinity } }
        }
      },
      {
        id: 19,
        title: 'Tax Management',
        icon: FaFileAlt,
        gradient: 'from-red-400 to-rose-500',
        description: 'Comprehensive tax management with automatic calculations and filing support.',
        details: [
          'Tax calculations',
          'Filing preparation',
          'Tax reports',
          'Multiple tax rates',
          'Tax compliance'
        ],
        animation: {
          hover: { scale: 1.05, y: -3 },
          icon: { y: [-2, 2], transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" } }
        }
      },
      {
        id: 20,
        title: 'API Integration',
        icon: FaCode,
        gradient: 'from-emerald-400 to-green-500',
        description: 'Powerful API for custom integrations and third-party applications.',
        details: [
          'RESTful API',
          'Webhook support',
          'Custom endpoints',
          'API documentation',
          'Rate limiting'
        ],
        animation: {
          hover: { scale: 1.05 },
          icon: { opacity: [1, 0.7, 1], transition: { duration: 2, repeat: Infinity } }
        }
      },
      {
        id: 21,
        title: 'Payroll Integration',
        icon: FaMoneyBillWave,
        gradient: 'from-cyan-400 to-blue-500',
        description: 'Seamless integration with popular payroll systems and services.',
        details: [
          'Automatic sync',
          'Payroll processing',
          'Tax calculations',
          'Employee portal',
          'Payment scheduling'
        ],
        animation: {
          hover: { scale: 1.05, x: [-3, 3] },
          icon: { x: [-3, 3], transition: { duration: 1, repeat: Infinity, repeatType: "reverse" } }
        }
      }
    ]
  };

  const FeatureCard = ({ feature }) => {
    const isHovered = hoveredCard === feature.id;
    const isSelected = selectedFeature === feature.id;

    return (
      <motion.div
        variants={itemVariants}
        whileHover={feature.animation.hover}
        className={`relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer
          ${isSelected ? 'ring-2 ring-indigo-500' : ''}`}
        onClick={() => setSelectedFeature(isSelected ? null : feature.id)}
        onHoverStart={() => setHoveredCard(feature.id)}
        onHoverEnd={() => setHoveredCard(null)}
      >
        <motion.div 
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}
          animate={feature.animation.icon}
        >
          <feature.icon className="w-8 h-8 text-white" />
        </motion.div>

        <motion.h3 
          className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl mb-4"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        >
          {feature.title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 mb-6"
          animate={isHovered ? { opacity: 0.8 } : { opacity: 1 }}
        >
          {feature.description}
        </motion.p>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <ul className="space-y-3">
                {feature.details.map((detail, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, delay: index * 0.1 }}
                      className="mr-3"
                    >
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block p-2 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full text-white text-sm mb-8"
          >
            Powerful Features
          </motion.div>
          
          <motion.h1 
            className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl mb-6"
            animate={{ 
              scale: [1, 1.02, 1],
              transition: { duration: 2, repeat: Infinity }
            }}
          >
            Everything you need to succeed
          </motion.h1>
          
          <motion.p 
            className="mt-5 text-xl text-gray-600 max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            Discover the tools and features that will transform your accounting experience
          </motion.p>

          {/* Section Toggle */}
          <div className="flex justify-center space-x-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('general')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === 'general'
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              General Features
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('accounting')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSection === 'accounting'
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Accounting Features
            </motion.button>
          </div>
        </motion.div>

        {/* Features Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allFeatures[activeSection].map(feature => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Features;
