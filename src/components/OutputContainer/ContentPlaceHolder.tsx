import React from 'react';
import { StickyPanel } from './StickyPanel';
import { HoroscopeResultType } from './output-container-constant';
import { Contents } from './Contents';

interface ContentPlaceHolderProps {
  horoscopeResult: HoroscopeResultType;
}

const ContentPlaceHolder = (outputContainerProps: ContentPlaceHolderProps) => {
  const { horoscopeResult } = outputContainerProps;
  const isResultShown = horoscopeResult !== null;
  return (
    <>
      <StickyPanel isResultShown={isResultShown} />
      <Contents {...horoscopeResult} />
    </>
  );
};

ContentPlaceHolder.displayName = 'ContentPlaceHolder';
export { ContentPlaceHolder };
