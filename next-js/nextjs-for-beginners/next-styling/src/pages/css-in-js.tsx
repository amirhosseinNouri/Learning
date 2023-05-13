import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${(props) => props.theme.color.primary};
`;

const CSSInJS = () => {
  return <Title>CSS in JS</Title>;
};

export default CSSInJS;
