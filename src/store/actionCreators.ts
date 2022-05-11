import { APDPAction, AvastarParsedDataPoint } from '../types/dataTypes';
import * as actionTypes from './actionTypes';

export function addDataBlock(avastarParsedDataBloc: AvastarParsedDataPoint[]) {
  const action: APDPAction = {
    type: actionTypes.ADD_DATA_BLOC,
    avastarParsedData: avastarParsedDataBloc,
  };
  return action;
}

export function removeDataBlock() {
  const action = {
    type: actionTypes.CLEAR_DATA,
  };
  return action;
}
