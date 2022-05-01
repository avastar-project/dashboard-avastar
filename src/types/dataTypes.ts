export interface AvastarParsedDataPoint {
  platform:
    | 'Facebook'
    | 'Twitter'
    | 'Instagram'
    | 'LinkedIn'
    | 'Reddit'
    | 'Snapchat'
    | 'Tumblr'
    | 'YouTube'
    | 'GitHub'
    | 'GitLab'
    | 'Bitbucket'
    | 'StackOverflow'
    | 'Other'; // suggesting by github copilot not sure if accurate
  source: string; // could be more precise, since it's a path out of the path references file
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
  data_origin: 'Volunteered' | 'Observed' | 'Infered' | 'Other'; // suggesting by github copilot not sure if accurate
  action: string; // same here, maybe there is an enum for this
  details?: string[]; // same here
  interaction_date?: string;
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
  platform: 'Other',
  source: '',
  data_type: 'Other',
  data_origin: 'Other',
  action: '',
  details: [],
  interaction_date: '',
});
