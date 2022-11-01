const Money = require('./money');

class Portfolio {
  constructor() {
    this.moneys = [];
  }

  add(...moneys) {
    this.moneys = [...this.moneys, ...moneys];
  }

  convert(money, currency) {
    if (money.currency === currency) {
      return money.amount;
    }

    return money.amount * 1.2;
  }

  evaluate(currency) {
    const total = this.moneys.reduce(
      (sum, current) => sum + this.convert(current, currency),
      0,
    );
    return new Money(total, currency);
  }
}

module.exports = Portfolio;
