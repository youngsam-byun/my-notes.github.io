import React from 'react';
import { BreakpointContext } from './breakpoint-context';
import { widthsPx } from './breakpoint-widths';

interface IBreakpoints {
  children: React.ReactNode;
}

export const PhoneOnly: React.FC<IBreakpoints> = ({ children }) => (
  <BreakpointContext.Consumer>
    {({ width }) => (width <= widthsPx.max.mobile ? children : null)}
  </BreakpointContext.Consumer>
);

export const TabletAndDown: React.FC<IBreakpoints> = ({ children }) => (
  <BreakpointContext.Consumer>
    {({ width }) => (width <= widthsPx.max.tablet ? children : null)}
  </BreakpointContext.Consumer>
);

export const TabletOnly: React.FC<IBreakpoints> = ({ children }) => (
  <BreakpointContext.Consumer>
    {({ width }) =>
      widthsPx.min.tablet <= width && width <= widthsPx.max.tablet
        ? children
        : null
    }
  </BreakpointContext.Consumer>
);

export const TabletAndUp: React.FC<IBreakpoints> = ({ children }) => (
  <BreakpointContext.Consumer>
    {({ width }) => (widthsPx.min.tablet <= width ? children : null)}
  </BreakpointContext.Consumer>
);

export const DesktopAndDown: React.FC<IBreakpoints> = ({ children }) => (
  <BreakpointContext.Consumer>
    {({ width }) => (width <= widthsPx.max.desktop ? children : null)}
  </BreakpointContext.Consumer>
);

export const DesktopOnly: React.FC<IBreakpoints> = ({ children }) => (
  <BreakpointContext.Consumer>
    {({ width }) =>
      widthsPx.min.desktop <= width && width <= widthsPx.max.desktop
        ? children
        : null
    }
  </BreakpointContext.Consumer>
);

export const DesktopAndUp: React.FC<IBreakpoints> = ({ children }) => (
  <BreakpointContext.Consumer>
    {({ width }) => (widthsPx.min.desktop <= width ? children : null)}
  </BreakpointContext.Consumer>
);

export const WideDesktopAndUp: React.FC<IBreakpoints> = ({ children }) => (
  <BreakpointContext.Consumer>
    {({ width }) => (widthsPx.min.wideDesktop <= width ? children : null)}
  </BreakpointContext.Consumer>
);
