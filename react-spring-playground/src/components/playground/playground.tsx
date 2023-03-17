import { animated, useSpring } from '@react-spring/web';

const Playground = () => {
  const [springs, springAPI] = useSpring(() => ({
    from: { x: 0 },
  }));

  const handleClick = () => {
    springAPI.start({
      from: {
        x: 0,
      },
      to: {
        x: 200,
      },
    });
  };

  return (
    <animated.div
      style={{
        ...springs,
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
      }}
      onClick={handleClick}
    ></animated.div>
  );
};

export default Playground;
