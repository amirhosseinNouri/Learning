// import { name, age, person } from "./data";
import React, { Component } from "react";
import * as data from './data'
import Banner from "./components/Header/Banner";
const { name, age, person } = data;




// const App = () => (
//   <section>
//     <Banner></Banner>
//   </section>
// );

class App extends Component {
  render() {
    return (
      <section>
        <Banner></Banner>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
      </section>
    );
  }
}

export default App;
