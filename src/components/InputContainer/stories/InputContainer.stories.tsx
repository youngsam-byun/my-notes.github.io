import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer } from '../InputContainer';

export default {
  title: 'Components/InputContainer',
  component: InputContainer,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = (args) => (
  <InputContainer />
);
export const Primary = Template.bind({});
