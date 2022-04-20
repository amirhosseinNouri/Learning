import { useState } from 'react';
import store from './store';
import { addTodo } from './actions';
import { createPost } from './postsSlice';
import { fetchUserById } from './usersReducer';

window.store = store;

function App() {
  const [value, setValue] = useState(false);
  console.log(store.getState());

  const handleAddTodoClick = () => {
    store.dispatch(addTodo({ text: 'Buy drugs' }));
    setValue((curr) => !curr);
  };

  const handleCreatePostClick = () => {
    store.dispatch(
      createPost({ author: 'Amirhossein', likes: 0, body: 'lorem' }),
    );
    setValue((curr) => !curr);
  };

  const handleFetchUserClick = () => {
    store.dispatch(fetchUserById(1));
    setValue((curr) => !curr);
  };

  return (
    <div>
      <button onClick={handleAddTodoClick}>Add Todo</button>
      <button onClick={handleCreatePostClick}>Create Post</button>
      <button onClick={handleFetchUserClick}>Fetch User</button>
    </div>
  );
}

export default App;
