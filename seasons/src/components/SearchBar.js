import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
      this.setState({
          search : e.target.value
      })
  }

  handleSubmit = (e) =>{
      e.preventDefault()
      this.props.onSubmit(this.state.search)
      this.setState({
          search : ''
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form__control">
          <label htmlFor="search">Image Search </label>
          <input
            type="text"
            id="search"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
