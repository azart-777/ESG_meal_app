import React from 'react';
import { motion } from 'framer-motion';
import './Firefly.scss'; 

const LightingLines: React.FC = () => {
  // Ваші координати для першої точки
//   const positions1 = [
//     { x: 100, y: 40 },
//     { x: 100, y: 80 },
//     { x: 85, y: 85 },
//     { x: 85, y: 110 },
//     { x: 140, y: 150 },
//     { x: 140, y: 340 },
//     { x: 115, y: 370 },
//     { x: 115, y: 400 },
//     { x: 100, y: 400 },
//     { x: 100, y: 250 },
//     { x: 75, y: 230 },
//     { x: 75, y: 210 },
//     { x: 20, y: 160 },
//     { x: 20, y: 40 },
//     { x: 100, y: 40 },
//   ];

//   const positions2 = [
//     { x: 107, y: 400 },
//     { x: 107, y: 170 },
//     { x: 75, y: 135 },
//     { x: 75, y: 30 },
//   ];

//   const positions3 = [
//     { x: 230, y: 0 },
//     { x: 230, y: 205 },
//     { x: 190, y: 245 },
//     { x: 190, y: 340 },
//     { x: 100, y: 450 },
//   ];

  // Розділяємо координати для ключових кадрів
//   const xValues1 = positions1.map((pos) => pos.x);
//   const yValues1 = positions1.map((pos) => pos.y);

//   const xValues2 = positions2.map((pos) => pos.x);
//   const yValues2 = positions2.map((pos) => pos.y);

//   const xValues3 = positions3.map((pos) => pos.x);
//   const yValues3 = positions3.map((pos) => pos.y);

  return (
    <div className="fireflies-container">
      {/* <motion.div
        className="firefly"
        initial={{ x: xValues1[0], y: yValues1[0] }}
        animate={{ x: xValues1, y: yValues1 }}
        transition={{
          duration: 3, // Тривалість анімації
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
      <motion.div
        className="firefly"
        initial={{ x: xValues2[0], y: yValues2[0] }}
        animate={{ x: xValues2, y: yValues2 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      />
      <motion.div
        className="firefly"
        initial={{ x: xValues3[0], y: yValues3[0] }}
        animate={{ x: xValues3, y: yValues3 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      /> */}
    </div>
  );
};

export default LightingLines;
