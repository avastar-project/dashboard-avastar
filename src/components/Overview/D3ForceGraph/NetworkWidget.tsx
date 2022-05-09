import forceGraphData from '../../../fake-data/force-directed-graph-fake-data.json';
import { Types } from '../D3ForceGraph/types';
import ForceGraph from './ForceGraph';
// import ForceGraph from '../D3ForceGraph/ForceGraph';

export default function NetworksWidget() {
  const forceData: Types.dataObject =
    forceGraphData as unknown as Types.dataObject;

  console.log(forceData);

  return (
    <>
      {forceData ? (
        <>
          <ForceGraph
            data={forceData}
            width={800}
            height={350}
            linkDistance={80}
            linkStrength={1}
          />
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}
