import {
  GenderInfo,
  genderMap,
  emptyGenderGroup,
} from './gender-selector-constants';

export function getGenderInfo(id: number): GenderInfo {
  const genderInfo = genderMap.get(id);
  if (genderInfo === undefined) {
    return emptyGenderGroup;
  }
  return genderInfo;
}
