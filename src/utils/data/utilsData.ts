/**
 * @name getDataFilter
 * @description Function to return data with filter
 * @param {string} platform value of platform in filter
 * @param {string} type value of type in filter
 * @param {string} origin value of origin in filter
 * @returns {array} array with the data with specific filter
 */

import data_aggregat from '../../fake-data/fake-data-agg.json';
var data_filter: {
  platform: string;
  source: string;
  data_type: string;
  data_origin: string;
  interaction_date: any;
  action: string;
  details: any;
}[] = data_aggregat.data_classification;

export const getDataFilter = (
  platform: string,
  type: string,
  origin: string
) => {
  console.log('data_filter', data_filter);

  if (platform) {
    console.log('platform', platform);
    data_filter = data_filter.filter((object) => {
      return object.platform === platform;
    });
  }

  if (type) {
    console.log('data_type', type);
    data_filter = data_filter.filter((object) => {
      return object.data_type === type;
    });
  }
  if (origin) {
    console.log('origin', origin);
    data_filter = data_filter.filter((object) => {
      return object.data_origin === origin;
    });
  }

  return data_filter;
};
