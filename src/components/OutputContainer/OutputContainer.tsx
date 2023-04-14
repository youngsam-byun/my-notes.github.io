import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { Divider } from 'semantic-ui-react';

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
          <p>{horoscopeResult}</p>
          <div ref={ref} />
        </SDiv>
      </>
    );
  },
);

OutputContainer.displayName = 'OutputContainer';
export { OutputContainer };
