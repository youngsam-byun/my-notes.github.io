import React, { useState } from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HCardFlip } from '../HCardFlip';
export default {
  title: 'Components/HCardFlip',
  component: HCardFlip,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof HCardFlip>;

const Template: ComponentStory<typeof HCardFlip> = (args) => {
  const [flipCardId, setFlipCardId] = useState<number>(-1);
  return (
    <HCardFlip
      {...args}
      flipCardId={flipCardId}
      setFlipCardId={setFlipCardId}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  horoscope: 'aries',
};
