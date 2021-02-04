import {Component} from 'react'
import './App.css';
import SeasonDisplay from './components/SeasonDisplay'
import loadingGif from './images/35.gif'

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
      return <div className="center">
        <img src={loadingGif} alt=""/>
      </div>
    }
    return (
      <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
    );
  }
}

export default App;
