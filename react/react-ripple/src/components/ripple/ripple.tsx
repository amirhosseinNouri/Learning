import React, {
  FC,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useState
} from 'react';
import styles from './ripple.module.css';

interface RippleMethods {
  start: () => void;
  stop: () => void;
}

interface RippleProps {
  target: HTMLElement | null;
}

const Ripple: React.ForwardRefRenderFunction<RippleMethods, RippleProps> = (
  props,
  forwardedRef,
) => {

  const [shouldRenderRipple, setShouldRenderRipple] = useState(false);

  useImperativeHandle(forwardedRef, () => ({
    start: () => {setShouldRenderRipple(true)},
    stop: () => console.log('stop'),
  }));

  return <span className={styles.ripple}></span>;
};

export default React.forwardRef(Ripple);
