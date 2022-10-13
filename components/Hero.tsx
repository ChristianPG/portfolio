import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroudCircles from './BackgroudCircles';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Christian Patiño",
      "I'm a Developer",
      'A Bad Drummer',
      'And a Worse Violinist',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center">
      <BackgroudCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
