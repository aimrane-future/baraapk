import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Download, Users, Star, Smartphone, Globe } from 'lucide-react';

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure & Safe',
      description: 'All APKs are thoroughly scanned and verified for security before being made available for download.'
    },
    {
      icon: Download,
      title: 'Easy Downloads',
      description: 'Simple, fast, and reliable download process with detailed installation instructions for every app.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by the community, for the community. We listen to user feedback and continuously improve.'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Curated collection of high-quality applications with regular updates and premium features.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Fully responsive design that works perfectly on all devices, from smartphones to desktops.'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Available worldwide with fast CDN delivery ensuring quick downloads from anywhere.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Users' },
    { number: '500+', label: 'APKs Available' },
    { number: '1M+', label: 'Downloads' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          About
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> BaraAPK</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          BaraAPK is your trusted destination for premium Android applications. We're passionate about bringing you the best mobile experiences through carefully curated APKs that enhance your digital lifestyle.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-white/20 dark:border-gray-700"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At BaraAPK, we believe that everyone deserves access to premium mobile applications without barriers. Our mission is to democratize access to high-quality Android apps while maintaining the highest standards of security, reliability, and user experience. We carefully curate each application in our collection, ensuring that our users receive only the best software that enhances their mobile experience.
          </p>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="text-center p-6 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700"
          >
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Why Choose BaraAPK?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-3xl p-8 md:p-12 border border-purple-200 dark:border-purple-800"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Story</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            BaraAPK was born from a simple idea: making premium Android applications accessible to everyone. Founded by a team of passionate developers and mobile enthusiasts, we recognized the need for a reliable, secure platform where users could discover and download high-quality APKs without compromising on safety or user experience.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            What started as a small project has grown into a thriving community of mobile app enthusiasts. We've built relationships with developers worldwide, ensuring that our users have access to the latest and greatest applications across all categories.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Today, BaraAPK serves thousands of users globally, and we're committed to continuing our mission of providing secure, high-quality mobile applications while fostering a community that values innovation, security, and user experience above all else.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;