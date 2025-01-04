import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const HireMe = () => {
  const initialFormState = {
    name: '',
    email: '',
    project: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Project validation
    if (!formData.project) {
      newErrors.project = 'Please select a project type';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      // Reset form
      setFormData(initialFormState);
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const projectTypes = [
    { value: 'website', label: 'Website Development' },
    { value: 'webapp', label: 'Web Application' },
    { value: 'mobile', label: 'Mobile App' },
    { value: 'ecommerce', label: 'E-commerce Solution' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen py-20 px-4 relative overflow-hidden bg-gray-900">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-12"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text font-['Montserrat']">
              Let's Work Together
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-['Inter']">
              Have a project in mind? Let's create something amazing.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800/20 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-400 font-['Montserrat']">Contact Information</h3>
              <div className="space-y-3 font-['Inter']">
                <p className="text-gray-300">
                  <span className="text-gray-400">Email:</span><br />
                  samuel.htamu@example.com
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-400">Location:</span><br />
                  Sydney, Australia
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-400">Working Hours:</span><br />
                  Monday - Friday, 9:00 AM - 6:00 PM AEST
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-400 font-['Montserrat']">Response Time</h3>
              <div className="space-y-3 font-['Inter']">
                <p className="text-gray-300">
                  I typically respond to inquiries within 24-48 hours during business days. For urgent matters, please indicate this in your message.
                </p>
                <p className="text-gray-300">
                  Available for both remote and local projects in Sydney area.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-6 bg-gray-800/30 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="space-y-1">
                <label htmlFor="name" className="block text-gray-300 mb-2 font-['Inter']">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 font-['Inter'] placeholder-gray-500 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-1">
                <label htmlFor="email" className="block text-gray-300 mb-2 font-['Inter']">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 font-['Inter'] placeholder-gray-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="space-y-1">
              <label htmlFor="project" className="block text-gray-300 mb-2 font-['Inter']">
                Project Type
              </label>
              <select
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 font-['Inter'] transition-colors ${
                  errors.project ? 'border-red-500' : 'border-gray-700'
                }`}
              >
                <option value="">Select a project type</option>
                {projectTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </select>
              {errors.project && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-1"
                >
                  {errors.project}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-1">
              <label htmlFor="message" className="block text-gray-300 mb-2 font-['Inter']">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={`w-full px-4 py-3 bg-gray-900/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-100 font-['Inter'] placeholder-gray-500 resize-none transition-colors ${
                  errors.message ? 'border-red-500' : 'border-gray-700'
                }`}
                placeholder="Tell me about your project..."
              ></textarea>
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-1"
                >
                  {errors.message}
                </motion.p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 font-['Inter'] flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>

          {/* Status Messages */}
          <AnimatePresence mode="wait">
            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`text-center p-4 rounded-lg flex items-center justify-center space-x-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-500/20 text-green-300'
                    : 'bg-red-500/20 text-red-300'
                }`}
              >
                {submitStatus === 'success' ? (
                  <>
                    <FiCheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </>
                ) : (
                  <>
                    <FiAlertCircle className="w-5 h-5" />
                    <span>Please fix the errors in the form and try again.</span>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMe;