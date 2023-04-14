import React, { CSSProperties } from 'react';
import { defaultTheme } from '../../styles/default-theme';
import styled from 'styled-components';
import { hostname } from '../../commons/constants/constants';
interface GlobalHeaderProps {
  children?: React.ReactNode;
  color?: CSSProperties['color'];
  bgColor?: CSSProperties['backgroundColor'];
  height?: CSSProperties['height'];
  title?: string;
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
  text-align: center;
  padding-top: 1rem;
`;

export const GlobalHeader = ({
  children,
  color,
  bgColor,
  height,
  title = 'Header',
}: GlobalHeaderProps) => {
  return (
    <>
      <SDiv color={color} bgColor={bgColor} height={height}>
        <div>
          <h3>
            <a href={hostname} style={{ color: defaultTheme.colors.white }}>
              {title}
            </a>
          </h3>
        </div>
      </SDiv>
    </>
  );
};
