import React , {Component} from 'react'
import * as data from "./Data";
import Banner from "./Components/Header/Banner";

const { name, age, person } = data;

class App extends Component {
  render() {
    return (
      <section>
        <Banner>
          <p>{name}</p>
          <p>{age}</p>
          <p>{person.name}</p>
        </Banner>
      </section>
    );
  }
}

export default App;
