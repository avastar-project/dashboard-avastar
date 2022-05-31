export interface AvastarParsedDataPoint {
  action_type: string; 
  data_origin: 'volunteered' | 'observed' | 'inferred' | 'other'; // suggesting by github copilot not sure if accurate
  data_type:
    | 'location'
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

export interface PropsFilter {
  platform: string;
  origin: string;
  type: string;
  nodes: string;
}

export type AvastarParsedDataPointState = {
  avastarParsedData: AvastarParsedDataPoint[];
};

export type DataPointCounterType = {
    [key: string]: any;
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

export const platformList: String[] = ['facebook', 'google'];
export const data_type: String[] = ['location', 'behavioural', 'communications','technical','social relationships','contact','transactional','financial','socio-demographic','contractual'];
export const data_origin: String[] = ['volunteered', 'observed', 'inferred'];
export const nodesList: String[] = ['100', '200', '300'];
