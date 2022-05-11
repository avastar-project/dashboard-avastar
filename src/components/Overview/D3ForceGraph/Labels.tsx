import * as React from 'react';
import Label from './Label';
import { v4 as uuidv4 } from 'uuid';
import { Types } from './types';

export default class Labels extends React.PureComponent<ILabelsProps> {
  render() {
    const labels = this.props.nodes.map((node: Types.node) => {
      return <Label key={`label-${uuidv4()}`} node={node} />;
    });
    console.log(labels);
    return <g className="labels">{labels}</g>;
  }
}

interface ILabelsProps {
  nodes: Types.node[];
}
