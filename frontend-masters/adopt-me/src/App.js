import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import { Router, Link } from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';

const App = () => {
  const themeHook = useState('darkblue');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to='/'>Adopt Me</Link>
          </header>
          <Router>
            <SearchParams path='/'></SearchParams>
            <Details path='/details/:id'></Details>
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));
