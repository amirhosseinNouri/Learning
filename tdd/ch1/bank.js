const Money = require('./money');

class Bank {
  constructor() {
    this.exchangeRates = new Map();
  }

  createKey(currencyFrom, currencyTo) {
    return `${currencyFrom}->${currencyTo}`;
  }

  addExchangeRate(currencyFrom, currencyTo, rate) {
    const key = this.createKey(currencyFrom, currencyTo);
    this.exchangeRates.set(key, rate);
  }

  convert(money, targetCurrency) {
    if (money.currency === targetCurrency) {
      return new Money(money.amount, money.currency);
    }

    const key = this.createKey(money.currency, targetCurrency);
    const exchangeRate = this.exchangeRates.get(key);

    if (exchangeRate === undefined) {
      throw new Error(key);
    }

    return new Money(money.amount * exchangeRate, targetCurrency);
  }
}

module.exports = Bank;
