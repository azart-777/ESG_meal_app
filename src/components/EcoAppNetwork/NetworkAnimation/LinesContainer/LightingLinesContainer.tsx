import React from 'react';
import { motion } from 'framer-motion';

interface LinesProps {
  path: string;
  duration: number;
}

const LightingLinesContainer: React.FC<LinesProps> = ({ path, duration }) => {
  return (
    <motion.svg width="300" height="500" viewBox="0 0 300 500">
      <motion.path
        className="lighting-line"
        d={path}
        stroke="limegreen"  // Green neon-like color
        strokeWidth="3"  // Adjusted line width for visibility
        fill="transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}  // Glowing and fading effect
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
        }}
      />
    </motion.svg>
  );
};

export default LightingLinesContainer;
