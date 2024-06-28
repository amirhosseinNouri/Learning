import { MeshProps } from '@react-three/fiber';

const Button = (props: MeshProps) => {
  return (
    <mesh {...props}>
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
