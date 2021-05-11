import './App.css';
import GeolocationContainer from './containers/geolocation';
import MyComponent from './components/my-component';
import { withClassName } from './hoc/with-class-name';

const MyComponentWithClassName = withClassName(MyComponent);

function App() {
  return (
    <div>
      <GeolocationContainer />
      <MyComponentWithClassName />
    </div>
  );
}

export default App;
