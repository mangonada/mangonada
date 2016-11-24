import axios from 'axios';
export const FETCH_REPO = 'FETCH_REPO';
const ROOT_URL = '/api/repos/';

/**
 * Format the get request and return an action with the type
 * FETCH_REPO.
 * @param  {string} gitURL - the url of the repo
 * @return {Object} The action
 */
export default function fetchRepo(gitURL) {
  const index = gitURL.indexOf('.com/') + 5;
  const fullUrl = ROOT_URL + gitURL.slice(index);
  // console.log(fullUrl);
  const request = axios.get(fullUrl);
  return {
    type: FETCH_REPO,
    payload: request,
  };
}
