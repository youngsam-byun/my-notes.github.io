import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ContainerAndGridTest } from '../ContainerAndGridTest';

export default {
  title: 'Components/ContainerAndGridTest',
  component: ContainerAndGridTest,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof ContainerAndGridTest>;

const Template: ComponentStory<typeof ContainerAndGridTest> = (args) => (
  <ContainerAndGridTest />
);
export const Primary = Template.bind({});
