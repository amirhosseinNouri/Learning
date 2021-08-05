function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function () {
  this.score++;
};

userCreator.prototype.decrement = function () {
  this.score--;
};

userCreator.prototype.login = function () {
  console.log('Login');
};

const user1 = new userCreator('Amir', 10);
user1.login();
