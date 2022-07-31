import styled from '@emotion/styled';
import { ButtonStyledProps } from './button.types';

const styledButton = styled.button<ButtonStyledProps>`
  padding: 10px;
  background-color: darkgray;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.color === 'primary' ? 'green' : 'blue')};
  & strong {
    color: hotpink;
  }
`;

export default styledButton;
