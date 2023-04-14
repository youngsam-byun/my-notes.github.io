import React, { Dispatch, ForwardedRef, SetStateAction } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { submitHoroscopeQuery } from '../../apis/api-horoscope';
import { useMediaQuery } from 'react-responsive';
import { viewPorts } from '../../commons/viewports/viewports';

interface SubmitPanelProps {
  setHoroscopeResultCallback: (result: string) => void;
  setLoader: Dispatch<SetStateAction<boolean>>;
  resetCallback: () => void;
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
    const { setHoroscopeResultCallback, setLoader, resetCallback } =
      submitPanelProps;

    const submitCallback = async () => {
      setLoader(true);
      const res = await submitHoroscopeQuery();
      setHoroscopeResultCallback(res);
      setLoader(false);
    };

    const isTablet = useMediaQuery({
      query: `(max-width: ${viewPorts.tablet.styles.width})`,
    });
    const isMobile = useMediaQuery({
      query: `(max-width: ${viewPorts.mobile.styles.width})`,
    });
    const size = isMobile ? 'medium' : isTablet ? 'huge' : 'massive';

    return (
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
          <Button color={'black'} size={size} onClick={() => submitCallback()}>
            Today Horoscope
          </Button>
        </Button.Group>
      </SDiv>
    );
  },
);
SubmitPanel.displayName = 'SubmitPanel';
export { SubmitPanel };
