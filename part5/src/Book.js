import React, { Component } from "react";
import Button from './button'

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "amir",
    };
  }


  render() {

    const { img, title, author, id } = this.props.info;
    const {handleDelete} = this.props
    return (
      <article className="book">
        <img src={img} width="150" alt="" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <button type="button" onClick={() => handleDelete(id)}>Delete me</button>
        </div>
      </article>
    );
  }
}
