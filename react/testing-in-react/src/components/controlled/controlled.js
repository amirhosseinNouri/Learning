import React, { Component } from 'react';

export default class Controlled extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Amirhossein',
      lastName: 'Nouri',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName } = this.state;
    this.props.onSubmit(`${firstName} ${lastName}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={this.handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    );
  }
}

