import React, { CSSProperties } from 'react';
import { defaultTheme } from '../../styles/default-theme';
import styled from 'styled-components';
interface IHeader {
  children?: React.ReactNode;
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
  height?: CSSProperties['height'];
}

const SDiv = styled.div<{
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
  height?: CSSProperties['height'];
}>`
  color: ${(props) => (props.color ? props.color : defaultTheme.colors.white)};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : defaultTheme.colors.black};
  height: ${(props) => (props.height ? props.height : 'auto')};
`;

export const StyledHeader = ({ children, color, bgColor, height }: IHeader) => {
  return (
    <SDiv color={color} bgColor={bgColor} height={height}>
      {children}
    </SDiv>
  );
};
