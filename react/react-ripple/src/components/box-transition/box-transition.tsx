import { FC } from 'react';
import styles from './box-transition.module.css';
import { CSSTransition } from 'react-transition-group';

interface BoxTransitionProps {
  showRipple: boolean;
}

const BoxTransition: FC<BoxTransitionProps> = ({ showRipple }) => {
  return (
    <div className={styles.box}>
      <CSSTransition
        in={showRipple}
        timeout={300}
        classNames="ripple"
        unmountOnExit
      >
        <span></span>
      </CSSTransition>
    </div>
  );
};

export default BoxTransition;
