import * as React from 'react';
import * as d3 from 'd3';
import { Types } from './types';

export default class Circle extends React.PureComponent<{ node: Types.node }> {
  ref: SVGCircleElement | undefined;

  componentDidMount() {
    if (this.ref) d3.select(this.ref).data([this.props.node]);
  }

  render() {
    return (
      // eslint-disable-next-line no-return-assign
      <circle
        r={this.props.node.radiusSize}
        fill={this.props.node.fillColor as string}
        ref={(ref: SVGCircleElement) => (this.ref = ref)}
      >
        <title>{this.props.node.name}</title>
      </circle>
    );
  }
}
