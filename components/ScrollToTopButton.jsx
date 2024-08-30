"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset> 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed left-4 bottom-4 z-50"
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={buttonVariants}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={scrollToTop}
        className="bg-red-800 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </motion.div>
  );
};

export default ScrollToTopButton;