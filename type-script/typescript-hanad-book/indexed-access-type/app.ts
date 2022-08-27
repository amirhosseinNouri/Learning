// type Person = { age: number; name: string; alive: boolean };

// type Age = Person['age'];
const MyArray = [
  { name: 'alice', age: 26 },
  { name: 'ali', age: 26 },
  { name: 'mamad', age: 26 },
];

type Person = typeof MyArray[number];

type Age = typeof MyArray[number]['age'];
