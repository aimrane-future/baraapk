import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import ApkCard from '../components/ApkCard';
import ApkModal from '../components/ApkModal';
import { sampleApks } from '../data/sampleApks';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApk, setSelectedApk] = useState<typeof sampleApks[0] | null>(null);

  const filteredApks = useMemo(() => {
    if (!searchTerm) return sampleApks;
    
    return sampleApks.filter(apk => 
      apk.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apk.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apk.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Discover Amazing
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> APKs</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Your ultimate destination for premium Android applications. Download, install, and enjoy the best APKs curated just for you.
        </p>
        
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        <div className="text-center p-6 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {sampleApks.length}+
          </div>
          <div className="text-gray-600 dark:text-gray-300">Premium APKs</div>
        </div>
        <div className="text-center p-6 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700">
          <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
            {sampleApks.reduce((acc, apk) => acc + apk.downloads, 0).toLocaleString()}+
          </div>
          <div className="text-gray-600 dark:text-gray-300">Total Downloads</div>
        </div>
        <div className="text-center p-6 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {(sampleApks.reduce((acc, apk) => acc + apk.rating, 0) / sampleApks.length).toFixed(1)}
          </div>
          <div className="text-gray-600 dark:text-gray-300">Average Rating</div>
        </div>
      </motion.div>

      {/* APK Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredApks.map((apk, index) => (
          <motion.div
            key={apk.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <ApkCard
              apk={apk}
              onClick={() => setSelectedApk(apk)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* No Results */}
      {filteredApks.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            No APKs Found
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Try adjusting your search terms or browse all available APKs.
          </p>
        </motion.div>
      )}

      {/* APK Modal */}
      <ApkModal
        apk={selectedApk}
        isOpen={!!selectedApk}
        onClose={() => setSelectedApk(null)}
      />
    </div>
  );
};

export default Home;