import React from 'react';
import { viewPorts } from '../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SuspenseExample } from './SuspenseExample';

export default {
  title: 'Components/SuspenseExample',
  component: SuspenseExample,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof SuspenseExample>;

const Template: ComponentStory<typeof SuspenseExample> = (args) => (
  <SuspenseExample />
);
export const Primary = Template.bind({});
