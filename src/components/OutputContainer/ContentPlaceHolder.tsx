import React, { ForwardedRef } from 'react';

interface ContentPlaceHolderProps {
  horoscopeResult: string;
}

const ContentPlaceHolder = React.forwardRef(
  (
    outputContainerProps: ContentPlaceHolderProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { horoscopeResult } = outputContainerProps;
    return (
      <>
        {horoscopeResult}
        <div ref={ref} />
      </>
    );
  },
);

ContentPlaceHolder.displayName = 'ContentPlaceHolder';
export { ContentPlaceHolder };
