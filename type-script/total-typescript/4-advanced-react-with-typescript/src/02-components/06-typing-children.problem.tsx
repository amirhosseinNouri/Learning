import React, { FC, ReactNode } from "react";

export const Button: FC<{children: ReactNode}> = (props) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
