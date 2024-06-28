import { useRef } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type PolyHedronProps = MeshProps & {
  name: string;
};

export default function Polyhedron(props: PolyHedronProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.x += 0.2 * delta;
      ref.current.rotation.y += 0.05 * delta;
    }
  });

  return (
    <mesh {...props} ref={ref} receiveShadow castShadow>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
}
