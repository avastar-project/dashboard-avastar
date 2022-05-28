import React from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
} from '../../../types/dataTypes';

const { useRef } = React;

export default function ForceGraph() {
  // Fetch data from State
  const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
  );

  // Read data stored in Redux
  var data = avastarParsedData;

  // TO DO: Store the values inputted by the user in the filters
  // countFacebookObjects = []
  // countGoogleObjects = []

  // TO DO: Filter the data object that will be used in the force graph

  // Shuffle randomly the data coming from Facebook in the data object
  // @ts-ignore
  const shuffledDataFacebook = data.sort(() => 0.5 - Math.random());

  // TO DO: Shuffle randomly the data coming from Google in the data object

  // TO DO: Join both objects in a single object that will be the input of the force graph
  var data = shuffledDataFacebook.slice(0, 50);

  // Transform data from State into the right shape for the force graph
  const setForceGraphData = () => {
    // Set empty dictionnaries
    var forceGraphData = [];
    var nodes = [];
    var links = [];
    // Set the initial nodes (You, Facebook, Google)
    nodes.push({
      id: 'You',
      group: 1,
    });
    nodes.push({
      id: 'facebook',
      group: 2,
    });
    nodes.push({
      id: 'google',
      group: 3,
    });
    // Set the initial links (You, Facebook, Google)
    links.push({
      source: 'You',
      target: 'facebook',
      value: 10,
    });
    links.push({
      source: 'You',
      target: 'google',
      value: 10,
    });

    // Build nodes and links based on each type of relationships with companies identified in files
    for (let i = 0; i < data.length; i++) {
      if (
        // @ts-ignore
        data[i].action_type ===
        'Advertisers whose ads you have recently seen or clicked on'
      ) {
        nodes.push({
          id: data[i].details,
          group: 4,
        });
        links.push({
          source: 'You',
          target: data[i].details,
          value: 3,
        });
        links.push({
          source: data[i].details,
          target: data[i].platform,
          value: 3,
        });
      } else if (
        // @ts-ignore
        data[i].action_type ===
        'Advertiser who has added your name to an audience based on your information or your activity outside of Facebook'
      ) {
        nodes.push({
          id: data[i].details,
          group: 4,
        });
        links.push({
          source: 'You',
          target: data[i].details,
          value: 3,
        });
        links.push({
          source: data[i].details,
          target: data[i].platform,
          value: 3,
        });
      }
      // else if (
      //   // @ts-ignore
      //   data[i].action_type ===
      //   'Company that shared information with facebook about your activity on their website/application'
      // ) {
      //   nodes.push({
      //     id: data[i].details,
      //     group: 5,
      //   });
      //   links.push({
      //     source: 'You',
      //     target: data[i].details,
      //     value: 3,
      //   });
      //   links.push({
      //     source: data[i].details,
      //     target: data[i].platform,
      //     value: 3,
      //   });
      // }
      else if (
        // @ts-ignore
        data[i].action_type ===
        'Apps that have been installed on your mobile device'
      ) {
        nodes.push({
          id: data[i].details,
          group: 6,
        });
        links.push({
          source: 'You',
          target: data[i].details,
          value: 3,
        });
        links.push({
          source: data[i].details,
          target: data[i].platform,
          value: 3,
        });
      } else if (
        // @ts-ignore
        data[i].action_type === 'Account linked to your Facebook profile'
      ) {
        nodes.push({
          id: data[i].details,
          group: 7,
        });
        links.push({
          source: 'You',
          target: data[i].details,
          value: 3,
        });
        links.push({
          source: data[i].details,
          target: data[i].platform,
          value: 3,
        });
        // @ts-ignore
      } else if (data[i].action_type === 'Game you played on Facebook') {
        nodes.push({
          id: data[i].details,
          group: 6,
        });
        links.push({
          source: 'You',
          target: data[i].details,
          value: 3,
        });
        links.push({
          source: data[i].details,
          target: data[i].platform,
          value: 3,
        });
      }
    }
    forceGraphData.push({
      nodes: nodes,
      links: links,
    });
    return forceGraphData[0];
  };

  const myGraphData = setForceGraphData();

  const fgRef = useRef();
  return (
    <ForceGraph2D
      ref={fgRef}
      // @ts-ignore
      graphData={myGraphData}
      cooldownTicks={100}
      // @ts-ignore
      onEngineStop={() => fgRef.current.zoomToFit(400)}
      width={1060}
      height={500}
      nodeAutoColorBy="group"
      linkDirectionalParticles="value"
      linkDirectionalParticleSpeed={(d: any) => d.value * 0.001}
      linkDirectionalParticleWidth={1.5}
      nodeCanvasObject={(node: any, ctx: any, globalScale: any) => {
        const label = node.id;
        const fontSize = 16 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(
          (n) => n + fontSize * 0.2
        ); // some padding

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(
          node.x - bckgDimensions[0] / 2,
          node.y - bckgDimensions[1] / 2,
          ...bckgDimensions
        );

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = node.color;
        ctx.fillText(label, node.x, node.y);

        node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
      }}
      nodePointerAreaPaint={(node: any, color: any, ctx: any) => {
        ctx.fillStyle = color;
        const bckgDimensions = node.__bckgDimensions;
        bckgDimensions &&
          ctx.fillRect(
            node.x - bckgDimensions[0] / 2,
            node.y - bckgDimensions[1] / 2,
            ...bckgDimensions
          );
      }}
    />
  );
}
