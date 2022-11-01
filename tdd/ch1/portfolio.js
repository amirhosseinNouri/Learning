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

    const exchangeRate = exchangeRates.get(exchangeKey);

    if (exchangeRate === undefined) {
      return undefined;
    }

    return money.amount * exchangeRate;
  }

  evaluate(currency) {
    const failures = [];
    const total = this.moneys.reduce((sum, current) => {
      const convertedValue = this.convert(current, currency);
      if (convertedValue === undefined) {
        failures.push(`${current.currency}->${currency}`);
        return sum;
      }
      return sum + convertedValue;
    }, 0);

    if (failures.length > 0) {
      throw new Error(`Missing exchange rate(s):[${failures.join()}]`);
    }

    return new Money(total, currency);
  }
}

module.exports = Portfolio;
