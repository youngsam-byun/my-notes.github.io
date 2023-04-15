import React, { useEffect, useRef, useState } from 'react';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { InputContainer } from './components/InputContainer/InputContainer';
import { OutputContainer } from './components/OutputContainer/OutputContainer';
import { HoroscopeResultType } from './components/OutputContainer/output-container-constant';
import { GlobalFooter } from './components/Footer/GlobalFooter';
import { useSearchParams } from 'react-router-dom';
import { STR } from './commons/constants/constants';
import { getHoroscopeResult } from './apis/api-horoscope';

export const App = () => {
  const [searchParams] = useSearchParams();
  const str = searchParams.get(STR);

  const footerRef = useRef<HTMLDivElement>(null);
  const firstTimeRenderCheckRef = useRef<boolean>();
  const [horoscopeResult, setHoroscopeResult] =
    useState<HoroscopeResultType | null>(null);
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    async function fetchCache(str: string) {
      const res = await getHoroscopeResult(str);
      return setHoroscopeResult(res);
    }
    if (str !== null && str.length > 0) {
      fetchCache(str);
    }
  }, []);

  useEffect(() => {
    if (firstTimeRenderCheckRef.current) {
      footerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      firstTimeRenderCheckRef.current = true;
    }
  }, [horoscopeResult]);

  return (
    <>
      {loader && (
        <Dimmer active page>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      )}
      <Container>
        <InputContainer
          setHoroscopeResult={setHoroscopeResult}
          setLoader={setLoader}
        />
        <div ref={footerRef} />
        <OutputContainer horoscopeResult={horoscopeResult} />
        <GlobalFooter />
      </Container>
    </>
  );
};
