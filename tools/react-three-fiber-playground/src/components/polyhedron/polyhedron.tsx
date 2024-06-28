import { useRef, useState } from 'react';
import { MeshProps, ThreeElements, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useControls } from 'leva';

type PolyHedronProps = MeshProps & {
  color: string;
  name: string;
};

export default function Polyhedron({ color, ...props }: PolyHedronProps) {
  useFrame((_, delta) => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.x += 0.2 * delta;
      ref.current.rotation.y += 0.05 * delta;
    }
  });

  useControls(props.name, {
    wireframe: {
      value: false,
      onChange: (v) => {
        if (ref.current && ref.current.material) {
          ref.current.material.wireframe = v;
        }
      },
    },
    flatShading: {
      value: true,
      onChange: (v) => {
        if (ref.current && ref.current.material) {
          ref.current.material.flatShading = v;
          ref.current.material.needsUpdate = true;
        }
      },
    },
    color: {
      value: 'lime',
      onChange: (v) => {
        if (ref.current && ref.current.material) {
          ref.current.material.color = new THREE.Color(v);
        }
      },
    },
  });

  const ref = useRef<ThreeElements['mesh']>();

  return (
    <mesh {...props} ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  );
}
