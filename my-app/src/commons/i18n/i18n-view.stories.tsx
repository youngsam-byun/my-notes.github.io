import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import './i18n';
import { I18nView as I18nViewComponent } from './i18n-view';

export default {
  title: 'I18nView',
  component: I18nViewComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof I18nViewComponent>;

export const I18View: Story = () => <I18nViewComponent />;
