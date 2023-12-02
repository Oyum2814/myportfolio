import About from '@/components/About'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white h-screen snap-y snap-mandatory
    overflow-y-scroll scroll-smooth z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-white/60">
      <Head>
        <title>Om Mukherjee</title>
      </Head>
      {/* Header Section */}
      <Header />
      {/* Hero Section  */}
      <section id="hero" className="snap-center">
        <Hero />
      </section> 
      {/* About Section  */}
      <section id="about"
      className="snap-center">
        <About />
      </section>
      {/* Experience Section  */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills Section  */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Project Section */}
      <section id="project" className="snap-center">
        <Projects />
      </section>
      {/* Contact Me Section  */}
    </div>
  )
}
