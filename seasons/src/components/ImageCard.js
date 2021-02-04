import React, { Component } from "react";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {span : 0}
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", () => {
      console.log(this.imageRef.current.clientHeight);
      const span = Math.ceil(this.imageRef.current.clientHeight / 10);
      this.setState({
        span,
      });
    });
  }

  render() {
    return (
      <div style={{gridRowEnd: `span ${this.state.span}`}}>
        <img ref={this.imageRef} alt={this.props.desc} src={this.props.image} />
      </div>
    );
  }
}
