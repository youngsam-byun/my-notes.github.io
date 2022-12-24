import React from 'react';
import { viewPorts } from '../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorBoundary } from './ErrorBoundary';

export default {
  title: 'Components/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof ErrorBoundary>;

function ChildComponentEmitsError() {
  throw new Error('Error fired');
  return <>this is child component</>;
}

const Template: ComponentStory<typeof ErrorBoundary> = (args) => (
  <ErrorBoundary>
    <ChildComponentEmitsError />
  </ErrorBoundary>
);
export const NormalError = Template.bind({});
