import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3
      }
    }
  };

  const teamMembers = [
    {
      name: "Amol Kotkar",
      role: "CEO & Founder",
      image: "./src/pages/onwer1.jpg",
      description: "Visionary leader with 15+ years in fintech"
    },
    {
      name: "Onkar Dighe",
      role: "Chief Technology Officer",
      image: "./src/pages/onwer2.jpg",
      description: "Tech innovator specializing in AI and automation"
    },
  ];

  const milestones = [
    { year: "2024", event: "Company Founded" },
    { year: "2024", event: "First Major Release" },
    { year: "2027", event: "1 Million Users soon" },
    { year: "2030", event: "Global Expansion Soon" },
    { year: "2025", event: "AI Integration Soon" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-600 opacity-10">
          {/* Animated Background Patterns */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-bold mb-6 text-blue-900"
          >
            About Groww Book
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-blue-700 max-w-2xl mx-auto"
          >
            At Groww Book, our mission is to simplify financial management for businesses of all sizes. We aim to empower business owners and accountants with a powerful, intuitive, and accessible platform that transforms complex accounting into a seamless experience.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        variants={containerVariants}
        className="py-20 container mx-auto px-6"
      >
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="bg-white rounded-2xl shadow-xl p-10 mb-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Mission</h2>
          <p className="text-lg text-gray-700">
          We believe that financial management should not be a burden but a catalyst for growth. Our vision is to provide a solution that makes accounting simple, efficient, and accessible for everyone, enabling businesses to focus on what they do best—growing.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-32 text-right pr-8 text-blue-600 font-bold"
              >
                {milestone.year}
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-4 h-4 rounded-full bg-blue-600"
              />
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="ml-8 bg-white p-6 rounded-lg shadow-lg flex-1"
              >
                {milestone.event}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        variants={containerVariants}
        className="py-20 bg-blue-50"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center text-blue-900"
          >
            Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-59 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        variants={containerVariants}
        className="py-20 container mx-auto px-6"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold mb-12 text-center text-blue-900"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Innovation', 'Integrity', 'Excellence'].map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl text-blue-600">
                  {['💡', '🤝', '⭐'][index]}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold mb-4 text-blue-900">{value}</h3>
              <p className="text-gray-600">
                Committed to delivering the best solutions through {value.toLowerCase()}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        variants={containerVariants}
        className="py-20 bg-blue-600 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.button
            variants={cardVariants}
            whileHover="hover"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Get Started Today
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
