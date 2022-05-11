import * as React from 'react';
import { Types } from './types';
import { v4 as uuidv4 } from 'uuid';
import Link from './Link';

export default class Links extends React.PureComponent<{
  links: Types.link[];
}> {
  render() {
    let links;
    if (this.props.links) {
      const links = this.props.links.map((link: Types.link) => {
        return <Link key={`link-${uuidv4()}`} link={link} />;
      });
    }

    return <g>{links}</g>;
  }
}
