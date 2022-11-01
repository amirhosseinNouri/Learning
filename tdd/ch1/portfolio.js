const Money = require('./money');

class Portfolio {
  constructor() {
    this.moneys = [];
  }

  add(...moneys) {
    this.moneys = [...this.moneys, ...moneys];
  }

  convert(money, currency) {
    const exchangeRates = new Map();
    exchangeRates.set('EUR->USD', 1.2);
    exchangeRates.set('USD->KRW', 1100);

    if (money.currency === currency) {
      return money.amount;
    }

    const exchangeKey = `${money.currency}->${currency}`;

    return money.amount * exchangeRates.get(exchangeKey);
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
