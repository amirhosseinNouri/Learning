interface Animal {
  live: () => void;
}

interface Dog extends Animal {
  woof: () => void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

interface IdLabel {
  id: number;
}

interface NameLabel {
  name: string;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented';
}

let a = createLabel('t');

let b = createLabel(2);

let c = createLabel(Math.random() ? 'g' : 2);

type MessageOf<T> = T extends { message: unknown } ? T['message'] : never;

interface Email {
  message: string;
}

interface Dog {
  bark: () => void;
}

type EmailMessageContents = MessageOf<Email>;

type DogMessageContents = MessageOf<Dog>;

type Flatten<T> = T extends any[] ? T[number] : T;

type str = Flatten<string[]>;

type Num = Flatten<number>;

type GetReturnType<T> = T extends (...args: never[]) => infer Return
  ? Return
  : never;
