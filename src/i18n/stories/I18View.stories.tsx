import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { I18nView } from '../I18nView';

export default {
  title: 'Commons/I18View',
  component: I18nView,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof I18nView>;

export const Template: Story = () => <I18nView />;
