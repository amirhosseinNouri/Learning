import React, { Component } from "react";
import "./App.css";

class Form extends Component {


  handleSubmit = event => {
    event.preventDefault()
    const name = this.refs.myName
    const nameValue = name.value
    const email = this.email.value;

    const pText = this.refs.myText ;
    pText.style.color = "red"

    console.log(nameValue , email , pText);

  }


  render(){
    return(
      <section>
        <form onSubmit={this.handleSubmit}>
          <input type="text"  ref="myName" />
          <input type="email" ref={(orange)=> this.email= orange} />
          <button type="submit">Submit</button>
        </form>
        <p ref="myText">Hello world</p>
      </section>
    )
  }
}

export default class App extends Component {
  render() {
    return <Form></Form>;
  }
}
