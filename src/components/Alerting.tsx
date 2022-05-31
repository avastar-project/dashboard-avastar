import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState
} from '../types/dataTypes';

export default function Alerting() {
    const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
    )

    const plateform = [
        'facebook',
        'google'
    ];
    let filteredDataFacebook = [];
    for (let i = 0; i < avastarParsedData.length; i++) {
        if (plateform[0].includes(avastarParsedData[i].platform)) {
          filteredDataFacebook.push(avastarParsedData[i]);
        }
    };
    let filteredDataGoogle = [];
    for (let i = 0; i < avastarParsedData.length; i++) {
        if (plateform[1].includes(avastarParsedData[i].platform)) {
          filteredDataGoogle.push(avastarParsedData[i]);
        }
    };
 return (
    <>
    <div>
      Facebook's data <b>{filteredDataFacebook.length > 0 ? 'are used' : 'are not used'}</b> &
      Google's data <b>{filteredDataGoogle.length > 0 ? 'are used' : 'are not used'}</b>.
    </div>
    </>
  );

}
