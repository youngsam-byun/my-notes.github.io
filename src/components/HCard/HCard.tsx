import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { getHCardInfo } from './hcard-util';

interface HCardProps {
  horoscope:
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
}

const SImage = styled(Image)`
  width: 10rem;
  height: 10rem;
  margin: auto;
`;

const SCard = styled(Card)`
  width: 12rem !important;
  height: auto;
  text-align: center;
`;

export const HCard = (hCardProps: HCardProps) => {
  const { horoscope } = hCardProps;
  const { header, description, src } = getHCardInfo(horoscope);
  return (
    <SCard>
      <div>
        <SImage src={src} />
      </div>
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </SCard>
  );
};
