import React, { CSSProperties } from 'react';
import { defaultTheme } from '../../styles/default-theme';
import styled from 'styled-components';
interface IHeader {
  children?: React.ReactNode;
  bgColor?: CSSProperties['backgroundColor'];
  height?: CSSProperties['height'];
}

const SDiv = styled.div<{
  bgColor?: CSSProperties['backgroundColor'];
  height?: CSSProperties['height'];
}>`
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : defaultTheme.colors.black};
  height: ${(props) => (props.height ? props.height : 'auto')};
`;

export const Header = ({ children, bgColor, height }: IHeader) => {
  return (
    <SDiv bgColor={bgColor} height={height}>
      {children}
    </SDiv>
  );
};
