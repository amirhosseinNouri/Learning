class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  sayName() {
    console.log(`Hi, I'm ${this.name}`);
  }
  increment() {
    this.score++;
  }
}

class PaidUserCreator extends UserCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }

  increaseBalance() {
    this.accountBalance++;
  }
}

const paidUser1 = new PaidUserCreator('Amir', 1, 2);

paidUser1.increaseBalance();
paidUser1.sayName();
