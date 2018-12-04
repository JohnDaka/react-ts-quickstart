import * as Actions from '../actions';
import { IDataState } from '../../interfaces/store';
import { generateRandomData } from '../../utils/index';

/** Describe action type */
export type ActionType = Actions.DATA.ChangeValue & Actions.DATA.SetData;

/** Initial state for reducer */
const initial: IDataState = {
  ...generateRandomData(),
  ...generateRandomData(),
  ...generateRandomData(),
};

export function data(
  state: IDataState = initial,
  action: ActionType
): IDataState {
  switch (action.type) {
    case Actions.DATA.CHANGE_VALUE: {
      return changeValue(state, action.id, action.value);
    }
    case Actions.DATA.SET_DATA: {
      return action.data;
    }
    default: {
      return state;
    }
  }
}

export function changeValue(state: IDataState, id: string, value: string): IDataState {
  if (!state[id]) {
    return state;
  }

  const newValue: IDataState = { [id]: { value, id } };

  return {
    ...state,
    ...newValue,
  };
}
