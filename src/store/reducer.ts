import { APDPAction, AvastarParsedDataPointState } from '../types/dataTypes';
import * as actionTypes from './actionTypes';

const initialState: AvastarParsedDataPointState = {
  avastarParsedData: [],
};

const reducer = (
  state: AvastarParsedDataPointState = initialState,
  action: APDPAction
): AvastarParsedDataPointState => {
  switch (action.type) {
    case actionTypes.ADD_DATA_BLOC:
      return {
        ...state,
        avastarParsedData: state.avastarParsedData.concat(
          action.avastarParsedData
        ),
      };
    case actionTypes.CLEAR_DATA:
      return initialState;
  }
  return state;
};

export default reducer;
