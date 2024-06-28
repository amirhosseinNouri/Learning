import { useRef, useState } from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';
import useKeyboard from '../../hooks/use-keyboard';
import { Mesh } from 'three';

export default function Box(props: MeshProps & { selected?: boolean }) {
  const [selected, setSelected] = useState(props.selected);
  const ref = useRef<Mesh>(null);
  const keyMap = useKeyboard();

  useFrame((_, delta) => {
    if (ref.current) {
      keyMap['KeyA'] && selected && (ref.current.position.x -= 1 * delta);
      keyMap['KeyD'] && selected && (ref.current.position.x += 1 * delta);
      keyMap['KeyW'] && selected && (ref.current.position.z -= 1 * delta);
      keyMap['KeyS'] && selected && (ref.current.position.z += 1 * delta);
    }
  });

  return (
    <mesh ref={ref} {...props} onPointerDown={() => setSelected(!selected)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe={!selected} />
    </mesh>
  );
}
