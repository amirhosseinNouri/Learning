import React, { Component } from "react";

export default class Book extends Component {
  render() {
    // console.log(this.props);
    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
        </div>
      </article>
    );
  }
}
