import './App.css';
import { Canvas } from '@react-three/fiber';
import Polyhedron from './components/polyhedron';
import * as THREE from 'three';
import { Stats, OrbitControls } from '@react-three/drei';
import Lights from './components/lights';

function App() {
  return (
    <Canvas
      camera={{ position: [4, 4, 1.5] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
    >
      <Lights />
      <Polyhedron
        name="meshBasicMaterial"
        position={[-3, 1, 0]}
        material={new THREE.MeshBasicMaterial({ color: 'yellow' })}
      />
      <Polyhedron
        name="meshNormalMaterial"
        position={[-1, 1, 0]}
        material={new THREE.MeshNormalMaterial({ flatShading: true })}
      />
      <Polyhedron
        name="meshPhongMaterial"
        position={[1, 1, 0]}
        material={
          new THREE.MeshPhongMaterial({ color: 'lime', flatShading: true })
        }
      />
      <Polyhedron
        name="meshStandardMaterial"
        position={[3, 1, 0]}
        material={
          new THREE.MeshStandardMaterial({
            color: '0xff0033',
            flatShading: true,
          })
        }
      />
      <OrbitControls target={[2, 2, 0]} />
      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}

export default App;
