import { MeshProps, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState } from 'react';
import { Color, MathUtils, Mesh } from 'three';

const black = new Color('black');

const Button = (props: MeshProps) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const colorTo = useMemo(
    () => new Color(Math.floor(Math.random() * 16777216)),
    [],
  );

  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current && ref.current.rotation) {
      ref.current.rotation.x = hovered
        ? MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
        : MathUtils.lerp(ref.current.rotation.x, 0, 0.025);
      ref.current.position.z = selected
        ? MathUtils.lerp(ref.current.position.z, 0, 0.025)
        : MathUtils.lerp(ref.current.position.z, -3, 0.025);

      // @ts-expect-error Why this is not working
      ref.current.material.color.lerp(selected ? colorTo : black, 0.025);
    }
  });

  const handlePointerOver = () => setHovered(true);

  const handlePointerOut = () => setHovered(false);

  const handlePointerDown = () => setSelected(!selected);

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
    >
      <icosahedronGeometry />
      <meshPhysicalMaterial
        roughness={0}
        metalness={0}
        thickness={3.12}
        ior={1.74}
        transmission={1}
      />
    </mesh>
  );
};

export default Button;
