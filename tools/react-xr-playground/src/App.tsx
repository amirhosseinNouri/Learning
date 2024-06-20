import './App.css';
import { VRButton, XR, Controllers, Hands } from '@react-three/xr';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
