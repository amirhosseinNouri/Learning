import {Component} from 'react'
import './App.css';
import SeasonDisplay from './components/SeasonDisplay'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: ""  , loading : true};
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        } , () =>{
          this.setState({loading : false})
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
    if(this.state.loading){
      return <h1>Loading</h1>
    }
    return (
      <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
    );
  }
}

export default App;
