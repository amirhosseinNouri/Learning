import { useState } from 'react';
import store from './store';
import { addTodo } from './actions';

window.store = store;

function App() {
  const [value, setValue] = useState(false);
  console.log(store.getState());

  const handleAddTodoClick = () => {
    store.dispatch(addTodo({ text: 'Buy drugs' }));
    setValue((curr) => !curr);
  };

  return (
    <div>
      <button onClick={handleAddTodoClick}>Add Todo</button>
    </div>
  );
}

export default App;
