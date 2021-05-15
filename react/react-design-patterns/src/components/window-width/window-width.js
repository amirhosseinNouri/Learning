import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
export default function WindowWidth({ children }) {
  const [width, setWidth] = useState(null);

  const onResize = ({ target }) => {
    setWidth(target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return children(width);
}

WindowWidth.propTypes = {
  children: PropTypes.func.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
};
