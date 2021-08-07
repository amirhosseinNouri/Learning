function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.sayName = function () {
  console.log(`Hi, I'm ${this.name}`);
};

UserCreator.prototype.increment = function () {
  this.score++;
};

const user1 = new UserCreator('Amir', 2);
const user2 = new UserCreator('Ali', 1);

user1.sayName();

function PaidUserCreator(paidName, paidScore, accountBalance) {
  UserCreator.call(this, paidName, paidScore);
  this.accountBalance = accountBalance;
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype);

PaidUserCreator.prototype.increaseBalance = function () {
  this.accountBalance++;
};

const paidUser1 = new PaidUserCreator('Amir', 1, 2);

paidUser1.increaseBalance();

paidUser1.sayName();
