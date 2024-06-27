import './App.css';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="green" wireframe />
      </mesh>
    </Canvas>
  );
}

export default App;
