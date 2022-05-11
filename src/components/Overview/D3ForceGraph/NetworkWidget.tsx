import { useRecoilValue } from 'recoil';
import ForceGraph from './ForceGraph';
import { getPowerChartData } from '../../../recoil/selectors/powerChartSelector';
import { Types } from '../D3ForceGraph/types';
import { useEffect } from 'react';

export default function NetworkWidget() {
  const forceData: Types.dataObject = useRecoilValue(
    getPowerChartData
  ) as Types.dataObject;

  useEffect(() => {
    console.log(forceData);
  });

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
            chargeStrength={-20}
            centerWidth={350}
            centerHeight={170}
          />
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}
