import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Star, Calendar, HardDrive, Shield, Info } from 'lucide-react';
import { AppData } from '../data/appsData';

interface ApkModalProps {
  apk: AppData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ApkModal: React.FC<ApkModalProps> = ({ apk, isOpen, onClose }) => {
  if (!apk) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatDownloads = (downloads: number | null) => {
    if (downloads === null || downloads === undefined) return 'N/A';
    if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(1)}M`;
    if (downloads >= 1000) return `${(downloads / 1000).toFixed(1)}K`;
    return downloads.toString();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="relative p-6 bg-gradient-to-r from-purple-600 to-pink-600">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="flex items-start gap-4 text-white">
                <div className="relative">
                  <img
                    src={apk.icon || "https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"}
                    alt={apk.name}
                    className="w-20 h-20 rounded-2xl shadow-lg"
                  />
                  {apk.premium && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star size={12} className="text-white" fill="currentColor" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{apk.name}</h2>
                  <p className="text-white/80 mb-2">Version {apk.version}</p>
                  <div className="flex items-center gap-4 text-sm text-white/70">
                    <div className="flex items-center gap-1">
                      <Star size={14} fill="currentColor" />
                      {apk.rating ?? 'N/A'}
                    </div>
                    <div className="flex items-center gap-1">
                      <Download size={14} />
                      {formatDownloads(apk.downloads)} downloads
                    </div>
                    <div className="flex items-center gap-1">
                      <HardDrive size={14} />
                      {apk.size ?? 'N/A'}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(apk.updatedAt)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {/* Screenshots */}
              {apk.screenshots.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Screenshots</h3>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {apk.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${apk.name} screenshot ${index + 1}`}
                        className="w-32 h-56 object-cover rounded-xl shadow-md flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Description</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {apk.description}
                </p>
              </div>

              {/* Category & Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Category & Tags</h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800 font-medium">
                    {apk.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {apk.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Installation Guide */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Info size={20} />
                  How to Install
                </h3>
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                  <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800 dark:text-blue-200">
                    <li>Enable "Unknown Sources" in your device settings</li>
                    <li>Download the APK file</li>
                    {apk.hasObb && <li>Download and extract the OBB file to Android/obb/</li>}
                    <li>Tap the APK file to install</li>
                    <li>Follow the installation prompts</li>
                  </ol>
                </div>
              </div>

              {apk.hasObb && (
                <div className="mb-6">
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-orange-800 dark:text-orange-200 mb-2">
                      <Shield size={16} />
                      <span className="font-semibold">OBB File Required</span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      This app requires additional OBB data files. Make sure to download and install them in the correct directory.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-3">
                <motion.a
                  href={apk.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download APK
                </motion.a>
                {apk.hasObb && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
                  >
                    <HardDrive size={16} />
                    Download OBB
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApkModal;
