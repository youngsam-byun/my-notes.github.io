import { hMap, emptyHCard, HCardInfo } from './hcard-constants';

export function getHCardInfo(id: number): HCardInfo {
  const hCardInfo = hMap.get(id);
  if (hCardInfo === undefined) {
    return emptyHCard;
  }
  return hCardInfo;
}
