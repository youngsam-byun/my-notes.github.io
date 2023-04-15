import React, { useRef, useState } from 'react';
import { viewPorts } from '../../../commons/viewports/viewports';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SubmitPanel } from '../SubmitPanel';

export default {
  title: 'Components/SubmitPanel',
  component: SubmitPanel,
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
} as ComponentMeta<typeof SubmitPanel>;

const Template: ComponentStory<typeof SubmitPanel> = (args) => {
  const buttonGroupRef = useRef<HTMLDivElement>(null);
  const setHoroscopeResultCallback = () => {
    console.log('setHoroscopeResultCallback()');
  };
  const resetCallback = () => {
    console.log('resetCallback()');
  };
  // eslint-disable-next-line no-unused-vars
  const [loader, setLoader] = useState<boolean>(false);
  return (
    <SubmitPanel
      {...args}
      ref={buttonGroupRef}
      setLoader={setLoader}
      setHoroscopeResult={setHoroscopeResultCallback}
      resetCallback={resetCallback}
    />
  );
};
export const Basic = Template.bind({});
