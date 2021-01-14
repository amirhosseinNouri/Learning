import './App.css';
import Home from './pages/Home'
import Error from './pages/Error'
import SingleRoom from './pages/SingleRoom'
import Rooms from './pages/Rooms'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/rooms" exact component={Rooms}></Route>
      <Route path="/rooms/:slug" exact component={SingleRoom}></Route>
      <Route  component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
