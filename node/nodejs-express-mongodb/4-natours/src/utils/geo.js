const {
  EARTH_RADIUS_IN_KM,
  EARTH_RADIUS_IN_MILE,
} = require('../constants/geo');

const getEarthRadius = (unit) =>
  unit === 'mi' ? EARTH_RADIUS_IN_MILE : EARTH_RADIUS_IN_KM;

module.exports = {
  getEarthRadius,
};
