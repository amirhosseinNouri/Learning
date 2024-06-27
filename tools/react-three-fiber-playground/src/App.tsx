import './App.css';
import { Canvas } from '@react-three/fiber';
import Box from './components/box';

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <Box position={[-0.75, 0, 0]} />
      <Box position={[0.75, 0, 0]} />
    </Canvas>
  );
}

export default App;
