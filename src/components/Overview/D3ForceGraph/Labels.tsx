import * as React from 'react';
import Label from './Label';
import { v4 as uuidv4 } from 'uuid';
import { Types } from './types';

export default class Labels extends React.PureComponent<ILabelsProps> {
  render() {
    let labels;
    if (labels) {
      const labels = this.props.nodes.map((node) => {
        return <Label key={`label-${uuidv4()}`} node={node} />;
      });
    }
    return <g>{labels}</g>;
  }
}

interface ILabelsProps {
  nodes: Types.node[];
}
