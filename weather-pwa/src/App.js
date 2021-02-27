import {useState} from 'react'
import SearchBar from './components/SearchBar'
import ResultCard from './components/ResultCard'
import "./App.css"

export default function App() {
  const [weather, setWeather] = useState({})
  
  return (
    <div className="container">
        <SearchBar setWeather={setWeather}></SearchBar>
        {weather.main && <ResultCard weather={weather}></ResultCard> }
    </div>
  );
}
