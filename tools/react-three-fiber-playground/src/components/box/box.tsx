import { MeshProps, ThreeElements, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Box = (props: MeshProps) => {
  const ref = useRef<ThreeElements['mesh']>();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 1 * delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="chocolate" wireframe />
    </mesh>
  );
};

export default Box;
