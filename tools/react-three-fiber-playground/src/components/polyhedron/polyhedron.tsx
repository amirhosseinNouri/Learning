import { useRef, useState } from 'react';
import { MeshProps, ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

type PolyHedronProps = MeshProps & {
  polyhedron: THREE.BufferGeometry[];
  color: string;
};

export default function Polyhedron({
  polyhedron,
  color,
  ...props
}: PolyHedronProps) {
  const ref = useRef<ThreeElements['mesh']>();
  const [count, setCount] = useState(2);

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setCount((count + 1) % 3);
      }}
      geometry={polyhedron[count]}
    >
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}
