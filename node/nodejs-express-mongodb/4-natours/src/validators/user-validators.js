function isPasswordConfirmationValid(confirmationPassword) {
  return confirmationPassword === this.password;
}

module.exports = {
  isPasswordConfirmationValid,
};
