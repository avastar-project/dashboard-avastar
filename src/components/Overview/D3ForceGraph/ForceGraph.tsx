import * as React from 'react';
import Links from './Links';
import Circles from './Circles';
import Labels from './Labels';
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

  componentDidMount() {
    this.simulatePositions();
  }

  componentDidUpdate(
    prevProps: Readonly<IForceGraphProps>,
    prevState: ForceGraphState
  ) {}

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
      )
      .force('charge', d3.forceManyBody().strength(this.props.chargeStrength))
      .force(
        'center',
        d3.forceCenter(this.props.centerWidth, this.props.centerHeight)
      );

    // @ts-ignore
    this.simulation.force('link').links(this.state.clonedData?.links);
  };

  render() {
    if (
      JSON.stringify(this.props.data) !== JSON.stringify(this.state.clonedData)
    ) {
      this.setState({
        clonedData: JSON.parse(JSON.stringify(this.props.data)),
      });
    }

    const initialTranslate = [0, 0];
    const initialScale = 1;
    const { width, height } = this.props;

    return (
      <svg
        x={0}
        y={0}
        width={width}
        height={height}
        transform={`translate(${initialTranslate[0]}, ${initialTranslate[1]})scale(${initialScale})`}
      >
        <Links links={this.state.clonedData?.links} />
        <Circles nodes={this.state.clonedData?.nodes} />
        <Labels nodes={this.state.clonedData?.nodes} />
      </svg>
    );
  }
}

interface IForceGraphProps {
  data: Types.dataObject;
  width: number;
  height: number;
  linkDistance: number;
  linkStrength: number;
  chargeStrength: number;
  centerWidth: number;
  centerHeight: number;
}

interface ForceGraphState {
  clonedData: Types.dataObject;
}
