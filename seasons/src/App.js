import { Component } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
// xRLN82NSZpiJ-INhrqmJwluD6IbGa0_Pez11QtvzMBs
class App extends Component {
  onSearchSubmit(term) {
    axios.get(`https://api.unsplash.com/search/photos?query=${term}`, {
      headers: {
        Authorization: "Client-ID xRLN82NSZpiJ-INhrqmJwluD6IbGa0_Pez11QtvzMBs",
      },
    });
  }

  render() {
    return (
      <div className="center">
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList></ImageList>
      </div>
    );
  }
}

export default App;
