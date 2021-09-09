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
    this.state.items.push('baz');
    this.setState({
      items: this.state.items,
    });  // This will create inconsistent state
    
    // this.setState({
    //   items: [...this.state.items, 'baz'],
    // });
  }

  render() {
    return (
      <div>
        {this.state.items.length}
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
