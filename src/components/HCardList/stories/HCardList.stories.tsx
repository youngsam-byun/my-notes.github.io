import React, { useState } from 'react';
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

const Template: ComponentStory<typeof HCardList> = () => {
  const [flipCardId, setFlipCardId] = useState<number>(-1);
  const setFlipCardIdCallback = (flipCardId: number) => {
    console.log('setFlipCardIdCallback');
  };
  return (
    <HCardList
      flipCardId={flipCardId}
      setFlipCardId={setFlipCardId}
      setFlipCardIdCallback={setFlipCardIdCallback}
    />
  );
};
export const Basic = Template.bind({});
