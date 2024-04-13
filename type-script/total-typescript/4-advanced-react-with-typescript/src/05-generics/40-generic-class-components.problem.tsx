import { ReactNode } from 'react';
import { Equal, Expect } from '../helpers/type-utils';

type WithId = { id: number };

interface TableProps<TRow extends WithId> {
  rows: TRow[];
  renderRow: (row: TRow) => ReactNode;
}

export class Table<TRow extends WithId> extends React.Component<
  TableProps<TRow>
> {
  render(): ReactNode {
    return (
      <table>
        <tbody>
          {this.props.rows.map((row) => (
            <tr>{this.props.renderRow(row)}</tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const data = [
  {
    id: 1,
    name: 'John',
  },
];

export const Parent = () => {
  return (
    <div>
      <Table rows={data} renderRow={(row) => <td>{row.name}</td>} />
      <Table
        rows={data}
        renderRow={(row) => {
          type test = Expect<Equal<typeof row, { id: number; name: string }>>;
          return (
            <td>
              {
                // @ts-expect-error
                row.doesNotExist
              }
            </td>
          );
        }}
      ></Table>
    </div>
  );
};
