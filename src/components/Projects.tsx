'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Sample project data - you can replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: 'https://github.com/yourusername/ecommerce-project',
  },
  {
    id: 2,
    title: 'Machine Learning Model',
    description: 'A machine learning model for image classification using TensorFlow and Python.',
    image: '/projects/ml-model.jpg',
    tags: ['Python', 'TensorFlow', 'Jupyter Notebook'],
    link: 'https://github.com/yourusername/ml-image-classification',
  },
  {
    id: 3,
    title: 'Mobile App',
    description: 'A cross-platform mobile app built with React Native for task management.',
    image: '/projects/mobile-app.jpg',
    tags: ['React Native', 'Firebase', 'Redux'],
    link: 'https://github.com/yourusername/task-manager-app',
  },
  {
    id: 4,
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets using D3.js.',
    image: '/projects/dashboard.jpg',
    tags: ['JavaScript', 'D3.js', 'HTML/CSS'],
    link: 'https://github.com/yourusername/data-viz-dashboard',
  },
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <section className="py-20" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each project represents my skills
          and experience in different areas of computer science.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects