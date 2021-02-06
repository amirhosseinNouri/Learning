import "./App.css";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

function App() {
  return (
    <div className="container">
      <SongList></SongList>
      <SongDetail></SongDetail>
    </div>
  );
}

export default App;
