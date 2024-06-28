import {
  MeshProps,
  ThreeElements,
  ThreeEvent,
  useFrame,
} from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const Box = (props: MeshProps) => {
  const [counter, setCounter] = useState(0);

  const ref = useRef<ThreeElements['mesh']>();

  const geometries = useMemo(
    () => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.5)],
    [],
  );

  useFrame((_, delta) => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.x += delta;
      ref.current.rotation.y += 0.5 * delta;
    }
  });

  const handlerPointerDown = (_: ThreeEvent<PointerEvent>) => {
    setCounter((counter + 1) % 2);
  };

  return (
    <mesh
      {...props}
      // @ts-expect-error I am not sure why this is not working anymore
      ref={ref}
      onPointerDown={handlerPointerDown}
      geometry={geometries[counter]}
    >
      <meshBasicMaterial color="chocolate" wireframe />
    </mesh>
  );
};

export default Box;
