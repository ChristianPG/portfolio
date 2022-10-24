import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row min-w-full justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={project}
            className="flex flex-col justify-center items-center flex-shrink-0 h-screen w-screen snap-center space-y-5 p-20 md:p-44"
          >
            <motion.div
              className="flex h-48"
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <Image
                className="object-cover object-center"
                src="/belgium_picture.jpeg"
                alt="Selfie"
                width={500}
                height={600}
              />
            </motion.div>
            <div className="space-y-10 text-center">
              <h4 className="text-4xl font-semibold">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{' '}
                UPS CLone
              </h4>
              <p className="text-lg md:text-left">
                Systems engineer with 6+ years of experience focused on
                front-end software development. Extensive back- ground in full
                software development life cycle including requirements
                definition, evaluation, design, imple- mentation, testing and
                maintenance.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
