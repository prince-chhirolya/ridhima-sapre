import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}