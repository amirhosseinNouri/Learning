import './App.css';
import { Canvas, useLoader } from '@react-three/fiber';
import { Stats, OrbitControls, Environment } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function App() {
  const gltf = useLoader(GLTFLoader, './model/monkey.glb');

  return (
    <Canvas
      camera={{ position: [-0.5, 1, 2] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
      shadows
    >
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
      <Environment preset="sunset" background blur={0.5} />

      <primitive object={gltf.scene} position={[0, 1, 0]} />

      <OrbitControls target={[2, 2, 0]} autoRotate />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}

export default App;
