import { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends Component {
  constructor(props) {
    super(props);
  }

  onSearchSubmit(term){
    console.log(term);

  }

  render() {
    return <div className="center">
      <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      <ImageList></ImageList>
    </div>
  }
}

export default App;
