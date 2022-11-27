import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { I18View as I18nViewComponent } from './I18View';

export default {
  title: 'I18nView',
  component: I18nViewComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof I18nViewComponent>;

export const I18View: Story = () => <I18nViewComponent />;
