import React from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HCard } from '../HCard';
export default {
  title: 'Components/HCard',
  component: HCard,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
  argTypes: {
    horoscope: {
      control: {
        type: 'select',
        options: [
          'aquarius',
          'aries',
          'cancer',
          'capricorn',
          'gemini',
          'leo',
          'libra',
          'pisces',
          'sagittarius',
          'scorpio',
          'taurus',
          'virgo',
        ],
      },
    },
  },
} as ComponentMeta<typeof HCard>;

const Template: ComponentStory<typeof HCard> = (args) => {
  return <HCard {...args} />;
};
export const Basic = Template.bind({});
Basic.args = {
  horoscope: 'aries',
};
