import ForceGraph from './ForceGraph';
import testFile from '../../../fake-data/force-directed-graph-fake-data.json';
// import './NetworkWidget.scss';
import { Types } from '../D3ForceGraph/types';
import { useEffect } from 'react';

export default function NetworkWidget() {
  const forceData: Types.dataObject = testFile.results[0] as Types.dataObject;

  useEffect(() => {
    console.log(forceData);
  });

  return (
    <>
      {forceData ? (
        <>
          <div className="wrapperDiv">
            <ForceGraph
              data={forceData}
              width={800}
              height={350}
              linkDistance={80}
              linkStrength={1}
              chargeStrength={-20}
              centerWidth={350}
              centerHeight={170}
            />
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}
