import * as React from 'react';
import { autobind } from 'core-decorators';

export class InputComponent extends React.Component<InputComponentProps, {}> {
  constructor(props: InputComponentProps) {
    super(props);
  }

  /**
   * Function for take event from input and send to parent
   * if onChange function exist.
   * @param event {SyntheticEvent<HTMLElement>} - event from html element
   * Additional information:
   * I'm not using - public onChangeValueHandler = () => {...};
   * because for TypeScript, Java, C#, etc. languages
   * it's instance variable and not a method/function
   * as you know instance variables must be on the top of your class
   * before constructor and it's could be not obvious to handle them where
   * because it's still a function
   * If you want you could bind in constructor or use @autobind as was below
   */
  @autobind
  public onChangeValueHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    if (this.props.onChangeValue) {
      this.props.onChangeValue(event.target.value);
    }
  }

  public render(): JSX.Element {
    return (<input type="text" value={this.props.value} onChange={this.onChangeValueHandler} />);
  }
}

export interface InputComponentProps {
  readonly value: string;

  onChangeValue?(value: string): void;
}
