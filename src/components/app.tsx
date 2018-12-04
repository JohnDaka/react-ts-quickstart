import * as React from 'react';
import { InputsWrapperContainer } from '../containers/inputs-wrapper';

export class App extends React.Component<IAppProps, {}> {

  constructor(props: IAppProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <InputsWrapperContainer />
      </div>
    );
  }
}

export interface IAppProps {
  readonly compiler: string;
  readonly framework: string;
}