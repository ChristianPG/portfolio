import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <motion.div
      className="group flex flex-shrink-0 h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 cursor-pointer hover:grayscale duration-300 ease-in-out"
      initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Image
        className="border-gray-500 rounded-full object-cover object-center"
        src="/belgium_picture.jpeg"
        alt="Selfie"
        width={500}
        height={600}
      />
      <div className="absolute flex items-center justify-center text-xl sm:text-3xl font-bold text-black opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full">
        <p>100%</p>
      </div>
    </motion.div>
  );
};

export default Skill;
