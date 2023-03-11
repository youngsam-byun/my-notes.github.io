import React from 'react';
import { renderHook } from '@testing-library/react';
import { useBreakpointContext } from '../use-breakpoint-context';
import { BreakpointProviderWrapper } from '../breakpoint-provider-wrapper';

describe('use-breakpoint-context.test.tsx', () => {
  it.each([
    [300, 'mobile'],
    [700, 'mobile'],
    [767, 'mobile'],
    [768, 'tablet'],
    [1023, 'tablet'],
    [1024, 'desktop'],
    [1439, 'desktop'],
    [1440, 'wideDesktop'],
    [2000, 'wideDesktop'],
  ])(
    'screen breakpoint test %d px, return breakpoint of %s',
    (mockScreenWidth: number, expectedBreakpoint: string) => {
      const { result } = renderHook(() => useBreakpointContext(), {
        wrapper: (props) => (
          <BreakpointProviderWrapper width={mockScreenWidth} {...props} />
        ),
      });
      console.log(result);
    },
  );
});
