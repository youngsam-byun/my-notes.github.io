import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { Divider } from 'semantic-ui-react';
import { EmptyPlaceHolder } from './EmptyPlaceHolder';
import { ContentPlaceHolder } from './ContentPlaceHolder';

interface OutputContainerProps {
  horoscopeResult: string;
}

const SDiv = styled.div`
  margin-top: 2rem;
`;

const OutputContainer = React.forwardRef(
  (
    outputContainerProps: OutputContainerProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { horoscopeResult } = outputContainerProps;
    return (
      <>
        <Divider />
        <SDiv>
          {horoscopeResult.length === 0 ? (
            <EmptyPlaceHolder />
          ) : (
            <ContentPlaceHolder ref={ref} horoscopeResult={horoscopeResult} />
          )}
        </SDiv>
      </>
    );
  },
);

OutputContainer.displayName = 'OutputContainer';
export { OutputContainer };
