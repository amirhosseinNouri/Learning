// TODO: define polyfill for `Object.is(..)`

function isTheNumberNan(a) {
  return a !== a;
}

function isTheNumberNegZero(a) {
  return a === 0 && 1 / a === -Infinity;
}

if (!Object.is || true) {
  // TODO: Handle NAN
  // TODO: Handle 0 and -0

  Object.is = function (a, b) {
    const aIsNegZero = isTheNumberNegZero(a);
    const bIsNegZero = isTheNumberNegZero(b);

    if (isTheNumberNan(a) && isTheNumberNan(b)) {
      return true;
    }

    if (aIsNegZero || bIsNegZero) {
      return aIsNegZero && bIsNegZero;
    }

    return a === b;
  };
}

// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is('foo', 'foo') === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, '42') === false);
console.log(Object.is('42', 42) === false);
console.log(Object.is('foo', 'bar') === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
