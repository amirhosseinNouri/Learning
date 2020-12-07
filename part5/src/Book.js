import React, { Component } from "react";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      name: "amir",
    };
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  lowerCount = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  resetCount = () => {};

  // handleClick(){
  //   console.log('clicked');
  //   console.log(this.state.count);
  // }

  render() {
    // console.log(this.props);
    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <h3>Count : {this.state.count}</h3>
          <h3>Name : {this.state.name}</h3>
          <button type="button" onClick={this.addCount}>
            Add Count
          </button>
          <button type="button" onClick={this.lowerCount}>
            Lower Count
          </button>
          <button type="button" onClick={this.resetCount}>
            Reset Count
          </button>
        </div>
      </article>
    );
  }
}
