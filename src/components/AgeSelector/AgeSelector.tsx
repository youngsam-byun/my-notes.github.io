import React from 'react';
import { ageMaxRange, ageMinRange } from './age-selector-constants';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { defaultTheme } from '../../styles/default-theme';

interface AgeSelectorProps {
  age: number;
  setAgeCallback: (age: number) => void;
}

const SInput = styled.input`
  width: 100%;
`;
const ageSelector = (ageSelectorProps: AgeSelectorProps): JSX.Element => {
  const { age, setAgeCallback } = ageSelectorProps;

  function handleAgeGroupOnChange(value: string) {
    const selectedId = parseInt(value);
    setAgeCallback(selectedId);
  }

  return (
    <Form>
      <Form.Field>
        <h4
          style={{
            color:
              age > 0 ? defaultTheme.colors.blue : defaultTheme.colors.black,
          }}
        >
          Your Age: {age}
        </h4>
        <SInput
          type="range"
          min={ageMinRange}
          max={ageMaxRange}
          value={age}
          onChange={(e) => handleAgeGroupOnChange(e.target.value)}
          size={ageMaxRange}
        />
      </Form.Field>
    </Form>
  );
};
const AgeSelector = React.memo(ageSelector);
export { AgeSelector };
