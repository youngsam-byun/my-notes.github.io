import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ContentPlaceHolder } from '../ContentPlaceHolder';
import { sampleResponpse } from '../output-container-constant';

export default {
  title: 'Components/ContentPlaceHolder',
  component: ContentPlaceHolder,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof ContentPlaceHolder>;

const Template: ComponentStory<typeof ContentPlaceHolder> = (args) => {
  return <ContentPlaceHolder horoscopeResult={sampleResponpse} />;
};

export const Primary = Template.bind({});
