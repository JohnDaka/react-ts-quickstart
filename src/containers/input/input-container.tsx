import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { IData, IState } from '../../interfaces/store';
import { Input } from './input';

interface InputContainerProps {
  readonly id: string;
}

interface InputProps {
  readonly data: IData;
}

export type InputConnectProps = InputContainerProps & InputProps & ReactRedux.DispatchProp<Redux.Action>;

export function mapStateToProps(state: IState, props: InputContainerProps): InputProps {
  return { data: state.data[props.id] };
}

export const InputContainer: React.ComponentClass<InputContainerProps> =
  ReactRedux.connect(mapStateToProps)(Input);
