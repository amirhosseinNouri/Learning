const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h1', {}, breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt me'),
    React.createElement(Pet, { name: 'pepper', animal: 'bird', breed: 'c1' }),
    React.createElement(Pet, { name: 'Doink', animal: 'cat', breed: 'c2' }),
    React.createElement(Pet, { name: 'Luna', animal: 'Dog', breed: 'Havanes' }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
