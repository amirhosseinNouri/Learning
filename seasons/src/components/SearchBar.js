import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <form>
        <div className="form__control">
          <label htmlFor="search">Image Search </label>
          <input type="text" id="search" name="search" />
        </div>
      </form>
    );
  }
}
