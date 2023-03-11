import React from 'react';
import { viewPorts } from '../../viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ApiErrorBoundary } from '../ApiErrorBoundary';

export default {
  title: 'Components/ApiErrorBoundary',
  component: ApiErrorBoundary,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof ApiErrorBoundary>;

const Template: ComponentStory<typeof ApiErrorBoundary> = (args) => (
  <ApiErrorBoundary />
);
export const ApiError = Template.bind({});
