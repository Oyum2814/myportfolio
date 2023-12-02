import About from '@/components/About'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'
import {GetStaticProps} from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import {fetchPageInfo} from '@/utils/fetchPageInfo'
import {fetchExperiences} from '@/utils/fetchExperiences'
import {fetchSkills} from '@/utils/fetchSkills'
import {fetchProjects} from '@/utils/fetchProjects'
import {fetchSocials} from '@/utils/fetchSocials'

type Props = {
  pageInfo:PageInfo;
  experiences:Experience[];
  skills:Skill[];
  projects:Project[];
}

const Home =  ({pageInfo,experiences,projects,skills}:Props) =>{
  return (  
    <div className="bg-white text-black dark:bg-black dark:text-white h-screen snap-y snap-mandatory
    overflow-y-scroll scroll-smooth z-0 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white/60">
      <Head>
        <title>Om Mukherjee</title>
      </Head>
      {/* Header Section */}
      {/* Hero Section  */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo}/>
      </section> 
      {/* About Section  */}
      <section id="about"
      className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      {/* Experience Section  */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>
      {/* Skills Section  */}
      <section id="skills" className="snap-center">
        <Skills skills={skills}/>
      </section>
      {/* Project Section */}
      <section id="projects" className="snap-center">
        <Projects projects={projects}/>
      </section>
      {/* Contact Me Section  */}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async ()=>{
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences:Experience[] = await fetchExperiences();
  const skills:Skill[] = await fetchSkills();
  const projects:Project[] = await fetchProjects();

  return {
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
    },
    revalidate:100,
  };
};

