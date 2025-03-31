'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="py-20" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-indigo-600">Shivani</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
            Computer Science Student
          </h2>
          <p className="text-gray-600 mb-8">
            I'm passionate about software development, machine learning, and creating
            innovative solutions to complex problems. Welcome to my portfolio!
          </p>
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md hover:bg-indigo-50 transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600">
            {/* Replace with your actual image */}
            <Image
              src="/profile.jpg"
              alt="Shivani"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero