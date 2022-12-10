import useResizeObserver from 'use-resize-observer/polyfilled';
import { CreateBreakpointContext } from './create-breakpoint-context';
import {
  DesktopAndDown,
  DesktopAndUp,
  DesktopOnly,
  PhoneOnly,
  TabletAndDown,
  TabletAndUp,
  TabletOnly,
  WideDesktopAndUp,
} from './Breakpoints';
import React from 'react';
import { viewPorts } from '../viewports/viewports';
import { Story } from '@storybook/react';

const PHONE_ONLY = 'PhoneOnly';
const TABLET_ONLY = 'TabletOnly';
const TABLET_AND_UP = 'TabletAndUp';
const TABLET_AND_DOWN = 'TabletAndDown';
const DESKTOP_AND_UP = 'DesktopAndUp';
const DESKTOP_ONLY = 'DesktopOnly';
const DESKTOP_AND_DOWN = 'DesktopAndDown';
const WIDE_DESKTOP_AND_UP = 'WideDesktopAndUp';

const Padding = () => (
  <div style={{ minHeight: 2000 }}>Padding to test scroll bar</div>
);

const WrappedBreakpoints = () => {
  const { ref } = useResizeObserver<HTMLDivElement>();
  const width = window.innerWidth;
  return (
    <CreateBreakpointContext.Provider value={{ width }}>
      <h1>Breakpoints</h1>
      <div ref={ref}>
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
          <div>{DESKTOP_AND_UP}</div>
        </DesktopAndUp>
        <DesktopOnly>
          <div>{DESKTOP_ONLY}</div>
        </DesktopOnly>
        <DesktopAndDown>
          <div>{DESKTOP_AND_DOWN}</div>
        </DesktopAndDown>
        <WideDesktopAndUp>
          <div>{WIDE_DESKTOP_AND_UP}</div>
        </WideDesktopAndUp>
      </div>
      <Padding />
    </CreateBreakpointContext.Provider>
  );
};

export default {
  title: 'Commons/Breakpoints',
  component: PhoneOnly,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
};

export const Components: Story = () => <WrappedBreakpoints />;
