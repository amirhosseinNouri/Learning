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

const options = {
  x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
  visible: true,
  color: { value: 'lime' },
};

function App() {
  const color = useControls({ value: 'black' });

  const pA = useControls('Polyhedron A', options);
  const pB = useControls('Polyhedron B', options);

  return (
    <Canvas
      camera={{ position: [0, 0, 3] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <color attach="background" args={[color.value]} />
      <Polyhedron
        position={[-1, 1, 0]}
        rotation={[pA.x, pA.y, pA.z]}
        visible={pA.visible}
        color={pA.color}
        polyhedron={polyhedron}
      />
      <Polyhedron
        position={[1, 1, 0]}
        rotation={[pB.x, pB.y, pB.z]}
        visible={pB.visible}
        color={pB.color}
        polyhedron={polyhedron}
      />
      <OrbitControls />
      <Stats />
      <axesHelper args={[5]} />
      <gridHelper />
    </Canvas>
  );
}

export default App;
