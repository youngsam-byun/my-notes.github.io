import React from 'react';
import { screen } from '@testing-library/react';
import { IWidthProps } from './breakpoint-provider-wrapper';
import {
  DesktopAndDown,
  DesktopAndUp,
  PhoneOnly,
  TabletAndDown,
  TabletAndUp,
  TabletOnly,
  WideDesktopAndUp,
} from './Breakpoints';
import { renderBreakpoint } from '../test-utils/test-utils';
const PHONE_ONLY = 'PhoneOnly';
const TABLET_ONLY = 'TabletOnly';
const TABLET_AND_UP = 'TabletAndUp';
const TABLET_AND_DOWN = 'TabletAndDown';
const DESKTOP_AND_UP = 'DesktopAndUp';
const DESKTOP_ONLY = 'DesktopOnly';
const DESKTOP_AND_DOWN = 'DesktopAndDown';
const WIDE_DESKTOP_AND_UP = 'WideDesktopAndUp';

const Breaks = () => (
  <div>
    <PhoneOnly>
      <div>{PHONE_ONLY}</div>
    </PhoneOnly>
    <TabletAndUp>
      <div>{TABLET_AND_UP}</div>
    </TabletAndUp>
    <TabletOnly>
      <div>{TABLET_ONLY}</div>
    </TabletOnly>
    <TabletAndDown>
      <div>{TABLET_AND_DOWN}</div>
    </TabletAndDown>
    <DesktopAndUp>
      <div>{TABLET_AND_UP}</div>
    </DesktopAndUp>
    <DesktopAndUp>
      <div>{DESKTOP_ONLY}</div>
    </DesktopAndUp>
    <DesktopAndDown>
      <div>{DESKTOP_AND_DOWN}</div>
    </DesktopAndDown>
    <DesktopAndUp>
      <div>{DESKTOP_AND_UP}</div>
    </DesktopAndUp>
    <WideDesktopAndUp>
      <div>{WIDE_DESKTOP_AND_UP}</div>
    </WideDesktopAndUp>
  </div>
);

describe('breakpoint.test.ts', () => {
  describe('<PhoneOnly/>', () => {
    it.each`
      width
      ${0}
      ${200}
      ${375}
      ${767}
    `('$width  test', ({ width }: IWidthProps) => {
      renderBreakpoint(<Breaks />, { width });
      expect(screen.getByText(PHONE_ONLY)).toBeInTheDocument();
    });
  });

  describe('<TabletOnly/>', () => {
    it.each`
      width
      ${768}
      ${1000}
      ${1023}
    `('$width  test', ({ width }) => {
      renderBreakpoint(<Breaks />, { width });
      expect(screen.getByText(TABLET_ONLY)).toBeInTheDocument();
    });
  });

  describe('<TabletAndDown/>', () => {
    it.each`
      width
      ${0}
      ${200}
      ${375}
      ${1023}
    `('$width  test', ({ width }) => {
      renderBreakpoint(<Breaks />, { width });
      expect(screen.getByText(TABLET_AND_DOWN)).toBeInTheDocument();
    });
  });

  describe('<TabletAndUp/>', () => {
    it.each`
      width
      ${768}
      ${1000}
      ${1023}
    `('$width  test', ({ width }) => {
      renderBreakpoint(<Breaks />, { width });
      expect(screen.getByText(TABLET_AND_UP)).toBeInTheDocument();
    });
  });

  describe('<DesktopOnly/>', () => {
    it.each`
      width
      ${1024}
      ${1100}
      ${1339}
    `('$width  test', ({ width }) => {
      renderBreakpoint(<Breaks />, { width });
      expect(screen.getByText(DESKTOP_ONLY)).toBeInTheDocument();
    });
  });

  describe('<DesktopAndUp/>', () => {
    it.each`
      width
      ${1024}
      ${1440}
    `('$width  test', ({ width }) => {
      renderBreakpoint(<Breaks />, { width });
      expect(screen.getByText(DESKTOP_AND_UP)).toBeInTheDocument();
    });
  });

  describe('<DesktopAndDown/>', () => {
    it.each`
      width
      ${984}
      ${1439}
    `('$width  test', ({ width }) => {
      renderBreakpoint(<Breaks />, { width });
      expect(screen.getByText(DESKTOP_AND_DOWN)).toBeInTheDocument();
    });
  });
});
