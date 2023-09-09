const { promisify } = require('util');
const jwt = require('jsonwebtoken');

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

module.exports = {
  signToken,
  decodeToken,
};
