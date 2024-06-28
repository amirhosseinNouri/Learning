import './App.css';
import { Canvas, useLoader } from '@react-three/fiber';
import Polyhedron from './components/polyhedron';
import * as THREE from 'three';
import { Stats, OrbitControls } from '@react-three/drei';
import Lights from './components/lights';
import Floor from './components/floor';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function App() {
  const gltf = useLoader(GLTFLoader, './model/monkey.glb');

  return (
    <Canvas
      camera={{ position: [4, 4, 1.5] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
      shadows
    >
      <Lights />

      <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
      <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      />

      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={
          new THREE.MeshStandardMaterial({
            color: 'chocolate',
            flatShading: true,
          })
        }
      />
      <Floor />
      <OrbitControls target={[2, 2, 0]} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}

export default App;
