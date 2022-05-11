import * as React from 'react';
import * as d3 from 'd3';
import { Types } from './types';

export default class Label extends React.PureComponent<{ node: Types.node }> {
  ref: SVGTextElement | undefined;

  componentDidMount() {
    if (this.ref) d3.select(this.ref).data([this.props.node]);
  }

  render() {
    return (
      // eslint-disable-next-line no-return-assign
      <text ref={(ref: SVGTextElement) => (this.ref = ref)}>
        {this.props.node.id}
      </text>
    );
  }
}
