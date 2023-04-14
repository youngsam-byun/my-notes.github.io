import { Placeholder } from 'semantic-ui-react';
import React from 'react';

const emptyPlaceHolder = () => {
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

const EmptyPlaceHolder = React.memo(emptyPlaceHolder);
export { EmptyPlaceHolder };
