import { Router, useRouter } from "fake-external-lib";
import { ComponentProps } from "react";

/**
 * A higher-order component is a function that takes a component and returns a
 * new component, with some additional props/behavior.
 *
 * In this case, we want to take a component that doesn't have a router prop,
 * and add one.
 *
 * 1. Figure out the correct typings for the `withRouter` function. You'll
 * need to use:
 *
 * - Generics
 * - Omit
 * - React.ComponentType
 * - Probably an 'as' at least once
 */
export const withRouter = <TProps extends { router: Router }>(
  Component: React.FC<TProps>
) => {
  const NewComponent = (props: Omit<TProps, "router">) => {
    const router = useRouter();
    return <Component {...(props as TProps)} router={router} />;
  };

  NewComponent.displayName = `withRouter(${Component.displayName})`;

  return NewComponent;
};

const UnwrappedComponent = (props: { router: Router; id: string }) => {
  return null;
};

const WrappedComponent = withRouter(UnwrappedComponent);

<>
  {/* @ts-expect-error needs a router! */}
  <UnwrappedComponent id="123" />

  {/* Doesn't need a router passed in! */}
  <WrappedComponent id="123" />

  <WrappedComponent
    // @ts-expect-error id must be the correct property
    id={123}
  />
</>;
