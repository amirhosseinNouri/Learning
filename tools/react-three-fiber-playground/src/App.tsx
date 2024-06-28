import './App.css';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stats, Environment, Center } from '@react-three/drei';
import Button from './components/button';
import { Vector3 } from 'three';

const Rig = () => {
  const { camera, mouse } = useThree();

  const vec = new Vector3();

  useFrame(() => {
    vec.set(mouse.x, mouse.y, camera.position.z);
    camera.position.lerp(vec, 0.01);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

function App() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ width: window.innerWidth, height: window.innerHeight }}
      shadows
    >
      <Environment preset="sunset" background />
      <Center>
        {[...Array(5).keys()].map((x) =>
          [...Array(3).keys()].map((y) => (
            <Button key={x + y * 5} position={[x * 2.5, y * 2.5, 0]} />
          )),
        )}
      </Center>
      <Rig />

      <axesHelper args={[5]} />
      <gridHelper />
      <Stats />
    </Canvas>
  );
}

export default App;
