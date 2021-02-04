import {Component} from 'react'
import './App.css';
import SeasonDisplay from './components/SeasonDisplay'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  render() {
    return (
      <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
    );
  }
}

export default App;
