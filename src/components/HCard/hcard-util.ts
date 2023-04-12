import { hMap, emptyHCard, HCardInfo } from './hcard-constants';

export function getHCardInfo(horoscope: string): HCardInfo {
  const hCardInfo = hMap.get(horoscope);
  if (
    horoscope === undefined ||
    horoscope === null ||
    horoscope === '' ||
    hCardInfo === undefined
  ) {
    return emptyHCard;
  }
  return hCardInfo;
}
