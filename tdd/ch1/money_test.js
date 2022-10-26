const assert = require('assert');

class Money {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  times(multiplier) {
    return new Money(this.amount * multiplier, this.currency);
  }
}

const fiver = new Money(5, 'USD');
const tenner = fiver.times(2);

assert.strictEqual(tenner.amount, 10);
assert.strictEqual(tenner.currency, 'USD');

const tenEuros = new Money(10, 'EUR');
const twentyEuros = tenEuros.times(2);

assert.strictEqual(twentyEuros.amount, 20);
assert.strictEqual(twentyEuros.currency, 'EUR');
