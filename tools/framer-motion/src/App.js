import React, { useState } from 'react';
import { Card, CardGrid, Container, Header } from './Elements';
import './App.css';
import Menu from './Menu';
import Squares from './Squares';
import blue from './blue.png';
import purp from './purp.png';
import black from './black.png';
import green from './green.png';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import Modal from './modal';
import Accordion from './Accordion';
import Nav from './Nav';
import Slideshow from './Slideshow';

function App() {
  const [value, setValue] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const [navVisibility, setNavVisibility] = useState(false);
  const [isCardActive, setIsCardActive] = useState(true);

  const x = useMotionValue(0);

  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  console.log({ x });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
    >
      <Header>
        <Menu onClick={() => setNavVisibility(true)} />
        <Nav open={navVisibility} onClose={() => setNavVisibility(false)} />
        <h2>Header</h2>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <Slideshow />
        <Squares />

        <button onClick={() => setIsToggled(true)}>Show</button>
        <input
          type="range"
          min="-100"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Modal open={isToggled} onClose={() => setIsToggled(false)}>
          <Card style={{ background: 'var(--purp)' }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
        </Modal>

        <Accordion />

        <CardGrid>
          <Card
            drag
            dragConstraints={{
              top: -100,
              left: -100,
              bottom: 100,
              right: 100,
            }}
            style={{ background: 'var(--purp)' }}
          >
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <AnimatePresence>
            {isCardActive && (
              <motion.div
                exit={{ height: 0, overflow: 'hidden', opacity: 0 }}
                transition={{
                  opacity: {
                    duration: 0,
                  },
                }}
              >
                <Card
                  drag="x"
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  onDragEnd={(_, info) => {
                    if (Math.abs(info.point.x) > 200) {
                      setIsCardActive(false);
                    }
                  }}
                  style={{
                    x,
                    opacity,
                    background: 'var(--blue)',
                  }}
                >
                  <h3>Some card</h3>
                  <img src={blue} />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
          <Card style={{ background: 'var(--black)' }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: 'var(--green)' }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
