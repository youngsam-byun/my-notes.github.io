import { getPromise } from '../__tests__/promise-test-utils';
import { sampleResponpse } from '../components/OutputContainer/output-container-constant';

export async function submitHoroscopeQuery() {
  const res = await getPromise(sampleResponpse, 500);
  return res;
}

export async function getHoroscopeResult(str: string) {
  console.log(str);
  const res = await getPromise(sampleResponpse, 500);
  return res;
}
