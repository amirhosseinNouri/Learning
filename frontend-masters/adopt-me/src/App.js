import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  // return React.createElement('div', {}, [
  //   React.createElement('h1', {}, 'Adopt me'),
  //   React.createElement(Pet, { name: 'pepper', animal: 'bird', breed: 'c1' }),
  //   React.createElement(Pet, { name: 'Doink', animal: 'cat', breed: 'c2' }),
  //   React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Havanes' }),
  // ]);
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name='Lina' animal='dog' breed='b1'></Pet>
      <Pet name='pepper' animal='bird' breed='b2'></Pet>
      <Pet name='doink' animal='cat' breed='b3'></Pet>
    </div>
  );
};

ReactDOM.render(<App></App>, document.querySelector('#root'));
