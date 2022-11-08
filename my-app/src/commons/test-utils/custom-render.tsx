import React from 'react';
import { BreakpointContext } from '../responsive/breakpoint-context';
import { render, RenderOptions } from '@testing-library/react';

export type IWidthProps = {
  width: number;
  children?: React.ReactNode;
};

export interface IWrapperExtensions<T> {
  withProps: (
    props: T,
  ) => ({ children }: { children?: React.ReactNode }) => JSX.Element;
}

export const BreakpointProviderWrapper: React.FC<IWidthProps> &
  IWrapperExtensions<IWidthProps> = ({ width, children }: IWidthProps) => {
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
    (
      <BreakpointProviderWrapper {...props}>
        {children}
      </BreakpointProviderWrapper>
    );

export const renderBreakpoint = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'> & IWidthProps,
) =>
  render(ui, {
    wrapper: (props: unknown) => (
      <BreakpointProviderWrapper
        {...(typeof props === 'object' ? props : {})}
        width={options?.width ?? 10}
      >
        {options?.children}
      </BreakpointProviderWrapper>
    ),
    ...options,
  });
