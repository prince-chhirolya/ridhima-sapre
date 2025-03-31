'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'

// Enhanced project data with additional fields
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/ecommerce-project',
    color: 'from-blue-500 to-indigo-600',
    features: ['Responsive design', 'User authentication', 'Payment integration', 'Admin dashboard'],
  },
  {
    id: 2,
    title: 'Machine Learning Model',
    description: 'A machine learning model for image classification using TensorFlow and Python.',
    image: '/projects/ml-model.jpg',
    tags: ['Python', 'TensorFlow', 'Jupyter Notebook'],
    link: 'https://github.com/yourusername/ml-image-classification',
    color: 'from-emerald-500 to-teal-600',
    features: ['Image recognition', 'Data preprocessing', 'Model training', 'Performance metrics'],
  },
  {
    id: 3,
    title: 'Mobile App',
    description: 'A cross-platform mobile app built with React Native for task management.',
    image: '/projects/mobile-app.jpg',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: 'https://github.com/yourusername/task-manager-app',
    color: 'from-purple-500 to-pink-600',
    features: ['Cross-platform', 'Real-time updates', 'Push notifications', 'Offline support'],
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js.',
    image: '/projects/dashboard.jpg',
    tags: ['JavaScript', 'D3.js', 'HTML/CSS'],
    link: 'https://github.com/yourusername/data-viz-dashboard',
    color: 'from-amber-500 to-orange-600',
    features: ['Interactive charts', 'Data filtering', 'Responsive layout', 'CSV import'],
  },
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  // Get all unique tags
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  )

  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projectsData.filter(project => project.tags.includes(selectedCategory))
    : projectsData

  return (
    <section className="py-24 relative overflow-hidden" id="projects" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50 rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-50 rounded-full filter blur-3xl opacity-30 z-0"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{
             backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore my portfolio of projects that showcase my skills in software development,
            machine learning, and web technologies.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-100'
            }`}
          >
            All Projects
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedCategory(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === tag
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-100'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-indigo-100">
                  {/* Project image with overlay */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Tags overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Project content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    {/* Expandable features section */}
                    <AnimatePresence>
                      {activeProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                            {project.features.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: idx * 0.1 }}
                              >
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    <div className="flex justify-between items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProject(activeProject === project.id ? null : project.id);
                        }}
                        className="text-indigo-500 hover:text-indigo-700 font-medium text-sm flex items-center"
                      >
                        {activeProject === project.id ? 'Show Less' : 'Show More'}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                            activeProject === project.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`relative inline-flex items-center px-4 py-2 rounded-lg overflow-hidden ${
                          hoveredProject === project.id
                            ? `bg-gradient-to-r ${project.color} text-white`
                            : 'bg-gray-50 text-gray-700'
                        } transition-all duration-300`}
                      >
                        <span className="relative z-10 font-medium text-sm">View Project</span>
                        <span className={`absolute right-0 w-8 h-full flex items-center justify-center transition-all duration-300 ${
                          hoveredProject === project.id ? 'translate-x-0' : 'translate-x-10 opacity-0'
                        }`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* More projects link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-indigo-600 font-medium"
          >
            <span>View More Projects on GitHub</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects