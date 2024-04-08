import { ReactNode } from "react";
import { Equal, Expect } from "../helpers/type-utils";

/**
 * 1. We've got a bunch of different errors below. See if you can figure
 * out why the errors are happening.
 *
 * 2. Once you understand why the errors are happening, see if you can
 * find a way to fix them by changing the definition of TableProps.
 */
interface TableProps {
  renderRow: (value: number, index: number, array: number[]) => ReactNode;
  // React.FC<number>
}

const Table = (props: TableProps) => {
  return <div>{[0, 1, 3].map(props.renderRow)}</div>;
};

export const Parent = () => {
  return (
    <>
      <Table
        renderRow={(index) => {
          type test = Expect<Equal<typeof index, number>>;
          return <div key={index}>{index}</div>;
        }}
      />
      <Table
        renderRow={(index) => {
          return null;
        }}
      />
      <Table
        // @ts-expect-error
        renderRow={<div></div>}
      />
      <Table
        renderRow={(index) => {
          return index;
        }}
      />
    </>
  );
};
