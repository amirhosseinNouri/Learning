import { ColorVariant } from '../../theme/colors';
import { ReactNode } from 'react';

export interface ButtonProps {
  color: ColorVariant;
  children: ReactNode;
}

export type ButtonStyledProps = {
  color: ColorVariant;
};
