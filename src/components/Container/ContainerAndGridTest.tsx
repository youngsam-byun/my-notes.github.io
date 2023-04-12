import React from 'react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import { DefaultGlobalStyle } from '../../styles/GlobalStyle';
export const ContainerAndGridTest = () => {
  return (
    <>
      <DefaultGlobalStyle />
      <Container>
        <h1>Container Start</h1>
        <Divider />
        <h2>Grid Start</h2>
        <Divider />
        <Grid celled>
          <h3>Row Start</h3>
          <Grid.Row>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
            <Grid.Column>Column</Grid.Column>
          </Grid.Row>
          <h3>Row End</h3>
        </Grid>
        <Divider />
        <h2>Grid End</h2>
        <Divider />
        <h1>Container End</h1>
      </Container>
    </>
  );
};
