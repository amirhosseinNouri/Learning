import React, { Component } from "react";

export default class ImageCard extends Component {

    constructor(props){
        super(props)
        this.imageRef  =React.createRef()
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load' , () =>{
            
            console.log(this.imageRef.current.clientHeight);
        })
    }

  render() {
    return (
      <div>
        <img ref={this.imageRef} alt={this.props.desc} src={this.props.image} />
      </div>
    );
  }
}
