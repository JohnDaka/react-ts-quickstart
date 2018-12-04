import * as React from 'react';

const DEFAULT_INFORMATION_TEXT: string = 'Empty';

export const LabelComponent: React.SFC<InformationProps> = (props: InformationProps) => (
  <div>
    {props.text || DEFAULT_INFORMATION_TEXT}
  </div>
);

export interface InformationProps {
  readonly text: string;
}
