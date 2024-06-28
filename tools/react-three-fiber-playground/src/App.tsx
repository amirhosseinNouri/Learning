import './App.css';
import { Canvas } from '@react-three/fiber';
import Polyhedron from './components/polyhedron';
import * as THREE from 'three';
import { Stats, OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';

const polyhedron = [
  new THREE.BoxGeometry(),
  new THREE.SphereGeometry(0.785398),
  new THREE.DodecahedronGeometry(0.785398),
];

function App() {
  return (
    <Canvas
      camera={{ position: [-1, 4, 2.5] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <directionalLight position={[1, 1, 1]} />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial()}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial()}
      /> 
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={new THREE.MeshPhongMaterial()}
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={new THREE.MeshStandardMaterial()}
      />
      <OrbitControls target-y={1} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}

export default App;
