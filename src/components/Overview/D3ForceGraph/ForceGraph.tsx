import * as React from 'react';
import Links from './Links';
import './ForceGraph.scss';
import Circles from './Circles';
import Labels from './Labels';
import { Simulation, SimulationNodeDatum } from 'd3';
import * as d3 from 'd3';
import { Types } from './types';

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
    this.drawTicks();
  }

  componentDidUpdate(
    prevProps: Readonly<IForceGraphProps>,
    prevState: ForceGraphState
  ) {
    this.simulatePositions();
    this.drawTicks();
  }

  simulatePositions = () => {
    this.simulation = d3
      .forceSimulation()
      .nodes(this.state.clonedData?.nodes as SimulationNodeDatum[])
      .force(
        'link',
        d3
          .forceLink()
          .id((d) => {
            return (d as Types.node).id;
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

  drawTicks = () => {
    const nodes = d3.selectAll('.node');
    const links = d3.selectAll('.link');
    const labels = d3.selectAll('.label');

    if (this.simulation) {
      this.simulation
        .nodes(this.state.clonedData?.nodes as SimulationNodeDatum[])
        .on('tick', onTickHandler);
    }

    function onTickHandler() {
      links
        .attr('x1', (d) => {
          return (d as { source: Types.point }).source.x;
        })
        .attr('y1', (d) => {
          return (d as { source: Types.point }).source.y;
        })
        .attr('x2', (d) => {
          return (d as { target: Types.point }).target.x;
        })
        .attr('y2', (d) => {
          return (d as { target: Types.point }).target.y;
        });
      nodes
        .attr('cx', (d) => {
          return (d as Types.point).x;
        })
        .attr('cy', (d) => {
          return (d as Types.point).y;
        });
      labels
        .attr('x', (d) => {
          return (d as Types.point).x + 5;
        })
        .attr('y', (d) => {
          return (d as Types.point).y + 5;
        });
    }
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
        className="container"
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
