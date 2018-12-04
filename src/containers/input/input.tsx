import * as React from 'react';
import * as Actions from '../../redux/actions';
import { InputConnectProps } from './input-container';
import { InputComponent } from '../../components/input/input.component';
import { autobind } from 'core-decorators';
import { LabelComponent } from '../../components/information/information.component';

export class Input extends React.Component<InputConnectProps> {
  constructor(props: InputConnectProps) {
    super(props);
  }

  @autobind
  public onChangeValue(value: string): void {
    this.props.dispatch(Actions.DATA.changeValue(this.props.id, value));
  }

  public render(): JSX.Element {
    if (!this.props.data) {
      return null;
    }
    const { value }: { value: string } = this.props.data;

    return (
      <div>
        <LabelComponent text={value} />
        <InputComponent value={value} onChangeValue={this.onChangeValue} />
      </div>
    );
  }
}
