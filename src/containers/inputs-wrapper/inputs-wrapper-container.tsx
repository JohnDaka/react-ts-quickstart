import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { IDataState, IState } from '../../interfaces/store';
import { InputsWrapper } from './inputs-wrapper';

interface InputsWrapperProps {
  readonly data: IDataState;
}

export type InputsWrapperConnectProps = InputsWrapperProps & ReactRedux.DispatchProp<Redux.Action>;

export function mapStateToProps(state: IState): InputsWrapperProps {
  return { data: state.data };
}

export const InputsWrapperContainer: React.ComponentClass =
  ReactRedux.connect(mapStateToProps)(InputsWrapper);
