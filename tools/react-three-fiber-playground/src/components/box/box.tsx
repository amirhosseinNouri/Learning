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
    if (ref.current) {
      ref.current.rotation.x += Number(rotate) * delta;
      ref.current.rotation.y += Number(rotate) * 0.5 * delta;
    }
  });

  const handlerPointerDown = (_: ThreeEvent<PointerEvent>) => {
    setRotate(!rotate);
  };

  return (
    <mesh {...props} ref={ref} onPointerDown={handlerPointerDown}>
      <boxGeometry />
      <meshBasicMaterial color="chocolate" wireframe />
    </mesh>
  );
};

export default Box;
