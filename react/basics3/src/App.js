import React, { Component } from "react";
import "./App.css";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrease = () => {
    // console.log("Called first : ", this.state.count);
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        // console.log("Called second : ", this.state.count);
      }
    );
    // this.setState({
    //   count: this.state.count + 2,
    // });
    // console.log("Called third : ", this.state.count);
  };

  handleDecrease = () => {
    console.log("Called first : ", this.state.count);
    this.setState((state,props) =>{
      return {count : state.count - props.amount }
    } , () => console.log("called second " , this.state.count))
    console.log("Called third : ", this.state.count);
  };

  render() {
    return (
      <>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button type="button" onClick={this.handleIncrease}>
            Increase
          </button>
          <span style={{ margin: "3rem" }}>Count : {this.state.count}</span>
          <button type="button" onClick={this.handleDecrease}>
            decrease
          </button>
        </div>
      </>
    );
  }
}

export default class App extends Component {
  render() {
    return <Counter amount="2"></Counter>;
  }
}
