import React, { useState } from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputContainer } from '../InputContainer';
import { HoroscopeResultType } from '../../OutputContainer/output-container-constant';

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
  const [horoscopeResult, setHoroscopeResult] =
    useState<HoroscopeResultType | null>(null);
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState<boolean>(false);

  return (
    <InputContainer
      setHoroscopeResult={setHoroscopeResult}
      setLoader={setLoader}
    />
  );
};
export const Primary = Template.bind({});
