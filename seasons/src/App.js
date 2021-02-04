import { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="center">
      <SearchBar></SearchBar>
      <ImageList></ImageList>
    </div>
  }
}

export default App;
