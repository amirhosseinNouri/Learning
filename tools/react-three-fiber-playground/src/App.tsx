import './App.css';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei';
import Box from './components/box/box';

function App() {
  return (
    <Canvas
      camera={{ position: [1, 2, 3] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
      shadows
    >
      <Box position={[0, 0.5, 0]} />
      <OrbitControls />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}

export default App;
