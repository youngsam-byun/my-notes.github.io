import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  ResponsiveContainer,
  IResponsiveContainer,
} from './ResponsiveContainer';
import styled from 'styled-components';

export default {
  title: 'Commons/Container',
  component: ResponsiveContainer,
} as Meta;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  border: 1px solid red;
  padding: 0 1.5rem;
`;

export const Container: Story<IResponsiveContainer> = (args) => (
  <StyledResponsiveContainer {...args}>
    <h1>Example Title</h1>
    <p> Styled Responsive container</p>
  </StyledResponsiveContainer>
);
