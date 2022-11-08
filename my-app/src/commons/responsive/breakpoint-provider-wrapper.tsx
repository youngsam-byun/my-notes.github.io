import React from 'react';
import { CreateBreakpointContext } from './create-breakpoint-context';

export interface IWidthProps {
  width: number;
  children?: React.ReactNode;
}

export interface IWrapperExtensions<T> {
  withProps: (
    props: T,
  ) => ({ children }: { children?: React.ReactNode }) => JSX.Element;
}

export const BreakpointProviderWrapper: React.FC<IWidthProps> &
  IWrapperExtensions<IWidthProps> = ({ width, children }: IWidthProps) => {
  return (
    <CreateBreakpointContext.Provider value={{ width }}>
      {children}
    </CreateBreakpointContext.Provider>
  );
};

BreakpointProviderWrapper.displayName = 'BreakpointProviderWrapper';
BreakpointProviderWrapper.withProps =
  (props) =>
  ({ children }) =>
    (
      <BreakpointProviderWrapper {...props}>
        {children}
      </BreakpointProviderWrapper>
    );
