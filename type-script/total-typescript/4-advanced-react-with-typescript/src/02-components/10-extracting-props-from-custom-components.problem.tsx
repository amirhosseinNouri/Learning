import { Equal, Expect } from "../helpers/type-utils";
import { ComponentProps, FC } from "react";
// Imagine NavBar is an external library!

export const NavBar: FC<{
  title: string;
  links: string[];
  children: React.ReactNode;
}> = (props) => {
  return <div>Some content</div>;
};

// Your app:


type NavBarProps = ComponentProps<typeof NavBar>;

type test = Expect<
  Equal<
    NavBarProps,
    {
      title: string;
      links: string[];
      children: React.ReactNode;
    }
  >
>;
