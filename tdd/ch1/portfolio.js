const Money = require('./money');

class Portfolio {
  constructor() {
    this.moneys = [];
  }

  add(...moneys) {
    this.moneys = [...this.moneys, ...moneys];
  }

  evaluate(currency) {
    const total = this.moneys.reduce((sum, current) => sum + current.amount, 0);
    return new Money(total, currency);
  }
}

module.exports = Portfolio;
