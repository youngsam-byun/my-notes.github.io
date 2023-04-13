import React, { Dispatch, SetStateAction } from 'react';
import { CheckboxProps, Divider, Form, Grid, Radio } from 'semantic-ui-react';
import { getGenderInfo } from './gender-selector-util';
import { genderMap } from './gender-selector-constants';

const genderInfoArray = Array.from(genderMap.values());

interface GenderSelectorProps {
  genderId: number;
  setGenderId: Dispatch<SetStateAction<number>>;
}

const genderSelector = (
  genderSelectorProps: GenderSelectorProps,
): JSX.Element => {
  const { genderId, setGenderId } = genderSelectorProps;

  function handleGenderOnChange(checkboxProps: CheckboxProps) {
    // @ts-ignore
    setGenderId(checkboxProps.value);
  }
  const genderInfo = getGenderInfo(genderId);
  return (
    <>
      <Form.Field>
        <h4>You are: {genderInfo.description}</h4>
      </Form.Field>
      <Divider hidden />
      <Grid>
        <Grid.Row columns={3}>
          {genderInfoArray.map((gi) => {
            return (
              <Grid.Column key={gi.id}>
                <Radio
                  label={gi.description}
                  name={gi.name}
                  value={gi.id}
                  checked={gi.id === genderId}
                  onChange={(e, value) => handleGenderOnChange(value)}
                />
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </>
  );
};
const GenderSelector = React.memo(genderSelector);
export { GenderSelector };
