import React, { FC, MouseEvent, useRef, useState } from 'react';
import styles from './button.module.css';
import Ripple from '../ripple';

interface ButtonProps {
  ripple?: boolean;
  children: React.ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ ripple = true, children, onClick }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<React.ElementRef<typeof Ripple>>(null);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (rippleRef.current) {
      rippleRef.current.start();
    }
    onClick(e);
  };

  return (
    <button ref={buttonRef} onClick={handleClick} className={styles.button}>
      <Ripple ref={rippleRef} target={buttonRef.current} />
      {children}
    </button>
  );
};

export default Button;
