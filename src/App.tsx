import React, { Suspense } from 'react';
import './App.css';
import { I18nView } from './i18n/I18nView';
import './i18n/i18n';
import { Grid, Container, Divider, Loader } from 'semantic-ui-react';
// import { ApiErrorBoundaryTest } from './commons/error-boundary/stories/ApiErrorBoundaryTest';
import { TestChildComponent } from './commons/error-boundary/stories/TestChildComponent';
import { ErrorBoundary } from './commons/error-boundary/ErrorBoundary';

export const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<Loader size="large">Loading</Loader>}>
          <TestChildComponent />
        </Suspense>
      </ErrorBoundary>
      <Container>
        asdfasfdad
        <br />
        sadfasdfsadfdsafsdafd
        <br />
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
      </Container>

      <Divider hidden />

      <I18nView />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
};
