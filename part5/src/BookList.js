import React, { Component } from "react";
import Book from "./Book";

export default class BookList extends Component {
  state = {
    books: [
      {
        id : 1,
        book: "book numner one",
        author: "amir",
      },
      {
        id : 2,
        book: "book numner two",
        author: "bob",
      },
      {
        id : 3,
        book: "book numner three",
        author: "john",
      },
    ],
  };

  render() {
    // const books = this.state.books.map((item) =>item.book)
    // console.log(books);

    return (
      <section>
        <h3>This is our book list</h3>
        {this.state.books.map(item => <Book key={item.id} info={item}></Book>)}
      </section>
    );
  }
}
