import { Equal, Expect } from '../helpers/type-utils';

type Route = '/' | '/about' | '/admin' | '/admin/users';

type RoutesObject = {
  [K in Route]: K;
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        '/': '/';
        '/about': '/about';
        '/admin': '/admin';
        '/admin/users': '/admin/users';
      }
    >
  >,
];
