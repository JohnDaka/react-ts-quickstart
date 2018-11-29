import * as React from 'react';

export class Hello extends React.Component<IHelloProps, {}> {
  constructor(props: IHelloProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (<h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>);
  }
}

export interface IHelloProps {
  readonly compiler: string;
  readonly framework: string;
}