import React, { PureComponent } from 'react';

export default class TodosList extends PureComponent {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={`${item}-${index}`}>{item}</li>
        ))}
      </ul>
    );
  }
}
