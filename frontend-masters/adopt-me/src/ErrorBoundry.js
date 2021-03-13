import React, { Component } from 'react';
import { Link } from '@reach/router';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error Boundry caught an error', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <h1>
          There was an error with this listing{' '}
          <Link to='/'>Click here to get back to home page</Link>
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
