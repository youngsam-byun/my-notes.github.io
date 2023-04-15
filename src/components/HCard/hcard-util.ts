import {
  hCardMapById,
  emptyHCard,
  HCardInfo,
  hCardMapByName,
} from './hcard-constants';

export function getHCardInfoById(id: number): HCardInfo {
  const hCardInfo = hCardMapById.get(id);
  if (hCardInfo === undefined) {
    return emptyHCard;
  }
  return hCardInfo;
}

export function getHCardInfoByName(name: string): HCardInfo {
  const hCardInfo = hCardMapByName.get(name);
  if (hCardInfo === undefined) {
    return emptyHCard;
  }
  return hCardInfo;
}
