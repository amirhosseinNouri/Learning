const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const {
  HOURS_IN_A_DAY,
  MINUTES_IN_AN_HOUR,
  SECONDS_IN_A_MINUTE,
  MIL_SECONDS_IN_A_SECOND,
} = require('../constants/date');

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  });

  return token;
};

const decodeToken = (token, secret) => {
  const promisifiedVerify = promisify(jwt.verify);
  return promisifiedVerify(token, secret);
};

const calculateCookieJWTExpirationTime = () =>
  new Date(
    Date.now() +
      process.env.JWT_COOKIE_EXPIRATION_TIME *
        HOURS_IN_A_DAY *
        MINUTES_IN_AN_HOUR *
        SECONDS_IN_A_MINUTE *
        MIL_SECONDS_IN_A_SECOND,
  );

module.exports = {
  signToken,
  decodeToken,
  calculateCookieJWTExpirationTime,
};
