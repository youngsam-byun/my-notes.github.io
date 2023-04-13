import React, { useState } from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AgeSelector } from '../AgeSelector';
export default {
  title: 'Components/AgeSelector',
  component: AgeSelector,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof AgeSelector>;

const Template: ComponentStory<typeof AgeSelector> = (args) => {
  const [age, setAge] = useState<number>(-1);
  return <AgeSelector {...args} age={age} setAge={setAge} />;
};
export const Basic = Template.bind({});
Basic.args = {};
