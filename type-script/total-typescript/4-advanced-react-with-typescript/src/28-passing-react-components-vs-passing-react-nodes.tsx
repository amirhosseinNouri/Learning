import { ReactNode } from 'react';
import { Equal, Expect } from './helpers/type-utils';

interface TableProps {
  renderRow: (index: number) => ReactNode;
}

const Table = ({ renderRow }: TableProps) => {
  return <div>{[1, 2, 3].map(renderRow)}</div>;
};

const Parent = () => {
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

      {/* @ts-expect-error */}
      <Table renderRow={<div></div>} />

      <Table
        renderRow={(index) => {
          return index;
        }}
      />
    </>
  );
};
