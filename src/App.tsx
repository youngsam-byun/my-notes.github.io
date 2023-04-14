import React, { useRef, useState } from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { InputContainer } from './components/InputContainer/InputContainer';
import { OutputContainer } from './components/OutputContainer/OutputContainer';

export const App = () => {
  const outputContainerRef = useRef<HTMLDivElement>(null);
  const [horoscopeResult, setHoroscopeResult] = useState<string>('');

  const setHoroscopeResultCallback = (result: string) => {
    setHoroscopeResult(result);
    outputContainerRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const [loader, setLoader] = useState<boolean>(false);
  return (
    <>
      {loader && (
        <Dimmer active page>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      )}
      <Container>
        <InputContainer
          setHoroscopeResultCallback={setHoroscopeResultCallback}
          setLoader={setLoader}
        />
        <OutputContainer
          horoscopeResult={horoscopeResult}
          ref={outputContainerRef}
        />
      </Container>
    </>
  );
};
