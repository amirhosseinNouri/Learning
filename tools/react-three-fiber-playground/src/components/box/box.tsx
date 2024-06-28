import { useRef } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import useKeyboard from '../../hooks/use-keyboard';
import { Mesh } from 'three';

export default function Box(props: MeshProps) {
  const ref = useRef<Mesh>(null);
  const keyMap = useKeyboard();

  useFrame((_, delta) => {
    if (ref.current) {
      keyMap['KeyA'] && (ref.current.position.x -= 1 * delta);
      keyMap['KeyD'] && (ref.current.position.x += 1 * delta);
      keyMap['KeyW'] && (ref.current.position.z -= 1 * delta);
      keyMap['KeyS'] && (ref.current.position.z += 1 * delta);
    }
  });

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
}
