import React, { useState } from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer } from '../InputContainer';

export default {
  title: 'Components/InputContainer',
  component: InputContainer,
  parameters: {
    viewport: {
      defaultViewport: viewPorts.wideDesktop,
    },
  },
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = (args) => {
  // eslint-disable-next-line no-unused-vars
  function setHoroscopeResult(result: string) {
    console.log('setHoroscopeResult(); result = ' + result);
  }
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState<boolean>(false);
  return (
    <InputContainer
      setHoroscopeResultCallback={setHoroscopeResult}
      setLoader={setLoader}
    />
  );
};
export const Primary = Template.bind({});
