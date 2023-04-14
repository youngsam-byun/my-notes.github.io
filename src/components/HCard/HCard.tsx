import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { getHCardInfo } from './hcard-util';

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
  setFlipCardId: (cardId: number) => void;
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
  setFlipCardId: (cardId: number) => void,
) {
  if (id === selectedId) {
    setFlipCardId(-1);
  } else {
    setFlipCardId(id);
  }
}

const hCard = (hCardProps: HCardProps): JSX.Element => {
  const { flipCardId, setFlipCardId, id } = hCardProps;
  const { header, description, src } = getHCardInfo(id);
  return (
    <SCard onClick={() => handleFlipOnCardClick(id, flipCardId, setFlipCardId)}>
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
