import aries from '../../assets/img/aries.svg';
import { HCard } from './HCard';

interface HCard {
  src: string;
  header: string;
  description: string;
  meta: string;
}

const emptyHCard: HCard = {
  src: '',
  header: '',
  description: '',
  meta: '',
};

const ariesHCard: HCard = {
  src: aries,
  header: 'aries',
  description: 'March 21 to April 19',
  meta: '',
};

const hMap: Map<string, HCard> = new Map([['aries', ariesHCard]]);

export function getHCardInfo(horoscope: string): HCard {
  const hCard = hMap.get(horoscope);
  if (
    horoscope === undefined ||
    horoscope === null ||
    horoscope === '' ||
    hCard === undefined
  ) {
    return emptyHCard;
  }
  return hCard;
}
