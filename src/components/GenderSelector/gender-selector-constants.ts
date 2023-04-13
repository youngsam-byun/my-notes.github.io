export interface GenderInfo {
  id: number;
  name: string;
  description: string;
}

export const emptyGenderGroup: GenderInfo = {
  id: -1,
  name: 'gender group',
  description: '',
};

export const female: GenderInfo = {
  id: 0,
  name: 'gender group',
  description: 'Female',
};

export const male: GenderInfo = {
  id: 1,
  name: 'gender group',
  description: 'Male',
};

const others: GenderInfo = {
  id: 2,
  name: 'gender group',
  description: 'Others',
};

export const genderMap: Map<number, GenderInfo> = new Map([
  [female.id, female],
  [male.id, male],
  [others.id, others],
]);
