import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Replace these with your actual EmailJS credentials
    emailjs.sendForm(
      'service_ovqj59a', // Service ID from EmailJS
      'template_jiiw76m', // Template ID from EmailJS
      form.current,
      'd2lrjqEE4VNkIzVPQ' // Public Key from EmailJS
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block p-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white text-sm mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Get in touch with our team for support or inquiries
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedContact(selectedContact === index ? null : index)}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="text-blue-600 p-3 bg-blue-50 rounded-full">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                      <AnimatePresence>
                        {selectedContact === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 text-sm text-gray-500"
                          >
                            {info.additionalInfo}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center space-x-3 mb-6">
                <FaClock className="text-blue-600 text-xl" />
                <h2 className="text-2xl font-bold text-gray-800">Office Hours</h2>
              </div>
              <div className="space-y-3">
                {officeHours.map((hours, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600 font-medium">{hours.day}</span>
                    <span className="text-gray-800">{hours.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Follow Us</h2>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="p-3 bg-gray-50 rounded-full text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-xl p-8 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"
              animate={{
                background: [
                  "linear-gradient(to bottom right, rgba(37, 99, 235, 0.05), rgba(79, 70, 229, 0.05))",
                  "linear-gradient(to bottom right, rgba(79, 70, 229, 0.05), rgba(37, 99, 235, 0.05))"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            
            <div className="relative">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="text-green-500 text-5xl mb-4">✓</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {error && (
                      <div className="text-red-500 text-sm mb-4">
                        {error}
                      </div>
                    )}
                    {formFields.map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <label htmlFor={field.name} className="block text-gray-700 mb-2">
                          {field.label}
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            rows="4"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            required
                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                            required
                          />
                        )}
                      </motion.div>
                    ))}

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-indigo-700'}`}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Location</h2>
          <motion.div 
            className="h-96 bg-white rounded-lg shadow-xl overflow-hidden relative"
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5" />
            <div className="w-full h-full flex items-center justify-center text-gray-500 relative">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaMapMarkerAlt className="text-6xl text-blue-600 mb-4" />
                <p className="text-gray-600">Interactive map coming soon...</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const contactInfo = [
  {
    icon: <FaPhone className="text-xl" />,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    additionalInfo: 'Available Monday to Friday, 9 AM - 6 PM EST'
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    title: 'Email',
    details: 'support@growwbook.com',
    additionalInfo: 'We usually respond within 24 hours'
  },
  {
    icon: <FaMapMarkerAlt className="text-xl" />,
    title: 'Address',
    details: '123 Business Avenue, Silicon Valley, CA 94025',
    additionalInfo: 'Open for in-person meetings by appointment'
  },
  {
    icon: <FaWhatsapp className="text-xl" />,
    title: 'WhatsApp',
    details: '+1 (555) 987-6543',
    additionalInfo: 'Available for instant messaging support'
  }
];

const officeHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
  { day: 'Holidays', time: 'By Appointment' }
];

const socialMedia = [
  {
    icon: <FaFacebook className="text-xl" />,
    link: 'https://facebook.com'
  },
  {
    icon: <FaTwitter className="text-xl" />,
    link: 'https://twitter.com'
  },
  {
    icon: <FaLinkedin className="text-xl" />,
    link: 'https://linkedin.com'
  },
  {
    icon: <FaInstagram className="text-xl" />,
    link: 'https://instagram.com'
  }
];

const formFields = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
  { name: 'message', label: 'Message', type: 'textarea' }
];

export default Contact;
