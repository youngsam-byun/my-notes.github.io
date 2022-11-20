interface IBreakpoints {
  mobile: number;
  tablet: number;
  desktop: number;
  wideDesktop: number;
}
export type BreakpointsKey = keyof IBreakpoints;

interface IWidthRange {
  min: IBreakpoints;
  max: IBreakpoints;
}

const minWidthPx: IBreakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
  wideDesktop: 1440,
};

const maxWidthPx: IBreakpoints = {
  mobile: minWidthPx.tablet - 1,
  tablet: minWidthPx.desktop - 1,
  desktop: minWidthPx.wideDesktop - 1,
  wideDesktop: 1920,
};

export const widthsPx: IWidthRange = {
  min: minWidthPx,
  max: maxWidthPx,
};

const baseRemSize = 16;
export const pxToRemRaw = (px: number) => {
  const rem = px / baseRemSize;
  return Math.round(rem * 1000) / 1000;
};

const convertToRem = (px: IBreakpoints) => {
  return Object.keys(px).reduce<IBreakpoints>(
    (prev, curr) => {
      const key = curr as BreakpointsKey;
      prev[key] = pxToRemRaw(prev[key]);
      return prev;
    },
    {
      ...px,
    },
  );
};

export const widthsRem: IWidthRange = {
  min: convertToRem(widthsPx.min),
  max: convertToRem(widthsPx.max),
};
