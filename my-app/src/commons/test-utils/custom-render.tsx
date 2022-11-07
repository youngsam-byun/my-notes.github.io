import React from 'react';
import { BreakpointContext } from '../responsive/breakpoint-context';

type IWidthProps = {
  width: number;
};

export interface IWrapperExtensions<T> {
  withProps: (
    props: T,
  ) => ({ children }: { children?: React.ReactNode }) => JSX.Element;
}

export const BreakpointProviderWrapper: React.FC<IWidthProps> &
  IWrapperExtensions<IWidthProps> = ({ width, children }) => {
  return (
    <BreakpointContext.Provider value={{ width }}>
      {children}
    </BreakpointContext.Provider>
  );
};

BreakpointProviderWrapper.displayName = 'BreakpointProviderWrapper';
BreakpointProviderWrapper.withProps =
  (props) =>
  ({ children }) =>
    <BreakpointProviderWrapper {...props} children={children} />;
