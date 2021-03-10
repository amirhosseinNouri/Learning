import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import { Router , Link } from '@reach/router';
import Details from './Details';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to='/'>Adopt Me</Link>
        </header>
        <Router>
          <SearchParams path='/'></SearchParams>
          <Details path='/details/:id'></Details>
        </Router>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));
