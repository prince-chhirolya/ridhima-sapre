'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-indigo-600">
            Shivani
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/#projects" className="text-gray-700 hover:text-indigo-600 transition">
              Projects
            </Link>
            <Link href="/#skills" className="text-gray-700 hover:text-indigo-600 transition">
              Skills
            </Link>
            <Link href="/#education" className="text-gray-700 hover:text-indigo-600 transition">
              Education
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-indigo-600 transition">
              Contact
            </Link>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <Link 
                href="/#projects" 
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/#skills" 
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
              <Link 
                href="/#education" 
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>
              <Link 
                href="/#contact" 
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar