import { Data, Effect } from 'effect';

const divide = (a: number, b: number) => {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
};

const result = divide(1, 2);

const success = Effect.succeed(result);

class DivideByZeroError extends Data.TaggedError('DivideByZeroError')<{}> {}

const failure = Effect.fail(new DivideByZeroError());

const divideEffect = (
  a: number,
  b: number,
): Effect.Effect<number, DivideByZeroError> => {
  return b === 0 ? Effect.fail(new DivideByZeroError()) : Effect.succeed(a / b);
};


const result2 = divideEffect(1,2)

const result3 = divideEffect(1,0)