import { createContext } from 'react';
import { widthsPx } from './breakpoint-widths';

export const CreateBreakpointContext = createContext({
  width: widthsPx.min.tablet,
});
