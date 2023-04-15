import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GlobalFooter } from '../GlobalFooter';

export default {
  title: 'Components/GlobalFooter',
  component: GlobalFooter,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.tablet,
    },
  },
} as ComponentMeta<typeof GlobalFooter>;

const Template: ComponentStory<typeof GlobalFooter> = (args) => (
  <GlobalFooter />
);
export const Basic = Template.bind({});
Basic.args = {};
