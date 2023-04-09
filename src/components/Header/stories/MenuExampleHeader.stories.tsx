import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MenuExampleHeader } from '../MenuExampleHeader';

export default {
  title: 'Components/MenuExampleHeader',
  component: MenuExampleHeader,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof MenuExampleHeader>;

const Template: ComponentStory<typeof MenuExampleHeader> = (args) => (
  <MenuExampleHeader {...args}>Header Title</MenuExampleHeader>
);
export const Primary = Template.bind({});
