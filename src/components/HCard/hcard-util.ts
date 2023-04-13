import { hCardMap, emptyHCard, HCardInfo } from './hcard-constants';

export function getHCardInfo(id: number): HCardInfo {
  const hCardInfo = hCardMap.get(id);
  if (hCardInfo === undefined) {
    return emptyHCard;
  }
  return hCardInfo;
}
