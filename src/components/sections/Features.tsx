import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Calculator, Users, ShoppingBag, AlertCircle, Map } from 'lucide-react';
import { Card } from '../ui/Card';

export const Features: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: Brain,
      title: "AI Trip Planner",
      description: "Personalized itineraries based on your preferences, budget, and travel style",
      preview: "Smart recommendations for activities, restaurants, and attractions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Calculator,
      title: "Budget Estimator",
      description: "Real-time expense tracking with intelligent cost predictions",
      preview: "Itemized breakdown with currency conversion and savings tips",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Group Tracking",
      description: "Live location sharing and coordination for group travelers",
      preview: "Real-time map with member status and meeting points",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ShoppingBag,
      title: "Shop Integration",
      description: "Discover nearby stores, markets, and local shopping experiences",
      preview: "Curated lists of authentic local shops and markets",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: AlertCircle,
      title: "SOS Alerts",
      description: "One-click emergency assistance with location sharing",
      preview: "Instant alerts to emergency contacts and local authorities",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Map,
      title: "Smart Maps",
      description: "AI-powered route optimization with safety zone indicators",
      preview: "Restricted area warnings and safe route suggestions",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced AI technology meets intuitive design to create the ultimate travel companion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Card hover className="p-8 h-full relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} mr-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredCard === index ? 1 : 0,
                        height: hoveredCard === index ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                          {feature.preview}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};