import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GlobalHeader } from '../GlobalHeader';

export default {
  title: 'Components/GlobalHeader',
  component: GlobalHeader,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof GlobalHeader>;

const Template: ComponentStory<typeof GlobalHeader> = (args) => (
  <GlobalHeader {...args}>Header Title</GlobalHeader>
);
export const Basic = Template.bind({});
Basic.args = {
  height: '3em',
  title: 'Daily Horoscope',
};
