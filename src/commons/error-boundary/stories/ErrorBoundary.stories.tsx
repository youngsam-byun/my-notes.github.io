import React from 'react';
import { viewPorts } from '../../viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChildComponentEmitsError } from './ChildComponentEmitsError';

export default {
  title: 'Components/ChildComponentEmitsError',
  component: ChildComponentEmitsError,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof ChildComponentEmitsError>;

const Template: ComponentStory<typeof ChildComponentEmitsError> = (args) => (
  <ChildComponentEmitsError />
);
export const NormalError = Template.bind({});
