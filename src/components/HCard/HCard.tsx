import React, { Dispatch, SetStateAction } from 'react';
import { Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { getHCardInfoById } from './hcard-util';

export interface HCardProps {
  id: number;
  horoscope?:
    | string
    | 'aquarius'
    | 'aries'
    | 'cancer'
    | 'capricorn'
    | 'gemini'
    | 'leo'
    | 'libra'
    | 'pisces'
    | 'sagittarius'
    | 'scorpio'
    | 'taurus'
    | 'virgo';
  meta?: string;
  flipCardId: number;
  setFlipCardId: Dispatch<SetStateAction<number>>;
  setFlipCardIdCallback: (cardId: number) => void;
}

const SCardImage = styled(Image)`
  width: 4rem;
  height: 5rem;
  margin: auto;
`;

export const SCard = styled(Card)`
  width: 6rem !important;
  height: 11rem !important;
  font-size: '1rem';
  text-align: center;
`;

export function handleFlipOnCardClick(
  id: number,
  selectedId: number,
  setFlipCardId: Dispatch<SetStateAction<number>>,
  setFlipCardIdCallback: (cardId: number) => void,
) {
  if (id === selectedId) {
    setFlipCardId(-1);
  } else {
    setFlipCardIdCallback(id);
  }
}

const hCard = (hCardProps: HCardProps): JSX.Element => {
  const { flipCardId, setFlipCardIdCallback, id, setFlipCardId } = hCardProps;
  const { header, description, src } = getHCardInfoById(id);
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
      <div>
        <SCardImage src={src} />
      </div>
      <Card.Content>
        <Card.Header>
          {header.length > 6 ? `${header.substring(0, 6)}...` : header}
        </Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </SCard>
  );
};
const HCard = React.memo(hCard);
export { HCard };
