import { BreakpointsKey, widthsPx } from './breakpoint-widths';
import { CreateBreakpointContext } from './create-breakpoint-context';
import { useContext } from 'react';

const breakpointKeys = Object.keys(widthsPx.min) as BreakpointsKey[];

function getBreakpointKey(width: number): BreakpointsKey {
  if (width < widthsPx.min.mobile) {
    return 'mobile';
  }
  if (widthsPx.max.wideDesktop < width) {
    return 'wideDesktop';
  }

  return breakpointKeys.find((bk) => {
    return width <= widthsPx.min[bk] && widthsPx.max[bk];
  })!;
}

export const useBreakpointContext = (): BreakpointsKey => {
  const { width } = useContext(CreateBreakpointContext);
  return getBreakpointKey(width);
};
