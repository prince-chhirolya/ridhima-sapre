'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

// Sample education data - replace with your actual education
const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University Name',
    location: 'City, Country',
    duration: '2020 - 2024',
    description: 'Focused on software engineering, data structures, algorithms, and machine learning. Maintained a GPA of 3.8/4.0.',
    skills: ['Data Structures', 'Algorithms', 'Machine Learning', 'Software Engineering'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 2,
    degree: 'High School Diploma',
    institution: 'High School Name',
    location: 'City, Country',
    duration: '2018 - 2020',
    description: 'Graduated with honors. Participated in various programming competitions and science fairs.',
    skills: ['Mathematics', 'Computer Science', 'Physics', 'Problem Solving'],
    color: 'from-purple-500 to-pink-600'
  },
]

// Sample experience data - replace with your actual experience
const experienceData = [
  {
    id: 1,
    position: 'Software Development Intern',
    company: 'Tech Company Name',
    location: 'City, Country',
    duration: 'May 2023 - August 2023',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers to implement new features and fix bugs.',
    skills: ['React', 'Node.js', 'TypeScript', 'Git'],
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 2,
    position: 'Research Assistant',
    company: 'University Research Lab',
    location: 'City, Country',
    duration: 'January 2022 - May 2022',
    description: 'Assisted in research projects related to machine learning and data analysis. Implemented algorithms and conducted experiments.',
    skills: ['Python', 'TensorFlow', 'Data Analysis', 'Research'],
    color: 'from-amber-500 to-orange-600'
  },
]

const Education = () => {
  const [activeTab, setActiveTab] = useState('education')

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white" id="education">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-blue-100 rounded-full opacity-70 blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
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
            Education & Experience
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            My academic journey and professional experience in the field of computer science.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-xl">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-white shadow-md text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-white shadow-md text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Experience
            </button>
          </div>
        </div>

        {/* Education content */}
        <div className={`${activeTab === 'education' ? 'block' : 'hidden'}`}>
          <div className="max-w-4xl mx-auto">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side - Timeline */}
                  <div className="md:w-1/3 flex flex-col items-center md:items-end">
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-medium shadow-lg`}>
                      {item.duration}
                    </div>
                    <div className="h-full w-0.5 bg-gradient-to-b from-indigo-500 to-transparent mt-4 md:mr-4 hidden md:block"></div>
                  </div>
                  
                  {/* Right side - Content */}
                  <div className="md:w-2/3">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                        <div className="mt-2 md:mt-0 flex items-center text-gray-500">
                          <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-indigo-600 mb-3">{item.institution}</h4>
                      
                      <p className="text-gray-600 mb-5">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience content */}
        <div className={`${activeTab === 'experience' ? 'block' : 'hidden'}`}>
          <div className="max-w-4xl mx-auto">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 last:mb-0"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left side - Timeline */}
                  <div className="md:w-1/3 flex flex-col items-center md:items-end">
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-medium shadow-lg`}>
                      {item.duration}
                    </div>
                    <div className="h-full w-0.5 bg-gradient-to-b from-indigo-500 to-transparent mt-4 md:mr-4 hidden md:block"></div>
                  </div>
                  
                  {/* Right side - Content */}
                  <div className="md:w-2/3">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{item.position}</h3>
                        <div className="mt-2 md:mt-0 flex items-center text-gray-500">
                          <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-indigo-600 mb-3">{item.company}</h4>
                      
                      <p className="text-gray-600 mb-5">{item.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education