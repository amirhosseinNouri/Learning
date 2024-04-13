import { createUser } from 'fake-external-lib';
import { useState } from 'react';
import { Equal, Expect } from '../helpers/type-utils';

type Mutation<TArgs extends any[], TReturn> = (
  ...args: TArgs
) => Promise<TReturn>;

interface UseMutationReturn<TMutationFn extends (...args: any) => any> {
  mutate: Mutation<Parameters<TMutationFn>, Awaited<ReturnType<TMutationFn>>>;
  isLoading: boolean;
}

interface UseMutationOptions<TMutationFn extends (...args: any) => any> {
  mutation: TMutationFn;
}

export const useMutation = <TMutationFn extends (...args: any) => any>(
  opts: UseMutationOptions<TMutationFn>,
): UseMutationReturn<TMutationFn> => {
  const [isLoading, setIsLoading] = useState(false);

  return {
    mutate: async (...args) => {
      setIsLoading(true);

      try {
        const result = await opts.mutation(...args);
        return result;
      } catch (e) {
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    isLoading,
  };
};

const mutation = useMutation({
  mutation: createUser,
});

mutation.mutate({ name: 'John Doe', email: 'john@doe.com' });

// @ts-expect-error email missing!
mutation.mutate({ name: 'John Doe' });

mutation.mutate(
  {
    name: 'John Doe',
    email: 'john@doe.com',
  },
  {
    throwOnError: true,
    // @ts-expect-error extra prop
    extra: 'oh dear',
  },
);

type test = [
  Expect<Equal<typeof mutation.isLoading, boolean>>,
  Expect<
    Equal<
      typeof mutation.mutate,
      (
        user: { name: string; email: string },
        opts?: {
          throwOnError?: boolean;
        },
      ) => Promise<{
        id: string;
        name: string;
        email: string;
      }>
    >
  >,
];
