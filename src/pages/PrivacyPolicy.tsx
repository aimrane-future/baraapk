import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Device information (model, operating system, unique device identifiers)',
        'Usage data (apps downloaded, search queries, time spent on site)',
        'Technical data (IP address, browser type, referring website)',
        'Contact information (when you reach out to us voluntarily)',
        'Cookies and similar tracking technologies for site functionality'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide and maintain our APK download service',
        'Improve user experience and site functionality',
        'Analyze usage patterns to enhance our offerings',
        'Respond to customer support inquiries',
        'Send important updates about our services',
        'Ensure security and prevent fraudulent activities'
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection & Security',
      content: [
        'Industry-standard encryption for data transmission',
        'Secure servers with regular security updates',
        'Limited access to personal data on a need-to-know basis',
        'Regular security audits and vulnerability assessments',
        'Compliance with international data protection standards',
        'Automatic data anonymization where possible'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights & Choices',
      content: [
        'Access your personal data we have collected',
        'Request correction of inaccurate information',
        'Delete your personal data (right to be forgotten)',
        'Opt-out of non-essential communications',
        'Data portability - receive your data in a structured format',
        'Object to processing based on legitimate interests'
      ]
    }
  ];

  const lastUpdated = 'January 15, 2024';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Shield size={32} className="text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Privacy
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Policy</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Your privacy is important to us. This policy explains how BaraAPK collects, uses, and protects your personal information.
        </p>
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          Last updated: {lastUpdated}
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Introduction</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          At BaraAPK, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          By using BaraAPK, you agree to the collection and use of information in accordance with this policy. We will not use or share your information with anyone except as described in this Privacy Policy.
        </p>
      </motion.div>

      {/* Main Sections */}
      <div className="space-y-8 mb-12">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <section.icon size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
            </div>
            <ul className="space-y-3">
              {section.content.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Third-Party Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We may use third-party services to help us operate our website and provide better services to you. These services may include:
        </p>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 flex-shrink-0" />
            <span>Analytics services to understand how our website is used</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 flex-shrink-0" />
            <span>Content delivery networks (CDN) for faster loading times</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 flex-shrink-0" />
            <span>Cloud hosting services for reliable website operation</span>
          </li>
        </ul>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>
      </motion.div>

      {/* Cookies Policy */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 dark:border-gray-700"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies & Tracking</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookies through your browser settings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
            <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Essential Cookies</h3>
            <p className="text-sm text-green-700 dark:text-green-300">Required for basic site functionality</p>
          </div>
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Analytics Cookies</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">Help us improve our services</p>
          </div>
        </div>
      </motion.div>

      {/* Contact & Updates */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-8 border border-purple-200 dark:border-purple-800"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
            <AlertTriangle size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Contact Us & Policy Updates</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
              <a href="mailto:aimranebara@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                aimranebara@gmail.com
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;