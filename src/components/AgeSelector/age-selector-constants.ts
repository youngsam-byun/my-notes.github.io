export interface AgeGroupInfo {
  id: number;
  description: string;
}

export const emptyAgeGroup: AgeGroupInfo = {
  id: -1,
  description: '',
};

const ten: AgeGroupInfo = {
  id: 10,
  description: '10 - 19',
};

const twenty: AgeGroupInfo = {
  id: 20,
  description: '20 - 29',
};
const thrity: AgeGroupInfo = {
  id: 30,
  description: '30 - 39',
};
const forty: AgeGroupInfo = {
  id: 40,
  description: '40 - 49',
};

const fifty: AgeGroupInfo = {
  id: 50,
  description: '50 - 59',
};
const sixty: AgeGroupInfo = {
  id: 60,
  description: '60 - 69',
};
const seventy: AgeGroupInfo = {
  id: 70,
  description: '70 - 79',
};
const eighty: AgeGroupInfo = {
  id: 80,
  description: '80 - 89',
};
const ninety: AgeGroupInfo = {
  id: 90,
  description: '90 - 99',
};
const hundred: AgeGroupInfo = {
  id: 100,
  description: '100 - 109',
};

export const ageGroupMap: Map<number, AgeGroupInfo> = new Map([
  [ten.id, ten],
  [twenty.id, twenty],
  [thrity.id, thrity],
  [forty.id, forty],
  [fifty.id, fifty],
  [sixty.id, sixty],
  [seventy.id, seventy],
  [eighty.id, eighty],
  [ninety.id, ninety],
  [hundred.id, hundred],
]);

export const ageMinRange = 0,
  ageMaxRange = 110;
