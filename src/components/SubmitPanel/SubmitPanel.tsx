import React, { Dispatch, ForwardedRef, SetStateAction, useState } from 'react';
import { Button, Message } from 'semantic-ui-react';
import styled from 'styled-components';
import { submitHoroscopeQuery } from '../../apis/api-horoscope';
import { useMediaQuery } from 'react-responsive';
import { viewPorts } from '../../commons/viewports/viewports';
import { HoroscopeResultType } from '../OutputContainer/output-container-constant';

interface SubmitPanelProps {
  setHoroscopeResultCallback: (
    horoscopeResultType: HoroscopeResultType | null,
  ) => void;
  setLoader: Dispatch<SetStateAction<boolean>>;
  resetCallback: () => void;
  flipCardId: number;
  genderId: number;
  age: number;
}

const SDiv = styled.div`
  display: flex;
  justify-content: left;
  text-align: center;
  margin-top: 2rem;
`;

const SubmitPanel = React.forwardRef(
  (
    submitPanelProps: SubmitPanelProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const [validationMessage, setValidationMessage] = useState<Array<string>>(
      [],
    );

    const {
      setHoroscopeResultCallback,
      setLoader,
      resetCallback,
      flipCardId,
      genderId,
      age,
    } = submitPanelProps;

    const submitCallback = async () => {
      const validationResult: Array<string> = [];
      if (flipCardId === -1) {
        validationResult.push('Select horoscope card');
      }
      if (age === -1) {
        validationResult.push('Select age');
      }
      if (genderId === -1) {
        validationResult.push('Select gender');
      }

      if (validationResult.length > 0) {
        setValidationMessage(validationResult);
      } else {
        setLoader(true);
        setValidationMessage([]);
        const res = await submitHoroscopeQuery();
        setHoroscopeResultCallback(res);
        setLoader(false);
      }
    };

    const isTablet = useMediaQuery({
      query: `(max-width: ${viewPorts.tablet.styles.width})`,
    });
    const isMobile = useMediaQuery({
      query: `(max-width: ${viewPorts.mobile.styles.width})`,
    });
    const size = isMobile ? 'medium' : isTablet ? 'large' : 'huge';

    return (
      <>
        {validationMessage.length === 0 ? null : (
          <Message negative>
            {validationMessage.map((msg, idx) => (
              <p key={idx}>{msg}</p>
            ))}
          </Message>
        )}
        <SDiv ref={ref}>
          <Button.Group>
            <Button
              basic
              color={'black'}
              size={size}
              onClick={() => resetCallback()}
            >
              Reset
            </Button>
            <Button.Or />
            <Button
              basic
              color={'black'}
              size={size}
              onClick={() => submitCallback()}
            >
              Today Horoscope
            </Button>
          </Button.Group>
        </SDiv>
      </>
    );
  },
);
SubmitPanel.displayName = 'SubmitPanel';
export { SubmitPanel };
