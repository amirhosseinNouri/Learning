import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";


type AppleOrBanana<T> = T extends "apple" | "banana"
  ? "apple" | "banana"
  : never;

type tests = [Expect<Equal<AppleOrBanana<Fruit>, "apple" | "banana">>];
