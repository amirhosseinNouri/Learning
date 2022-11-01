const Money = require('./money');
const Portfolio = require('./portfolio');
const assert = require('assert');

class MoneyTest {
  testMultiplication() {
    const tenEuros = new Money(10, 'EUR');
    const twentyEuros = new Money(20, 'EUR');

    assert.deepStrictEqual(tenEuros.times(2), twentyEuros);
  }

  testDivision() {
    const originalMoney = new Money(4002, 'KRW');
    const actualMoneyAfterDivision = originalMoney.divide(4);
    const expectedMoneyAfterDivision = new Money(1000.5, 'KRW');
    assert.deepStrictEqual(
      actualMoneyAfterDivision,
      expectedMoneyAfterDivision,
    );
  }

  testAddition() {
    const fiveDollars = new Money(5, 'USD');
    const tenDollars = new Money(10, 'USD');
    const fifteenDollars = new Money(15, 'USD');
    const portfolio = new Portfolio();
    portfolio.add(fiveDollars, tenDollars);

    assert.deepStrictEqual(portfolio.evaluate('USD'), fifteenDollars);
  }

  testAdditionOfDollarsAndEuros() {
    const fiveDollars = new Money(5, 'USD');
    const tenEuros = new Money(10, 'EUR');
    const portfolio = new Portfolio();
    portfolio.add(fiveDollars, tenEuros);
    const expectedValue = new Money(17, 'USD');
    assert.deepStrictEqual(portfolio.evaluate('USD'), expectedValue);
  }

  testAdditionOfDollarsAndWons() {
    const oneDollar = new Money('1', 'USD');
    const elevenHundredWon = new Money(1100, 'KRW');
    const portfolio = new Portfolio();
    portfolio.add(oneDollar, elevenHundredWon);
    const expectedValue = new Money(2200, 'KRW');
    assert.deepStrictEqual(portfolio.evaluate('KRW'), expectedValue);
  }

  testAdditionWithMultipleMissingExchangeRates() {
    const oneDollar = new Money(1, 'USD');
    const oneEuro = new Money(1, 'EUR');
    const oneWon = new Money(1, 'KRW');
    const portfolio = new Portfolio();
    portfolio.add(oneDollar, oneEuro, oneWon);
    const expectedError = new Error(
      'Missing exchange rate(s):[USD->Kalganid,EUR->Kalganid,KRW->Kalganid]',
    );

    assert.throws(() => portfolio.evaluate('Kalganid'), expectedError);
  }

  getAllTestMethods() {
    const moneyTestPrototype = MoneyTest.prototype;

    const allProperties = Object.getOwnPropertyNames(moneyTestPrototype);

    const testMethods = allProperties.filter(
      (propertyName) =>
        typeof moneyTestPrototype[propertyName] === 'function' &&
        propertyName.startsWith('test'),
    );

    return testMethods;
  }

  runAllTests() {
    this.getAllTestMethods().forEach((test) => {
      console.log(`Running ${test}()`);
      const method = Reflect.get(this, test);
      try {
        Reflect.apply(method, this, []);
      } catch (error) {
        if (error instanceof assert.AssertionError) {
          console.log(error);
        } else {
          throw error;
        }
      }
    });
  }
}

new MoneyTest().runAllTests();
