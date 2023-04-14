import React from 'react';
import { CheckboxProps, Divider, Form, Grid, Radio } from 'semantic-ui-react';
import { getGenderInfo } from './gender-selector-util';
import { genderMap } from './gender-selector-constants';
import { defaultTheme } from '../../styles/default-theme';
// import { useMediaQuery } from 'react-responsive';
// import { viewPorts } from '../../commons/viewports/viewports';

const genderInfoArray = Array.from(genderMap.values());

interface GenderSelectorProps {
  genderId: number;
  setGenderId: (prevState: number) => void;
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
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const isMobile = useMediaQuery({
  //   query: `(max-width: ${viewPorts.mobile.styles.width})`,
  // });
  return (
    <>
      <Form.Field>
        <h4
          style={{
            color:
              genderInfo.description.length > 0
                ? defaultTheme.colors.blue
                : defaultTheme.colors.black,
          }}
        >
          You are: {genderInfo.description}
        </h4>
      </Form.Field>
      <Divider hidden />
      <Grid columns="three">
        <Grid.Row>
          {genderInfoArray.map((gi) => {
            return (
              <Grid.Column key={gi.id}>
                <Radio
                  label={gi.name}
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
