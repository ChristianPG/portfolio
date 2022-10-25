import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        className="flex flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] m-10"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="mb-20 md:mb-0 rounded-full object-cover md:rounded-lg"
          src="/belgium_picture.jpeg"
          alt="Selfie"
          width={500}
          height={600}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="space-y-10 px-0"
      >
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          Systems engineer with 6+ years of experience focused on front-end
          software development. Extensive back- ground in full software
          development life cycle including requirements definition, evaluation,
          design, imple- mentation, testing and maintenance.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
