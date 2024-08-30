import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
  open: { x: 0 },
  close: {
    x: '-100%',
    transition: {
      delay: 0.2,
    },
  },
};

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  close: { y: '-20px', opacity: 0 },
};

const links = ['one', 'two', 'three', 'four'];

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
        {links.map((link) => (
          <motion.li variants={listItemVariants} key={link}>
            <a href="#">{link}</a>
          </motion.li>
        ))}
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
    margin: 0 0 1rem;
    font-size: 2rem;

    a {
      text-decoration: none;
      color: white;
      border-bottom: 2px transparent solid;
      transition 0.3s ease border;

      &:hover {
        border-bottom: 2px var(--blue) solid;
      }
    }
  }
`;

export default Nav;
