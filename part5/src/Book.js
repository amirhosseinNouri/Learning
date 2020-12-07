import React, { Component } from "react";

export default class Book extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      count : 1
    }

  }



  // handleClick = () =>{
  //   console.log('clicked');
  //   console.log(this.state.count);
  // }

  handleClick(){
    console.log('clicked');
    console.log(this.state.count);
  }

  render() {
    // console.log(this.props);
    const { img, title, author } = this.props.info;
    return (
      <article className="book">
        <img src={img} width="150" alt="" />
        <div>
          <h4>Title : {title}</h4>
          <h6>Author : {author}</h6>
          <button type="button" onClick={this.handleClick}>Add to cart</button>
        </div>
      </article>
    );
  }
}
