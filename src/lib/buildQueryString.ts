import { QueryVarsArgs } from '../types/googleNewsScraperTypes';

const buildQueryString = (query: QueryVarsArgs) => {
  if (!query || typeof query !== 'object' || Object.keys(query).length === 0) {
    return '';
  }
  return Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .join('&');
};

export { buildQueryString };