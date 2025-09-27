import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Plane, Luggage, Navigation } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 opacity-20"
        >
          <Plane className="h-12 w-12 text-sky-500" />
        </motion.div>
        <motion.div
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 1}}}
          className="absolute top-40 right-20 opacity-20"
        >
          <MapPin className="h-10 w-10 text-emerald-500" />
        </motion.div>
        <motion.div
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 2}}}
          className="absolute bottom-40 left-20 opacity-20"
        >
          <Luggage className="h-8 w-8 text-orange-500" />
        </motion.div>
        <motion.div
          animate={{...floatingAnimation, transition: {...floatingAnimation.transition, delay: 3}}}
          className="absolute bottom-20 right-10 opacity-20"
        >
          <Navigation className="h-10 w-10 text-sky-500" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Plan Smarter,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">
              Travel Safer
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the future of travel with AI-powered planning, real-time group tracking, 
            and safety features that keep you connected and protected worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link to="/trip-planner">
              <Button size="lg" className="text-lg px-8 py-4">
                Plan My Trip
              </Button>
            </Link>
            <Link to="/safety">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Safety Features
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Icons */}
        <motion.div 
          className="flex justify-center space-x-8 md:space-x-12"
          initial="hidden"
          animate="visible"
        >
          {[MapPin, Plane, Luggage, Navigation].map((Icon, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-4 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"
            >
              <Icon className="h-8 w-8 text-sky-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};