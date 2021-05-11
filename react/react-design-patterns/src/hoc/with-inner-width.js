import React, { useState, useEffect } from 'react';
export const withInnerWidth = (Component) => (props) => {
  const [innerWidth, setInnerWidth] = useState(null);

  const handleResize = () => setInnerWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <Component {...props} innerWidth={innerWidth} />;
};
