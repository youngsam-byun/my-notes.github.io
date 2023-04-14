import React from 'react';
import { viewPorts } from './commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { App } from './App';

export default {
  title: 'Components/App',
  component: App,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;
export const Primary = Template.bind({});
