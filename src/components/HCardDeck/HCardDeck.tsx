import React from 'react';
import styled from 'styled-components';
import { defaultTheme } from '../../styles/default-theme';

interface HCardDecProps {
  flipCardId: number;
}

const SDiv = styled.div`
  position: fixed;
  z-index: 9999;
  top: 10rem;
  left: 50rem;
  width: 20rem;
  height: 20rem;
  background-color: ${defaultTheme.colors.white};
  border: 2px ${defaultTheme.colors.black} solid;
`;

const hCardDeck = (hCardDecProps: HCardDecProps): JSX.Element => {
  const { flipCardId } = hCardDecProps;
  if (flipCardId === -1) return <></>;

  return <SDiv>dsjlasdfkjlfadskjladsfkjadad</SDiv>;
};
const HCardDeck = React.memo(hCardDeck);
export { HCardDeck };
