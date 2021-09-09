import React, { Component } from 'react';
import wrapReactLifecycleMethods from 'react-component-errors';

@wrapReactLifecycleMethods
class Evil extends Component {
  render() {
    return <div>{this.props.someProp.name}</div>;
  }
}

export default Evil;
