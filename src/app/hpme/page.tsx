'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Define types for better type safety
interface NavItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  title: string;
  items: NavItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button 
        className="text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {title}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 mt-2 bg-black/80 backdrop-blur-lg rounded-lg shadow-2xl border border-white/10 overflow-hidden"
          >
            {items.map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="block px-4 py-2 text-white hover:bg-white/10 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface NavItemGroup {
  title: string;
  items: NavItem[];
}

const Navbar: React.FC = () => {
  const navItems: NavItemGroup[] = [
    { 
      title: 'Solutions', 
      items: [
        { label: 'Machine Learning', href: '/solutions/ml' },
        { label: 'Computer Vision', href: '/solutions/cv' },
        { label: 'Natural Language AI', href: '/solutions/nlp' }
      ]
    },
    { 
      title: 'Industries', 
      items: [
        { label: 'Healthcare', href: '/industries/healthcare' },
        { label: 'Finance', href: '/industries/finance' },
        { label: 'Retail', href: '/industries/retail' }
      ]
    }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-lg border-b border-white/10 py-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-white flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            className="w-8 h-8 mr-2 text-blue-500"
            fill="currentColor"
          >
            <path d="M20 12a8 8 0 0 0-8-8V2a10 10 0 0 1 10 10h-2zm-8 8a8 8 0 0 0 8-8h2a10 10 0 0 1-10 10v-2z"/>
            <path d="M7 12a5 5 0 0 1 5-5V5a7 7 0 0 0-7 7h2zm5 5a5 5 0 0 1-5-5H5a7 7 0 0 0 7 7v-2z"/>
          </svg>
          NexusAI
        </motion.div>
        <div className="flex space-x-4 items-center">
          {navItems.map((navItem, index) => (
            <NavDropdown 
              key={index} 
              title={navItem.title} 
              items={navItem.items} 
            />
          ))}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900 to-purple-900 opacity-90"></div>
      
      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 h-full">
          {[...Array(400)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: Math.random() * 5 + 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              className="bg-blue-500/20 border border-white/5"
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl px-4"
      >
        {/* Animated AI Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            duration: 0.8 
          }}
          className="text-6xl font-bold text-white mb-6 leading-tight"
        >
          Intelligent AI Solutions 
          <br />
          <span className="text-blue-400">Powering the Future</span>
        </motion.h1>

        {/* Subheadline with Typing Effect */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto"
        >
          Transforming complex challenges into innovative AI-driven solutions across healthcare, finance, and technology landscapes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            href="/solutions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Explore Solutions
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Book Consultation
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Animated Background Blobs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [0.5, 1, 0.5],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [0.5, 1.2, 0.5],
          rotate: [0, -360]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl"
      />
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
    </div>
  );
}