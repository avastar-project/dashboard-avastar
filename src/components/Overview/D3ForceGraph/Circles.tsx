import * as React from 'react';
import Circle from './Circle';
import { v4 as uuidv4 } from 'uuid';
import { Types } from './types';

export default class Circles extends React.PureComponent<ICirclesProps> {
  render() {
    const nodes = this.props.nodes.map((node: Types.node) => {
      return <Circle key={`node-${uuidv4()}`} node={node} />;
    });
    return <g> {nodes} </g>;
  }
}

interface ICirclesProps {
  nodes: Types.node[];
}
