import {
  AgeGroupInfo,
  ageGroupMap,
  emptyAgeGroup,
} from './age-selector-constants';

export function getAgeGroupInfo(id: number): AgeGroupInfo {
  const ageGroupInfo = ageGroupMap.get(id);
  if (ageGroupInfo === undefined) {
    return emptyAgeGroup;
  }
  return ageGroupInfo;
}
