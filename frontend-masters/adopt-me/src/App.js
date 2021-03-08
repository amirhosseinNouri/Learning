import React from 'react';
import ReactDOM from 'react-dom';
import Pet  from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me'),
    React.createElement(Pet, { name: 'pepper', animal: 'bird', breed: 'c1' }),
    React.createElement(Pet, { name: 'Doink', animal: 'cat', breed: 'c2' }),
    React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Havanes' }),
  ]);
};

ReactDOM.render(React.createElement(App), document.querySelector('#root'));
