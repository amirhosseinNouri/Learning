function UserCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

userFunctions = {
  sayName: function () {
    console.log(`I'm ${this.name}`);
  },

  increment: function () {
    this.score++;
  },
};

const user1 = UserCreator('Amir', 10);
// user1.sayName();

function PaidUserCreator(paidName, paidScore, accountBalance) {
  const newPaidUser = UserCreator(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const paidUserFunctions = {
  increaseBalance: function () {
    this.accountBalance++;
  },
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);

const paidUser1 = PaidUserCreator('Amir', 20, 66);
paidUser1.increaseBalance();
paidUser1.sayName();
