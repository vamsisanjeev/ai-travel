import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Users, Map as MapIcon, Clock, ShieldX } from 'lucide-react';
import { Card } from '../ui/Card';

export const Problems: React.FC = () => {
  const problems = [
    {
      icon: Clock,
      title: "Improper Planning",
      description: "Missed connections, double bookings, and poor itinerary coordination",
      color: "text-red-500"
    },
    {
      icon: DollarSign,
      title: "Budget Overspending",
      description: "Unexpected costs and poor expense tracking lead to financial stress",
      color: "text-orange-500"
    },
    {
      icon: ShieldX,
      title: "Unsafe Routes",
      description: "Walking through dangerous areas without local knowledge",
      color: "text-red-600"
    },
    {
      icon: MapIcon,
      title: "Lack of Local Info",
      description: "Missing out on authentic restaurants, hotels, and experiences",
      color: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Group Coordination",
      description: "Lost members, conflicting schedules, and communication breakdowns",
      color: "text-purple-500"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Situations",
      description: "Getting lost in crowded places without help or emergency contacts",
      color: "text-red-700"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Common Travel Problems
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every traveler faces these challenges. We've built the perfect solution to solve them all.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card hover className="p-8 h-full">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-6">
                      <Icon className={`h-8 w-8 ${problem.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};