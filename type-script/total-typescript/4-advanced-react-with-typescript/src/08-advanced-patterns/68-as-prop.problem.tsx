/**
 * The 'as' prop is notorious for being difficult to type correctly.
 *
 * Here, we've created a component that takes an 'as' prop. The 'as' prop
 * is a string representing the HTML tag to render. The component will
 * render that tag, and pass all the other props through.
 *
 * BUT currently the types of the props that go along with the 'as' prop
 * are not inferred correctly.
 *
 * I've found two solutions. The first uses an IIMT:
 *
 * https://www.totaltypescript.com/immediately-indexed-mapped-type
 *
 * The second uses a generic type.
 *
 * Both solutions make use of:
 *
 * - JSX.IntrinsicElements
 * - keyof
 * - 'as'
 * - Indexed access types
 */

import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

// type WrapperProps = {
//   [Element in keyof JSX.IntrinsicElements]: {
//     as: Element;
//   } & JSX.IntrinsicElements[Element];
// }[keyof JSX.IntrinsicElements];

export const Wrapper = <TAs extends keyof JSX.IntrinsicElements>(
  props: {
    as: TAs;
  } & JSX.IntrinsicElements[TAs],
) => {
  const Comp = props.as as string;
  return <Comp {...(props as any)}></Comp>;
};


/**
 * Should work specifying a 'div'
 */

const Example2 = () => {
  return (
    <>
      <Wrapper
        as="div"
        // @ts-expect-error doesNotExist is not a valid prop
        doesNotExist
      ></Wrapper>

      <Wrapper
        as="div"
        // e should be inferred correctly
        onClick={(e) => {
          type test = Expect<Equal<typeof e, React.MouseEvent<HTMLDivElement>>>;
        }}
      ></Wrapper>
    </>
  );
};
