import React, { PureComponent } from 'react';

export default class MutateList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      items: ['foo', 'bar'],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      items: ['baz', ...this.state.items],
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            //   Using index as key will cause unexpected behaviour.
            <li key={index}> 
              {item}
              <input type="text" />
            </li>
          ))}
        </ul>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
