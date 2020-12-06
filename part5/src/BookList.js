import React, { Component } from "react";
import Book from "./Book";

export default class BookList extends Component {
  books = [
    {
      book: "book numner one",
      author: "amir",
    },
    {
      book: "book numner two",
      author: "bob",
    },
    
  ];

  render() {
    return (
      <section>
        <h3>This is our book list</h3>
        <Book book={this.books[0]}></Book>
      </section>
    );
  }
}
