import React from 'react';
import { viewPorts } from '../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SampleDisplay } from './SampleDisplay';

export default {
  title: 'Components/SampleDisplay',
  component: SampleDisplay,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof SampleDisplay>;

const Template: ComponentStory<typeof SampleDisplay> = (args) => (
  <SampleDisplay />
);
export const Primary = Template.bind({});
