const jwt = require('jsonwebtoken');

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  });

  return token;
};

module.exports = {
  signToken,
};
