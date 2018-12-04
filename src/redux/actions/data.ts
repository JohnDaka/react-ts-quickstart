import * as Redux from 'redux';
import { IDataState } from '../../interfaces/store';

export const SET_DATA: string = 'SET_DATA';
export const CHANGE_VALUE: string = 'CHANGE_VALUE';

export interface ChangeValue extends Redux.Action {
  readonly id: string;
  readonly value: string;
}

export interface SetData extends Redux.Action {
  readonly data: IDataState;
}

/** Change value in store */
export function changeValue(id: string, value: string): ChangeValue {
  return { type: CHANGE_VALUE, id, value };
}

/** Set new data in store */
export function setData(data: IDataState): SetData {
  return { type: CHANGE_VALUE, data };
}
