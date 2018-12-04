import * as React from 'react';
import { InputsWrapperContainer } from '../containers/inputs-wrapper';

export class App extends React.Component<IAppProps, {}> {

  constructor(props: IAppProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>{APP_TEXT.HELLO_FROM} {this.props.compiler} {APP_TEXT.AND} {this.props.framework}</h1>
        <InputsWrapperContainer />
      </div>
    );
  }
}

export enum APP_TEXT {
  HELLO_FROM = 'Hello from',
  AND = 'and',
}

export interface IAppProps {
  readonly compiler: string;
  readonly framework: string;
}
