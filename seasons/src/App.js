import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "", loading: true };
  }

  render() {
    return <div>app</div>;
  }
}

export default App;
