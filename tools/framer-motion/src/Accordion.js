import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, height: 'auto' },
  close: { opacity: 0, height: 0 },
};

const Accordion = () => {
  const [visible, setIsVisible] = useState(false);

  return (
    <article>
      <h2 role="button" onClick={() => setIsVisible(!visible)}>
        The Heading
      </h2>
      <AnimatePresence>
        {visible && (
          <motion.div
            variants={variants}
            style={{ overflow: 'hidden' }}
            initial="close"
            animate="open"
            exit="close"
          >
            <p>
              dustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with deskt
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
