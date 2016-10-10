import { FETCH_REPO } from '../actions/index';
import { JSONCommits, JSONBranches } from './gitGraphDemo/sampleObj';
import $ from 'jquery';

const INITIAL_STATE = { JSONCommits, JSONBranches };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_REPO:
      console.log('reducer_current repo: ', action.payload.data);
      // if user entered an incorrect repo URL, action.payload.data is undefined
      if(!action.payload.data) {
        alert('Oops! You may have misspelled your URL or entered a\nURL for a private repo, which we can\'t access.\nUnable to fetch repo.');
        $('#loading').addClass('hidden');
      }

      return action.payload.data || state;
    default:
      return state;
  }
}
