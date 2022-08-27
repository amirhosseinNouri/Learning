type Predicate = (x: unknown) => boolean;

type K = ReturnType<Predicate>;

function f() {
  return { x: 10, y: 3 };
}

type P = ReturnType<typeof f>;

type TimerId = ReturnType<typeof setTimeout>;

const id: TimerId = setTimeout(() => console.log('hi'), 2000);
