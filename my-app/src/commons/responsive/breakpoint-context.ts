import { createContext } from 'react';
import { widthsPx } from './breakpoint-widths';

export const BreakpointContext = createContext({
  width: widthsPx.min.tablet,
});
