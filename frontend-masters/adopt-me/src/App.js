import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me</h1>
        <SearchParams></SearchParams>
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));
