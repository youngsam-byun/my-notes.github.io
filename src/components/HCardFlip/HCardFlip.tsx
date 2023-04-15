import React from 'react';
import { handleFlipOnCardClick, HCardProps, SCard } from '../HCard/HCard';
import cardBack from '../../assets/img/card-back.jpg';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

const SCardImage = styled(Image)`
  width: 6rem;
  height: 11rem;
  margin: 0;
  background-repeat: repeat-y !important;
`;
const hCardFlip = (hCardProps: HCardProps): JSX.Element => {
  const { flipCardId, setFlipCardId, setFlipCardIdCallback, id } = hCardProps;

  return (
    <SCard
      onClick={() =>
        handleFlipOnCardClick(
          id,
          flipCardId,
          setFlipCardId,
          setFlipCardIdCallback,
        )
      }
    >
      <SCardImage src={cardBack} />
    </SCard>
  );
};

const HCardFlip = React.memo(hCardFlip);
export { HCardFlip };
