'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import CreditTag from './CreditTag'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white py-10">
      
      {/* Animated background elements - reduced number */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-indigo-500"
              initial={{ 
                width: Math.random() * 150 + 50, 
                height: Math.random() * 150 + 50,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: 0.1
              }}
              animate={{ 
                x: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50
                ],
                y: [
                  Math.random() * 100 - 50,
                  Math.random() * 100 - 50
                ]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 15 + Math.random() * 10,
                ease: "linear"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Glowing effect that follows mouse */}
      <motion.div 
        className="absolute bg-indigo-600 rounded-full filter blur-[80px] opacity-20"
        style={{
          width: 300,
          height: 300,
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
        }}
        animate={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
        }}
        transition={{ type: "spring", damping: 15 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Simplified top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-indigo-800/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Anshu
            </h2>
            <p className="text-indigo-200 mt-1 max-w-md text-sm">
              Building the future through code and innovation
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {/* Social icons - slightly smaller */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center backdrop-blur-sm border border-indigo-800/30 transition-all duration-300 group-hover:bg-indigo-600/50 group-hover:border-indigo-400">
                <svg className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center backdrop-blur-sm border border-indigo-800/30 transition-all duration-300 group-hover:bg-indigo-600/50 group-hover:border-indigo-400">
                <svg className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </div>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="group">
              <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center backdrop-blur-sm border border-indigo-800/30 transition-all duration-300 group-hover:bg-indigo-600/50 group-hover:border-indigo-400">
                <svg className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
        
        {/* Condensed main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* About section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3 inline-block relative">
              About Me
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            </h3>
            <p className="text-indigo-200 text-sm">
              A passionate computer science student focused on creating innovative solutions and expanding my knowledge in software development, AI, and emerging technologies.
            </p>
          </motion.div>
          
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3 inline-block relative">
              Navigation
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['Home', 'Projects', 'Skills', 'Education', 'Contact'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href={`/#${item.toLowerCase()}`} 
                    className="group flex items-center text-indigo-300 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 group-hover:bg-indigo-400 transition-colors"></span>
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-3 inline-block relative">
              Contact
              <span className="absolute -bottom-1 left-0 w-10 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
            </h3>
            <div className="space-y-3">
              <div className="group flex items-center">
                <div className="w-8 h-8 rounded-lg bg-indigo-900/30 flex items-center justify-center backdrop-blur-sm border border-indigo-800/30 transition-all duration-300 group-hover:bg-indigo-600/50 group-hover:border-indigo-400 mr-3">
                  <svg className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:your.email@example.com" className="text-indigo-200 text-sm hover:text-white transition-colors">
                  your.email@example.com
                </a>
              </div>
              
              <div className="group flex items-center">
                <div className="w-8 h-8 rounded-lg bg-indigo-900/30 flex items-center justify-center backdrop-blur-sm border border-indigo-800/30 transition-all duration-300 group-hover:bg-indigo-600/50 group-hover:border-indigo-400 mr-3">
                  <svg className="w-4 h-4 text-indigo-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-indigo-200 text-sm">City, Country</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Bottom copyright section */}
        <div className="relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="pt-6 text-center"
          >
            <p className="text-indigo-300 text-xs">
              &copy; {currentYear} <span className="text-white">Anshu</span>. All rights reserved.
            </p>
          </motion.div>
        </div>
        {/* Credit Tag - Added at the top of footer */}
      <CreditTag />
      </div>
    </footer>
  )
}

export default Footer