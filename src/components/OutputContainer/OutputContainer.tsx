import React, { ForwardedRef } from 'react';
import styled from 'styled-components';
import { Divider, Placeholder } from 'semantic-ui-react';

interface OutputContainerProps {
  horoscopeResult: string;
}

const SDiv = styled.div`
  margin-top: 2rem;
`;

const CPlaceHolder = () => {
  return (
    <Placeholder fluid>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph image>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph image>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
  );
};

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
          <p>{horoscopeResult.length === 0 && <CPlaceHolder />}</p>
          <div ref={ref} />
        </SDiv>
      </>
    );
  },
);

OutputContainer.displayName = 'OutputContainer';
export { OutputContainer };
