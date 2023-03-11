import React from 'react';
import { viewPorts } from '../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Header {...args}>Header Title</Header>
);
export const Primary = Template.bind({});
Primary.args = {
  color: 'white',
  bgColor: 'red',
  height: '3rem',
};
