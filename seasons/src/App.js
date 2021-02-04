import { Component } from "react";
import unsplash from "./api/unsplash";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
// xRLN82NSZpiJ-INhrqmJwluD6IbGa0_Pez11QtvzMBs
class App extends Component {
  state = {
    data: [],
  };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get(
      `https://api.unsplash.com/search/photos?query=${term}`
    );
    const data = response.data.results;
    this.setState({
      data,
    });
  };

  render() {
    return (
      <div className="center">
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <ImageList images={this.state.data}></ImageList>
        <h2>Found {this.state.data.length}</h2>
      </div>
    );
  }
}

export default App;
