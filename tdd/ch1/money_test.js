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
