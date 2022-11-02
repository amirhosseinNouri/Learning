const Money = require('./money');

class Portfolio {
  constructor() {
    this.moneys = [];
  }

  add(...moneys) {
    this.moneys = [...this.moneys, ...moneys];
  }

  evaluate(bank, currency) {
    const failures = [];
    const total = this.moneys.reduce((sum, current) => {
      try {
        const convertedMoney = bank.convert(current, currency);
        return sum + convertedMoney.amount;
      } catch (error) {
        failures.push(error.message);
        return sum;
      }
    }, 0);

    if (failures.length > 0) {
      throw new Error(`Missing exchange rate(s):[${failures.join()}]`);
    }

    return new Money(total, currency);
  }
}

module.exports = Portfolio;
