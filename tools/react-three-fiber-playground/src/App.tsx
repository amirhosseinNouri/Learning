import './App.css';
import { Canvas } from '@react-three/fiber';
import Polyhedron from './components/polyhedron';
import * as THREE from 'three';
import { Stats, OrbitControls } from '@react-three/drei';

function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(0.785398),
    new THREE.DodecahedronGeometry(0.785398),
  ];

  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
      <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      <OrbitControls />
      <Stats />
      <axesHelper args={[5]} />
      <gridHelper args={[20, 20, 0xff0000, 'teal']} />
    </Canvas>
  );
}

export default App;
