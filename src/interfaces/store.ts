/**
 * Describing redux store on top level
 */

export interface IData {
  readonly id: string;
  readonly value: string;
}

export interface IDataState {
  readonly [key: string]: IData;
}

/** Global Redux state */
export interface IState {
  readonly data: IDataState;
}
