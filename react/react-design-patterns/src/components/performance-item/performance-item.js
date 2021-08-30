import React, { PureComponent } from 'react';

export default class PerformanceItem extends PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick, item } = this.props;
    onClick(item);
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.item}</li>;
  }
}
