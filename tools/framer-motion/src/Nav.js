import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  open: { x: 0 },
  close: { x: '-100%' },
};

const Nav = ({ onClose, open }) => {
  return (
    <MenuNav
      variants={variants}
      initial="close"
      animate={open ? 'open' : 'close'}
      exit="close"
      transition={{ damping: 300 }}
    >
      <button onClick={onClose}>Close</button>
      <ul>
        <li>
          <a href="#">One</a>
        </li>
        <li>
          <a href="#">Two</a>
        </li>
        <li>
          <a href="#">Three</a>
        </li>
        <li>
          <a href="#">Four</a>
        </li>
      </ul>
    </MenuNav>
  );
};

const MenuNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    passing: 0;
    margin: 0;
  }

  li {
    padding: 0;
    margin: 0;
    font-size: 2rem;

    a {
      color: white;
    }
  }
`;

export default Nav;
