import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';

import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Christian&apos;s Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="flex justify-center items-center sticky bottom-5 w-full z-50">
        <Link href="#hero">
          <ArrowUpCircleIcon className="text-[#F7AB0A] h-12 w-12 filter grayscale hover:grayscale-0 cursor-pointer" />
        </Link>
      </footer>
    </div>
  );
};

export default Home;
