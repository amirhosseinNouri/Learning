import { useRef, useState } from 'react';
import { MeshProps, ThreeElements, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type PolyHedronProps = MeshProps & {
  polyhedron: THREE.BufferGeometry[];
};

export default function Polyhedron({ position, polyhedron }: PolyHedronProps) {
  const ref = useRef<ThreeElements['mesh']>();
  const [count, setCount] = useState(0);

  console.log(polyhedron);

  useFrame((_, delta) => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3);
      }}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  );
}
