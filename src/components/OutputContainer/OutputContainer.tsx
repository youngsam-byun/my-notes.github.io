import React from 'react';

interface OutputContainerProps {
  horoscopeResult: string;
}

export const OutputContainer = (outputContainerProps: OutputContainerProps) => {
  const { horoscopeResult } = outputContainerProps;
  return (
    <>
      <p>{horoscopeResult}</p>
      <p id="test-middle">asadkfjsadlfjksdafsd</p>
    </>
  );
};
