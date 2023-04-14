export interface GenderInfo {
  id: number;
  name: string;
  group: string;
  description: string;
}

export const emptyGenderGroup: GenderInfo = {
  id: -1,
  name: '',
  group: 'gender group',
  description: '',
};

export const female: GenderInfo = {
  id: 0,
  name: 'Female',
  group: 'gender group',
  description: 'Female',
};

export const male: GenderInfo = {
  id: 1,
  name: 'Male',
  group: 'gender group',
  description: 'Male',
};

const others: GenderInfo = {
  id: 2,
  name: 'Others',
  group: 'gender group',
  description: 'Others',
};

export const genderMap: Map<number, GenderInfo> = new Map([
  [female.id, female],
  [male.id, male],
  [others.id, others],
]);
