import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { EmptyPlaceHolder } from '../EmptyPlaceHolder';

export default {
  title: 'Components/EmptyPlaceHolder',
  component: EmptyPlaceHolder,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof EmptyPlaceHolder>;

const Template: ComponentStory<typeof EmptyPlaceHolder> = (args) => {
  return <EmptyPlaceHolder />;
};

export const Primary = Template.bind({});
