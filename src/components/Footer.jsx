import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/DEIAKO',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/samuel-htamu-b2b3b4297/',
      icon: FaLinkedin,
    }
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Hire Me', path: '/hire' }
  ];

  return (
    <footer className="relative mt-20">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-purple-500/20" />
      
      {/* Background */}
      <div className="bg-slate-900/95 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold font-['Montserrat'] bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text"
              >
                Samuel Htamu
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-400 font-['Inter']"
              >
                Crafting digital experiences with passion and precision.
              </motion.p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg font-semibold text-indigo-400 font-['Montserrat']"
              >
                Quick Links
              </motion.h4>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-2 font-['Inter']"
              >
                {quickLinks.map((link) => (
                  <p key={link.path}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg font-semibold text-indigo-400 font-['Montserrat']"
              >
                Connect
              </motion.h4>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex space-x-4"
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-indigo-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <link.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-gray-800"
          >
            <p className="text-center text-gray-400 text-sm font-['Inter']">
              &copy; {new Date().getFullYear()} Samuel Htamu. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
