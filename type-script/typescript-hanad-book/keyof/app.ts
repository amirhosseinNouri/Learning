type Point = { x: number; y: number };

type P = keyof Point;

type Arrayish = { [n: number]: unknown };

type A = keyof Arrayish;

type Mapish = { [n: string]: boolean };

type M = keyof Mapish;
