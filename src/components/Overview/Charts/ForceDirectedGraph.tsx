import React from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
  PropsFilter,
} from '../../../types/dataTypes';

const { useRef } = React;

export default function ForceGraph(props: PropsFilter) {
  // Fetch data from State
  const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
  );

  // Filter avastarParsedData by selecting only the objects that are relevant for the force graph

  // Define list of action_type to filter the data object stored in state
  const actions = [
    'Advertisers whose ads you have recently seen or clicked on',
    'Advertiser who has added your name to an audience based on your information or your activity outside of Facebook',
    'Company that shared information with facebook about your activity on their website/application',
    'Apps that have been installed on your mobile device',
    'Account linked to your Facebook profile',
    'Game you played on Facebook',
  ];

  // Define group numbers to identify unique categories of companies
  // 4 = Companies who paid to display you advertising content
  // 5 = Companies that collected data about you outside the apps you installed
  // 6 = Apps and games you installed/played
  // 7 = Companies connected to Facebook and Google
  const groups = [4, 4, 5, 6, 7, 6];

  const colors = [
    '#FFB749',
    '#FB9603',
    '#FE4F6A',
    '#B27DDC',
    '#8F17BB',
    '#450AA3',
    '#178DD5',
    '#03C1C7'
  ];

  // Describe the type of relationship between the user and the advertiser
  const relationshipType = [
    'indirect',
    'indirect',
    'direct',
    'direct',
    'direct',
    'indirect',
  ];

  // Filter data object based on the action list
  let filteredData = [];
  for (let i = 0; i < avastarParsedData.length; i++) {
    if (actions.includes(avastarParsedData[i].action_type)) {
      filteredData.push(avastarParsedData[i]);
    }
  }

  // Pick randomly 150 data points coming from the filtered data object
  // An "input" filter component will be created later to allow the user select the upper bound of the slice
  if (props.nodes === '') {
    var data = filteredData.sort(() => 0.5 - Math.random()).slice(0, 100);
  } else {
    data = filteredData
      .sort(() => 0.5 - Math.random())
      .slice(0, parseInt(props.nodes));
  }

  // Transform filtered data object into the right shape for the force graph (nodes and links)
  const setForceGraphData = () => {
    // Set empty arrays
    var forceGraphData = [] as any;
    var nodes = [] as any;
    var links = [] as any;
    // Set the initial nodes (You, Facebook, Google)
    nodes.push({
      id: 'You',
      group: 1,
      color: '#FE88B1',
    });
    nodes.push({
      id: 'facebook',
      group: 2,
      color: '#89D5FF',
    });
    nodes.push({
      id: 'google',
      group: 3,
      color: '#ADF7B6',
    });
    // Set the initial links (You - Facebook, You - Google)
    links.push({
      source: 'You',
      target: 'facebook',
      value: 10, // intensity of the moving particles defined relatively by the volume of data transferred
    });
    links.push({
      source: 'You',
      target: 'google',
      value: 10,
    });

    // Define function to transform every object that have been filtered
    const transformData = (
      initialObject: AvastarParsedDataPoint[],
      nodesObject: object[],
      linksObject: object[],
      forceGraphInput: object[],
      actionType: string,
      groupId: number,
      colorCode: string,
      relationship: string
    ) => {
      for (let i = 0; i < initialObject.length; i++) {
        if (initialObject[i].action_type === actionType) {
          nodesObject.push({
            id: data[i].details,
            group: groupId,
            color: colorCode,
          });
          linksObject.push({
            source: data[i].details,
            target: data[i].platform,
            value: 3,
          });
          if (relationship === 'direct') {
            linksObject.push({
              source: 'You',
              target: data[i].details,
              value: 3,
            });
          }
        }
      }
      forceGraphInput.push({
        nodes: nodesObject,
        links: linksObject,
      });
      return forceGraphInput;
    };

    for (let i = 0; i < actions.length; i++) {
      transformData(
        data,
        nodes,
        links,
        forceGraphData,
        actions[i],
        groups[i],
        colors[i],
        relationshipType[i]
      );
    }

    // Remove duplicates in nodes and links appearing in forceGraphData
    const removeObjectDuplicates = (data: any, uniqueKeys: String[]) => {
      const listOfObjects = data;
      const keys = uniqueKeys,
        filteredObject = listOfObjects.filter(
          (
            (s) => (o: { [x: string]: any }) =>
              // @ts-ignore
              ((k) => !s.has(k) && s.add(k))(keys.map((k) => o[k]).join('|'))
          )(new Set())
        );
      return filteredObject;
    };

    // Push the filtered nodes/links objects in a new one
    var forceGraphDataFiltered = [];
    forceGraphDataFiltered.push({
      nodes: removeObjectDuplicates(forceGraphData[0].nodes, ['id']),
      links: removeObjectDuplicates(forceGraphData[0].links, [
        'source',
        'target',
      ]),
    });

    return forceGraphDataFiltered[0];
  };

  const myGraphData = setForceGraphData();

  const fgRef = useRef();
  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={myGraphData}
      cooldownTicks={100}
      // @ts-ignore
      onEngineStop={() => fgRef.current.zoomToFit(400)}
      width={1250}
      height={650}
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
