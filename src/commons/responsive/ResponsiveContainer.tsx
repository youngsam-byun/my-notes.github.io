import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { desktopUp, phoneOnly, tabletOnly, tabletUp } from './media-queries';
import { defaultTheme } from '../../styles/default-theme';

export interface IResponsiveContainer {
  children: React.ReactNode;
  gray?: boolean;
  className?: string;
  coverEntireWidth?: boolean;
  display?: CSSProperties['display'];
  verticalSpace?: CSSProperties['paddingTop'];
  fullHeight?: boolean;
  maxContentWidth?: string;
}

export const defaultPadding = {
  vertical: '0.005rem',
  horizontal: {
    mobile: '1rem',
    tablet: '1.5rem',
    default: '2rem',
  },
};

export const leftPaddingCss = css`
  padding-left: ${defaultPadding.horizontal.mobile};

  ${tabletUp}:{
    padding-left: ${defaultPadding.horizontal.tablet};
  }   
  
  ${desktopUp}:{
    padding-left: ${defaultPadding.horizontal.default};
  }
}`;

export const rightPaddingCss = css`
  padding-right: ${defaultPadding.horizontal.mobile};

  ${tabletUp}:{
    padding-right: ${defaultPadding.horizontal.tablet};
  }   
  
  ${desktopUp}:{
    padding-right: ${defaultPadding.horizontal.default};
  }
}`;

export const horizontalPaddingCss = css`
  ${leftPaddingCss} ${rightPaddingCss}
`;

export const defaultMaxContentWidth = '72.5rem';

const getPadding = (
  verticalSpace: IResponsiveContainer['verticalSpace'],
  horizontalPadding: string,
) => `${verticalSpace} ${horizontalPadding}`;

const Container = styled.div<{
  bgColor: CSSProperties['backgroundColor'];
  display?: IResponsiveContainer['display'];
  verticalSpace: IResponsiveContainer['verticalSpace'];
  coverEntireWidth: IResponsiveContainer['coverEntireWidth'];
  fullHeight: boolean;
}>`
  display: ${(props) => props.display};
  height: ${(fullHeight) => (fullHeight ? '100%' : 'auto')};
  background-color: ${(props) => props.bgColor};
  padding: ${(props) =>
    getPadding(props.verticalSpace, defaultPadding.horizontal.default)};

  ${phoneOnly()} {
    padding: ${(props) => {
      const { verticalSpace, coverEntireWidth } = props;
      const horizontalPadding = coverEntireWidth
        ? '0'
        : defaultPadding.horizontal.mobile;
      return getPadding(verticalSpace, horizontalPadding);
    }};
  }

  ${tabletOnly()} {
    padding: ${(props) =>
      getPadding(props.verticalSpace, defaultPadding.horizontal.tablet)};
  }
`;

export const SubContainer = styled.div<{ maxWidth: string }>`
  max-width: ${(props) => props.maxWidth};
  margin: auto;
  padding: ${defaultPadding.vertical};
`;

export const ResponsiveContainer = ({
  gray = false,
  children,
  verticalSpace,
  className,
  display,
  coverEntireWidth,
  fullHeight = false,
  maxContentWidth = defaultMaxContentWidth,
}: IResponsiveContainer) => {
  const bgColor = gray ? defaultTheme.colors.gray : '';
  const containerVerticalSpace = verticalSpace ?? defaultPadding.vertical;
  return (
    <Container
      bgColor={bgColor}
      display={display}
      className={className}
      coverEntireWidth={coverEntireWidth}
      fullHeight={fullHeight}
      verticalSpace={containerVerticalSpace}
    >
      <SubContainer maxWidth={maxContentWidth}>{children}</SubContainer>
    </Container>
  );
};
