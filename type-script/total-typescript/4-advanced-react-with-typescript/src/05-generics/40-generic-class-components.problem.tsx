import { ReactNode } from "react";
import { Equal, Expect } from "../helpers/type-utils";

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export class Table<T> extends React.Component<TableProps<T>> {
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
    name: "John",
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
