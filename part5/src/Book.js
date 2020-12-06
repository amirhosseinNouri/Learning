import React, { Component } from "react";

export default class Book extends Component {
  render() {
    // console.log(this.props);
    const { book, author } = this.props.book;
    return (
      <article>
        <h3>Book: {book}</h3>
        <h5>Author: {author}</h5>
      </article>
    );
  }
}
