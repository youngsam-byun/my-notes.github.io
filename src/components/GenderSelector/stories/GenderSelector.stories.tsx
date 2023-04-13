import React, { useState } from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GenderSelector } from '../GenderSelector';
export default {
  title: 'Components/GenderSelector',
  component: GenderSelector,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof GenderSelector>;

const Template: ComponentStory<typeof GenderSelector> = (args) => {
  const [genderId, setGenderId] = useState<number>(-1);
  return (
    <GenderSelector {...args} genderId={genderId} setGenderId={setGenderId} />
  );
};
export const Basic = Template.bind({});
Basic.args = {};
