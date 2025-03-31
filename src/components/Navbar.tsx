'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll events for navbar appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar appearance based on scroll position
      setScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = ['home', 'projects', 'skills', 'education', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (!element) return false
        
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with animated gradient */}
          <Link href="/" className="relative group">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300"
              animate={{
                background: [
                  'linear-gradient(90deg, rgb(99, 102, 241), rgb(168, 85, 247))',
                  'linear-gradient(90deg, rgb(79, 70, 229), rgb(236, 72, 153))',
                  'linear-gradient(90deg, rgb(99, 102, 241), rgb(168, 85, 247))',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <span className="relative block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 px-2 py-1">
              Shivani
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {['Home', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => {
              const lcItem = item.toLowerCase()
              const isActive = activeSection === lcItem
              
              return (
                <Link 
                  key={item}
                  href={lcItem === 'home' ? '/' : `/#${lcItem}`}
                  className="relative px-4 py-2 group"
                >
                  {/* Animated background for active item */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-indigo-50 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  
                  {/* Text with hover effect */}
                  <span className={`relative z-10 font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'text-indigo-600' 
                      : 'text-gray-600 group-hover:text-indigo-500'
                  }`}>
                    {item}
                  </span>
                  
                  {/* Animated underline on hover */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : ''
                  }`} />
                </Link>
              )
            })}
            
            {/* Resume button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm shadow-md focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute h-0.5 w-6 bg-indigo-600 transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`} />
                <span className={`absolute h-0.5 bg-indigo-600 transform transition-all duration-300 ${
                  isOpen ? 'opacity-0 translate-x-4' : 'opacity-100 w-6'
                }`} />
                <span className={`absolute h-0.5 w-6 bg-indigo-600 transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`} />
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="py-4 mt-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex flex-col space-y-1 px-2">
                  {['Home', 'Projects', 'Skills', 'Education', 'Contact'].map((item, index) => {
                    const lcItem = item.toLowerCase()
                    const isActive = activeSection === lcItem
                    
                    return (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                      >
                        <Link 
                          href={lcItem === 'home' ? '/' : `/#${lcItem}`}
                          className={`flex items-center px-4 py-3 rounded-lg ${
                            isActive 
                              ? 'bg-indigo-50 text-indigo-600' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                          {isActive && (
                            <motion.div
                              layoutId="activeMobileIndicator"
                              className="ml-auto w-1.5 h-5 rounded-full bg-indigo-500"
                              initial={false}
                              transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.35 }}
                    className="px-3 pt-3 mt-2 border-t border-gray-100"
                  >
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      View Resume
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar