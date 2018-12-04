import { IDataState } from '../interfaces/store';

const MAX_RANDOM_NUMBER: number = 1000;

export function generateRandomData(): IDataState {
  const id: string = `${Math.random() * MAX_RANDOM_NUMBER}`;
  return { [id]: { id, value: `Test ${id}` } };
}
