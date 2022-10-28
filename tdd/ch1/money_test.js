const assert = require('assert');

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }

  divide(divisor) {
    return new Money(this.amount / divisor, this.currency);
  }
}

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

const fiveDollars = new Money(5, 'USD');
const tenDollars = new Money(10, 'USD');

assert.deepStrictEqual(fiveDollars.times(2), tenDollars);

const tenEuros = new Money(10, 'EUR');
const twentyEuros = new Money(20, 'EUR');

assert.deepStrictEqual(tenEuros.times(2), twentyEuros);

const originalMoney = new Money(4002, 'KRW');
const actualMoneyAfterDivision = originalMoney.divide(4);
const expectedMoneyAfterDivision = new Money(1000.5, 'KRW');

assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision);

const fifteenDollars = new Money(15, 'USD');
const portfolio = new Portfolio();
portfolio.add(fiveDollars, tenDollars);

assert.deepStrictEqual(portfolio.evaluate('USD'), fifteenDollars);
