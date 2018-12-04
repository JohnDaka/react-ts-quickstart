import * as React from 'react';
import { InputsWrapperConnectProps } from './inputs-wrapper-container';
import { InputContainer } from '../input/input-container';

/** Returns type any because https://github.com/Microsoft/TypeScript/issues/21699 */
export const InputsWrapper: React.SFC<InputsWrapperConnectProps> = (props: InputsWrapperConnectProps): any => {
  return Object.keys(props.data).map((dataId: string) =>
    (<InputContainer key={dataId} id={dataId} />));
};
