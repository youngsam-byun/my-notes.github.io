import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import {
  BreakpointProviderWrapper,
  IWidthProps,
} from '../responsive/breakpoint-provider-wrapper';
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
