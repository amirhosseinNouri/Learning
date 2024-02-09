import { Equal, Expect } from '../helpers/type-utils';

type Route = '/' | '/about' | '/admin' | '/admin/users';

type RoutesObject = {
  [k in Route]: k;
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
