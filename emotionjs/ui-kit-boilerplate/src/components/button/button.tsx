import { FC } from 'react';
import StyledButton from './button.style';
import { ButtonProps } from './button.types';

const Button = ({ color = 'primary', children }: ButtonProps) => {
  return <StyledButton color={color}>{children}</StyledButton>;
};

export default Button;
