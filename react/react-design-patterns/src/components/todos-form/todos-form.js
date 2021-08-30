import React, { PureComponent } from 'react';

export default class TodosForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          placeholder="Enter New Todo"
        />
        <button onClick={() => this.props.onSubmit(this.state.value)}>
          Add
        </button>
      </div>
    );
  }
}
