import React from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
} from '../../../types/dataTypes';
import myData from '../../../fake-data/force-directed-graph-fake-data.json'; // To be replaced by function transforming AvastarParsedDaat Object in another object with the required shape
import fakeData from '../../../fake-data/fake-data-agg.json';

const { useRef } = React;

// Methodology

// 0) Import data stored in Redux

// 1) Identify the files that are needed to build the chart
// ads_information/advertisers_using_your_activity_or_information.json --> Advertiser who has added your name to an audience based on your information or your activity outside of Facebook
// ads_information/advertisers_you've_interacted_with.json -->  Advertisers whose ads you have recently seen or clicked on
// apps_and_websites_off_of_facebook/apps_and_websites.json --> Apps that have been installed on your mobile device
// apps_and_websites_off_of_facebook/your_off-facebook_activity.json --> Company that shared information with facebook about your activity on their website/application
// facebook_accounts_center/accounts_center.json --> Account linked to your Facebook profile
// facebook_gaming/instant_games.json --> Game you played on Facebook
// Other companies that are owned by Facebook and Google, which might share data profiles between entities (What's app, etc.)

// 2) Build categories of companies based on the files
// a) Companies that displayed ads to you ;
// b) Apps and games you installed/played ;
// c) Companies linked to the ones you share data with

// 3) Define the shape of the final object (nodes, links)

// 4) Build the nodes object
// "nodes": [{
//   "id": "Facebook",
//   "group": 1
// },
// {
//   "id": "Google",
//   "group": 2
// }]

// 5) Build the links object
// "links": [{
//   "source": "You",
//   "target": "Facebook",
//   "value": 10
// },
// {
//   "source": "You",
//   "target": "Google",
//   "value": 5
// }]

// 6) Define the list of colours to be used for each category and see how to add a legend in the chart

//

export default function ForceGraph() {
  // Fetch data from State
  // const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
  //   (state: AvastarParsedDataPointState) => state.avastarParsedData,
  //   shallowEqual
  // );

  // Reprendre ici
  const data = fakeData.data_classification;

  const setNodes = () => {
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].action_type ===
        'Advertisers whose ads you have recently seen or clicked on'
      ) {
        console.log(data[i]);
      }
    }
  };

  setNodes();

  const fgRef = useRef();
  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={myData}
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
