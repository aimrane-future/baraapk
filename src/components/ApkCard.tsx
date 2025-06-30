import React from 'react';
import { motion } from 'framer-motion';
import { Download, Star, Calendar, HardDrive } from 'lucide-react';
import { AppData } from '../data/appsData';

interface ApkCardProps {
  apk: AppData;
  onClick: () => void;
}

const ApkCard: React.FC<ApkCardProps> = ({ apk, onClick }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDownloads = (downloads: number | null) => {
    if (downloads === null || downloads === undefined) return 'N/A';
    if (downloads >= 1000000) return `${(downloads / 1000000).toFixed(1)}M`;
    if (downloads >= 1000) return `${(downloads / 1000).toFixed(1)}K`;
    return downloads.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="group bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700 rounded-2xl p-6 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/10 transition-all"
    >
      {/* App Icon & Basic Info */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img
            src={apk.icon || "https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"}
            alt={apk.name}
            className="w-16 h-16 rounded-2xl object-cover shadow-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.pexels.com/photos/1482101/pexels-photo-1482101.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop";
            }}
          />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            {apk.rating ?? 'N/A'}
          </div>
          {apk.premium && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Star size={10} className="text-white" fill="currentColor" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {apk.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">v{apk.version}</p>
          <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <HardDrive size={12} />
              {apk.size ?? 'N/A'}
            </div>
            <div className="flex items-center gap-1">
              <Download size={12} />
              {formatDownloads(apk.downloads)}
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              {formatDate(apk.updatedAt)}
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {apk.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {apk.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-700 dark:text-purple-300 text-xs rounded-full border border-purple-200 dark:border-purple-800"
          >
            {tag}
          </span>
        ))}
        {apk.tags.length > 3 && (
          <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
            +{apk.tags.length - 3}
          </span>
        )}
      </div>

      {/* Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
      >
        <Download size={16} />
        Download
      </motion.button>
    </motion.div>
  );
};

export default ApkCard;
