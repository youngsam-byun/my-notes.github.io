import { widthsRem } from './breakpoint-widths';

export const phoneOnlyBounds = `(max-width: ${widthsRem.max.mobile}rem)`;
export const phoneOnly = () => `@media only screen and ${phoneOnlyBounds}`;

export const tabletUpBounds = `(min-width: ${widthsRem.min.tablet}rem)`;
export const tabletUp = () => `@media only screen and ${tabletUpBounds}`;

export const tabletOnlyBounds = `(min-width: ${widthsRem.min.tablet}rem) and {max-width: ${widthsRem.max.tablet}rem)`;
export const tabletOnly = () => `@media only screen and ${tabletOnlyBounds}`;

export const desktopUpBounds = `(min-width: ${widthsRem.min.desktop}rem)`;
export const desktopUp = () => `@media only screen and ${desktopUpBounds}`;

export const desktopOnlyBounds = `(min-width: ${widthsRem.min.desktop}rem) and (max-width: ${widthsRem.max.desktop}rem)`;
export const desktopOnly = () => `@media only screen and ${desktopOnlyBounds}`;

export const wideDesktopUpBounds = `(min-width: ${widthsRem.min.wideDesktop}rem)`;
export const wideDesktopUp = () =>
  `@media only screen and ${wideDesktopUpBounds}`;
