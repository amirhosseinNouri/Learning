import React from 'react';
import PropTypes from 'prop-types';

export default function geolocation({ latitude, longitude }) {
  return (
    <div>
      <h2>lat : {latitude}</h2>
      <h2>long : {longitude}</h2>
    </div>
  );
}

geolocation.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

geolocation.defaultProps = {
  latitude: null,
  longitude: null,
};
