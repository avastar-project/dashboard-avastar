import * as React from 'react';
import { Types } from './types';
import { v4 as uuidv4 } from 'uuid';
import Link from './Link';

export default class Links extends React.PureComponent<{
  links: Types.link[];
}> {
  render() {
    const links = this.props.links.map((link: Types.link) => {
      return <Link key={`link-${uuidv4()}`} link={link} />;
    });
    console.log(links);

    return <g className="links">{links}</g>;
  }
}
