import * as Redux from 'redux';
import { data } from './data';
import { IState } from '../../interfaces/store';

/** Main reducer object */
export const Main: Redux.Reducer<IState> = Redux.combineReducers({
  data,
});
