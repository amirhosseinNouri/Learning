import './App.css';
import { Canvas } from '@react-three/fiber';
import Polyhedron from './components/polyhedron';
import * as THREE from 'three';

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
    </Canvas>
  );
}

export default App;
