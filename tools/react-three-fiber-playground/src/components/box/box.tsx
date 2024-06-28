import {
  MeshProps,
  ThreeElements,
  ThreeEvent,
  useFrame,
} from '@react-three/fiber';
import { useRef, useState } from 'react';

const Box = (props: MeshProps) => {
  const [hovered, setHovered] = useState(false);
  const [rotate, setRotate] = useState(false);

  const ref = useRef<ThreeElements['mesh']>();

  useFrame((_, delta) => {
    if (ref.current && rotate) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  const handlerPointerDown = (_: ThreeEvent<PointerEvent>) => {
    setRotate(!rotate);
  };

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={handlerPointerDown}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
    >
      <boxGeometry />
      <meshBasicMaterial color={hovered ? 'chocolate' : 'teal'} wireframe />
    </mesh>
  );
};

export default Box;
