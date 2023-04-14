import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OutputContainer } from '../OutputContainer';

export default {
  title: 'Components/OutputContainer',
  component: OutputContainer,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof OutputContainer>;

const Template: ComponentStory<typeof OutputContainer> = (args) => {
  const horoscopeResult = 'test data';
  return <OutputContainer horoscopeResult={horoscopeResult} />;
};

export const Primary = Template.bind({});
