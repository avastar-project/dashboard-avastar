export interface AvastarParsedDataPoint {
  action_type: string; 
  data_origin: 'volunteered' | 'observed' | 'inferred' | 'other'; // suggesting by github copilot not sure if accurate
  data_type:
    | 'locational'
    | 'behavioural'
    | 'communications'
    | 'technical'
    | 'social relationships'
    | 'contact'
    | 'transactional'
    | 'financial'
    | 'socio-demographic'
    | 'contractual'
    | 'other';
  platform: 'facebook' | 'google' | 'other'; // suggesting by github copilot not sure if accurate
  timestamp?: string;
  details?: string[];
}

export type AvastarParsedDataPointState = {
  avastarParsedData: AvastarParsedDataPoint[];
};

export type APDPAction = {
  type: string;
  avastarParsedData: AvastarParsedDataPoint[];
};

export type DispatchType = (args: APDPAction) => APDPAction;

export const getEmptyDataPoint = (): AvastarParsedDataPoint => ({
  action_type: '',
  data_origin: 'other',
  data_type: 'other',
  platform: 'other',
  timestamp: '',
  details: []
});
