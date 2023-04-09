import React from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import { DefaultGlobalStyle } from '../../styles/GlobalStyle';
export const ContainerAndGridTest = () => {
  return (
    <>
      <DefaultGlobalStyle />
      <Container>
        Container Start
        <Divider hidden />
        Grid STart
        <Grid>
          <Grid.Row>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
            <Grid.Column>a</Grid.Column>
          </Grid.Row>
        </Grid>
        Grid End
        <Divider hidden />
        Container End
      </Container>
    </>
  );
};
