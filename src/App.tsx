import React, { useCallback, useState } from 'react';
import { Container, Dimmer, Divider, Loader } from 'semantic-ui-react';
import { InputContainer } from './components/InputContainer/InputContainer';
import { OutputContainer } from './components/OutputContainer/OutputContainer';

export const App = () => {
  const [horoscopeResult, setHoroscopeResult] = useState<string>('');

  const setHoroscopeResultCallback = useCallback((result: string) => {
    setHoroscopeResult(result);
    let element = document.getElementById('outputContainer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    element = document.getElementById('test-middle');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const [loader, setLoader] = useState<boolean>(false);
  return (
    <>
      {loader && (
        <Dimmer active>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      )}
      <Container>
        <InputContainer
          setHoroscopeResultCallback={setHoroscopeResultCallback}
          setLoader={setLoader}
        />
        <Divider />
        <div id={'outputContainer'}>
          <OutputContainer horoscopeResult={horoscopeResult} />
        </div>
      </Container>
    </>
  );
};
