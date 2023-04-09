import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StyledHeader } from '../StyledHeader';

export default {
  title: 'Components/StyledHeader',
  component: StyledHeader,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof StyledHeader>;

const Template: ComponentStory<typeof StyledHeader> = (args) => (
  <StyledHeader {...args}>Header Title</StyledHeader>
);
export const Primary = Template.bind({});
Primary.args = {
  color: 'white',
  bgColor: 'red',
  height: '3rem',
};
