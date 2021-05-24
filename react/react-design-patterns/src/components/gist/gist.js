import React from 'react';
import PropTypes from 'prop-types';

export default function Gist({ description }) {
  return (
    <li>
      {description}
      <button>+1</button>
    </li>
  );
}

Gist.propTypes = { description: PropTypes.string };
Gist.defaultProps = { description: '' };
