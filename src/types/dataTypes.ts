export interface AvastarParsedDataPoint {
  action_type: string; 
  data_origin: 'volunteered' | 'observed' | 'inferred' | 'other'; // suggesting by github copilot not sure if accurate
  data_type:
    | 'Locational'
    | 'Behavioural'
    | 'Communications'
    | 'Technical'
    | 'Social relationships'
    | 'Contact'
    | 'Transactional'
    | 'Financial'
    | 'Socio-demographic'
    | 'Contractual'
    | 'Other';
  platform: 'facebook' | 'google' | 'other'; // suggesting by github copilot not sure if accurate
  timestamp?: string;
  details?: string[];
  source?: string; // could be more precise, since it's a path out of the path references file
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
  data_type: 'Other',
  platform: 'other',
  timestamp: '',
  details: [],
  source: '',
});
