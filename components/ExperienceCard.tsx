import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[100%] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        className="flex flex-shrink-0 w-32 h-32 xl:w-[200px] xl:h-[200px]"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="rounded-full object-cover object-center"
          src="/belgium_picture.jpeg"
          alt="Selfie"
          width={500}
          height={600}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="font-light text-4xl">Web Developer</h4>
        <p className="font-bold text-2xl mt-1">Open International</p>
        <div className="flex space-x-2 my-2">
          <div className="flex w-10 h-10">
            <Image
              className="rounded-full"
              src="/belgium_picture.jpeg"
              alt="Selfie"
              width={500}
              height={600}
            />
          </div>
          <div className="flex w-10 h-10">
            <Image
              className="rounded-full"
              src="/belgium_picture.jpeg"
              alt="Selfie"
              width={500}
              height={600}
            />
          </div>
          <div className="flex w-10 h-10">
            <Image
              className="rounded-full"
              src="/belgium_picture.jpeg"
              alt="Selfie"
              width={500}
              height={600}
            />
          </div>
        </div>
        <p className="uppercase py-5 text-gray-300">STARTED... - ENDED...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
