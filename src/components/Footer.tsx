import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Mail, Heart } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://www.instagram.com/bara_style_1/',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: 'https://wa.me/message/56VKZHHEIYNPJ1',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:aimranebara@gmail.com',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'aimranebara@gmail.com',
      url: 'mailto:aimranebara@gmail.com'
    },
    {
      icon: Instagram,
      label: '@bara_style_1',
      url: 'https://www.instagram.com/bara_style_1/'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp Support',
      url: 'https://wa.me/message/56VKZHHEIYNPJ1'
    }
  ];

  return (
    <footer className="relative z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-white/20 dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Logo size="md" className="mb-4" />
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Your ultimate destination for premium Android applications. Download, install, and enjoy the best APKs curated just for you.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                  title={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors cursor-pointer group"
                >
                  <contact.icon size={16} className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                  <span className="text-sm">{contact.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 dark:border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © 2024 BaraAPK. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
              Made with <Heart size={14} className="text-red-500 mx-1" fill="currentColor" /> by BaraAPK
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;