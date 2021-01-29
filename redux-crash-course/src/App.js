import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/PostForm'

function App() {
  return (
    <div className="App">
      <PostForm></PostForm>
      <Posts></Posts>
      
    </div>
  );
}

export default App;
