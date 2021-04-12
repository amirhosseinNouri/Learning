import React, { Component } from "react";
import Button from "./button";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "amir",
      showInfo: false,
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { img, title, author, id } = this.props.info;

    const checkInfo = (info) => {
      if (info)
        return (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            rem.
          </p>
        );
      else return null;
    };

    return (
      <article className="book">
        <img src={img} width="150" alt="" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <button type="button" onClick={this.handleInfo}>
            Toggle info
          </button>
          {checkInfo(this.state.showInfo)}
          {/* 
          {this.state.showInfo ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              animi!
            </p>
          ) : null} */}

          {/* {this.state.showInfo && (
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              pariatur molestias ullam doloribus voluptatibus iusto? Ad expedita
              labore accusantium at.
            </p>
          )} */}
        </div>
      </article>
    );
  }
}
