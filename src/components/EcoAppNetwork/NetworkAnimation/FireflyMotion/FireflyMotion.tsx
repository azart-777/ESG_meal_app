import React from 'react';
import './FireflyMotion.scss';
import { motion } from 'framer-motion';

interface FireflyMotionProps {
  positions: { x: number; y: number }[];
  duration: number;
}

const FireflyMotion: React.FC<FireflyMotionProps> = ({ positions, duration }) => {
  const xValues = positions.map((pos) => pos.x);
  const yValues = positions.map((pos) => pos.y);

  return (
    <motion.div
      className="firefly"
      initial={{ x: xValues[0], y: yValues[0] }}
      animate={{ x: xValues, y: yValues }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    />
  );
};

export default FireflyMotion;