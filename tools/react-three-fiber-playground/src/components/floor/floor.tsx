const Floor = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <circleGeometry args={[10]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default Floor;
