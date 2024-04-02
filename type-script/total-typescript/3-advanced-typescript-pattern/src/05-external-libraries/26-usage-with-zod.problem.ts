import { expect, it } from 'vitest';
import { ZodType, z } from 'zod';

const makeZodSafeFunction = <TArg, TResult>(
  schema: ZodType<TArg>,
  func: (arg: TArg) => TResult,
) => {
  return (arg: TArg) => {
    const result = schema.parse(arg);
    return func(result);
  };
};

const addTwoNumbersArg = z.object({
  a: z.number(),
  b: z.number(),
});

const addTwoNumbers = makeZodSafeFunction(
  addTwoNumbersArg,
  (args) => args.a + args.b,
);

it('Should error on the type level AND the runtime if you pass incorrect params', () => {
  expect(() =>
    addTwoNumbers(
      // @ts-expect-error
      { a: 1, badParam: 3 },
    ),
  ).toThrow();
});

it('Should succeed if you pass the correct type', () => {
  expect(addTwoNumbers({ a: 1, b: 2 })).toBe(3);
});
