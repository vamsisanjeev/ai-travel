import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = false,
  glass = false
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const glassClasses = glass 
    ? 'bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10'
    : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700';

  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      className={clsx(baseClasses, glassClasses, hoverClasses, className)}
    >
      {children}
    </motion.div>
  );
};