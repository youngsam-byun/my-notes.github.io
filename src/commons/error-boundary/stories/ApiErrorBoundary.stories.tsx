import React from 'react';
import { viewPorts } from '../../viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ApiErrorBoundaryTest } from './ApiErrorBoundaryTest';

export default {
  title: 'Components/ApiErrorBoundaryTest',
  component: ApiErrorBoundaryTest,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof ApiErrorBoundaryTest>;

const apiError: ComponentStory<typeof ApiErrorBoundaryTest> = (args) => (
  <ApiErrorBoundaryTest />
);
export const ApiError = apiError.bind({});
