import React from 'react';
import * as d3 from 'd3';
import { Types } from './types';

export default class Link extends React.PureComponent<ILinkProps> {
  ref: SVGElement | undefined;

  componentDidMount() {
    if (this.ref) d3.select(this.ref).data([this.props.link]);
  }

  onMouseOverHandler(
    event: React.MouseEvent<SVGLineElement, MouseEvent>,
    link: ILinkProps
  ) {
    // TODO
  }

  onMouseOutHandler() {
    // TODO
  }

  render() {
    return (
      <g>
        <line
          ref={(ref: SVGLineElement) => (this.ref = ref)}
          onMouseOver={(event) => {
            this.onMouseOverHandler(event, this.props);
          }}
          onMouseOut={(event) => {
            this.onMouseOutHandler();
          }}
        />
      </g>
    );
  }
}

interface ILinkProps {
  link: Types.link;
}
