import { FETCH_REPO } from '../actions/index';
import { JSONCommits, JSONBranches } from './gitGraphDemo/sampleObj';

const INITIAL_STATE = { JSONCommits, JSONBranches };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_REPO:
      console.log('reducer_current repo: ', action.payload.data);
      // remove loading
      return action.payload.data;
    default:
      return state;
  }
}
