import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

const COLORS = [
  'var(--red)',
  'var(--purp)',
  'var(--blue)',
  'var(--black)',
  'var(--green)',
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0,
  }),
};

const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (direction) => {
    setPage([page + direction, direction]);
  };

  const index = wrap(0, COLORS.length, page);

  return (
    <div style={{ position: 'relative', height: 400 }}>
      <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          style={{
            height: 400,
            width: '100%',
            backgroundColor: COLORS[index],
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          variants={variants}
          exit="exit"
          animate="center"
          initial="enter"
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={1}
          onDragEnd={(event, { offset, velocity }) => {
            console.log(offset.x);
            if (offset.x > 400) {
              paginate(-1);
            } else if (offset.x < -400) {
              paginate(1);
            }
          }}
        />
      </AnimatePresence>
      <div style={{position: 'absolute'}}>

      <button onClick={() => paginate(-1)}>{'<'}</button>
      <button onClick={() => paginate(1)}>{'>'}</button>
      </div>
    </div>
  );
};

export default Slideshow;
