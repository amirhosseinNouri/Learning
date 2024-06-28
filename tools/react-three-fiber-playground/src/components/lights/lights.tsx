import { useControls } from 'leva';

function Lights() {
  const ambientLightControl = useControls('Ambient Light', {
    visible: {
      value: false,
    },
    intensity: {
      value: 1.0,
      min: 0,
      max: 1,
      step: 0.1,
    },
  });

  const directionalLightControl = useControls('Directional Light', {
    visible: {
      value: true,
    },
    position: {
      value: {
        x: 2,
        y: 0,
        z: 0,
      },
    },
    castShadow: true,
  });

  const pointLightControl = useControls('Point Light', {
    visible: {
      value: false,
    },
    position: {
      value: {
        x: 2,
        y: 0,
        z: 0,
      },
    },
    castShadow: true,
  });

  const spotLightControl = useControls('Spot Light', {
    visible: {
      value: false,
    },
    position: {
      value: {
        x: 2,
        y: 0,
        z: 0,
      },
    },
    castShadow: false,
  });

  return (
    <>
      <ambientLight
        visible={ambientLightControl.visible}
        intensity={ambientLightControl.intensity}
      />
      <directionalLight
        visible={directionalLightControl.visible}
        position={[
          directionalLightControl.position.x,
          directionalLightControl.position.y,
          directionalLightControl.position.z,
        ]}
        castShadow={directionalLightControl.castShadow}
        intensity={1}
      />
      <pointLight
        visible={pointLightControl.visible}
        position={[
          pointLightControl.position.x,
          pointLightControl.position.y,
          pointLightControl.position.z,
        ]}
        castShadow={pointLightControl.castShadow}
      />
      <spotLight
        visible={spotLightControl.visible}
        position={[
          spotLightControl.position.x,
          spotLightControl.position.y,
          spotLightControl.position.z,
        ]}
        castShadow={spotLightControl.castShadow}
      />
    </>
  );
}

export default Lights;
