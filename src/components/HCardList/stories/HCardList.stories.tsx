import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HCardList } from '../HCardList';
export default {
  title: 'Components/HCardList',
  component: HCardList,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof HCardList>;

const Template: ComponentStory<typeof HCardList> = () => <HCardList />;
export const Basic = Template.bind({});
