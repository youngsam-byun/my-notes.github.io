import React from 'react';
import { Divider } from 'semantic-ui-react';
import { ContentPlaceHolder } from './ContentPlaceHolder';
import { HoroscopeResultType } from './output-container-constant';

interface OutputContainerProps {
  horoscopeResult: HoroscopeResultType | null;
}

const OutputContainer = (outputContainerProps: OutputContainerProps) => {
  const { horoscopeResult } = outputContainerProps;
  return (
    <>
      <Divider />
      {horoscopeResult !== null && (
        <ContentPlaceHolder horoscopeResult={horoscopeResult} />
      )}
    </>
  );
};

OutputContainer.displayName = 'OutputContainer';
export { OutputContainer };
