'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Sample skills data with icons - replace with your actual skills
const skillsData = {
  programming: [
    { name: 'JavaScript', level: 90, icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
    { name: 'TypeScript', level: 85, icon: '📘', color: 'from-blue-400 to-blue-600' },
    { name: 'Python', level: 80, icon: '🐍', color: 'from-green-400 to-green-600' },
    { name: 'Java', level: 75, icon: '☕', color: 'from-red-400 to-red-600' },
    { name: 'C++', level: 70, icon: '⚙️', color: 'from-purple-400 to-purple-600' },
  ],
  frameworks: [
    { name: 'React', level: 90, icon: '⚛️', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Next.js', level: 85, icon: '▲', color: 'from-gray-600 to-gray-900' },
    { name: 'Node.js', level: 80, icon: '🟢', color: 'from-green-500 to-green-700' },
    { name: 'Express', level: 75, icon: '🚂', color: 'from-gray-400 to-gray-600' },
    { name: 'TensorFlow', level: 65, icon: '🧠', color: 'from-orange-400 to-orange-600' },
  ],
  tools: [
    { name: 'Git', level: 90, icon: '🔄', color: 'from-orange-500 to-red-500' },
    { name: 'Docker', level: 75, icon: '🐳', color: 'from-blue-400 to-blue-600' },
    { name: 'AWS', level: 70, icon: '☁️', color: 'from-yellow-500 to-orange-500' },
    { name: 'MongoDB', level: 80, icon: '🍃', color: 'from-green-500 to-green-700' },
    { name: 'PostgreSQL', level: 75, icon: '🐘', color: 'from-blue-500 to-indigo-500' },
  ],
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming')
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categories = [
    { id: 'programming', name: 'Programming Languages', icon: '💻' },
    { id: 'frameworks', name: 'Frameworks & Libraries', icon: '🧩' },
    { id: 'tools', name: 'Tools & Technologies', icon: '🛠️' },
  ]

  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 z-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full filter blur-3xl opacity-30 z-0"></div>
      
      {/* Animated dots background */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-500"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Technical Expertise
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A showcase of my technical skills and proficiencies developed through education,
            projects, and professional experiences.
          </p>
        </motion.div>

        {/* Category selector */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills display */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData[activeCategory as keyof typeof skillsData].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group"
                >
                  {/* Skill card background */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0"
                       style={{
                         backgroundImage: `radial-gradient(circle at 30% 30%, ${skill.name === hoveredSkill ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.1)'}, transparent)`
                       }}></div>
                  
                  <div className="p-6 relative z-10">
                    {/* Skill header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white text-2xl shadow-md`}>
                          {skill.icon}
                        </div>
                        <h3 className="text-xl font-bold ml-4 text-gray-800">{skill.name}</h3>
                      </div>
                      <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Skill progress */}
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    
                    {/* Skill level indicator */}
                    <div className="mt-4 flex justify-between">
                      <span className="text-sm text-gray-500">Beginner</span>
                      <span className="text-sm text-gray-500">Advanced</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Other Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {['UI/UX Design', 'Responsive Design', 'RESTful APIs', 'GraphQL', 'Agile Methodology', 
              'Problem Solving', 'Team Collaboration', 'Technical Writing', 'CI/CD', 'Testing'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills