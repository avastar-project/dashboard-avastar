import * as React from 'react';
import { Types } from './types';
import { Simulation, SimulationNodeDatum } from 'd3';
import * as d3 from 'd3';

export default class ForceGraph extends React.PureComponent<
  IForceGraphProps,
  ForceGraphState
> {
  private simulation: Simulation<SimulationNodeDatum, undefined> | undefined;

  constructor(props: IForceGraphProps) {
    super(props);
    this.state = {
      clonedData: JSON.parse(JSON.stringify(this.props.data)),
    };
  }
  componentDidMount() {}

  simulatePositions = () => {
    this.simulation = d3
      .forceSimulation()
      .nodes(this.state.clonedData?.nodes as SimulationNodeDatum[])
      .force(
        'link',
        d3
          .forceLink()
          .id((d) => {
            return (d as Types.node).name;
          })
          .distance(this.props.linkDistance)
          .strength(this.props.linkStrength)
      );
  };

  render() {
    return <div></div>;
  }
}

interface IForceGraphProps {
  data: Types.dataObject;
  width: number;
  height: number;
  linkDistance: number;
  linkStrength: number;
}

interface ForceGraphState {
  clonedData: Types.dataObject;
}
